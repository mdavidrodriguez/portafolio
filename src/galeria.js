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