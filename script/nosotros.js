const container = document.getElementById(`container`)


const cardNosotros =[
    {
      nombre: "Ana Cesca",
      descripcion: "Siempre en movimiento",
      redes: "",
      imagen: "../assets/img/Anita2.png"
    },
    {
      nombre: "Valeria Latapie",
      descripcion: "A paso firme pero seguro",
      redes: "" ,
      imagen:  "../assets/img/ValeLatapie.png"
    },
    {
      nombre: "Santiago Gil Mina",
      descripcion: "Mirando hacia adelante para crecer",
      redes: "" ,
      imagen:  "../assets/img/Santi.jpg"
    },
    {
      nombre: "Juan Robledo",
      descripcion: "Haciendo escuchar mi voz que lo vale",
      redes: "" ,
      imagen:  "../assets/img/Juan.jpg"
    },


]
cardNosotros.map((cardNosotros) => {
    container.innerHTML += `
    <div class="row d-flex container-fluid justify-content-center  col-md-6 col-sm-8 mb-3 bg-transparent">
        <div class="col-md-4">
          <img src=${cardNosotros.imagen} class="img-fluid  img-card" alt="perfil equipo">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="d-flex  m-3 card-title text-white">${cardNosotros.nombre}</h5>
            <p class="card-text text-white">${cardNosotros.descripcion}</p>
            <div>
              <ul class=" p-4 fs-5 ">
                <a href="./pages/error-404.html" class="text-decoration-none">
                  <i class="bi bi-instagram icon-contacto text-white m-1"></i>
                </a>
                <a href="./pages/error-404.html" class="text-decoration-none">
                  <i class="bi bi-youtube icon-contacto text-white m-1 "></i>
                </a>
                <a href="./pages/error-404.html" class="text-decoration-none">
                  <i class="bi bi-twitter icon-contacto text-white m-1"></i>
                </a>
                <a href="./pages/error-404.html" class="text-decoration-none">
                  <i class="bi bi-facebook icon-contacto text-white m-1"></i>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>`
})




