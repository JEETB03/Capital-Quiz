import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000; // Define the port number

// Setup PostgreSQL connection
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "World",
  password: "slj2003kpa", // Replace with your actual password
  port: 5432,
});

db.connect(); // Connect to the database

// Initialize quiz data (to be replaced by data from the database)
let quiz = [
  { country: "France", capital: "Paris" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States of America", capital: "New York" },
];

// Fetch quiz data from the database
db.query("SELECT * FROM capitals", (err, res) => {
  if (err) {
    console.error("Error executing Query.", err.stack);
  } else {
    quiz = res.rows;
  }
  db.end(); // Close the database connection after fetching data
});

let totalCorrect = 0; // Initialize the correct answer counter

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let currentQuestion = {}; // Store the current quiz question

/**
 * GET route for the home page
 * Renders the quiz question and resets the score
 */
app.get("/", async (req, res) => {
  totalCorrect = 0;
  await nextQuestion(); // Get the next question
  console.log(currentQuestion);
  res.render("index.ejs", { question: currentQuestion }); // Render the question on the home page
});

/**
 * POST route to handle quiz answer submission
 * Compares the user's answer to the correct answer and updates the score
 */
app.post("/submit", (req, res) => {
  let answer = req.body.answer.trim(); // Get the user's answer
  let isCorrect = false;
  if (currentQuestion.capital.toLowerCase() === answer.toLowerCase()) {
    totalCorrect++; // Increment score if the answer is correct
    console.log(totalCorrect);
    isCorrect = true;
  }

  nextQuestion(); // Get the next question
  res.render("index.ejs", {
    question: currentQuestion,
    wasCorrect: isCorrect,
    totalScore: totalCorrect,
  }); // Render the result on the home page
});

/**
 * Selects a random question from the quiz array
 */
async function nextQuestion() {
  const randomCountry = quiz[Math.floor(Math.random() * quiz.length)];
  currentQuestion = randomCountry; // Set the current question
}

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
