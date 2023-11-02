function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.addEventListener("scroll", function(){
    let header = document.querySelector(".header__container")
    let main_header = document.getElementById("header")
    
    main_header.classList.toggle("before_h",window.scrollY > 0)
    header.classList.toggle("header__container_fixed",window.scrollY > 0)
    $('.box__header').toggleClass('box__header-fixed',window.scrollY > 0);

    let scrolltoTop = document.querySelector(".scroll_to_top")
    scrolltoTop.classList.toggle("show",window.scrollY > 500)
})

let btn_menu = document.querySelector('.btn__menu_mobile')
let active_menu = document.querySelector('.header__mobile ')

btn_menu.onclick = function() {
    btn_menu.classList.toggle('show')
    active_menu.classList.toggle('show')
}

let list_menu = document.querySelectorAll('.btn_dropdown-mobile')
let drop = document.querySelectorAll('.dropdown_menu--mobile')

list_menu.forEach(item => {
    item.onclick = function(){
        this.classList.toggle('active')
    }
});

// Modal Video

let videos = document.querySelectorAll('.list__video--item'),
modalvideo = document.querySelector('.popupvideo'),
iframemodalvideo = document.querySelector('.popupvideo .popupvideo__inner .popupvideo__inner-iframe iframe'),
btnclose = document.querySelector('.popupvideo .popupvideo__inner-close')
videos.forEach((item) => {
    item.addEventListener('click', function() {
        modalvideo.classList.add('active')
        let dataId = item.getAttribute('data-video')
        iframemodalvideo.setAttribute('src',`https://www.youtube.com/embed/${dataId}?autoplay=1`)
    })
});

function closeModal() {
    modalvideo.classList.remove('active')
    iframemodalvideo.setAttribute('src','')
}

btnclose.addEventListener('click', function(){
    closeModal()
})

modalvideo.addEventListener('click',function() {
    closeModal()
});
