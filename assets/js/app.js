const btn = document.querySelector('.hamburguer');
const menuMobile = document.querySelector('.menu-mobile')
const iclose = document.querySelector('.close')

btn.addEventListener('click', () =>{
    menuMobile.classList.add('active')
    btn.style.display = 'none';
    iclose.style.display = 'block'
})

iclose.addEventListener('click', () =>{
    menuMobile.classList.remove('active')
    btn.style.display = 'block';
    iclose.style.display = 'none'
})



console.log(btn, menuMobile)