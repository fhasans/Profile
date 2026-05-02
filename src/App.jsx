import React, { useEffect, useRef, useState } from 'react';
import {
    Github, Linkedin, Mail, Phone, MapPin,
    ExternalLink, Briefcase, GraduationCap,
    Award, ChevronDown, User, Code2, MonitorPlay
} from 'lucide-react';

// --- CUSTOM HOOKS ---

// Hook untuk efek animasi scroll reveal
const useScrollReveal = () => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return [ref, isVisible];
};

// Hook untuk efek mengetik
const useTypingEffect = (text, speed = 100) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i <= text.length) {
                setDisplayedText(text.slice(0, i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => clearInterval(typingInterval);
    }, [text, speed]);

    return displayedText;
};

// --- COMPONENTS ---

// Komponen Reveal untuk membungkus elemen yang ingin dianimasikan saat di-scroll
const Reveal = ({ children, className = '', delay = '' }) => {
    const [ref, isVisible] = useScrollReveal();
    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${delay} ${className}`}
        >
            {children}
        </div>
    );
};

// Background Canvas Partikel yang Elegan dan Interaktif
const ParticleBackground = () => {
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


// --- MAIN APP COMPONENT ---

export default function App() {
    const typedRole = useTypingEffect("Frontend Developer", 100);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-[#0a0a0a] min-h-screen text-gray-200 font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
            <ParticleBackground />

            {/* Navbar (Glassmorphism) */}
            <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center transition-all">
                <div className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 cursor-pointer" onClick={() => scrollToSection('home')}>
                    FHASANS.
                </div>
                <div className="hidden md:flex space-x-8 text-sm font-medium">
                    {['About', 'Experience', 'Skills', 'Projects', 'Education'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="hover:text-teal-400 transition-colors"
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <a
                    href="https://github.com/fhasans"
                    target="_blank"
                    rel="noreferrer"
                    className="md:hidden text-teal-400 hover:text-teal-300"
                >
                    <Github size={24} />
                </a>
            </nav>

            <main className="relative z-10 container mx-auto px-6 md:px-12 py-24 flex flex-col gap-32">

                {/* HERO SECTION */}
                <section id="home" className="min-h-[85vh] flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-center pt-20 gap-12 md:gap-8">

                    {/* Teks Content */}
                    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                        <Reveal>
                            <p className="text-teal-400 font-mono mb-4 flex items-center gap-2">
                                <Code2 size={18} /> Hi, I am
                            </p>
                        </Reveal>
                        <Reveal delay="delay-100">
                            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-2 tracking-tight">
                                Fathin Satriani <br className="hidden md:block" /> Hasan.
                            </h1>
                        </Reveal>
                        <Reveal delay="delay-200">
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-400 mb-6 h-[60px] md:h-[80px]">
                                I am a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">{typedRole}</span><span className="animate-pulse text-teal-400">_</span>
                            </h2>
                        </Reveal>
                        <Reveal delay="delay-300" className="max-w-2xl">
                            <p className="text-gray-400 text-lg leading-relaxed mb-10">
                                React.js Specialist with over 3.8 years of experience in architecting and developing complex back-office systems for the banking and fintech industries. Dedicated to creating secure, scalable, and user-friendly web applications.
                            </p>
                        </Reveal>
                        <Reveal delay="delay-400" className="flex flex-wrap justify-center md:justify-start gap-4">
                            <button
                                onClick={() => scrollToSection('experience')}
                                className="px-8 py-3 bg-teal-500/10 text-teal-400 border border-teal-500/50 rounded-md font-medium hover:bg-teal-500 hover:text-gray-900 transition-all shadow-[0_0_15px_rgba(20,184,166,0.2)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] flex items-center gap-2"
                            >
                                View Experience <ChevronDown size={18} />
                            </button>
                            <div className="flex items-center gap-4 md:ml-2">
                                <a href="https://github.com/fhasans" target="_blank" rel="noreferrer" className="p-3 bg-gray-800/50 rounded-md border border-gray-700 hover:border-teal-500 hover:text-teal-400 transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href="https://linkedin.com/in/fathin-satriani-hasan-42939017a/" target="_blank" rel="noreferrer" className="p-3 bg-gray-800/50 rounded-md border border-gray-700 hover:border-teal-500 hover:text-teal-400 transition-colors">
                                    <Linkedin size={20} />
                                </a>
                                <a href="mailto:newfhasans2@gmail.com" className="p-3 bg-gray-800/50 rounded-md border border-gray-700 hover:border-teal-500 hover:text-teal-400 transition-colors">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    {/* Photo Content */}
                    <Reveal delay="delay-200" className="flex-shrink-0 mt-10 md:mt-0">
                        <div className="relative group">
                            {/* Efek bayangan/glow di belakang foto */}
                            <div className="absolute inset-0 bg-teal-500 blur-[60px] opacity-20 rounded-full group-hover:opacity-40 transition-opacity duration-500"></div>

                            {/* Border animasi dan kontainer gambar */}
                            <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full p-1 border-2 border-teal-500/30 group-hover:border-teal-400 transition-colors duration-500 shadow-[0_0_30px_rgba(20,184,166,0.1)] group-hover:shadow-[0_0_40px_rgba(20,184,166,0.4)]">
                                <img
                                    src="https://lh3.googleusercontent.com/d/1C5CTwCTfTGwgY2m30Tx7F_daF6k3co8O"
                                    alt="Fathin Satriani Hasan"
                                    className="w-full h-full object-cover rounded-full bg-gray-800"
                                    // Jika gambar gagal dimuat, tampilkan placeholder
                                    onError={(e) => { e.target.src = "https://via.placeholder.com/300/1f2937/14b8a6?text=Fathin+S.H." }}
                                />
                            </div>
                        </div>
                    </Reveal>

                </section>

                {/* SUMMARY / ABOUT */}
                <section id="about" className="scroll-mt-24">
                    <Reveal>
                        <div className="flex items-center gap-4 mb-8">
                            <User className="text-teal-400" size={28} />
                            <h2 className="text-3xl font-bold text-white">Professional Summary</h2>
                            <div className="h-px bg-gray-700 flex-grow ml-4"></div>
                        </div>
                    </Reveal>
                    <Reveal delay="delay-100">
                        <div className="bg-gray-900/40 border border-gray-800 p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:border-teal-500/50 hover:shadow-[0_15px_30px_rgba(20,184,166,0.15)]">
                            <p className="text-gray-300 leading-relaxed text-lg">
                                A results-driven Frontend Developer with over <span className="text-teal-400 font-semibold">3.8 years of specialized experience</span> in architecting and developing complex back-office systems for the banking and fintech industries. Highly proficient in <span className="text-teal-400 font-semibold">React.js</span> and dedicated to creating secure, scalable, and user-friendly web applications.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
                                <div className="flex items-center gap-2"><MapPin size={16} className="text-teal-500" /> Jakarta, Indonesia</div>
                                <div className="flex items-center gap-2"><Phone size={16} className="text-teal-500" /> 089605512301</div>
                            </div>
                        </div>
                    </Reveal>
                </section>

                {/* EXPERIENCE */}
                <section id="experience" className="scroll-mt-24">
                    <Reveal>
                        <div className="flex items-center gap-4 mb-12">
                            <Briefcase className="text-teal-400" size={28} />
                            <h2 className="text-3xl font-bold text-white">Work Experience</h2>
                            <div className="h-px bg-gray-700 flex-grow ml-4"></div>
                        </div>
                    </Reveal>

                    <div className="relative border-l border-gray-700/50 ml-3 md:ml-4 space-y-12">
                        {/* Experience 1 */}
                        <Reveal delay="delay-100">
                            <div className="relative pl-8 md:pl-12">
                                <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-[8.5px] top-1.5 shadow-[0_0_10px_rgba(20,184,166,0.8)] border-2 border-[#0a0a0a]"></div>
                                <div className="group bg-gray-900/40 border border-gray-800/80 p-6 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-teal-500/50 hover:shadow-[0_15px_30px_rgba(20,184,166,0.15)] cursor-pointer">

                                    {/* Bagian Header (Selalu Terlihat) */}
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">Frontend Developer</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <h4 className="text-lg text-teal-400 font-medium">SIGMATECH</h4>
                                                <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-400 group-hover:rotate-180 transition-all duration-500" />
                                            </div>
                                        </div>
                                        <div className="mt-3 md:mt-0 text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full w-max border border-gray-700">
                                            02/2026 - 04/2026 | Jakarta
                                        </div>
                                    </div>

                                    {/* Bagian Detail (Muncul saat Hover) */}
                                    <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                        <div className="overflow-hidden">
                                            <ul className="list-none space-y-3 text-gray-300 mt-6 pt-5 border-t border-gray-800/60">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-teal-500 mt-1.5 text-xs">▹</span>
                                                    <span><b>Sole Developer</b> responsible for the end-to-end delivery of the "Mantap Onboarding Merchant" (Bank Mandiri Taspen) platform, from initial architectural design to production.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-teal-500 mt-1.5 text-xs">▹</span>
                                                    <span>Engineered the <b>React.js/Vite</b> frontend and developed <b>Node.js</b> backend services to handle secure merchant registration and REST API integrations.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-teal-500 mt-1.5 text-xs">▹</span>
                                                    <span>Designed scalable, reusable UI components and collaborated within a structured Waterfall lifecycle to ensure successful deployment.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Experience 2 */}
                        <Reveal delay="delay-200">
                            <div className="relative pl-8 md:pl-12">
                                {/* Lingkaran timeline juga saya buat merespons efek hover */}
                                <div className="absolute w-4 h-4 bg-gray-600 rounded-full -left-[8.5px] top-1.5 border-2 border-[#0a0a0a] group-hover:bg-teal-500 transition-colors duration-500"></div>
                                <div className="group bg-gray-900/40 border border-gray-800/80 p-6 md:p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-teal-500/50 hover:shadow-[0_15px_30px_rgba(20,184,166,0.15)] cursor-pointer">

                                    {/* Bagian Header (Selalu Terlihat) */}
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">Frontend Developer</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <h4 className="text-lg text-teal-400 font-medium">PT. Infosys Solusi Terpadu</h4>
                                                <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-400 group-hover:rotate-180 transition-all duration-500" />
                                            </div>
                                        </div>
                                        <div className="mt-3 md:mt-0 text-sm text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full w-max border border-gray-700">
                                            04/2022 - 09/2025 | Jakarta
                                        </div>
                                    </div>

                                    {/* Bagian Detail (Muncul saat Hover) */}
                                    <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                        <div className="overflow-hidden">
                                            <ul className="list-none space-y-3 text-gray-300 mt-6 pt-5 border-t border-gray-800/60">
                                                <li className="flex items-start gap-3">
                                                    <span className="text-teal-500 mt-1.5 text-xs">▹</span>
                                                    <span>Spearheaded the refactoring of the BSI Byond codebase to develop the new BSI XPAN platform and contributed to the development of the HIBANK Superapp back-office, delivering a total of <b>15+ core administrative modules</b> from scratch.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-teal-500 mt-1.5 text-xs">▹</span>
                                                    <span>Engineered robust Role-Based Access Control (RBAC), dynamic content parameter systems, and complex multi-level approval workflows for banking operations across all assigned projects.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-teal-500 mt-1.5 text-xs">▹</span>
                                                    <span><b>Improved application stability by 30%</b> and significantly reduced user complaint tickets by identifying and resolving over 500+ technical bugs across platforms.</span>
                                                </li>
                                                <li className="flex items-start gap-3">
                                                    <span className="text-teal-500 mt-1.5 text-xs">▹</span>
                                                    <span>Optimized component rendering performance, resulting in a <b>15% reduction in page load times</b> and achieving 20% faster feature releases through Agile team collaboration.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* SKILLS */}
                <section id="skills" className="scroll-mt-24">
                    <Reveal>
                        <div className="flex items-center gap-4 mb-12">
                            <Code2 className="text-teal-400" size={28} />
                            <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
                            <div className="h-px bg-gray-700 flex-grow ml-4"></div>
                        </div>
                    </Reveal>

                    {/* Menambahkan items-start agar grid tidak memanjang secara otomatis saat satu kartu terbuka */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                        {/* Frontend */}
                        <Reveal delay="delay-100">
                            <div className="group bg-gray-900/60 p-6 rounded-xl border border-gray-800 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.05] hover:border-teal-500/50 hover:shadow-[0_15px_30px_rgba(20,184,166,0.15)] cursor-pointer">
                                <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-300 flex items-center justify-between">
                                    Frontend
                                    <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-400 group-hover:rotate-180 transition-all duration-500" />
                                </h3>
                                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <div className="overflow-hidden">
                                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800/60">
                                            {['React JS', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Ant Design'].map(skill => (
                                                <span key={skill} className="text-sm bg-teal-500/10 text-teal-300 px-3 py-1 rounded-full border border-teal-500/20">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Mobile & Backend */}
                        <Reveal delay="delay-200">
                            <div className="group bg-gray-900/60 p-6 rounded-xl border border-gray-800 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.05] hover:border-teal-500/50 hover:shadow-[0_15px_30px_rgba(20,184,166,0.15)] cursor-pointer">
                                <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-300 flex items-center justify-between">
                                    Mobile & Backend
                                    <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-400 group-hover:rotate-180 transition-all duration-500" />
                                </h3>
                                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <div className="overflow-hidden">
                                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800/60">
                                            {['React Native', 'Node.js', 'PHP', 'SQL', 'REST API'].map(skill => (
                                                <span key={skill} className="text-sm bg-blue-500/10 text-blue-300 px-3 py-1 rounded-full border border-blue-500/20">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* State & Testing */}
                        <Reveal delay="delay-300">
                            <div className="group bg-gray-900/60 p-6 rounded-xl border border-gray-800 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.05] hover:border-teal-500/50 hover:shadow-[0_15px_30px_rgba(20,184,166,0.15)] cursor-pointer">
                                <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-300 flex items-center justify-between">
                                    State & Testing
                                    <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-400 group-hover:rotate-180 transition-all duration-500" />
                                </h3>
                                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <div className="overflow-hidden">
                                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800/60">
                                            {['Redux (Saga/Thunk)', 'Jest', 'React Testing Library', 'Vitest'].map(skill => (
                                                <span key={skill} className="text-sm bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full border border-purple-500/20">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        {/* Tools */}
                        <Reveal delay="delay-400">
                            <div className="group bg-gray-900/60 p-6 rounded-xl border border-gray-800 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.05] hover:border-teal-500/50 hover:shadow-[0_15px_30px_rgba(20,184,166,0.15)] cursor-pointer">
                                <h3 className="text-lg font-semibold text-white group-hover:text-teal-400 transition-colors duration-300 flex items-center justify-between">
                                    Tools & Methods
                                    <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-400 group-hover:rotate-180 transition-all duration-500" />
                                </h3>
                                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                    <div className="overflow-hidden">
                                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-800/60">
                                            {['Vite', 'Git', 'GitHub', 'GitLab', 'Jira', 'Asana', 'Agile', 'Waterfall'].map(skill => (
                                                <span key={skill} className="text-sm bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full border border-gray-600">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* PROJECTS */}
                <section id="projects" className="scroll-mt-24">
                    <Reveal>
                        <div className="flex items-center gap-4 mb-12">
                            <MonitorPlay className="text-teal-400" size={28} />
                            <h2 className="text-3xl font-bold text-white">Portfolio Projects</h2>
                            <div className="h-px bg-gray-700 flex-grow ml-4"></div>
                        </div>
                    </Reveal>

                    {/* PROFESSIONAL PROJECTS */}
                    <div className="mb-16">
                        <Reveal delay="delay-100">
                            <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-800 pb-2 flex items-center gap-3">
                                <Briefcase className="text-teal-500" size={24} /> Professional Projects
                            </h3>
                        </Reveal>

                        <div className="space-y-6">
                            {/* BSI XPAN */}
                            <Reveal delay="delay-200">
                                <div className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-teal-500/50 hover:shadow-[0_15px_40px_rgba(20,184,166,0.15)] cursor-pointer">
                                    <div className="h-1 w-full bg-gradient-to-r from-teal-500 to-blue-600 opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="p-6 md:p-8">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">BSI XPAN Back-Office Platform</h4>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <p className="text-teal-500 font-medium">Sole Back-Office Developer | PT. Infosys Solusi Terpadu</p>
                                                    <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-400 group-hover:rotate-180 transition-all duration-500" />
                                                </div>
                                            </div>
                                            <div className="mt-2 md:mt-0 text-sm text-gray-400 bg-gray-800/80 px-4 py-1.5 rounded-lg border border-gray-700 whitespace-nowrap font-medium">
                                                Feb 2025 - Sep 2025
                                            </div>
                                        </div>

                                        <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                            <div className="overflow-hidden">
                                                <div className="mt-6 pt-5 border-t border-gray-800/60">
                                                    <div className="text-gray-300 space-y-3 mb-6 text-sm md:text-base leading-relaxed">
                                                        <p>Designed, developed, and managed the entire back-office system from the ground up as the sole frontend developer.</p>
                                                        <ul className="list-disc ml-5 space-y-1 text-gray-400">
                                                            <li>Engineered critical features including User Administration, Role-Based Access Control (RBAC), and Work Unit Configuration.</li>
                                                            <li>Architected a highly dynamic content parameter system featuring 8 sub-menus with complex conditional rendering.</li>
                                                            <li>Implemented a comprehensive Customer Management module (5 sub-features) and Dynamic Menu/Widget Configuration.</li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {['React.js', 'Redux', 'JavaScript (ES6+)', 'CSS', 'HTML', 'REST APIs', 'Git'].map(tag => (
                                                            <span key={tag} className="text-xs font-mono bg-gray-800/80 text-gray-300 px-3 py-1 rounded-md border border-gray-700">{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            {/* BSI Byond */}
                            <Reveal delay="delay-300">
                                <div className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-teal-500/50 hover:shadow-[0_15px_40px_rgba(20,184,166,0.15)] cursor-pointer">
                                    <div className="h-1 w-full bg-gradient-to-r from-teal-500 to-blue-600 opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="p-6 md:p-8">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">BSI Byond Back-Office System</h4>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <p className="text-teal-500 font-medium">Core Frontend Developer | PT. Infosys Solusi Terpadu</p>
                                                    <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-400 group-hover:rotate-180 transition-all duration-500" />
                                                </div>
                                            </div>
                                            <div className="mt-2 md:mt-0 text-sm text-gray-400 bg-gray-800/80 px-4 py-1.5 rounded-lg border border-gray-700 whitespace-nowrap font-medium">
                                                Jun 2022 - Sep 2024
                                            </div>
                                        </div>

                                        <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                            <div className="overflow-hidden">
                                                <div className="mt-6 pt-5 border-t border-gray-800/60">
                                                    <div className="text-gray-300 space-y-3 mb-6 text-sm md:text-base leading-relaxed">
                                                        <p>Served as a key member of the frontend development team, contributing significantly to the back-office system for the BSI Byond superapp.</p>
                                                        <ul className="list-disc ml-5 space-y-1 text-gray-400">
                                                            <li>Developed and maintained crucial modules such as Account Product Management, Business & General Parameters, and Debit Card Configuration.</li>
                                                            <li>Engineered Promotion & Informational Content Management systems and Customer Application Inquiry interfaces.</li>
                                                            <li>Implemented complex, secure multi-level approval workflows across features to ensure strict operational integrity.</li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {['React.js', 'REST APIs', 'Git'].map(tag => (
                                                            <span key={tag} className="text-xs font-mono bg-gray-800/80 text-gray-300 px-3 py-1 rounded-md border border-gray-700">{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>

                            {/* HIBANK */}
                            <Reveal delay="delay-400">
                                <div className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-teal-500/50 hover:shadow-[0_15px_40px_rgba(20,184,166,0.15)] cursor-pointer">
                                    <div className="h-1 w-full bg-gradient-to-r from-teal-500 to-blue-600 opacity-40 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="p-6 md:p-8">
                                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                            <div>
                                                <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">HIBANK Superapp Back-Office</h4>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <p className="text-teal-500 font-medium">Frontend Developer | PT. Infosys Solusi Terpadu</p>
                                                    <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-400 group-hover:rotate-180 transition-all duration-500" />
                                                </div>
                                            </div>
                                            <div className="mt-2 md:mt-0 text-sm text-gray-400 bg-gray-800/80 px-4 py-1.5 rounded-lg border border-gray-700 whitespace-nowrap font-medium">
                                                Mar 2023 - May 2025
                                            </div>
                                        </div>

                                        <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                            <div className="overflow-hidden">
                                                <div className="mt-6 pt-5 border-t border-gray-800/60">
                                                    <div className="text-gray-300 space-y-3 mb-6 text-sm md:text-base leading-relaxed">
                                                        <p>Participated in the foundational development of the administrative back-office system for the HIBANK superapp.</p>
                                                        <ul className="list-disc ml-5 space-y-1 text-gray-400">
                                                            <li>Focused on building core functionalities and stable features essential for daily banking operations.</li>
                                                            <li>Applied expertise in state management (Redux) and scalable architecture to ensure a robust administration portal.</li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex flex-wrap gap-2">
                                                        {['React.js', 'Redux.js', 'Redux Thunk', 'JavaScript', 'REST APIs', 'Git'].map(tag => (
                                                            <span key={tag} className="text-xs font-mono bg-gray-800/80 text-gray-300 px-3 py-1 rounded-md border border-gray-700">{tag}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    {/* PERSONAL PROJECTS */}
                    <div>
                        <Reveal delay="delay-100">
                            <h3 className="text-2xl font-semibold text-white mb-6 border-b border-gray-800 pb-2 flex items-center gap-3">
                                <Code2 className="text-teal-500" size={24} /> Personal Projects
                            </h3>
                        </Reveal>

                        <Reveal delay="delay-200">
                            <div className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-teal-500/50 hover:shadow-[0_15px_40px_rgba(20,184,166,0.15)] cursor-pointer">
                                {/* Optional Decorative Header */}
                                <div className="h-2 w-full bg-gradient-to-r from-teal-500 to-blue-600 opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="p-8 md:p-10">
                                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">SUNNAHGUIDE (PanduanMuslim)</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <p className="text-teal-500 font-medium">Solo Frontend Developer | 03/2026 - 03/2026</p>
                                                <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-400 group-hover:rotate-180 transition-all duration-500" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                        <div className="overflow-hidden">
                                            <div className="mt-6 pt-5 border-t border-gray-800/60">
                                                <div className="flex gap-4 mb-6">
                                                    <a href="https://github.com/fhasans/PanduanMuslim" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-700 hover:border-gray-500">
                                                        <Github size={18} /> Repository
                                                    </a>
                                                    <a href="https://fhasans.github.io/PanduanMuslim/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-gray-900 font-medium bg-teal-500 hover:bg-teal-400 transition-colors px-4 py-2 rounded-lg shadow-lg hover:shadow-teal-500/50">
                                                        <ExternalLink size={18} /> Live Demo
                                                    </a>
                                                </div>

                                                <div className="text-gray-300 space-y-4 mb-8 text-base md:text-lg">
                                                    <p>Architected and developed a comprehensive, mobile-friendly Islamic worship guide as a <b>Progressive Web App (PWA)</b>, allowing seamless desktop and smartphone installation without requiring user authentication.</p>
                                                    <p>Integrated the <code className="text-teal-400 bg-teal-500/10 px-1 rounded">quran.id</code> Public API to provide a digital Al-Qur'an and implemented an auto-sync daily prayer schedule with manual location discovery.</p>
                                                    <p>Built interactive UI components including a comprehensive guide for various prayers, daily supplications, and a functional Dhikr counter for post-prayer recitations.</p>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {['React.js', 'Tailwind CSS', 'PWA', 'Supabase (BaaS)', 'Public API', 'Dark Mode'].map(tag => (
                                                        <span key={tag} className="text-sm font-mono bg-gray-800 text-gray-300 px-3 py-1 rounded-md border border-gray-700">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* EDUCATION & CERTIFICATION */}
                <section id="education" className="scroll-mt-24 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                        {/* Education */}
                        <div>
                            <Reveal>
                                <div className="flex items-center gap-4 mb-8">
                                    <GraduationCap className="text-teal-400" size={28} />
                                    <h2 className="text-2xl font-bold text-white">Education</h2>
                                </div>
                            </Reveal>
                            <div className="space-y-6 border-l border-gray-800 ml-3 pl-6">
                                <Reveal delay="delay-100">
                                    <div className="relative group transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer">
                                        <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[31px] top-1.5 border-2 border-[#0a0a0a] group-hover:bg-teal-500 group-hover:shadow-[0_0_10px_rgba(20,184,166,0.8)] transition-all duration-500"></div>
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors duration-300">Glints Academy</h3>
                                            <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-400 group-hover:rotate-180 transition-all duration-500" />
                                        </div>
                                        <p className="text-teal-400 text-sm mt-0.5">10/2021 - 01/2022 | Jakarta</p>

                                        <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                            <div className="overflow-hidden">
                                                <div className="mt-2 pt-2 border-t border-gray-800/60">
                                                    <p className="text-gray-400">React Native Engineer & Developer Trainee (Bootcamp)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>

                                <Reveal delay="delay-200">
                                    <div className="relative group transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer">
                                        <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[31px] top-1.5 border-2 border-[#0a0a0a] group-hover:bg-teal-500 group-hover:shadow-[0_0_10px_rgba(20,184,166,0.8)] transition-all duration-500"></div>
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors duration-300">Bina Nusantara University</h3>
                                            <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-400 group-hover:rotate-180 transition-all duration-500" />
                                        </div>
                                        <p className="text-teal-400 text-sm mt-0.5">09/2015 - 07/2021 | Jakarta</p>

                                        <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                            <div className="overflow-hidden">
                                                <div className="mt-2 pt-2 border-t border-gray-800/60">
                                                    <p className="text-gray-400">Undergraduate Studies in Computer Science (Completed 65% of credits)</p>
                                                    <p className="text-gray-500 text-sm italic mt-1">Decided to pursue a professional career in Software Development.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>

                                <Reveal delay="delay-300">
                                    <div className="relative group transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer">
                                        <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[31px] top-1.5 border-2 border-[#0a0a0a] group-hover:bg-teal-500 group-hover:shadow-[0_0_10px_rgba(20,184,166,0.8)] transition-all duration-500"></div>
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors duration-300">SMK Bakti Idhata</h3>
                                            <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-400 group-hover:rotate-180 transition-all duration-500" />
                                        </div>
                                        <p className="text-teal-400 text-sm mt-0.5">2012 - 2015 | Jakarta</p>

                                        <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                            <div className="overflow-hidden">
                                                <div className="mt-2 pt-2 border-t border-gray-800/60">
                                                    <p className="text-gray-400">Computer and Networking Techniques</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        </div>

                        {/* Certifications */}
                        <div>
                            <Reveal>
                                <div className="flex items-center gap-4 mb-8">
                                    <Award className="text-teal-400" size={28} />
                                    <h2 className="text-2xl font-bold text-white">Certifications</h2>
                                </div>
                            </Reveal>
                            <div className="space-y-4">
                                {[
                                    { title: "Frontend Developer (React)", issuer: "Hackerrank", year: "2025", link: "https://www.hackerrank.com/certificates/ea3b40d2f4a3" },
                                    { title: "JavaScript (Intermediate)", issuer: "Hackerrank", year: "2023", link: "https://www.hackerrank.com/certificates/8508d8c0038b" },
                                    { title: "JavaScript (Basic)", issuer: "Hackerrank", year: "2023", link: "https://www.hackerrank.com/certificates/34ab6cee65d9" },
                                    { title: "JavaScript Algorithms and Data Structures", issuer: "Freecodecamp", year: "2022", link: "https://www.freecodecamp.org/certification/fhasans/javascript-algorithms-and-data-structures" },
                                    { title: "Cross-platform Hybrid Mobile Application (React Native)", issuer: "Glints Academy", year: "2022", link: "https://drive.google.com/file/d/1XZ7xAWiaZyKtzvm41a1nlBRN7_7Ef0Ja/view" }
                                ].map((cert, index) => {
                                    const cardContent = (
                                        <div className={`group bg-gray-900/40 p-4 rounded-lg border border-gray-800 flex items-start gap-4 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_5px_20px_rgba(20,184,166,0.15)] cursor-pointer ${cert.link ? 'hover:border-teal-500/50 hover:bg-gray-800/60' : 'hover:border-teal-500/30'}`}>
                                            <Award className="text-teal-500 flex-shrink-0 mt-1" size={20} />
                                            <div className="flex-grow">
                                                <h4 className="text-white font-medium flex items-center justify-between gap-2">
                                                    <span>{cert.title}</span>
                                                    <div className="flex items-center gap-2">
                                                        <ChevronDown size={18} className="text-gray-500 group-hover:text-teal-400 group-hover:rotate-180 transition-all duration-500" />
                                                        {cert.link && <ExternalLink size={16} className="text-gray-500 group-hover:text-teal-400 transition-colors flex-shrink-0" />}
                                                    </div>
                                                </h4>

                                                <div className="grid grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                                    <div className="overflow-hidden">
                                                        <div className="mt-2 pt-2 border-t border-gray-800/60">
                                                            <p className="text-sm text-gray-400">{cert.issuer} • <span className="text-teal-500/80">{cert.year}</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );

                                    return (
                                        <Reveal key={index} delay={`delay-${(index + 1) * 100}`}>
                                            {cert.link ? (
                                                <a href={cert.link} target="_blank" rel="noreferrer" className="block outline-none">
                                                    {cardContent}
                                                </a>
                                            ) : (
                                                cardContent
                                            )}
                                        </Reveal>
                                    );
                                })}
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="border-t border-gray-800 bg-black py-8 text-center relative z-10">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="https://github.com/fhasans" className="text-gray-500 hover:text-teal-400 transition-colors"><Github size={24} /></a>
                    <a href="https://linkedin.com/in/fathin-satriani-hasan-42939017a/" className="text-gray-500 hover:text-teal-400 transition-colors"><Linkedin size={24} /></a>
                    <a href="mailto:newfhasans2@gmail.com" className="text-gray-500 hover:text-teal-400 transition-colors"><Mail size={24} /></a>
                </div>
                <p className="text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} Fathin Satriani Hasan. Built with React & Tailwind CSS.
                </p>
            </footer>
        </div>
    );
}