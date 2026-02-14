import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import QuizCard from "./components/QuizCard"
import Result from "./components/Result"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>

    <Routes>

      <Route path="/" element={<QuizCard />} />

      <Route path="/result" element={<Result />} />

    </Routes>

  </BrowserRouter>

)
