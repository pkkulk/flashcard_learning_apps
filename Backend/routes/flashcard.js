const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Flashcard = require("../models/Flashcard");

const U =require("../models/User");
router.get("/flash",async (req,res)=>{
try{
 const {username} =req.body;
 const result=await U.findOne({username});

}catch(error){

}
})
router.post("/add", async (req, res) => {
  try {
      const { question, answer, category, level, userId } = req.body;

      // Validate required fields
      if (!question || !answer || !category || !level || !userId) {
          return res.status(400).json({ message: "All fields are required" });
      }

      // Create new flashcard
      const newFlashcard = new Flashcard({
          question,
          answer,
          category,
          level,
          user: userId, // Store userId as a reference
      });

      // Save to database
      await newFlashcard.save();
      res.status(201).json({ message: "Flashcard added successfully", flashcard: newFlashcard });

  } catch (error) {
      console.error("Error adding flashcard:", error);
      res.status(500).json({ message: "Server error", error: error.message });
  }
});
router.post("/login", async (req, res) => {
    try {
      const { email, password } = req.body; // Fixed "passwords" to "password"
      console.log("Received login request for:", email);
  
      const user = await U.findOne({ email }); // Use findOne instead of find
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
  
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || "9876", { expiresIn: "1h" });
      res.json({ token, userId: user._id, username: user.username });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  
router.post('/fetch',async(req,res)=>{
  try{
    const {userId}= req.body;
    if (!userId) {
      return res.status(400).json({ message: "User ID is required" });
    }
    console.log("data of flashcard hasbeen send")
    const result = await Flashcard.find({user : userId})
    res.status(200).json(result);
  }catch(error){
    console.log('error came:',error);
  }
})
router.post('/register', async (req, res) => {
    try {
      const { username, email, passwords } = req.body;
      const saltRounds = 10;
      const password = await bcrypt.hash(passwords, saltRounds);
       const result = await U.insertOne({username, email, password });
       console.log("data inserted",result);
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
module.exports = router;