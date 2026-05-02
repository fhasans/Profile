import React, { useEffect, useRef } from 'react';

export const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        const mouse = { x: null, y: null, radius: 150 };
        let pulseAngle = 0; // Variabel untuk mengatur denyut (pulse)

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        window.addEventListener('resize', resize);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });
        window.addEventListener('mouseout', () => {
            mouse.x = null;
            mouse.y = null;
        });

        class Particle {
            constructor(x, y, dx, dy, size) {
                this.x = x;
                this.y = y;
                this.dx = dx;
                this.dy = dy;
                this.size = size;
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(45, 212, 191, 0.5)'; // Teal-400 color
                ctx.fill();
            }
            update() {
                // Cek interaksi mouse
                if (mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    let forceDirectionX = dx / distance;
                    let forceDirectionY = dy / distance;
                    let maxDistance = mouse.radius;
                    let force = (maxDistance - distance) / maxDistance;
                    let directionX = forceDirectionX * force * this.density;
                    let directionY = forceDirectionY * force * this.density;

                    if (distance < maxDistance) {
                        this.x -= directionX;
                        this.y -= directionY;
                    } else {
                        if (this.x !== this.baseX) {
                            let dx = this.x - this.baseX;
                            this.x -= dx / 10;
                        }
                        if (this.y !== this.baseY) {
                            let dy = this.y - this.baseY;
                            this.y -= dy / 10;
                        }
                    }
                } else {
                    // Kembali ke posisi awal perlahan jika mouse keluar
                    if (this.x !== this.baseX) {
                        this.x -= (this.x - this.baseX) / 10;
                    }
                    if (this.y !== this.baseY) {
                        this.y -= (this.y - this.baseY) / 10;
                    }
                }

                // Bergerak perlahan secara natural
                this.baseX += this.dx;
                this.baseY += this.dy;

                // Pantulan di ujung layar
                if (this.baseX > canvas.width || this.baseX < 0) this.dx = -this.dx;
                if (this.baseY > canvas.height || this.baseY < 0) this.dy = -this.dy;

                this.draw();
            }
        }

        const initParticles = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 15000;
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                let dx = (Math.random() - 0.5) * 0.5;
                let dy = (Math.random() - 0.5) * 0.5;
                particles.push(new Particle(x, y, dx, dy, size));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // --- EFEK PULSE MOUSE ---
            if (mouse.x != null && mouse.y != null) {
                pulseAngle += 0.05; // Kecepatan denyut
                // Radius aura yang membesar dan mengecil secara dinamis
                const pulseRadius = 120 + Math.sin(pulseAngle) * 30;

                ctx.beginPath();
                // Membuat gradasi cahaya berbentuk lingkaran (radial gradient)
                const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, pulseRadius);
                gradient.addColorStop(0, 'rgba(45, 212, 191, 0.25)'); // Inti cahaya
                gradient.addColorStop(0.5, 'rgba(45, 212, 191, 0.1)'); // Pertengahan cahaya
                gradient.addColorStop(1, 'rgba(45, 212, 191, 0)'); // Pudar di ujung

                ctx.fillStyle = gradient;
                ctx.arc(mouse.x, mouse.y, pulseRadius, 0, Math.PI * 2);
                ctx.fill();

                // Titik solid kecil di tengah kursor
                ctx.beginPath();
                ctx.arc(mouse.x, mouse.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(45, 212, 191, 0.8)';
                ctx.fill();
            }
            // ------------------------

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
            connect();
            animationFrameId = requestAnimationFrame(animate);
        };

        const connect = () => {
            let opacityValue = 1;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
                        + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(45, 212, 191, ${opacityValue * 0.2})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-40" />;
};
