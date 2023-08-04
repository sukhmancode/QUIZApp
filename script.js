const CardSection=document.querySelectorAll('.card');
const formSection=document.querySelector('.form-section');
const Card=document.querySelector('.cards');
const Example=document.querySelector('.example');
const submit =document.getElementById('start')

CardSection.forEach((card)=>{
    card.addEventListener('click',(e)=>{
        Card.classList.toggle('active');
        formSection.classList.add('active');
        Example.textContent=e.target.querySelector('.topic').textContent;
    })
})
submit.addEventListener('click',(e)=>{
    submit.setAttribute('href',Example.innerHTML +".html")
})
