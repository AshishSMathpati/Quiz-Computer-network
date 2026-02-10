function QuizCard({ question, index, total, onAnswer }) {
  return (
    <div>
      <p className="text-sm text-gray-300 mb-2">
        Question {index + 1} of {total}
      </p>

      <h2 className="text-lg font-semibold mb-4">
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map(option => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            className="w-full text-left px-4 py-2 rounded-xl bg-white/10 hover:bg-purple-500/40 transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuizCard;
