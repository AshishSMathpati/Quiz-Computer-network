import { useState } from "react"
import { useNavigate } from "react-router-dom"
import questions from "../data/questions"



function QuizCard() {
  const navigate = useNavigate()
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])
  const handleAnswer = (option) => {
    const newAnswers = [...answers, option]
    setAnswers(newAnswers)

    let newScore = score
    if (option === questions[current].answer) {
      newScore = score + 1
      setScore(newScore)
      alert("Correct")
    }
    if(option != questions[current].answer){
      alert("Wrong")
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1)

    }
    else {
      navigate("/result", {
        state: {
          score: newScore,
          answers: newAnswers,
          questions: questions
        }
      })
    }
  }
 

  return (
    <div className="w-[420px] bg-zinc-200 p-6 rounded-xl mx-140 my-54">
      <h2 className="">
        Question {current + 1} / {questions.length}
      </h2>
      <h3 className="mb-4">
        {questions[current].question}
      </h3>

      {
        questions[current].options.map(option => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            className="block w-full mb-2 bg-blue-400 p-2 rounded hover:bg-blue-600"
          >
            {option}
          </button>
        ))
      }
    </div>
  )
}
export default QuizCard