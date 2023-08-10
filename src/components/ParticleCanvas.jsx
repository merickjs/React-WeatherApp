import { useState, useEffect } from "react";

const ParticleCanvas = () => {
  const [particlesArray, setParticlesArray] = useState([]);
  let hue = 0;

  useEffect(() => {
    const canvas = document.getElementById("mCanvas");
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const mouse = {
      x: undefined,
      y: undefined,
    };

    canvas.addEventListener("mousemove", (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle(mouse.x, mouse.y));
      }
    });

    const Particle = class {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.3) {
          this.size -= 0.1;
        }
      }

      draw() {
        ctx.fillStyle = "hsl(" + hue + ", 100%, 50%)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const handleParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.3) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
    };

    const animate = () => {
      ctx.fillStyle = "rgba(0,0,0, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      hue++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      canvas.removeEventListener("mousemove", (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        for (let i = 0; i < 5; i++) {
          particlesArray.push(new Particle(mouse.x, mouse.y));
        }
      });
    };
  }, [particlesArray]);

  return (
    <>
      <canvas
        className="h-full w-full absolute top-0 left-0"
        id="mCanvas"
      ></canvas>
    </>
  );
};

export default ParticleCanvas;
