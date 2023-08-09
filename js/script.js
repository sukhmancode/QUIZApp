const CardSection = document.querySelectorAll('.card');
const formSection = document.querySelector('.form-section');
const Card = document.querySelector('.cards');
const Example = document.querySelector('.example');
const submits = document.getElementById('start');



CardSection.forEach((card)=>{
    card.addEventListener('click',(e)=>{
        Card.classList.toggle('active');
        formSection.classList.add('active');
        Example.textContent=e.target.querySelector('.topic').textContent;
        
    
        submits.addEventListener('click',()=>{
            submits.setAttribute('href',"html"+ "/"+"Topics" +".html")
            
        })
    })
})
