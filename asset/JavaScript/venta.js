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

const venta = document.getElementById("contenedor");

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