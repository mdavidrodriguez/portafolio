import './animarGaleria'
import animarTexto from "./animarTexto";
import './galeria'
import './slider'
import './ventanaCorreo'

window.addEventListener('load', async () => {
    await   animarTexto(document.querySelector('.hero__titulo--uno'));
    await animarTexto(document.querySelector('.hero__titulo--dos'));

    document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
    document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');

})

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa Smooth Scroll
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800, // Velocidad del desplazamiento
        speedAsDuration: true, // Usa la velocidad como duración de la animación
    });
});
