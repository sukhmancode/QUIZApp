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
