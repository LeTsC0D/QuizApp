const startButton=document.getElementById("start-btn");
const questionContainerElement=document.getElementById("question-container");
const questionElement=document.getElementById("question");
const answerButtonsElement=document.getElementById("answer-buttons");
startButton.addEventListener("click",startGame);
let shuffledQuestions;
let currentQuestionIndex;

function startGame(){
    //starting the quiz
    console.log("started");
    startButton.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    shuffledQuestions=questions.sort((a,b)=>Math.random()-0.5)
    currentQuestionIndex=0;
    setNextQuestion();
}

function setNextQuestion(){
   //building the next question
   showQuestions(shuffledQuestions[currentQuestionIndex]);
}

function showQuestions(questions){
questionElement.innerText=questions.question;
}

function selectAnswer(){
    //when you select the answer

}

const questions=[
    {
       question:"what is 2+2 ",
       answer: [
        {text: "4", correct:true},
        {text: "22", correct:false},
       ],
    },
];


