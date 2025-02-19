import React from 'react';
import f from "../src/assets/ppp.avif";
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className='relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] flex flex-col justify-center items-center text-center'>
        <img src={f} className='absolute w-full h-full object-cover -z-10' alt="Background" />
        <div className="max-w-3xl px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Welcome to Flashcard Learning!
          </h1>
          <p className="mt-4 text-white text-base sm:text-lg md:text-xl">
            Master any subject with our smart flashcard system.
          </p>
          <div className="mt-6 space-x-4">
            <Link 
              to="/login" 
              className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-lg sm:text-xl md:text-2xl hover:bg-blue-700 transition"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="inline-block bg-green-600 text-white py-2 px-6 rounded-lg text-lg sm:text-xl md:text-2xl hover:bg-green-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className='bg-gray-100 p-4'>
        <section className="bg-gray-300 py-8 border-2 m-4 rounded-2xl border-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-700">How It Works</h2>
            <p className="mb-6 text-lg text-gray-700 font-medium">
              Our app uses the Leitner System for spaced repetition to help you learn efficiently.
            </p>
            <ul className="list-disc list-inside text-left md:text-center mx-auto text-gray-800 space-y-2">
              <li>Study a flashcard</li>
              <li>Mark it correct or incorrect</li>
              <li>Correct answers move to higher boxes, incorrect go back to box 1</li>
              <li>Review often until you master all cards</li>
            </ul>
          </div>
        </section>

        {/* Why Use This App */}
        <section className="py-8 bg-gray-300 border-2 rounded-2xl m-4 border-gray-200">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-700">Why Use This App?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Spaced Repetition", desc: "Study flashcards at optimal time intervals." },
                { title: "Progress Tracking", desc: "See how well you’re doing and focus on weak areas." },
                { title: "Custom Decks", desc: "Create and organize your own flashcards by topic." }
              ].map((feature, index) => (
                <div key={index} className="border-2 rounded-2xl p-6 border-white bg-gray-200">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-800">{feature.title}</h4>
                  <p className="mt-2 font-mono text-base md:text-lg">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="py-8 bg-gray-300 border-2 rounded-2xl m-4 border-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">Getting Started</h3>
            <ol className="list-decimal list-inside mx-auto text-left md:text-center space-y-2">
              <li>Create an account or log in.</li>
              <li>Select a flashcard deck or create a new one.</li>
              <li>Begin your study session and track your progress!</li>
            </ol>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-8 bg-gray-300 border-2 rounded-2xl m-4 border-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-700">What Our Users Say</h3>
            <p className="italic text-lg">"This flashcard app has improved my study routine immensely!" - Jane D.</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-2 rounded-2xl m-4 border-white bg-blue-600 py-8 text-center text-white">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Join Now and Start Learning!</h3>
          <div className="space-x-4">
            <Link 
              to="/login"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg sm:text-xl hover:bg-gray-200 transition"
            >
              Login
            </Link>
            <Link 
              to="/signup"
              className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold text-lg sm:text-xl hover:bg-gray-200 transition"
            >
              Sign Up
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
