const CardSection = document.querySelectorAll('.card');
const formSection = document.querySelector('.form-section');
const Card = document.querySelector('.cards');
const Example = document.querySelector('.example');
const submits = document.getElementById('start');
const Questions=document.querySelector('.questions-sec')
 const windowTitle=document.querySelector('.window-title')
const question=document.querySelector('.question');
const submit=document.querySelector('.btn');
const Answers=document.querySelector('#answer');
const greenTitle=document.querySelector('.title');



CardSection.forEach((card)=>{
    card.addEventListener('click',(e)=>{
        Card.classList.toggle('active');
        formSection.classList.add('active');
        const selected=e.target.querySelector('.topic').textContent;
        Example.textContent=selected;
      
       
        submits.addEventListener('click',()=>{
            formSection.classList.remove('active')
          
            windowTitle.textContent=selected;
            Questions.classList.add('active')
            greenTitle.textContent=`${windowTitle.textContent}`
        })
    })


})
    /* Quiz Logic*/

    const quizDBs = {
       
        "Frontend": FrontendquizDB, 
        "Backend":BackendquizDB,
        "JAVA,C++":javaquizDB,
        "MachineL":PythonquizDB, 
        "OOPs":OOPsquizDB
    
    }
    
    let currentQuestionIdx=0;
    let score=0;
    const startQuiz=()=>{
        currentQuestionIdx=0;
        score=0;
     
    showQuestion();
    }
    
    const showQuestion = () =>{
        reset();
        let currentQuestion=quizDBs[windowTitle.innerHTML][currentQuestionIdx];
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
    const reset = () =>{
        submit.style.display="none"
        while(Answers.firstChild){
            Answers.removeChild(Answers.firstChild)
        }
    }
    
    const selectanswer=(e) =>{
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
    
    const showScore = ()=>{
        reset();
        document.querySelector('.title').style.display="none";
        question.innerHTML=`You Scored ${score} out of ${quizDBs.Backend.length}`
        if(score<5){
            question.innerHTML=`You Scored ${score} out of ${quizDBs.Backend.length}
    `
            const p=document.createElement('p');
            p.textContent="Better Luck Next Time! 😀"
            question.appendChild(p);
    
            submit.style.display="inline"
            submit.innerHTML= `Solve Again`
        }else{
            question.innerHTML=`You Scored ${score} out of ${quizDBs.Backend.length} `
            const p=document.createElement('p');
            p.textContent=" Wow! Such a great Score 👌"
            question.appendChild(p);
            submit.style.display="inline"
        }
    }
    const handleClick=()=>{
        currentQuestionIdx++;
        if(currentQuestionIdx < quizDBs.Backend.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }
    submit.addEventListener('click',()=>{
        if(currentQuestionIdx<quizDBs.Backend.length){
            handleClick();
        }else{
            startQuiz();
        }
    })
    startQuiz();

