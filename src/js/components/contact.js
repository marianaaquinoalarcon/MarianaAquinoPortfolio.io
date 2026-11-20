document.querySelector("#contacto").innerHTML = `
<div class="text-center mb-4">
  <h2 class="display-5 text-y2k-gradient fw-bold">Contacto</h2>
</div>
<div class="row justify-content-center">
  <div class="col-lg-8">
    <div class="contact-card y2k-card p-5 rounded-4 shadow-lg">
      <h3 class=" fw-bold text-gradient text-center mb-4">Envíame un Mensaje</h3>
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
  <!-- Ventana de datos de contacto -->
  <div class="col-lg-4">
    <div class="y2k-window">
      <div class="p-4">      
      <h3 class=" fw-bold text-gradient text-center mb-4">Encuentrame en:</h3>
        <div class="stack-box d-flex align-items-start gap-3">
          <div class="fs-2 text-danger">
            <i class="fa-solid "></i>
          </div>
          <div>
            <h3 class="h6 fw-bold mb-1"></h3>
          </div>
        </div>
        <div class="stack-box d-flex align-items-start gap-3">
          <div class="fs-2 text-warning">
            <i class="fa-solid "></i>
          </div>
          <div>
            <h3 class="h6 fw-bold mb-1"></h3>
          </div>
        </div>
        <div class="stack-box d-flex align-items-start gap-3">
          <div class="fs-2 text-info">
            <i class="fa-solid "></i>
          </div>
        <div>
          <h3 class="h6 fw-bold mb-1"></h3>
          </div>
        </div>
        <div class="stack-box d-flex align-items-start gap-3">
          <div class="fs-2 text-secondary">
            <i class="fa-solid "></i>
          </div>
          <div>
            <h3 class="h6 fw-bold mb-1"></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
