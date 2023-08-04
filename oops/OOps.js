const quizDB=[
    {
        question:"What is the implicit return type of constructor?",
        ans:[
            {text:"a. No return type",correct:false},
            {text:"b. A class object in which it is defined",correct:true},
            {text:"c. void",correct:false},
            {text:"d. None",correct:false}
        ]
    },
    {
        question:"Choose the incorrect option below which is not a type of constructor.",
        ans:[
            {text:"a. Copy constructor" ,correct:false},
            {text:"b. Friend constructor",correct:true},
            {text:"c. Parameterized constructor",correct:false},
            {text:"d. Default constructor",correct:false}
        ]
    },
    {
        question:"Choose the option below which is shown by function overriding",
        ans:[
            {text:"a. Abstraction",correct:false},
            {text:"b. Encapsulation",correct:false},
            {text:"c. Polymorphism",correct:true},
            {text:"d. Inheritance",correct:false}
        ]
    },
    {
        question:"When is the object created with a new keyword?",
        ans:[
            {text:"a. At run time",correct:true},
            {text:"b. At compile time",correct:false},
            {text:"c. Depends on the code",correct:false},
            {text:"d. None",correct:false}
        ]
    },
    {
        question:"Identify the abstract data type among the following.",
        ans:[
            {text:"a. double",correct:false},
            {text:"b. int",correct:false},
            {text:"c. class",correct:true},
            {text:"d. string",correct:false}
        ]
    },
    {
        question:"Dynamic memory allocation can be done using?",
        ans:[
            {text:"a. calloc()",correct:false},
            {text:"b. malloc()",correct:false},
            {text:"c. Both(a) & (b)",correct:true},
            {text:"d. create()",correct:false},
        ]
    },
    {
        question:"Which of the following is not an oops concept?",
        ans:[
            {text:"a. Inheritance",correct:false},
            {text:"b. Compilation",correct:true},
            {text:"c. Polymorphism",correct:false},
            {text:"d. Encasulation",correct:false}

        ]
    }

]


const question=document.querySelector('.question');
const submit=document.querySelector('.btn');
const Answers=document.querySelector('#answer');
let currentQuestionIdx=0;
let score=0;

function startQuiz(){
    currentQuestionIdx=0;
    score=0;
    showQuestion();

}
function showQuestion(){
    reset();
    let currentQuestion=quizDB[currentQuestionIdx];
    let questionNo=currentQuestionIdx+1;
    question.innerHTML=questionNo+"."+currentQuestion.question;

    currentQuestion.ans.forEach(answer=>{
        const button=document.createElement('button');
        button.innerText=answer.text;
        button.classList.add('buttons')
        Answers.appendChild(button)
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }

        button.addEventListener('click',selectanswer)
    })
   
}
function reset(){
    submit.style.display="none";
    while(Answers.firstChild){
        Answers.removeChild(Answers.firstChild);
    }
}
function selectanswer(e){
    let selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++;
    }else{
        selectedBtn.classList.add('Incorrect')
    }
    Array.from(Answers.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add('correct');
        }
        button.disabled=true;
    })
    submit.style.display="inline"
}
function showScore(){
    reset();
    document.querySelector('.title').style.display="none";
    question.innerHTML=`You Scored ${score} out of ${quizDB.length}`
    if(score<5){
        question.innerHTML=`You Scored ${score} out of ${quizDB.length}
`
        const p=document.createElement('p');
        p.textContent="Better Luck Next Time! 🤔"
        question.appendChild(p);
        submit.innerHTML=   `Solve Again`
        submit.style.display="inline"
    }else{
        question.innerHTML=`You Scored ${score} out of ${quizDB.length} `
        const p=document.createElement('p');
        p.textContent=" Wow! Such a great Score😀"
        question.appendChild(p);
        submit.style.display="inline"
    }
}
function handleClick(){
    currentQuestionIdx++;
    if(currentQuestionIdx < quizDB.length){
        showQuestion();
    }else{
        showScore();
    }
}
submit.addEventListener('click',()=>{
    if(currentQuestionIdx <quizDB.length){
        handleClick();
    }else{
        startQuiz();
    }
})
startQuiz()