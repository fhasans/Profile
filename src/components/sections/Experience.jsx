import React from 'react';
import { Briefcase, ChevronDown } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const Experience = () => {
    return (
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
                                <div className="mt-2 md:mt-0 text-sm text-gray-400 bg-gray-800/80 px-4 py-1.5 rounded-lg border border-gray-700 whitespace-nowrap font-medium">
                                    Feb 2026 - Apr 2026 | Jakarta
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
                                <div className="mt-2 md:mt-0 text-sm text-gray-400 bg-gray-800/80 px-4 py-1.5 rounded-lg border border-gray-700 whitespace-nowrap font-medium">
                                    Apr 2022 - Sep 2025 | Jakarta
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
    );
};
