import React from 'react';
import { useId } from 'react';

export const Select = (
    {
        options,
        label,
        className = "",
        ref,
        ...props
    }
) => {
    const id = useId();

    return (
        <div className={`w-full`}>
            {label && (
                <label htmlFor={id} className=""></label>
            )}
            <select className={`px-3 py-2 text-stone-50 outline-none bg-black-500 border border-stone-600 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 ${className}`}
                    id={id} 
                    ref={ref}
                    {...props}
            >
                {options?.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div> 
    )
}