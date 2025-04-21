// Quiz app 

let score = 0;

const questions = [
    {
      question: "Which of these is a looping method in JavaScript?\n(a) if\n(b) for\n(c) try\n(d) alert",
      correctAnswers: ["b"]
    },
    {
      question: "Which can be used to loop over an array?\n(a) for\n(b) forEach\n(c) for...of\n(d) alert",
      correctAnswers: ["a", "b", "c"]
    },
    {
      question: "Which of the following is NOT an array method?\n(a) push\n(b) pop\n(c) shift\n(d) repeat",
      correctAnswers: ["d"]
    },
    {
      question: "How to write an arrow function?\n(a) function => {}\n(b) () => {}\n(c) => () {}\n(d) () -> {}",
      correctAnswers: ["b"]
    },
    {
      question: "Which one is correct for declaring an array?\n(a) let x = []\n(b) let x = {}\n(c) let x = ()\n(d) let x = <>",
      correctAnswers: ["a"]
    }
  ];

  for (let i = 0; i < questions.length; i++) {
    
    let user = prompt(questions[i].question + "\n Enter answer by Alphabet without comma !!");
    let correct = questions[i].correctAnswers.sort().join("");
    let givenans = user.toLowerCase().split("").sort().join("");

    if (givenans === correct) {
        alert(" ✨ your answer is correct");
        score++;
      }
      else{
        alert("Wrong answer❌" + correct)
      }
  }



  alert("Quiz over and your score is :" + score + "/" + questions.length)