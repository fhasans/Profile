import React from 'react';
import { Code2, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Reveal } from '../common/Reveal';
import { useTypingEffect } from '../../hooks/useTypingEffect';

export const Hero = () => {
    const typedRole = useTypingEffect("Frontend Developer", 100);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
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
    );
};
