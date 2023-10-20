const propiedadesAlquiler = [
    {
        nombre: 'Casa en Puerto Montt',
        src: 'https://www.casaseldibujo.cl/PORTADA%20CORDILLERA.JPG',
        descripcion: 'Hermosa casa en viña, vista al mar, oerfecta para vacacionar',
        ubicacion: 'Puerto Montt',
        habitaciones:3,
        baños: 2,
        costo: 560000,
        smoke: false,
        pets: true,

    },
    {
        nombre: 'Casa en Villa Rica',
        src: 'https://http2.mlstatic.com/D_NQ_NP_940815-MLC53395727556_012023-O.webp',
        descripcion: 'Bella Casa en capital central del BioBio',
        ubicacion: 'Concepcion',
        habitaciones:4,
        baños: 2,
        costo: 600000,
        smoke: true,
        pets: false,

    },
    {
        nombre: 'Casa en Pucon',
        src: 'https://py.cl/wp-content/uploads/2023/05/Valles-de-Rengo-III_Fachada_ok-800x450.jpg',
        descripcion: 'Ideal para segunda casa, poder disfrutar tus merecidas vacaciones',
        ubicacion: 'Atofagasta',
        habitaciones:6,
        baños: 3,
        costo: 450000,
        smoke: false,
        pets: false,

    },
    

];


const alqui = document.getElementById("contenedor");

propiedadesAlquiler.forEach( aCasa=>{
    alqui.innerHTML +=`
        <div class="cards">
        <img src="${aCasa.src}" alt="Casa">
        <h3>${aCasa.nombre}</h3>
        <p>${aCasa.descripcion}</p>
        <p><i class="fa-solid fa-location-dot"></i>${aCasa.ubicacion}</p>
        <p><i class="fa-solid fa-bed"></i> Habitaciones: ${aCasa.habitaciones} <i class="fa-solid fa-bath"></i>Baños: ${aCasa.baños}</p>
        <p>Precio: ${aCasa.costo.toLocaleString()}</p>
        <p class=${aCasa.smoke ? 'verde' : 'rojo'}>${aCasa.smoke ? '<i class="fa-solid fa-smoking"></i>' : '<i class="fa-solid fa-ban-smoking"></i>'}${aCasa.smoke ? 'Permitido Fumar' : 'No se permite fumar'}</p>
        <p class=${aCasa.pets ? 'verde' : 'rojo'}>${aCasa.pets ? '<i class="fa-solid fa-paw"></i>' : '<i class="fa-regular fa-rectangle-xmark"></i>'}${aCasa.pets ? 'Friendly Mascotas' : 'No se permite Mascotas'}</p>
        </div>
    `
});
