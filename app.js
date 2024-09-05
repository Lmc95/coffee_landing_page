// MENU
const btnMenu = document.getElementById('btn_menu');
const icoBtnMenu = document.querySelector('#btn_menu i');
const menuHeader = document.querySelector('.menu_header');
let menu = 0;
// opciones menu
const optMenu = document.querySelectorAll('.menu_header a');


const cerrarMenu = () => {
    icoBtnMenu.classList.add('fa-bars');
    icoBtnMenu.classList.remove('fa-xmark');

    // Activar ocultar el menu, quitando la clase que se encargar de mostrar el menu desde css.
    menuHeader.classList.remove('menu_open');
    // Colocar scroll a la página
    document.body.style.overflowY = 'auto';
}
const abrirMenu = () => {
    icoBtnMenu.classList.add('fa-xmark');
    icoBtnMenu.classList.remove('fa-bars');

    // Activar la muestra del menu, añadir una clase que se encargara de mostrar el menu desde css.
    menuHeader.classList.add('menu_open');
    // Quitar scroll a la página
    document.body.style.overflowY = 'hidden';
}

optMenu.forEach(element => {
    element.addEventListener('click', () => {
        menu = 0;
        cerrarMenu();
    })
});

btnMenu.addEventListener('click', () => {
    menu++;
    // Si el resultado es "0" el menu se debería cerrar.
    if(menu % 2 == 0) {
        cerrarMenu()
    }else {
        abrirMenu()
    }
})