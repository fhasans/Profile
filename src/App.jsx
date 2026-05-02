import React from 'react';
import { ParticleBackground } from './components/common/ParticleBackground';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';

export default function App() {
    return (
        <div className="bg-[#0a0a0a] min-h-screen text-gray-200 font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
            <ParticleBackground />
            
            <Navbar />

            <main className="relative z-10 container mx-auto px-6 md:px-12 py-24 flex flex-col gap-32">
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Education />
            </main>

            <Footer />
        </div>
    );
}