const trabajos = document.getElementById('trabajos');
const ventanaTrabajos = document.getElementById('ventana-trabajos')


const datos = [
    {
        id: '1',
        titulo: 'Sistema Reservas Consultorio Odontodologico',
        texto: 'He desarrollado un sistema de reservas con Vue.js para un consultorio odontológico. Esta solución integral optimiza la gestión de usuarios, servicios y citas, ofreciendo a los pacientes la conveniencia de reservar citas en línea y acceder a su historial. Para el personal, proporciona un panel de administración eficiente. Destaca por su interfaz moderna y medidas de seguridad sólidas. Además, este sistema ha sido documentado exhaustivamente y sometido a pruebas rigurosas, incluyendo mediciones de calidad del programa.',
        fecha: '26 de Noviembre 2023',
        demoUrl: 'https://frontend-consultorio.vercel.app/'
    },
    {
        id: '2',
        titulo: 'Trabajo #2',
        texto: 'Magna eu culpa sunt anim aliqua nulla veniam eiusmod commodo consectetur dolore dolor. Consequat laborum ad enim aute qui mollit quis occaecat laborum veniam qui. Do incididunt Lorem proident in cillum eu labore est exercitation. Nostrud in ex officia commodo commodo Lorem. Et laboris pariatur.',
        fecha: '30 de agosto 2023',
        demoUrl: 'https://ejemplo.com/demo1'
    },
    {
        id: '3',
        titulo: 'Trabajo #3',
        texto: 'Magna eu culpa sunt anim aliqua nulla veniam eiusmod commodo consectetur dolore dolor. Consequat laborum ad enim aute qui mollit quis occaecat laborum veniam qui. Do incididunt Lorem proident in cillum eu labore est exercitation. Nostrud in ex officia commodo commodo Lorem. Et laboris pariatur.',
        fecha: '30 de agosto 2023',
        demoUrl: 'https://ejemplo.com/demo1'
    },
    {
        id: '4',
        titulo: 'Trabajo #4',
        texto: 'Magna eu culpa sunt anim aliqua nulla veniam eiusmod commodo consectetur dolore dolor. Consequat laborum ad enim aute qui mollit quis occaecat laborum veniam qui. Do incididunt Lorem proident in cillum eu labore est exercitation. Nostrud in ex officia commodo commodo Lorem. Et laboris pariatur.',
        fecha: '30 de agosto 2023',
        demoUrl: 'https://ejemplo.com/demo1'
    },
    {
        id: '5',
        titulo: 'Trabajo #5',
        texto: 'Magna eu culpa sunt anim aliqua nulla veniam eiusmod commodo consectetur dolore dolor. Consequat laborum ad enim aute qui mollit quis occaecat laborum veniam qui. Do incididunt Lorem proident in cillum eu labore est exercitation. Nostrud in ex officia commodo commodo Lorem. Et laboris pariatur.',
        fecha: '30 de agosto 2023',
        demoUrl: 'https://ejemplo.com/demo1'
    },
    {
        id: '6',
        titulo: 'Trabajo #6',
        texto: 'Magna eu culpa sunt anim aliqua nulla veniam eiusmod commodo consectetur dolore dolor. Consequat laborum ad enim aute qui mollit quis occaecat laborum veniam qui. Do incididunt Lorem proident in cillum eu labore est exercitation. Nostrud in ex officia commodo commodo Lorem. Et laboris pariatur.',
        fecha: '30 de agosto 2023',
        demoUrl: 'https://ejemplo.com/demo1'
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
        const { titulo, fecha, texto, demoUrl } = trabajo[0];

        ventanaTrabajos.querySelector('.ventana__titulo').innerText = titulo;
        ventanaTrabajos.querySelector('.ventana__fecha').innerText = fecha;
        ventanaTrabajos.querySelector('.ventana__parrafo').innerText = texto;
        ventanaTrabajos.querySelector('.ventana__imagen').src = trabajoClick.querySelector('img').src;
        const botonDemo = ventanaTrabajos.querySelector('.ventana__demoUrl');
        if (demoUrl) {
            botonDemo.style.display = 'inline-block';
            botonDemo.addEventListener('click', () => window.open(demoUrl, '_blank'));
        } else {
            botonDemo.style.display = 'none';
        }

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