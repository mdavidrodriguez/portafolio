const trabajos = document.getElementById('trabajos');
const ventanaTrabajos = document.getElementById('ventana-trabajos')


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
]

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

})


ventanaTrabajos.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click', (e) => {
    e.preventDefault();
    ventanaTrabajos.classList.remove('ventana--active');
});

ventanaTrabajos.querySelector('.ventana__overlay').addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.matches('.ventana__overlay')) {
        ventanaTrabajos.classList.remove('ventana--active')
    }
})