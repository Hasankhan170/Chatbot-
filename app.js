const userName = document.querySelector('.username')
const email = document.querySelector('.email')
const form = document.querySelector('form')


form.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(userName.value);
    console.log(email.value);

    
})