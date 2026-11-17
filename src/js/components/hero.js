document.querySelector("#inicio").innerHTML = `
<!-- Hero -->
<div class="row g-4 align-items-stretch w-100 justify-content-between">
  <!-- Columna Izquierda -->
  <div class="col-lg-7 d-flex flex-column">
    <div class="y2k-card p-5 rounded-4 shadow-lg flex-grow-1 d-flex flex-column justify-content-between">
      <div class="position-absolute top-0 start-0 m-3 fs-3 text-warning pulse-star"><i class="fa-solid fa-paw"></i></div>
        <!-- presentacion -->
        <h1 class="display-4 fw-bold text-y2k-gradient mb-2">
          Mariana Arleth Aquino Alarcón 
        </h1>
        <h2 class="h3 fw-bold text-dark mb-3">
          Desarrolladora Java Full Stack Jr. 
          </h2>
          Mi enfoque principal es el Backend, respaldado por una sólida lógica de control y metodologías ágiles.
          <h3 class="lead mb-4">
          </h3>
        <!-- Botones de Acción -->
        <div class="d-flex flex-wrap gap-3">
        <a href="https://www.linkedin.com/in/mariana-arleth-aquino-alarcon" target="_blank" rel="noopener noreferrer" class="btn btn-y2k-outline text-decoration-none">
          <i class="fa-brands fa-linkedin me-2"></i>LinkedIn
        </a>
        <a href="https://github.com/marianaaquinoalarcon" target="_blank" rel="noopener noreferrer" class="btn btn-y2k-outline text-decoration-none">
          <i class="fa-brands fa-github me-2"></i>GitHub
        </a>
        <a href="./public/documents/Mariana Arleth Aquino Alarcon.pdf" download="CV Mariana Aquino" class="btn btn-y2k-outline text-decoration-none">
          <i class="fa-regular fa-file me-2"></i> Descargar CV
        </a>
        </div>

        <div class="position-absolute bottom-0 end-0 m-3 fs-3 text-warning pulse-star"> 
        <i class="fa-solid fa-fish">
        </i> </div>
      </div>
    </div>

      <!-- Columna Derecha, simulacion de ventana OS  -->
      <div class="col-lg-5">
        <div class="y2k-window">
          <!-- Header ventana-->
          <div class="y2k-window-header">
            <span><i class="fa-solid fa-microchip me-2"></i>habilidades.exe</span>
            <div class="window-controls">
              <span class="window-btn window-btn-min"></span>
              <span class="window-btn window-btn-max"></span>
              <span class="window-btn window-btn-close"></span>
            </div>
          </div>

          <!-- Contenido ventana de habiliadades-->
          <div class="p-4">
            <div class="stack-box d-flex align-items-start gap-3">
              <div class="fs-2 text-danger">
                <i class="fa-solid fa-server"></i>
              </div>
              <div>
                <h3 class="h6 fw-bold mb-1">Backend</h3>
                <span class="code-tag">Spring Boot</span>
                <span class="code-tag">POO</span>
                <span class="code-tag">Node.JS</span>
                <span class="code-tag">Python</span>
              </div>
            </div>

            <div class="stack-box d-flex align-items-start gap-3">
              <div class="fs-2 text-warning">
                <i class="fa-solid fa-laptop-code"></i>
              </div>
              <div>
                <h3 class="h6 fw-bold mb-1">Frontend</h3>
                <span class="code-tag">HTML5</span>
                <span class="code-tag">CSS3</span>
                <span class="code-tag">JavaScript</span>
                <span class="code-tag">Vanilla JS</span>
                <span class="code-tag">Bootstrap 5</span>
              </div>
            </div>
            
            <div class="stack-box d-flex align-items-start gap-3">
              <div class="fs-2 text-info">
                <i class="fa-solid fa-database"></i>
              </div>
              <div>
                <h3 class="h6 fw-bold mb-1">Databases</h3>
                <span class="code-tag">SQL</span>
                <span class="code-tag">MySQL</span>
              </div>
            </div>
            
            <div class="stack-box d-flex align-items-start gap-3">
              <div class="fs-2 text-secondary">
                <i class="fa-solid fa-code-branch"></i>
              </div>
              <div>
                <h3 class="h6 fw-bold mb-1">Technologies and Control</h3>
                <span class="code-tag">Scrum</span>
                <span class="code-tag">Git</span>
                <span class="code-tag">GitHub</span>
              </div>
            </div>
          </div>
  </div>
</div>
`;
