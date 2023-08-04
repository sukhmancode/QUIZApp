const quizDB=[
    {
        question:"How are String represented in memory in C++?",
        ans:[
            {text:"a. An array of characters.",correct:true},
            {text:"b. The object of same class.",correct:false},
            {text:"c. Same as other Primitive data types.",correct:false},
            {text:"d. LinkedList of characters."}

        ]
    },
    {
        question:"When a pop() operation is called on an empty queue, what is the condition called?",
        ans:[
            {text:"a. Overflow",correct:false},
            {text:"b. Underflow",correct:true},
            {text:"c. Syntax Error",correct:false},
            {text:"d. Garbage Value",correct:false},

        ]
    },
    {
        question:"Which of the following can be done with LinkedList?",
        ans:[
            {text:"a. Implementation of Stacks and Queues",correct:false},
            {text:"b. Implementation of Binary Trees",correct:false},
            {text:"c. Implementation of Data Structures that can simulate Dynamic Arrays",correct:false},
            {text:"d. All of the above",correct:true}
        ]
    },
    {
        question:"What is the time complexity to insert an element to the front of a LinkedList(head pointer given)?",
        ans:[
            {text:"a. O(n)",correct:false},
            {text:"b. O(1)",correct:true},
            {text:"c. O(logn)",correct:false},
            {text:"d. O(logn*n",correct:false},
        ]
    },{
        question:"Which of the following is a Divide and Conquer algorithm?",
        ans:[
            {text:"a. Bubble Sort",correct:false},
            {text:"b. Selection Sort",correct:false},
            {text:"c. Heap Sort",correct:false},
            {text:"d. Merge Sort",correct:true}
        ]
    },
    {
        question:"Which of the following data structures allow insertion and deletion from both ends?",
        ans:[
            {text:"a. Stack",correct:false},
            {text:"b. Deque",correct:true},
            {text:"c. Queue",correct:false},
            {text:"d. Strings",correct:false}
        ]
    },
    {
        question:"Which of the following data structures can be used to implement queues?",
        ans:[
            {text:"Stack",correct:false},
            {text:"Arrays",correct:false},
            {text:"LinkedList",correct:false},
            {text:"All of the Above",correct:true}
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
        button.classList.add('buttons');
        Answers.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectanswer);
    })

}
function selectanswer(e){
    let selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true"
    if(isCorrect){
        selectedBtn.classList.add('correct')
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

function reset(){
    submit.style.display="none"
    while(Answers.firstChild){
        Answers.removeChild(Answers.firstChild);
    }
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
    }else{
        showScore();
    }
}
submit.addEventListener('click',()=>{
    if(currentQuestionIdx< quizDB.length){
        handleClick();
    }else{
        startQuiz();
    }
})
startQuiz()
