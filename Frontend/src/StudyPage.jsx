import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BASE_URL } from "../config";

const StudyPage = () => {
  const location = useLocation();
  const userId = location.state?.userId;
  const username = location.state?.username;
   const navigate = useNavigate();
  const [flashcards, setFlashcards] = useState([]);
  const [flippedIndex, setFlippedIndex] = useState(null); // Track flipped card index
  if (!userId || !username) {
    navigate("/");
    return null;
  }
  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/flashcard/fetch`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch flashcards");
        }

        let data = await response.json();
        if (!Array.isArray(data)) {
          data = [data];
        }

        setFlashcards(data);
      } catch (error) {
        console.error("Error fetching flashcards:", error);
      }
    };

    fetchFlashcards();
  }, [userId]);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index); // Toggle flipped card
  };

  return (
    <>
      <div className="bg-gray-100">
        <h1 className="font-mono text-3xl pt-6 ml-8">Welcome {username}</h1>

        <div className="bg-gray-50 border-4 border-white rounded-4xl shadow-2xl shadow-blue-800 pb-10 m-4 flex flex-col items-center space-y-4">
          <div className="flex flex-1 w-full m-5">
            <h2 className="text-xl font-bold w-3/4 p-2 ml-3">
              Flashcards Due for Review
            </h2>

            <Link to="/add" state={{ userId, username }}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700">
                + Add Flashcard
              </button>
            </Link>
          </div>

          <div className="mb-4">
            <label className="mr-2">Filter by review interval:</label>
            <select className="p-2 border rounded">
              <option value="1">1 Day</option>
              <option value="3">3 Days</option>
              <option value="7">7 Days</option>
            </select>
          </div>

          <div className="flex flex-wrap justify-center">
            {flashcards.length > 0 ? (
              flashcards.map((card, index) => (
                <div
                  key={index}
                  className="relative w-64 h-60 perspective-1000 mx-4 my-2 shadow-2xl"
                >
                  <motion.div
                    className="w-full h-full relative"
                    animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Front Side - Question */}
                    <div
                      className="absolute w-full h-full bg-gray-100 border-2 border-white shadow-2xl rounded-3xl p-4 flex flex-col items-center justify-center text-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <h1 className="text-xl font-bold">Flashcard</h1>
                      <hr className="my-2 w-full" />
                      <h1 className="text-lg font-semibold">{card.question}</h1>
                      <button
                        onClick={() => handleFlip(index)}
                        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
                      >
                        Show Answer
                      </button>
                    </div>

                    {/* Back Side - Answer */}
                    <div
                      className="bg-gray-100 absolute w-full h-full border-2 border-white rounded-3xl p-4 shadow-2xl flex flex-col items-center justify-center text-center"
                      style={{
                        transform: "rotateY(180deg)",
                        backfaceVisibility: "hidden",
                      }}
                    >
                      <h1 className="text-xl font-bold">Answer</h1>
                      <hr className="my-2 w-full" />
                      <h1 className="text-lg font-semibold">{card.answer}</h1>
                      <button
                        onClick={() => handleFlip(index)}
                        className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
                      >
                        Flip Back
                      </button>
                    </div>
                  </motion.div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center">No flashcards found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyPage;
