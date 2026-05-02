import React from 'react';
import { User, MapPin, Phone } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const About = () => {
    return (
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
    );
};
