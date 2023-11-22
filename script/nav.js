 const navContainer = document.getElementById("navContainer");


 let urlHome;
 let urlLogin;
 let urlRegister;
 let urlNosotros;

 if (window.location.href == `http://127.0.0.1:5501/index.html`){
     urlHome = `./index.html`
     urlRegister = `./register.html`
     urlLogin = `./login.html`
     urlNosotros = `./nosotros.html`
 } else{
    urlHome = `../index.html`
    urlRegister = `./register.html`
    urlLogin = `./login.html`
    urlNosotros = `./nosotros.html`
}

 

navContainer.innerHTML = `
<nav class="navbar nav-music  navbar-expand-lg ">
  <div class="container-fluid ">
    <a class="navbar-brand" href="${urlHome}"><img class="icono-footer" src="../assets/icon/ms-icon-310x310.png"  alt="icono music code" /></a>
    <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon bg-white"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="${urlHome}">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="${urlRegister}">Regístrate</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="${urlLogin}">Iniciar sesión</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-success bg-white text-dark"  type="submit">Prueba Gratis</button>
      </form>
    </div>
  </div>
</nav>`