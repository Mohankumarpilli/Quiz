import { useState } from "react"
import Home from "./components/Home"
import { Route, Routes } from "react-router-dom";
import Quiz from "./components/Quize";
import Result from "./components/Result";

function App() {
  const arr = [{ "What is the capital of India?": ["Mumbai", "Kolkata", "New Delhi", "Hyderabad"] }, { "Which planet is known as the Red Planet?": ["Earth", "Mars", "Jupiter", "Venus"] }, { "What is the sum of 12 + 8?": ["18", , "20", "22", "24"] }, { "Which animal is known as the 'King of the Jungle'?": ["Tiger", "Elephant", "Lion", "Bear"] }, { "How many days are there in a leap year?": ["365", "360", "366", "364"] }]
  const answer = {1:"New Delhi",2:"Venus",3:"20", 4:"Lion",5:"366"};

  const [userAnswer, setUserAnswer] = useState({});

  const handleUserAnswer = (question, answer) => {
    setUserAnswer(prevAnswers => ({
      ...prevAnswers,
      [question]: answer
    }));
  };
  console.log(userAnswer);

  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4 h-[100vh]">
    <Routes>
      <Route path="/" element={<Home setUserDetails={setUserDetails} />} />
      <Route path="/quiz" element={<Quiz data={arr} handleUserAnswer={handleUserAnswer} userAnswer={userAnswer} />} />
      <Route path="/result" element={<Result userDetails={userDetails} />} />
    </Routes>
  </div>
}

export default App
