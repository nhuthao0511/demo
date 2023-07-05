let header=document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
})
let search = document.querySelector('.search-box');
document.querySelector('.booking i').onclick = () =>{
    search.classList.toggle('active')
}



const sr = ScrollReveal ({
    distance: '68px',
    duration: 2600,
    lelay:450,
    reset: true
});
sr.reveal('.form-lienhe',{lelay:200, origin:'top'});
sr.reveal('.contact-info',{lelay:400, origin:'left'});
sr.reveal('.map',{lelay:400, origin:'top'});
sr.reveal('.box_newletter',{lelay:400, origin:'top'});
