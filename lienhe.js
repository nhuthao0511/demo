let header=document.querySelector('header');
window.addEventListener('scroll',()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
})
let search = document.querySelector('.search-box');
document.querySelector('.booking i').onclick = () =>{
    search.classList.toggle('active')
}
// ===================================================
const sr = ScrollReveal ({
    distance: '68px',
    duration: 2600,
    lelay:450,
    reset: true
});
sr.reveal('.form-lienhe',{lelay:200, origin:'top'});
sr.reveal('.contact-info',{lelay:400, origin:'left'});
sr.reveal('.map',{lelay:400, origin:'top'});
sr.reveal('.home-text',{lelay:200, origin:'top'});
sr.reveal('.post-filter',{lelay:400, origin:'left'});
sr.reveal('#backtop',{lelay:400, origin:'right'});
sr.reveal('.grid__column-2',{lelay:400, origin:'right'});
sr.reveal('.grid__column-2-4',{lelay:400, origin:'top'});
//---------------------------
$(document).ready(function () {
    $(".filter-item").click(function () {
            const value = $(this).attr("data-filter");
            if (value == "all") {
                $(".post-box").show("1000");
            } else {
                $(".post-box")
                    .not("." + value)
                    .hide("1000");
                $(".post-box")
                    .filter("." + value)
                    .show("1000");
            }
    });
    $(".filter-item").click(function () {
        $(this.addClass("active-filter"));
    });
});

// 
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();
        }
    });

    $("#backtop").click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});



