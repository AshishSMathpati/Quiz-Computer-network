import { useLocation, useNavigate } from "react-router-dom"
function Result() {
  const location = useLocation()
  const navigate = useNavigate()
  const score = location.state?.score
  const answers = location.state?.answers
  const questions = location.state?.questions

  if (!answers) {
    return (
      <div>
        No record available please give quiz first
        <br />
        <button onClick={() => navigate("/")}>
          Go to Quiz
        </button>
      </div>
    )
  }
  return (
    <div className=" bg-zinc/10 p-6 mx:140 rounded-xl ">
  
  
      <h2 className="text-2xl bg-blue-500 p-1 w-25  rounded-lg mx-15 hover:bg-blue-700">
        Score: {score}
      </h2>
      {
        answers.map((ans, index) => {
          const correct = questions[index].answer

          return (
            
            <div className={
                ans === correct 
                ? "bg-green-200 mx-15 rounded-lg"
                :"bg-red-200 mx-15 rounded-lg"
              }>

            <div key={index} className="rounded-lg p-2 m-3 mx-140">

              <p>
                {questions[index].question}
              </p>
             

              <p className={ 
                ans === correct
                  ? "text-green-400"
                  : "text-red-400"
              }>
                Your Answer: {ans}
              </p>

              {
                ans !== correct && (
                  <p className="text-green-400">
                    Correct: {correct}
                  </p>
                )
              }


            </div>
            </div>
          )
        })
      }

      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 px-4 py-2 mx-180 hover:bg-blue-700"
      >
        Restart
      </button>
    </div>
    

  )

}

export default Result
