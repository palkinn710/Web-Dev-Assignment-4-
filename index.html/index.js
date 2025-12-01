// 1. Quiz Questions Array
const quizQuestions = [
    {
      question: "What is the capital of France?",
      answer: "paris"
    },
    {
      question: "What is 2 + 2?",
      answer: "4"
    },
    {
      question: "What programming language runs in the browser?",
      answer: "javascript"
    },
    {
      question: "What is the largest planet in our solar system?",
      answer: "jupiter"
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answer: "shakespeare"
    },
    {
      question: "What is the chemical symbol for water?",
      answer: "h2o"
    },
    {
      question: "How many continents are there?",
      answer: "7"
    }
  ];
  
  // 2. Function to Run the Quiz
  function runQuiz() {
    // 3. Score Initialization
    let score = 0;
    
    // 4. Loop Through Questions
    for (let i = 0; i < quizQuestions.length; i++) {
      // 5. Prompt for User Input
      const userAnswer = prompt(quizQuestions[i].question);
      
      // Handle case where user cancels the prompt
      if (userAnswer === null) {
        alert("Quiz cancelled!");
        return;
      }
      
      // 6. Normalize the Input
      const normalizedAnswer = userAnswer.toLowerCase().trim();
      
      // 7. Check the Answer
      if (normalizedAnswer === quizQuestions[i].answer) {
        score++;
        // 8. Provide Immediate Feedback - Correct Answer
        alert("Correct! ✓");
      } else {
        // 8. Provide Immediate Feedback - Wrong Answer
        alert(`Wrong! ✗\nThe correct answer is: ${quizQuestions[i].answer}`);
      }
    }
    
    // 9. Display the Final Score
    alert(`Quiz Complete!\n\nYour final score: ${score} out of ${quizQuestions.length}\n\nPercentage: ${((score / quizQuestions.length) * 100).toFixed(2)}%`);
    
    // Log the score to console as well
    console.log(`Final Score: ${score}/${quizQuestions.length}`);
  }
  
  // 10. Run the Quiz in the Browser Console
  // Call this function to start the quiz
  runQuiz();