import React from 'react';
import { MonitorPlay, Briefcase, ChevronDown, Code2, Github, ExternalLink } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const Projects = () => {
    return (
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
    );
};
