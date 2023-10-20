const propiedadesVenta = [
    {
        nombre: 'Casa en Viña',
        src: 'https://http2.mlstatic.com/D_NQ_NP_905660-MLC49654350520_042022-O.https://images.adsttc.com/media/images/623c/4fa0/3e4b/3145/3000/001b/slideshow/_d_ambrosio_07._copy.jpg?1648119692',
        descripcion: 'Hermosa casa en viña, vista al mar, oerfecta para vacacionar',
        ubicacion: 'Viña del Mar',
        habitaciones:3,
        baños: 2,
        costo: 69000000,
        smoke: true,
        pets: true,

    },
    {
        nombre: 'Casa en Concepcion',
        src: 'https://fincaraiz.com.co/blog/wp-content/uploads/2022/08/casas-modernas-1-1536x904.jpg',
        descripcion: 'Bella Casa en capital central del BioBio',
        ubicacion: 'Concepcion',
        habitaciones:4,
        baños: 2,
        costo: 90000000,
        smoke: true,
        pets: false,

    },
    {
        nombre: 'Casa en Antofagasta',
        src: 'https://hips.hearstapps.com/es.h-cdn.co/mcres/images/mi-casa/casas/una-acogedora-y-sostenible-casa-de-montana/la-fachada-de-la-casa/1531344-1-esl-ES/la-fachada-de-la-casa.jpg',
        descripcion: 'Ideal para segunda casa, poder disfrutar tus merecidas vacaciones',
        ubicacion: 'Atofagasta',
        habitaciones:6,
        baños: 3,
        costo: 250000000,
        smoke: false,
        pets: true,

    },
    

];

const propiedadesAlquiler = [
    {
        nombre: 'Casa en Puerto Montt',
        src: 'https://http2.mlstatic.com/D_NQ_NP_905660-MLC49654350520_042022-O.https://images.adsttc.com/media/images/623c/4fa0/3e4b/3145/3000/001b/slideshow/_d_ambrosio_07._copy.jpg?1648119692',
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
        src: 'https://fincaraiz.com.co/blog/wp-content/uploads/2022/08/casas-modernas-1-1536x904.jpg',
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
        src: 'https://hips.hearstapps.com/es.h-cdn.co/mcres/images/mi-casa/casas/una-acogedora-y-sostenible-casa-de-montana/la-fachada-de-la-casa/1531344-1-esl-ES/la-fachada-de-la-casa.jpg',
        descripcion: 'Ideal para segunda casa, poder disfrutar tus merecidas vacaciones',
        ubicacion: 'Atofagasta',
        habitaciones:6,
        baños: 3,
        costo: 450000,
        smoke: false,
        pets: false,

    },
    

];

const venta = document.getElementById("pVenta");
const alqui = document.getElementById("pAlquiler");

propiedadesVenta.forEach( vCasa =>{
    venta.innerHTML += `
        <div class="cards">
        <img src="${vCasa.src}" alt='Casa'>
        <h3>${vCasa.nombre}</h3>
        <p>${vCasa.descripcion}</p>
        <p><i class="fa-solid fa-location-dot"></i>${vCasa.ubicacion}</p>
        <p><i class="fa-solid fa-bed"></i> Habitaciones: ${vCasa.habitaciones} <i class="fa-solid fa-bath"></i>Baños: ${vCasa.baños}</p>
        <p>Precio: ${vCasa.costo.toLocaleString()}</p>
        <p class=${vCasa.smoke ? 'verde' : 'rojo'}>${vCasa.smoke ? '<i class="fa-solid fa-smoking"></i>' : '<i class="fa-solid fa-ban-smoking"></i>'}${vCasa.smoke ? 'Permitido Fumar' : 'No se permite fumar'}</p>
        <p class=${vCasa.pets ? 'verde' : 'rojo'}>${vCasa.pets ? '<i class="fa-solid fa-paw"></i>' : '<i class="fa-regular fa-rectangle-xmark"></i>'}${vCasa.pets ? 'Friendly Mascotas' : 'No se permite Mascotas'}</p>
        </div
    `;

});

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

