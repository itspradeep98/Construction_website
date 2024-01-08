burger =  document.querySelector('.burger')
navbar =  document.querySelector('.navbar')
nav-list =  document.querySelector('.nav-list')
rightnav =  document.querySelector('.rightnav')


burger.addEventListener('click', ()=>{
    navbar.classList.toggle('v-class-resp');
    nav-list.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');

})