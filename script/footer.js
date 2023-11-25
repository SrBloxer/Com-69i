const footerContainer = document.getElementById("footerContainer");

footerContainer.innerHTML =`
  <div class="row d-flex  p-5">
  <div class="container p-">
    <div class="row ">
      <div class="col-lg-4 col-md-6 col-sm-8">
        <div class=" d-flex align-items-center justify-content-center mb-2 mx-auto" style="width: 150px; height:   150px;">
          <img class="icono-footer" src="../assets/icon/ms-icon-310x310.png"  alt="icono music code" />
        </div>
      </div>  
      <div class=" text-footer col-lg-4 col-md-6 col-sm-8 mb-4 mb-md-0">
        <h5 class="mb-2">Tu cuenta</h5>
        <ul class="list-unstyled">
          <li class="mb-2">
            <a href="../pages/register.html" class="text-footer text-decoration-none fs-5">Registrate</a>
          </li>
          <li class="mb-2">
            <a href="./pages/Planes.html" class="text-footer text-decoration-none fs-5">Administra tu cuenta</a>
          </li>
          <li class="mb-2">
            <a href="./pages/Formularios.html" class="text-footer text-decoration-none fs-5">Tus gustos</a>
          </li>
        </ul>
      </div>
      <div class=" text-footer col-lg-4 col-md-6 col-sm-8 mb-4 mb-md-0">
        <h5 class="mb-2">Empresa</h5>
        <ul class="list-unstyled">
          <li class="mb-2">
            <a href="./pages/Contacto.html" class="text-footer text-decoration-none text-dec-hover   fs-5">Contactanos</a>
          </li>
          <li class="mb-2">
            <a href="../pages/nosotros.html" class="text-footer text-decoration-none fs-5">Quienes somos</a>
          </li>
        </ul>
      </div>  
    </div>  
  </div>
  <div class="d-flex container-fluid justify-content-center   col-12 mb-4 mt-4">
    <h5 class="mb-4 p-4">Somos un grupo de amantes de la música igual que vos</h5>
    <ul class=" p-4 fs-5 ">
      <a href="./pages/error-404.html" class="text-decoration-none">
        <i class="bi bi-instagram icon-contacto text-white  m-1"></i>
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
  <div class="col-12" >
    <div class=" d-flex justify-content-center container-fluid  copy-footer p-3 fs-5">
      <i class="bi bi-c-circle"> 2023 Copyright Music Code</i>
    </div>
  </div>
  </div>`