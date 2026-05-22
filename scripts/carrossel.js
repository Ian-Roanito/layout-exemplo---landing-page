const track = document.getElementById("carrosselTrack"); // ul
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function moveNext() {
    // 1. Garante que a transição está ativa e suave antes de mover
    track.style.transition = "transform 0.5s ease-in-out";
    
    // 2. Dá um micro-tempo para o navegador registrar a transição...
    setTimeout(() => {
        // ...e aí sim joga a pista para a esquerda
        track.style.transform = "translateX(-100%)";
    }, 20);

    // 3. Espera os 0.5s da animação acabar para reorganizar a fila HTML no fundo
    setTimeout(() => {
        track.style.transition = "none";
        track.appendChild(track.firstElementChild);
        track.style.transform = "translateX(0)";
    }, 520); // Aumentamos 10ms aqui para compensar o primeiro timeout
}

function movePrev() {

    track.style.transition = "none";

    track.prepend(track.lastElementChild);

    track.style.transform = "translateX(-100%)";

    setTimeout(() => {
        track.style.transition = "transform 0.5s";
        track.style.transform = "translateX(0)";
    }, 10)
}

nextBtn.addEventListener('click', moveNext);
prevBtn.addEventListener('click', movePrev);