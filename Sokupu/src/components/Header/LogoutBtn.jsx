import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/authSlice';
import authService from '../../appwrite/auth';

function LogoutBtn() {
    const dispatch = useDispatch();
    const handleLogout = () => {
        authService.logout().then(() => (
            dispatch(logout())
        ))
        .catch((error) => (
            console.log("Logout error ",error)
        ));
    }

    return (
        <button onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-xl bg-[#efece4] px-5 py-2.5 text-sm font-semibold text-[#111] shadow-md transition hover:bg-white active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#efece4]/50"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
                Logout
        </button>
    )
}

export default LogoutBtn;