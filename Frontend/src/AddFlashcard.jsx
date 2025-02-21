import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../config";
const AddFlashcard = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const level = 1;
  const userId = location.state?.userId;
  const username = location.state?.username;

  // Redirect if accessed directly
  if (!userId || !username) {
    navigate("/");
    return null;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const flashcardData = { question, answer, category,level,userId };

    try {
      const response = await fetch(`${BASE_URL}/api/flashcard/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(flashcardData),
      });

      if (response.ok) {
        alert("Flashcard added successfully!");
        setQuestion("");
        setAnswer("");
        setCategory("");
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to add flashcard");
      }
    } catch (error) {
      console.error("Error adding flashcard:", error);
      alert("Error submitting flashcard");
    }
  };

  return (
    <>
    <h1>{userId}{username}</h1>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">Add Flashcard</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium">Question:</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Answer:</label>
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-gray-600 font-medium">Category:</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add Flashcard
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddFlashcard;
