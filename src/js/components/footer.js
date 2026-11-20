document.querySelector("#navbar").innerHTML = `
<div class="container">
  <a class="navbar-brand y2k-card px-4 py-2 d-flex align-items-center gap-2" href="./">
    <span id="portfolio" class="fw-bold text-y2k-gradient fs-4"><i class="fa-solid fa-user"></i></span>
  </a>
  <button class="navbar-toggler y2k-card p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav gap-2 mt-2 mt-lg-0">
      <li class="nav-item">
        <a class="nav-link y2k-card px-3 py-2 text-dark fw-bold text-center" href="#inicio">
          <i class="fa-solid fa-terminal me-1 text-danger"></i> Inicio
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link y2k-card px-3 py-2 text-dark fw-bold text-center" href="#about">
          <i class="fa-solid fa-star me-1 text-danger"></i> Sobre mi 
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link y2k-card px-3 py-2 text-dark fw-bold text-center" href="#proyectos">
          <i class="fa-solid fa-folder-open me-1 text-danger"></i> Proyectos
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link y2k-card px-3 py-2 text-dark fw-bold text-center" href="#contacto">
          <i class="fa-solid fa-envelope me-1 text-danger"></i> Contacto
        </a>
      </li>
    </ul>
  </div>
</div>
`;
