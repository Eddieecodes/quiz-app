'use strict';
//five questions
//10 points each
//display total score

//declared the const variable question 
//i made four questions in total with object 
// i gave the answers boolean values false for the wrong answer then true for the correct answer
// const questions = [
//   {
//  question: "Which is  not a fruit",
//  answers: [
//   {
//     text: "Apple", correct: false
//   },
//   {
//     text: "Orange", correct: false
//   },
//   {
//     text: "Bag", correct: true
//   },
//   {
//     text: "Pineapple", correct: false
//   },
//  ]
// },
// {
//   question: "Which is a programming language",
//   answers: [
//    {
//      text: "Dog", correct: false
//    },
//    {
//      text: "Chair", correct: false
//    },
//    {
//      text: "Python", correct: true
//    },
//    {
//      text: "Igbo", correct: false
//    },
//   ]
//  },
//  {
//   question: "What was the final score at the AFCON",
//   answers: [
//    {
//      text: "1-0", correct: false
//    },
//    {
//      text: "2-1", correct: false
//    },
//    {
//      text: "1-2", correct: true
//    },
//    {
//      text: "0-1", correct: false
//    },
//   ]
//  },
//  {
//   question: "Who was the most useless player",
//   answers: [
//    {
//      text: "Aina", correct: false
//    },
//    {
//      text: "Eze", correct: false
//    },
//    {
//      text: "Iwobi", correct: true
//    },
//    {
//      text: "Sanusi", correct: false
//    },
//   ]
//  }
// ]

//creating variables that get elements by id
// const questiondata = document.getElementById("question-text1");
// const btndata = document.getElementById("btn-div");
// const nextdata = document.getElementById("next-btn");
// const selectiondata = document.getElementById("selection-tag");
// const questioncontainer = document.getElementById("question-container");
// const begin = document.getElementById("begin-btn");
// // const tenQuestion = document.getElementById("ten");

// let questions = [];
 

//   // let tenQuestion = [];
// // let thirtyQuestion =30;

// const selectElement = document.getElementById('noq');
// let selectedValue;
// // Add event listener to the <select> element
// selectElement.addEventListener('change', function() {
//     // Get the selected value from the <select> element
//     selectedValue = selectElement.value;

//     console.log('Selected value:', selectedValue);
//     loadQuestion(selectedValue);
// }
// );

  
// // const questionSelection = tenQuestion.value;

// //   tenQuestion.addEventListener("click" , 
// //     loadQuestion() );

//   // thirtyQuestion = document.getElementById("thirty");
//   // thirtyQuestion.addEventListener("click" , loadQuestion() );
  


// async function loadQuestion(){
//   const APIurl = `https://opentdb.com/api.php?amount=${selectedValue}`;
//   console.log(APIurl)
//   const result = await fetch (`${APIurl}`);
//   const data = await result.json();
// // console.log(result);
//   questions = []
//   data.results.map(result=>{
//     questions.push({
//       question: result.question,
//       answers: [...result.incorrect_answers, result.correct_answer]
//     })
//   })

  
//   // const fetchedQuestion = data.results[0].question;
//   // const fetchedAnswers = data.results[0].incorrect_answers.concat(data.results[0].correct_answer);

//   //  questions = [{
//   //   question: fetchedQuestion,
//   //   answers: fetchedAnswers.map(answer => ({ text: answer, correct: answer === data.results[0].correct_answer }))
//   // }];
  
//   showquestion(questions);
// }

// let questionindex = 0;
// let score = 0;


// function beginquiz(){
//   questionindex = 0;
//   score = 0;
//   nextdata.innerHTML = "Next";
//   // showquestion(questions);
// }

// function showquestion(questions){
//   // resetState();

//   // let currentquestion = questions[questionindex];
  
//   // let questionNo = questionindex + 1;
//   // questiondata.innerHTML = questionNo + ". " + currentquestion.question;

//   // btndata.innerHTML = '';

//   // currentquestion.answers.forEach(answer => {
    
//   //   const button = document.createElement("button");
//   //   button.innerHTML = answer;
//   //   button.classList.add("btn1");
//   //   btndata.appendChild(button);
//   //   if(answer.correct_answer){
//   //     button.dataset.correct_answer = answer;
//   //   }
//   //   button.addEventListener("click", selectAnswer);
//   // });
//   resetState();

//   let currentquestion = questions[questionindex];
//   let questionNo = questionindex + 1;
//   questiondata.innerHTML = questionNo + ". " + currentquestion.question;

//   btndata.innerHTML = '';

//   currentquestion.answers.forEach(answer => {
//     const button = document.createElement("button");
//     button.innerHTML = answer;
//     button.classList.add("btn1");
//     btndata.appendChild(button);
//     if(answer === currentquestion.correct_answer){
//       button.dataset.correct_answer = answer;
//     }
//     button.addEventListener("click", selectAnswer);
//   });

