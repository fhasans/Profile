import React from 'react';
import { GraduationCap, Award, ChevronDown, ExternalLink } from 'lucide-react';
import { Reveal } from '../common/Reveal';

export const Education = () => {
    return (
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
    );
};
