const MainDB=[
    quizDB=[
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
                {text:"a. function:myFunction()",correct:false},
                {text:"b. function=myFunction()",correct:false},
                {text:"c. function myfunction()",correct:true},
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
      
    ],
   
]

const question=document.querySelector('.question');
const submit=document.querySelector('.btn')
const Answers=document.getElementById('answer');

let currentQuestionIdx=0;
let score=0;




