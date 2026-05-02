import React from 'react';
import { Code2, ChevronDown } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const Skills = () => {
    return (
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
    );
};
