

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
        submit.innerHTML= `Solve Again`
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