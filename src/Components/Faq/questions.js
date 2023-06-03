import React, { useState } from "react";
import "./questions.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Questions = ({ title, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="container questions">
      <div className="question-title">
        <h4>{title}</h4>
        <button className="question-icon" onClick={handleClick}>
          {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div className="question-answer">
        {showAnswer && <p className="u-text-small">{answer}</p>}
      </div>
    </div>
  );
};

export default Questions;
