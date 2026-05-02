import React from 'react';
import { Github } from 'lucide-react';

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
            <a
                href="https://github.com/fhasans"
                target="_blank"
                rel="noreferrer"
                className="md:hidden text-teal-400 hover:text-teal-300"
            >
                <Github size={24} />
            </a>
        </nav>
    );
};
