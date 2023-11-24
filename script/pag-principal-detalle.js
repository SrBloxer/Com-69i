// artistas
// Datos de los artistas
var artistsData = [
    { name: "Maluma", img: "assets/img/maluma-cambio1-t.jpg.webp" },
    { name: "Duki", img: "assets/img/duki.webp" },
    { name: "Shakira", img: "assets/img/shakira.jpg" },
    { name: "Emilia", img: "assets/img/emilia mermes.avif" },
    { name: "Young Miko", img: "assets/img/youngmikoargentina3186_sq.jpg" },
    { name: "Ozuna", img: "assets/img/ozuna.jpg" }
];

function generateArtists() {
    var container = document.getElementById("artistsRow");

    artistsData.forEach(function(artist) {
        var artistCard = document.createElement("div");
        artistCard.className = "col-6 col-md-6 col-lg-4 text-center mb-4 artist-card";

        var img = document.createElement("img");
        img.src = artist.img;
        img.className = "card-img rounded-circle w-50 h-75";
        img.alt = "";

        var h5 = document.createElement("h5");
        h5.className = "number-artist mt-3";
        h5.textContent = artist.name;

        artistCard.appendChild(img);
        artistCard.appendChild(h5);

        // Agregar el evento clic a cada tarjeta de artista
        artistCard.addEventListener("click", function() {
            updateMainArtist(artist);
        });

        container.appendChild(artistCard);
    });
}

// Función para actualizar la imagen y el nombre del artista principal
function updateMainArtist(artist) {
    var mainArtistImg = document.getElementById("mainArtistImg");
    var mainArtistName = document.getElementById("mainArtistName");

    mainArtistImg.src = artist.img;
    mainArtistName.textContent = artist.name;
}

// Llamar a la función para generar los artistas al cargar la página
window.onload = generateArtists;





//Canciones
var tarjetasData = [
    {
        artista: "Maluma",
        cancion: "Carnaval",
        imagen: "assets/img/maluma-cambio1-t.jpg.webp",
        redirecUrl: './pages/pag-detalle.html',
        audioSrc: 'URL_DEL_ARCHIVO_DE_AUDIO_MALUMA.mp3'
    },
    {
        artista: "Duki",
        cancion: "Rockstar",
        imagen: "assets/img/duki.webp",
        audioSrc: 'URL_DEL_ARCHIVO_DE_AUDIO_DUKI.mp3'
    },
    {
        artista: "Shakira",
        cancion: "TQG",
        imagen: "assets/img/shakira.jpg",
        audioSrc: 'URL_DEL_ARCHIVO_DE_AUDIO_SHAKIRA.mp3'
    },
    {
        artista: "Ozuna",
        cancion: "Se Preparo",
        imagen: "assets/img/ozuna.jpg",
        audioSrc: 'URL_DEL_ARCHIVO_DE_AUDIO_OZUNA.mp3' 
    },
    {
        artista: "Young Miko",
        cancion: "Chulo",
        imagen: "assets/img/youngmikoargentina3186_sq.jpg",
        audioSrc: 'URL_DEL_ARCHIVO_DE_AUDIO_YOUNG_MIKO.mp3' 
    },
    {
        artista: "Emilia Mermes",
        cancion: "GTA",
        imagen: "assets/img/emilia mermes.avif",
        audioSrc: 'URL_DEL_ARCHIVO_DE_AUDIO_EMILIA_MERMES.mp3' 
    }
];

// Función para las tarjetas
function createCard(data) {
    var card = document.createElement("div");
    card.className = "col-12 col-md-4 col-lg-4";

    card.innerHTML = `
        <div class="card bg-dark text-white mb-3">
            <a href="${data.redirecUrl}"><img src="${data.imagen}" class="artista rounded-circle" alt="${data.cancion}"></a> 
            <div class="card-body d-flex flex-column align-items-center">
                <h2 class="card-title">${data.artista}</h2>
                <p class="card-text">${data.cancion}</p>
                <audio controls class="w-100">
                    <source src="${data.audioSrc}" type="audio/mpeg">
                    Tu navegador no soporta la reproducción de audio.
                </audio>
            </div>
        </div>
    `;

    card.addEventListener("click", function() {
        if (data.artista === "Maluma") {
            window.location.href = data.redirecUrl;
        } else {
            // Redirigir a la página de error 404 para los otros artistas
            window.location.href = '/error404.html';
        }
    });

    return card;
}

var tarjetasContainer = document.getElementById("tarjetas-container");
var row = tarjetasContainer.querySelector(".row");

// Crear y agregar tarjetas al contenedor
tarjetasData.forEach(function (tarjetaData) {
    var card = createCard(tarjetaData);
    row.appendChild(card);
});


//reproduccion al hacer click en la card
function reproducirCancion() {
    var audioPlayer = document.getElementById("audioPlayer");

    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
}