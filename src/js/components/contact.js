document.querySelector("#contacto").innerHTML = `
<div class="text-center mb-4">
  <h2 class="display-5 text-y2k-gradient fw-bold">Contacto</h2>
</div>
<div class="row justify-content-center">
  <div class="col-lg-8">
    <div class="contact-card y2k-card p-5 rounded-4 shadow-lg">
      <h2 class=" fw-bold text-gradient text-center mb-4">📫 Envíame un Mensaje</h2>
      <form>
        <div class="mb-3">
              <label class="form-label fw-bold small">Nombre</label>
              <input type="text" class="form-control rounded-pill px-3 py-2" placeholder="Tu nombre">
        </div>
        <div class="row mb-3">
          <div class="col-md-6 mb-3 mb-md-0">
                <label class="form-label fw-bold small">Correo electrónico</label>
                <input type="email" class="form-control rounded-pill px-3 py-2" placeholder="nombre@ejemplo.com">
          </div>
          <div class="col-md-6">
                <label class="form-label fw-bold small">Teléfono (opcional)</label>
                <input type="tel" class="form-control rounded-pill px-3 py-2" placeholder="5512345678">
          </div>
        </div>
        <div class="mb-3">
              <label class="form-label fw-bold small">Asunto</label>
              <input type="text" class="form-control rounded-pill px-3 py-2" placeholder="¿En qué puedo ayudarte?">
        </div>
        <div class="mb-4">
              <label class="form-label fw-bold small">Mensaje</label>
              <textarea class="form-control rounded-4 p-3" rows="4" placeholder="Escribe tu mensaje aquí..."></textarea>
        </div>
        <div class="text-center">
              <button type="submit" class="btn btn-y2k px-5 py-2 w-100 rounded-pill">Enviar mensaje</button>
        </div>
      </form>
    </div>
  </div>
  <!-- Contenido ventana de habiliadades-->
  <div class="col-lg-4">
    <div class="y2k-window">
      <h2 class="h3 fw-bold text-dark mb-3">
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
</div>
`;
