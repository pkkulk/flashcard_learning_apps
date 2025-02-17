import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const StudyPage = () => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sending the new flashcard data to the backend
    const response = await fetch("/api/flashcards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, answer }),
    });

    if (response.ok) {
      alert("Flashcard created successfully!");
      setQuestion("");
      setAnswer("");
    } else {
      alert("Failed to create flashcard");
    }
  };
  // Example flashcards
  const flashcards = [
    { question: "What is React?", answer: "A JavaScript library for building user interfaces." },
    { question: "What is the Leitner System?", answer: "A system for efficient flashcard learning based on spaced repetition." },
    { question: "What is Tailwind CSS?", answer: "A utility-first CSS framework for creating modern websites." },
    // Add more flashcards as needed
  ];

  // State for tracking the current flashcard index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Next flashcard function
  const nextFlashcard = () => {
    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false); // Reset answer visibility when moving to next card
    } else {
      alert("You've finished studying all flashcards!");
    }
  };

  // Previous flashcard function
  const prevFlashcard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  return (
    <>
    <div className="flex flex-col items-center space-y-4">
    <h2 className="text-xl font-bold">Flashcards Due for Review</h2>

    {/* Filter Dropdown */}
    <div className="mb-4">
      <label className="mr-2">Filter by review interval:</label>
      <select
        className="p-2 border rounded"
      >
        <option value="1">1 Day</option>
        <option value="3">3 Days</option>
        <option value="7">7 Days</option>
      </select>
    </div>

  
  </div>
<div className='flex flex-1'>

<div className="relative w-80 h-60 perspective-1000 mx-auto">
        {/* Flashcard Wrapper */}
        <motion.div
          className="w-full h-full relative"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Front Side - Question */}
          <div
            className="absolute w-full h-full bg-gray-100 border-2 border-white shadow-2xl rounded-3xl p-4  flex flex-col items-center justify-center text-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            <h1 className="text-xl font-bold">Flashcard</h1>
            <hr className="my-2 w-full" />
            <h1 className="text-lg font-semibold">{question}</h1>
            <button
              onClick={handleFlip}
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            >
              Show Answer
            </button>
          </div>

          {/* Back Side - Answer */}
          <div
            className="absolute w-full h-full bg-white border-2 rounded-3xl p-4 shadow-2xl flex flex-col items-center justify-center text-center"
            style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
          >
            <h1 className="text-xl font-bold">Answer</h1>
            <hr className="my-2 w-full" />
            <h1 className="text-lg font-semibold">{answer}</h1>
            <div className="flex justify-between w-full px-4 mt-4">
              <button
                onClick={prevFlashcard}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
              >
                Got it right
              </button>
              <button
                onClick={nextFlashcard}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Got it wrong
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>


</>


  );
};

export default StudyPage;
