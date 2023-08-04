const quizDB=[
    {
        question:"Who is making the Web standards?",
        ans:[
            {text:"a. Google",correct:false},
            {text:"b. Microsoft",correct:false},
            {text:"c. The World wide web Consortium",correct:true},
            {text:"d. Mozilla",correct:false}
        ]
        
    },
    {
        question:"Choose the correct HTML element for the largest heading:",
        ans:[
            {text:"a. h6",correct:false},
            {text:"b. head",correct:false},
            {text:"c. h1",correct:true},
            {text:"d. heading",correct:false}
        ]
        
        
    },
    {
        question:"What is the correct HTML for referring to an external style sheet?",
        ans:[
            {text:" a. link rel='stylesheet' type='text/css' href='/style.css'>",correct:true},
            {text:" b. stylesheet>mystyle.css</stylesheet>",correct:false},
            {text:" c. style src=mystyle.css",correct:false},
            {text:" d. link=stylesheet",correct:false}
        ]
    },
    {
        question:"What is correct CSS Syntax?",
        ans:[
            {text:"a. body{color:black}",correct:true},
            {text:"b. {body:color=black;}",correct:false},
            {text:"c. {body;color:black;}",correct:false},
            {text:"d. body:color=black;",correct:false}
        ]
        

    
    },
    {
        question:"What is the correct JavaScript syntax to change the content of the HTML element below?",
        ans:[
            {text:"a. document.getElementByName('p').innerHTML='HELLO WORLD'",correct:true},
            {text:"b. #demo.innerHTML='Hello World'",correct:false},
            {text:"c. document.getElementByID('demo').innerHTML='Hello World'",correct:false},
            {text:"d. document.getElement('p').innerHTML='HELLO WORLD",correct:false}
        ]
    

     
    },
    {
        question:"How do you create a function in JavaScript?",
        ans:[
            {text:"a. function:myFunction()",correct:true},
            {text:"b. function=myFunction()",correct:false},
            {text:"c. function myfunction()",correct:false},
            {text:"d. function.function()",correct:false}
        ]
    },
    {  question:"How do you find the number with the highest value of x and y?",
    ans:[
        {text:"a. Math.max(x,y)",correct:true},
        {text:"b. top(x,y)",correct:false},
        {text:"c. Math.ceil(x,y)",correct:false},
        {text:"d. ceil(x,y)",correct:false}
    ]

    }
  
];
const question=document.querySelector('.question');
const submit=document.querySelector('.btn')
const Answers=document.getElementById('answer');

let currentQuestionIdx=0;
let score=0;

function startquiz(){
    currentQuestionIdx=0;
    score=0;
    showQuestion();
}
function showQuestion(){
reset();
    let currentQuestion=quizDB[currentQuestionIdx];
    let questionNo=currentQuestionIdx + 1;
    question.innerHTML=questionNo+"."+currentQuestion.question;

    currentQuestion.ans.forEach(answer=>{
        const button=document.createElement('button');
        button.innerHTML=answer.text;
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
        Answers.removeChild(Answers.firstChild)
    }
}
function selectanswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;

    }else{
        selectedBtn.classList.add('Incorrect')
    }
    Array.from(Answers.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add('correct')
        }
        button.disabled=true;
    })
    submit.style.display="inline"
    submit.innerHTML=`Next`
}
function showScore(){
    reset();
    document.querySelector('.title').style.display="none";
    question.innerHTML=`You Scored ${score} out of ${quizDB.length}`
    if(score<5){
        question.innerHTML=`You Scored ${score} out of ${quizDB.length}
`
        const p=document.createElement('p');
        p.textContent="Better Luck Next Time! 😀"
        question.appendChild(p);
       
        submit.style.display="inline"
        submit.innerHTML=   `Solve Again`
    }else{
        question.innerHTML=`You Scored ${score} out of ${quizDB.length} `
        const p=document.createElement('p');
        p.textContent=" Wow! Such a great Score 👌"
        question.appendChild(p);
        submit.style.display="inline"
    }
}
function handleClick(){
    currentQuestionIdx++;
    if(currentQuestionIdx<quizDB.length){
        showQuestion();
    }else{
        showScore();
    }
}

submit.addEventListener('click',()=>{
    if(currentQuestionIdx < quizDB.length){
        handleClick();
    }else{
        startquiz();
    }
})

startquiz()


