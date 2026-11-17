const canvas = document.getElementById('y2k-canvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    let particles = [];

    // Configuración constante limpia de la lluvia de estrellas
    const STAR_COUNT = 75;
    const BASE_SPEED = 1.6;

    function resizeCanvas() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Y2KParticle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -20;
        this.size = Math.random() * 7 + 3.5;
        this.speedY = (Math.random() * 1.2 + 0.5) * BASE_SPEED;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.04;
        this.opacity = Math.random() * 0.7 + 0.3;
        this.twinkleSpeed = Math.random() * 0.03 + 0.01;
        
        const typeRand = Math.random();
        if (typeRand > 0.35) {
          this.type = 'star';
        } else if (typeRand > 0.15) {
          this.type = 'diamond';
        } else {
          this.type = 'dot';
        }

        const colors = ['#ffffff', '#fff3a8', '#ffeaa7', '#ffdae9', '#dff9fb'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;

        this.opacity += Math.sin(Date.now() * this.twinkleSpeed) * 0.01;
        if (this.opacity > 0.95) this.opacity = 0.95;
        if (this.opacity < 0.2) this.opacity = 0.2;

        if (this.y > height + 20) {
          this.reset(false);
        }
        if (this.x < -20) this.x = width + 10;
        if (this.x > width + 20) this.x = -10;
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.shadowColor = '#ffffff';
        ctx.shadowBlur = this.size > 6 ? 6 : 3;

        if (this.type === 'star') {
          ctx.beginPath();
          for (let i = 0; i < 4; i++) {
            ctx.rotate(Math.PI / 2);
            ctx.lineTo(0, this.size);
            ctx.lineTo(this.size * 0.22, this.size * 0.22);
          }
          ctx.fill();
        } else if (this.type === 'diamond') {
          ctx.beginPath();
          ctx.moveTo(0, -this.size);
          ctx.lineTo(this.size * 0.6, 0);
          ctx.lineTo(0, this.size);
          ctx.lineTo(-this.size * 0.6, 0);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, this.size / 2.5, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        particles.push(new Y2KParticle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animate);
    }

    window.onload = function() {
      initParticles();
      animate();
    };