// }
 



// function resetState(){
//   nextdata.style.display = "none";
//   while(btndata.firstChild){
//     btndata.removeChild(btndata.firstChild);
//   }
// }

// function selectAnswer(e){
//   const selectedbtn = e.target;
//   // const iscorrect = selectedbtn.dataset.correct=== "correct_answer";
//   const iscorrect = selectedbtn.innerHTML === questions[questionindex].correct_answer;
//   console.log(iscorrect);
//   if(iscorrect){
//     selectedbtn.classList.add("correct");
//     score+=10;
//   }else{
//     selectedbtn.classList.add("incorrect_answers");
//   }
//   Array.from(btndata.children).forEach(button => {
//     if(button.dataset.correct === "true"){
//       button.classList.add("correct_answer");
//     }
//     button.disabled = true;
//   })
//   nextdata.style.display = "block";
// }
// //this function is used to display score
// function showscore(){
//   resetState();
//   questiondata.innerHTML = "Your score" + " "+ score + " "+ "out of " + (questions.length)*10;
//   questiondata.style.fontSize = "40px";
//   questiondata.style.textAlign = "center";
  
 
// }
// function handlenextdata(){
//   questionindex++;
//   if(questionindex < questions.length){
//     showquestion(questions); // Pass the questions array to showquestion
//   } else {
//     showscore();
//   }
// }

// nextdata.addEventListener("click", ()=>{
//   if(questionindex < questions.length){
//     handlenextdata();
//   }
// })



// questioncontainer.style.display = "none";
// begin.addEventListener("click",()=>{
//   questioncontainer.style.display = "block";
//   selectiondata.style.display = "none";
//   loadQuestion();
// } 
// )


// // selectiondata.style.display = "none";

// // https://opentdb.com/api.php?amount=100

const questiondata = document.getElementById("question-text1");
const btndata = document.getElementById("btn-div");
const nextdata = document.getElementById("next-btn");
const selectiondata = document.getElementById("selection-tag");
const questioncontainer = document.getElementById("question-container");
const begin = document.getElementById("begin-btn");

let questions = [];

const selectElement = document.getElementById('noq');
let selectedValue;

selectElement.addEventListener('change', function() {
    selectedValue = selectElement.value;
    console.log('Selected value:', selectedValue);
    loadQuestion(selectedValue);
});

async function loadQuestion(num=10) {
    const APIurl = `https://opentdb.com/api.php?amount=${num}`;
    try {
        const result = await fetch(APIurl);
        if (!result.ok) {
            throw new Error('Failed to fetch questions');
        }
        const data = await result.json();
        if (!data.results || data.results.length === 0) {
            console.error("No results returned from the API");
            return;
        }
        questions = data.results.map(result => ({
            question: result.question,
            answers: [...result.incorrect_answers, result.correct_answer],
            correct_answer: result.correct_answer
        }));
        showquestion();
    } catch (error) {
        console.error("Error loading questions:", error);
        if (error instanceof TypeError && error.message.includes("Failed to fetch")) {
            // Retry after a delay
            setTimeout(loadQuestion, 1000); // Retry after 1 second
        }
    }
}

let questionindex = 0;
let score = 0;

function beginquiz(){
  questionindex = 0;
  score = 0;
  nextdata.innerHTML = "Next";
}

function showquestion(){
  resetState();

  let currentquestion = questions[questionindex];
  let questionNo = questionindex + 1;
  questiondata.innerHTML = questionNo + ". " + currentquestion.question;

  btndata.innerHTML = '';

  currentquestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer;
    button.classList.add("btn1");
    btndata.appendChild(button);
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
  const iscorrect = selectedbtn.innerHTML === questions[questionindex].correct_answer;
  console.log(iscorrect);
  if(iscorrect){
    selectedbtn.classList.add("correct");
    score += 10;
  } else {
    selectedbtn.classList.add("incorrect_answers");
  }
  Array.from(btndata.children).forEach(button => {
    if(button.innerHTML === questions[questionindex].correct_answer){
      button.classList.add("correct_answer");
    }
    button.disabled = true;
  });
  nextdata.style.display = "block";
}

function showscore(){
  resetState();
  questiondata.innerHTML = "Your score" + " " + score + " " + "out of " + (questions.length) * 10;
  questiondata.style.fontSize = "40px";
  questiondata.style.textAlign = "center";
}

function handlenextdata(){
  questionindex++;
  if(questionindex < questions.length){
    showquestion();
  } else {
    showscore();
  }
}

nextdata.addEventListener("click", () => {
  if(questionindex < questions.length){
    handlenextdata();
  }
});

questioncontainer.style.display = "none";
begin.addEventListener("click", () => {
  questioncontainer.style.display = "block";
  selectiondata.style.display = "none";
  loadQuestion();
});
