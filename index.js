// gsap.registerPlugin(ScrollTrigger);

let btnoption = document.querySelector(".option")
let close = document.querySelector('.close')
let right = document.querySelector('.right')
let left = document.querySelector('.left')
let btnshop = document.getElementById('btnshop')
let poto = document.querySelector(".poto")
var slideIndex = 1;


showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("image");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
//asdafdsafasdfadfdasfasfasdfsafdsaf

btnshop.addEventListener('click', () => {
    alert("We're working on it!")
})

btnoption.addEventListener('click', () => {
    gsap.to(".navcontent", { y: '15vh', opacity: 1, duration: '.5s' })
    gsap.to(".imgnav", { y: '-15vh' })
})

close.addEventListener('click', () => {
    gsap.to(".navcontent", { y: '0vh', opacity: 0, duration: '.5s' })
    gsap.to(".imgnav", { y: '0vh' })
})

// right.addEventListener('click', () => {
//     photos.forEach(photo => {
//         poto.src = photo
//     })
// })

// left.addEventListener('click', () => {
//     if (image[0]) {
//         left.style.opacity = '.5'
//     }
//     gsap.to(".images", { x: '+=100vw' })
// })