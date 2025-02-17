import React from 'react';
import f from "../src/assets/ppp.avif"
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
<>
<div className='relative w-full h-96'>

<img src={f} className=' absolute w-full h-full object-cover -z-10'></img>
<div className=" text-center h-96 pt-32"> 

      <h1 className="text-5xl font-bold  text-white">Welcome to Flashcard Learning!</h1>
      <p className="mt-4 text-white">Start studying with our flashcards using the Leitner System.</p>
      <Link to="/study" className="mt-6 inline-block bg-blue-600 text-white py-2 px-6 rounded-lg">
        Start Studying
      </Link>
    </div>
    </div><div className='bg-gray-100 p-1'>
    <section class="bg-gray-300 py-8 border-2 m-7 rounded-4xl  border-white ">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-4xl font-bold mb-4 text-blue-700">How It Works</h2>
      <p class="mb-6 text-xl text-gray-700 font-medium">
        Our app uses the Leitner System for spaced repetition to help you learn efficiently.
      </p>
      <ul class="font-mono list-disc list-inside text-left md:text-center mx-auto text-gray-800">
        <li>Study a flashcard</li>
        <li>Mark it correct or incorrect</li>
        <li>Correct answers move to higher boxes, incorrect go back to box 1</li>
        <li>Review often until you master all cards</li>
      </ul>
    </div>
  </section>
  <section class="py-8 bg-gray-300 border-2 rounded-4xl m-6 border-gray-200">
  <div class="max-w-6xl mx-auto text-center">
    <h3 class=" font-bold mb-4 text-4xl text-blue-700">Why Use This App?</h3>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
      <div className='border-2 rounded-4xl p-5 border-white bg-gray-200'>
        <h4 class="text-xl font-semibold text-gray-800">Spaced Repetition</h4>
        <p class="mt-2 font-mono ">Study flashcards at the optimal time intervals.</p>
      </div>
      <div className='border-2 rounded-4xl p-5 border-white bg-gray-200'>
        <h4 class="text-xl font-semibold text-gray-600">Progress Tracking</h4>
        <p class="mt-2 font-mono">See how well you’re doing and focus on problem areas.</p>
      </div>
      <div className='border-2 rounded-4xl p-5 border-white bg-gray-200'> 
        <h4 class="text-xl font-semibold text-gray-600">Custom Decks</h4>
        <p class="mt-2 font-mono">Create and organize your own flashcards by topic or subject.</p>
      </div>
    </div>
  </div>
</section>
<section class="py-8 bg-gray-300 border-2 rounded-4xl m-6 border-white">
  <div class="max-w-4xl mx-auto text-center">
    <h3 class="text-3xl font-bold mb-4 text-blue-700">Getting Started</h3>
    <ol class=" font-mono list-decimal list-inside mx-auto text-left md:text-center">
      <li>Sign up or log in (if you have user accounts).</li>
      <li>Select a flashcard deck or create a new one.</li>
      <li>Begin your study session and track your progress!</li>
    </ol>
  </div>
</section>
<section class="py-8 bg-gray-300 border-2 rounded-4xl m-6 border-white">

  <div class="max-w-4xl mx-auto text-center">
    <h3 class="text-3xl font-bold mb-4 text-blue-700">What Our Users Say</h3>
    <p class="italic">"This flashcard app has improved my study routine immensely!" - Jane D.</p>
  </div>
</section>
<section class=" border-2 rounded-4xl m-6 border-white bg-blue-600 py-8 text-center text-white">
  <h3 class="text-2xl font-bold mb-4">Ready to Boost Your Learning?</h3>
  <a 
    href="/study" 
    class="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
    Start Studying
  </a>
</section>
</div>
</>  
  );
};

export default HomePage;
