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
        titulo: 'Sistema Reservas Consultorio Odontodologico',
        texto: 'He desarrollado un sistema de reservas con Vue.js para un consultorio odontológico. Esta solución integral optimiza la gestión de usuarios, servicios y citas, ofreciendo a los pacientes la conveniencia de reservar citas en línea y acceder a su historial. Para el personal, proporciona un panel de administración eficiente. Destaca por su interfaz moderna y medidas de seguridad sólidas. Además, este sistema ha sido documentado exhaustivamente y sometido a pruebas rigurosas, incluyendo mediciones de calidad del programa.',
        fecha: '26 de Noviembre 2023',
        demoUrl: 'https://frontend-consultorio.vercel.app/'
    },
    {
        id: '2',
        titulo: 'Aplicativo web para la gestion de pedidos de un negocio',
        texto: 'Desarrollé un sistema integral de gestión de pedidos para negocios, destacando las funcionalidades clave: gestión de usuarios, inventario, productos y creación eficiente de pedidos. La aplicación, construida con React.js y Express, garantiza una experiencia de usuario fluida y un rendimiento robusto en el servidor. Simplifica operaciones diarias y potencia la toma de decisiones informadas para impulsar la eficiencia operativa. Un hito exitoso en la mejora de procesos y la experiencia del cliente.',
        fecha: '30 de agosto 2023',
        demoUrl: 'https://gestion-mitiendita.vercel.app'
    },
    {
        id: '3',
        titulo: 'App Movil para la busqueda de pensionados y apartamentos de estudiantes en la ciudad de Valledupar ',
        texto: 'En colaboración con un equipo, creamos una aplicación en Flutter destinada a estudiantes en Valledupar en busca de información sobre pensionados en la ciudad. Esta herramienta conjunta proporciona una búsqueda eficaz, ofreciendo detalles completos sobre pensionados, sus ubicaciones y servicios. Con una interfaz atractiva y fácil de usar, la aplicación busca mejorar la experiencia estudiantil al simplificar el acceso a información vital para la toma de decisiones educativas. Un proyecto grupal ágil y centrado en el usuario para facilitar la búsqueda de pensionados en Valledupar.',
        fecha: '12 septiembre 2023',
    },
    {
        id: '4',
        titulo: 'App Móvil para Gestión de Reservas de Hotel en Pueblo Bello',
        texto: 'Desarrollé una aplicación móvil en Flutter diseñada para simplificar la gestión de reservas de hotel en el encantador municipio de Pueblo Bello. Esta aplicación permite a los usuarios realizar reservas de manera intuitiva, explorar opciones de alojamiento, y recibir confirmaciones instantáneas. Con una interfaz amigable, la aplicación proporciona información detallada sobre las instalaciones de cada hotel, disponibilidad de habitaciones y precios actualizados. Una solución móvil completa que facilita a los visitantes la planificación de su estancia en Pueblo Bello, mejorando así la experiencia de reserva y alojamiento.',
        fecha: '20 octubre 2023',
    },
    {
        id: '5',
        titulo: 'App Movil para la gestión administrativa de una veterinaria',
        texto: 'En colaboración con un equipo, creamos una aplicación móvil en Flutter para simplificar la gestión administrativa de clínicas veterinarias. Facilita la programación de citas, el manejo de historias clínicas digitales, el control de inventario y la facturación. Una solución intuitiva que potencia la eficiencia operativa y mejora la atención a los pacientes en entornos veterinarios.',
        fecha: '29 Noviembre 2023',
    },
    {
        id: '6',
        titulo: 'Consumo de Api de Peliculas con react.js',
        texto: 'Este proyecto fue realizado con react.js, en el cual se consume una api de peliculas, en el cual se puede ver el detalle de cada pelicula, estas son de acuerdo a los ultimos lanzamientos.',
        fecha: '04 Marzo 2023',
        demoUrl: 'https://peliculas-fetch-mdavidrodriguez.vercel.app/'
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

const slider = document.getElementById('slider');

let clickPresionado = false;
let coordenadaInicial;
let scrollLeft;

const presiona = (e) => {
    clickPresionado = true;
    coordenadaInicial = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    // console.log('pageX: ', e.pageX);
    // console.log('slider.offsetLeft: ', slider.offsetLeft);
    // console.log('scrollLeft: ', slider.scrollLeft);
};
const mueve = (e) => {
    if (!clickPresionado) {
        return;
    }

    const espaciado = e.pageX - slider.offsetLeft;
    const distanciaRecorrida = espaciado - coordenadaInicial;
    slider.scrollLeft = scrollLeft - distanciaRecorrida;
    // console.log('mueve');
};
const suelta = (e) => {
    clickPresionado = false;
    // console.log('suelta');

};

slider.addEventListener('mousedown', presiona);
slider.addEventListener('mousemove', mueve);
slider.addEventListener('mouseup', suelta);

const botonesEmail = document.querySelectorAll('[data-action="abrir-ventana-correo"]');
const botonesCerrar = document.querySelectorAll('[data-action="cerrar-ventana"]');
const ventanaCorreo = document.getElementById('ventana-correo');
botonesEmail.forEach((boton) => {
    boton.addEventListener('click', (e)=> {
        e.preventDefault();
        ventanaCorreo.classList.add('ventana--active');
    });
});

botonesCerrar.forEach((boton) => {
    boton.addEventListener('click', (e)=> {
        e.preventDefault();
        ventanaCorreo.classList.remove('ventana--active');
    });
});

window.addEventListener('load', async () => {
    await   animarTexto(document.querySelector('.hero__titulo--uno'));
    await animarTexto(document.querySelector('.hero__titulo--dos'));

    document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
    document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');

});

document.addEventListener('DOMContentLoaded', function () {
    // Inicializa Smooth Scroll
    new SmoothScroll('a[href*="#"]', {
        speed: 800, // Velocidad del desplazamiento
        speedAsDuration: true, // Usa la velocidad como duración de la animación
    });
});
//# sourceMappingURL=bundle.js.map
