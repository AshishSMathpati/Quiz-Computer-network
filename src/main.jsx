import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import questions from "./data/questions";
import QuizCard from "./components/QuizCard";
import Result from "./components/Result";

function Main() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = option => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="w-[420px] bg-stone/10 m-auto backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
      <h1 className="text-2xl font-bold text-center mb-4">
         Computer Networks Quiz
      </h1>

      {!finished ? (
        <QuizCard
          question={questions[current]}
          index={current}
          total={questions.length}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} total={questions.length} />
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Main />
);
