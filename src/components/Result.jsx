function Result({ score, total }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2">Quiz Completed 🎉</h2>
      <p className="text-lg mb-4">Your Score</p>

      <div className="text-4xl font-extrabold text-purple-400">
        {score} / {total}
      </div>

      <p className="mt-4 text-gray-300">
        {score === total
          ? "Excellent! You're a networking pro 💪"
          : "Good attempt! Keep practicing 📘"}
      </p>
    </div>
  );
}

export default Result;
