const CardSection = document.querySelectorAll('.card');
const formSection = document.querySelector('.form-section');
const Card = document.querySelector('.cards');
const Example = document.querySelector('.example');
const submits = document.getElementById('start');
export const windowTitle=document.querySelector('.window')



CardSection.forEach((card)=>{
    card.addEventListener('click',(e)=>{
        Card.classList.toggle('active');
        formSection.classList.add('active');
        const selectedTopic = e.target.querySelector('.topic').textContent;
        windowTitle.textContent = selectedTopic;
        Example.textContent = selectedTopic;

        submits.addEventListener('click',()=>{
            submits.setAttribute('href',"html"+ "/"+"Topics" +".html")
            
        })
    })
})
