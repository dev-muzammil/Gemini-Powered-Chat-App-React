import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function generateAnswer() {
    setAnswer("loading...");
    const response = await axios({
      url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyAvMoL_hZuNHsUYkGT3g1M5hJBI5NoiViI",
      method: "post",
      data: {
        contents: [{ parts: [{ text: question }] }],
      },
    });
    setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"].split("*").join(" "));
  }
  return (
    <>
      <h1>AI Chat App</h1>
      <div className="input-wrapper">
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        ></input>
      </div>
      <div className="button-container">
        <button onClick={generateAnswer}>Generate Answer</button>
      </div>
      <p>{answer}</p>
    </>
  );
};

export default App;
