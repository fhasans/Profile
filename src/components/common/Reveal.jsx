import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export const Reveal = ({ children, className = '', delay = '' }) => {
    const [ref, isVisible] = useScrollReveal();
    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${delay} ${className}`}
        >
            {children}
        </div>
    );
};
