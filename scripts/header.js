const header = document.getElementById("header");


// Adiciona o a classe rolar no header quando scrolar e tela para baixo
document.addEventListener("scroll", () => {

    let scrollTop = window.scrollY;

    if (scrollTop > 0) {
        header.classList.add('rolar');
    } else {
        header.classList.remove('rolar')
    }
})

const btnMobile = document.getElementById("btnMobile");
const navList = document.getElementById("navList");
const link = document.querySelectorAll(".nav-list a");

const body = document.getElementById("body");
const html = document.getElementById("html");

btnMobile.addEventListener('click', () => {

    body.classList.add('travado');
    html.classList.add('travado');
    
    navList.classList.toggle('display');
})

link.forEach(link => {

    link.addEventListener('click', () => {
        
        body.classList.remove('travado');
        html.classList.remove('travado');

        navList.classList.remove('display');
    })
});
