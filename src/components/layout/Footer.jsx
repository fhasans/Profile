import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
    return (
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
    );
};
