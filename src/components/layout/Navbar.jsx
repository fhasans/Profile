import React from 'react';
import { Github, Download } from 'lucide-react';
import cvFile from '../../assets/Fathin_Satriani_Hasan_CV.pdf';

export const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
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
            {/* Desktop: Download CV button */}
            <a
                href={cvFile}
                download="Fathin_Satriani_Hasan_CV.pdf"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-400 border border-teal-500/40 rounded-md text-sm font-medium hover:bg-teal-500 hover:text-gray-900 transition-all shadow-[0_0_12px_rgba(20,184,166,0.15)] hover:shadow-[0_0_20px_rgba(20,184,166,0.4)] group"
            >
                <Download size={15} className="group-hover:-translate-y-0.5 transition-transform" />
                Download CV
            </a>
            {/* Mobile: icon-only */}
            <a
                href={cvFile}
                download="Fathin_Satriani_Hasan_CV.pdf"
                className="md:hidden p-2 text-teal-400 hover:text-teal-300 transition-colors"
                title="Download CV"
            >
                <Download size={22} />
            </a>
        </nav>
    );
};
