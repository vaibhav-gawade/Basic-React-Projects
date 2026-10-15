import React, { useId, useState } from 'react';
 
const styles = {
    dark: {
        label: 'text-[#E7D6C1]',
        field:
            'bg-gradient-to-b from-[#2B1D17] to-[#1B120E] border border-[#FAF6F0]/10 ' +
            'text-[#FAF6F0] placeholder:text-[#E7D6C1]/50 ' +
            'shadow-[inset_0_1px_0_rgba(250,246,240,0.08),0_14px_28px_-14px_rgba(0,0,0,0.9)] ' +
            'focus-within:border-[#C48A5A]/70 focus-within:ring-4 focus-within:ring-[#C48A5A]/15',
        icon: 'text-[#C48A5A]',
        toggle: 'text-[#E7D6C1]/70 hover:text-[#FAF6F0]',
    },
    light: {
        label: 'text-[#6B4A3A]',
        field:
            'bg-gradient-to-b from-[#FAF6F0] to-[#F1E6D8] border border-white/70 ' +
            'text-[#2B1D17] placeholder:text-[#6B4A3A]/55 ' +
            'shadow-[inset_0_1px_0_#ffffff,0_14px_28px_-14px_rgba(107,74,58,0.55)] ' +
            'focus-within:border-[#C48A5A] focus-within:ring-4 focus-within:ring-[#C48A5A]/20',
        icon: 'text-[#6B4A3A]',
        toggle: 'text-[#6B4A3A]/70 hover:text-[#2B1D17]',
    },
};
 
const EyeIcon = ({ off }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
        {off && <path d="M4 4l16 16" />}
    </svg>
);
 
export const Input = ({
    label,
    icon,                 
    error,
    variant = 'dark',
    className = '',
    type = 'text',
    ref,
    ...props
}) => {
    const id = useId();
    const [show, setShow] = useState(false);
    const s = styles[variant] ?? styles.dark;
 
    const isPassword = type === 'password';
    const inputType = isPassword && show ? 'text' : type;
 
    return (
        <div className="w-full">
            {label && (
                <label htmlFor={id} className={`mb-2 block pl-1 text-sm font-medium ${s.label}`}>
                    {label}
                </label>
            )}
 
            <div
                className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 transition duration-200 ${s.field}
                ${error ? '!border-red-400/80 !ring-red-400/15' : ''}`}
            >
                {icon && <span className={`shrink-0 ${s.icon}`}>{icon}</span>}
 
                <input
                    id={id}
                    ref={ref}
                    type={inputType}
                    className={`${className} w-full bg-transparent text-sm outline-none placeholder:font-normal`}
                    {...props}
                />
 
                {isPassword && (
                    <button
                        type="button"
                        onClick={() => setShow((v) => !v)}
                        aria-label={show ? 'Hide password' : 'Show password'}
                        className={`shrink-0 transition ${s.toggle}`}
                    >
                        <EyeIcon off={!show} />
                    </button>
                )}
            </div>
 
            {error && <p className="mt-1.5 pl-1 text-xs text-red-300">{error}</p>}
        </div>
    );
}