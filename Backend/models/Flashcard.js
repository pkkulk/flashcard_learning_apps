const mongoose = require('mongoose');

const FlashcardSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: { type: String, required: true },
  level: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true } // Reference to User
});

module.exports = mongoose.model('Flashcard', FlashcardSchema,"flashcards");
