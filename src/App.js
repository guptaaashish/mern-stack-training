import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import QuizScreen from "./pages/quiz";
import ResultScreen from "./pages/result";

function App() {
  return (
    <Routes>
      <Route exact path="/quiz-screen" element={<QuizScreen />} />
      <Route exact path="/result-screen" element={<ResultScreen />} />
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
