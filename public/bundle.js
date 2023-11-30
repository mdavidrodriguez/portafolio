'use strict';

const galeria = document.getElementById('trabajos');

const observer = new IntersectionObserver(
    (entries) => {
        if (entries[0].isIntersecting) {
            const trabajos = galeria.querySelectorAll('.trabajos__imagenes a');
            trabajos.forEach((trabajo,index) => {
                setTimeout(() => {
                    trabajo.classList.add('trabajos__trabajo--visible');
                }, 200 * index);
            });
        }
    }, {
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.5
});

observer.observe(galeria);

const animarTexto = (elemento) => {
    const numeroLetras = elemento.dataset.texto.length;
    // Activamos el cursor cuando comienza la animación
    const cursor = elemento.querySelector('.hero__cursor');
    cursor.classList.add('hero__cursor--visible');

    // Por cada letra, la agregamos al DOM con 100ms de separación
    for (let i = 0; i < numeroLetras; i++) {
        setTimeout(() => {
            const letra = document.createElement('span');
            letra.append(elemento.dataset.texto[i]);
            elemento.append(letra);
        }, 100 * i);
    }
    // Cambiamos la clase del cursor, para que cambie de posición
    setTimeout(() => {
        // Obtenemos todos los cursores
        const cursores = [...elemento.closest('.hero__header').querySelectorAll('.hero__cursor')];

        // Obetenemos el index del cursor actual
        const indexCursorActual = cursores.indexOf(cursor);
        
        // Comprobamos que el cursor no sea el ultimo
        if(indexCursorActual < cursores.length - 1){
            cursor.classList.remove('hero__cursor--visible');
        }else {
            cursor.classList.add('hero__cursor--active');
        }
    }, numeroLetras * 100);

    // Retornamos una promesa para saber cuando la animación acabo
    return new Promise((resolve) => setTimeout(resolve, numeroLetras * 100));
    




};

const trabajos = document.getElementById('trabajos');
const ventanaTrabajos = document.getElementById('ventana-trabajos');


const datos = [
    {
        id: '1',
        titulo: 'Trabajo #1',
        texto: 'Magna eu culpa sunt anim aliqua nulla veniam eiusmod commodo consectetur dolore dolor. Consequat laborum ad enim aute qui mollit quis occaecat laborum veniam qui. Do incididunt Lorem proident in cillum eu labore est exercitation. Nostrud in ex officia commodo commodo Lorem. Et laboris pariatur.',
        fecha: '12 de agosto 2023'
    },
    {
        id: '2',
        titulo: 'Trabajo #2',
        texto: 'Magna eu culpa sunt anim aliqua nulla veniam eiusmod commodo consectetur dolore dolor. Consequat laborum ad enim aute qui mollit quis occaecat laborum veniam qui. Do incididunt Lorem proident in cillum eu labore est exercitation. Nostrud in ex officia commodo commodo Lorem. Et laboris pariatur.',
        fecha: '30 de agosto 2023'
    },
    {
        id: '3',
        titulo: 'Trabajo #3',
        texto: 'Magna eu culpa sunt anim aliqua nulla veniam eiusmod commodo consectetur dolore dolor. Consequat laborum ad enim aute qui mollit quis occaecat laborum veniam qui. Do incididunt Lorem proident in cillum eu labore est exercitation. Nostrud in ex officia commodo commodo Lorem. Et laboris pariatur.',
        fecha: '30 de agosto 2023'
    },
    {
        id: '4',
        titulo: 'Trabajo #4',
        texto: 'Magna eu culpa sunt anim aliqua nulla veniam eiusmod commodo consectetur dolore dolor. Consequat laborum ad enim aute qui mollit quis occaecat laborum veniam qui. Do incididunt Lorem proident in cillum eu labore est exercitation. Nostrud in ex officia commodo commodo Lorem. Et laboris pariatur.',
        fecha: '30 de agosto 2023'
    },
    {
        id: '5',
        titulo: 'Trabajo #5',
        texto: 'Magna eu culpa sunt anim aliqua nulla veniam eiusmod commodo consectetur dolore dolor. Consequat laborum ad enim aute qui mollit quis occaecat laborum veniam qui. Do incididunt Lorem proident in cillum eu labore est exercitation. Nostrud in ex officia commodo commodo Lorem. Et laboris pariatur.',
        fecha: '30 de agosto 2023'
    },
    {
        id: '6',
        titulo: 'Trabajo #6',
        texto: 'Magna eu culpa sunt anim aliqua nulla veniam eiusmod commodo consectetur dolore dolor. Consequat laborum ad enim aute qui mollit quis occaecat laborum veniam qui. Do incididunt Lorem proident in cillum eu labore est exercitation. Nostrud in ex officia commodo commodo Lorem. Et laboris pariatur.',
        fecha: '30 de agosto 2023'
    },
];

trabajos.addEventListener('click', (e) => {
    e.preventDefault();

    const trabajoClick = e.target.closest('.trabajos__trabajo');
    if (trabajoClick) {
        // Obtenemos el id del trabajo clickeado
        const id = trabajoClick.dataset.id;

        const trabajo = datos.filter((trabajo) => {
            if (trabajo.id === id) {
                return trabajo;
            }
        });
        const { titulo, fecha, texto } = trabajo[0];

        ventanaTrabajos.querySelector('.ventana__titulo').innerText = titulo;
        ventanaTrabajos.querySelector('.ventana__fecha').innerText = fecha;
        ventanaTrabajos.querySelector('.ventana__parrafo').innerText = texto;
        ventanaTrabajos.querySelector('.ventana__imagen').src = trabajoClick.querySelector('img').src;

        ventanaTrabajos.classList.add('ventana--active');
    }

});


ventanaTrabajos.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click', (e) => {
    e.preventDefault();
    ventanaTrabajos.classList.remove('ventana--active');
});

ventanaTrabajos.querySelector('.ventana__overlay').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('.ventana__overlay')) {
        ventanaTrabajos.classList.remove('ventana--active');
    }
});

window.addEventListener('load', async () => {
    await   animarTexto(document.querySelector('.hero__titulo--uno'));
    await animarTexto(document.querySelector('.hero__titulo--dos'));

    document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
    document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');

});
//# sourceMappingURL=bundle.js.map
