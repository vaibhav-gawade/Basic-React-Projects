import React from 'react';

const variants = {
    dark:    'bg-gradient-to-b from-[#1c1c1c] to-black text-[#FAF6F0] hover:from-[#2B1D17] hover:to-[#120C09]',
    caramel: 'bg-gradient-to-b from-[#D29A6A] to-[#C48A5A] text-[#2B1D17] hover:from-[#DDA676]',
    cream:   'bg-gradient-to-b from-[#FAF6F0] to-[#E7D6C1] text-[#2B1D17] hover:from-white',
    ghost:   'border border-[#E7D6C1]/30 text-[#E7D6C1] hover:bg-[#E7D6C1] hover:text-[#2B1D17]',
};

export const Button = ({ children, variant = 'dark', className = '', ...props }) => (
    <button
        {...props}
        className={`w-full rounded-2xl px-6 py-3.5 text-sm font-semibold transition duration-200
        active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50
        ${variants[variant]} ${className}`}
    >
        {children}
    </button>
);
