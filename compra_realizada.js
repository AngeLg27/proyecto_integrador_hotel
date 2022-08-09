
const div_await = document.querySelector(".await");
const card = document.querySelector(".card");

function crearCard() {
    card.innerHTML =
        `
    <div class="card__div-ico">
        <i class="fa-solid fa-circle-check card__ico"></i>
    </div>
    <p class="card__desc">
        Tu reservación se ha realizado con exito !!! 
    </p>
    <a href="index.html" class="btn">
        <i class="fa-solid fa-house house-ico"></i>
        Regresar al incio
    </a
    `
}

setTimeout(() => {
    div_await.remove();
    crearCard()
}, 4000)
