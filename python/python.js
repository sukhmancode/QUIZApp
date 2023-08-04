const quizDB=[
    {
        question:"What is machine learning ?",
        ans:[
            {text:"a. Machine learning is the science of getting computers to act without being explicitly programmed",correct:false},
            {text:"b. Machine Learning is a Form of AI that Enables a System to Learn from Data.",correct:false},
            {text:"c. Both A and B" ,correct:true},
            {text:"d. None of the above",correct:false}
        ]
    },
    {
        question:" Application of machine learning methods to large databases is called",
        ans:[
            {text:"a. Data Mining",correct:true},
            {text:"b. Artificial intelligence",correct:false},
            {text:"c. Big data computing",correct:false},
            {text:"d. IOT",correct:false}
        ]
    },
    {
        question:" RNNs stands for?",
        ans:[
            {text:" a. Receives neural networks",correct:false},
            {text:"b. Report neural networks",correct:false},
            {text:"c. Recording neural networks",correct:false},
            {text:"d. Recurrent neural networks",correct:true}
        ]
    },
    {
        question:"Deep learning algorithms are _______ more accurate than machine learning algorithm in image classification.",
        ans:[
            {text:"a. 33%",correct:false},
            {text:"b. 37%",correct:false},
            {text:"c. 40%",correct:false},
            {text:"d. 41%",correct:true}

        ]
    },
    {
        question:"Which neural network has only one hidden layer between the input and output?",
        ans:[
            {text:"a. Shallow neural network",correct:true},
            {text:"b. Deep neural network",correct:false},
            {text:"c. Feed-forward neural networks",correct:false},
            {text:"d. Recurrent neural networks",correct:false},
        ]
    },
    {
        question:" If Linear regression model perfectly first i.e., train error is zero, then _________",
        ans:[
            {text:"a. Test error is also always zero",correct:false},
            {text:"b. Test error is non zero",correct:false},
            {text:"c. Couldn’t comment on Test error",correct:true},
            {text:"d. Test error is equal to Train error",correct:false}


        ]
    },
    {
        question:"Which of the following is/are Limitations of deep learning?",
        ans:[
            {text:"a. Data labeling",correct:false},
            {text:"b. Obtain huge training datasets",correct:false},
            {text:"c. Both A and B",correct:true},
            {text:"d.  None of the above",correct:false}
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
    reset()
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
    submit.style.display="none"
    while(Answers.firstChild){
        Answers.removeChild(Answers.firstChild)
    }
}

function selectanswer(e){
    let selectedBtn=e.target;
   const isCorrect= selectedBtn.dataset.correct==="true";
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
    button.disabled=true
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
        submit.innerHTML= `Solve Again`
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
    }
    else{
        showScore();
    }
}
submit.addEventListener('click',()=>{
    if(currentQuestionIdx<quizDB.length){
        handleClick();
    }else{
        startQuiz();
    }
})
startQuiz();