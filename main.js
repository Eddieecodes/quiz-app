
//five questions
//10 points each
//display total score

//declared the const variable question 
//i made four questions in total with object 
// i gave the answers boolean values false for the wrong answer then true for the correct answer
const questions = [
  {
 question: "Which is  not a fruit",
 answers: [
  {
    text: "Apple", correct: false
  },
  {
    text: "Orange", correct: false
  },
  {
    text: "Bag", correct: true
  },
  {
    text: "Pineapple", correct: false
  },
 ]
},
{
  question: "Which is a programming language",
  answers: [
   {
     text: "Dog", correct: false
   },
   {
     text: "Chair", correct: false
   },
   {
     text: "Python", correct: true
   },
   {
     text: "Igbo", correct: false
   },
  ]
 },
 {
  question: "What was the final score at the AFCON",
  answers: [
   {
     text: "1-0", correct: false
   },
   {
     text: "2-1", correct: false
   },
   {
     text: "1-2", correct: true
   },
   {
     text: "0-1", correct: false
   },
  ]
 },
 {
  question: "Who was the most useless player",
  answers: [
   {
     text: "Aina", correct: false
   },
   {
     text: "Eze", correct: false
   },
   {
     text: "Iwobi", correct: true
   },
   {
     text: "Sanusi", correct: false
   },
  ]
 }
]

//creating variables that get elements by id
const questiondata = document.getElementById("question-text1");
const btndata = document.getElementById("btn-div");
const nextdata = document.getElementById("next-btn");
// creating a variable then assigning a value to it
let questionindex = 0;
let score = 0;
//this function is a function for starting the quiz
function beginquiz(){
  questionindex = 0;
  score = 0;
  nextdata.innerHTML = "Next";
  showquestion();
}

function showquestion(){
  resetState();
  let currentquestion = questions[questionindex];// this means current question that is displayed is from the object name question declared with the index number 0
  let questionNo = questionindex + 1; //this add a number to the index, meaning after the first question, add one.
  questiondata.innerHTML = questionNo + ". " + currentquestion.question;

  btndata.innerHTML = '';


  currentquestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn1");
    btndata.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer);
  });
  
}
function resetState(){
  nextdata.style.display = "none";
  while(btndata.firstChild){
    btndata.removeChild(btndata.firstChild);
  }
}

function selectAnswer(e){
  const selectedbtn = e.target;
  const iscorrect = selectedbtn.dataset.correct === "true";
  if(iscorrect){
    selectedbtn.classList.add("correct");
    score+=10;
  }else{
    selectedbtn.classList.add("incorrect");
  }
  Array.from(btndata.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  })
  nextdata.style.display = "block";
}
//this function is used to display score
function showscore(){
  resetState();
  questiondata.innerHTML = "Your score" + " "+ score + " "+ "out of " + (questions.length)*10;
  questiondata.style.fontSize = "40px";
  questiondata.style.textAlign = "center";
  
 
}
function handlenextdata(){
  questionindex++;
  if(questionindex < questions.length){
    showquestion();
  }else{
    showscore();
  }
}
nextdata.addEventListener("click", ()=>{
  if(questionindex < questions.length){
    handlenextdata();
  }
})

beginquiz();