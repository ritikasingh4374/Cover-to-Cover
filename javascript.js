/*------ search button------*/

searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}

// login form 

var loginform = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginform.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginform.classList.remove('active');
}

var swippper = new Swiper('.books-list',{
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        dislableOnInteraction:false,
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
});