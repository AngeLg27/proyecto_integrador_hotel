window.onscroll = function(){
    scroll = document.documentElement.scrollTop;
    header = document.querySelector('#header');

    if(scroll > 20){
        header.classList.add('nav_mod');
    } else if (scroll <= 20){
        header.classList.remove('nav_mod');
    }

}

document.querySelector('#btn_menu').addEventListener("click", mostrar_menu);

menu = document.querySelector('#header');
nav = document.querySelector('#nav');

function mostrar_menu(){
    menu.classList.toggle('.move_contenido');
    move.nave
}