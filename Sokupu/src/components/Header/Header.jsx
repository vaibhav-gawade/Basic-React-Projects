import React from 'react';
import Logo from '../Logo';
import { useSelector } from 'react-redux';
import Container from '../Container/Container';
import { Link, useNavigate } from 'react-router-dom';
import LogoutBtn from './LogoutBtn';

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: 'SignUp',
            slug: '/signup',
            active: !authStatus
        },
        {
            name: 'All Posts',
            slug: '/posts',
            active: authStatus
        },
        {
            name: 'Create Post',
            slug: '/create-post',
            active: authStatus
        }
    ];

    return (
        <header className="bg-black text-beige-100 shadow-md py-4 sticky top-0 z-50">
            <Container>
                <nav className="flex items-center justify-between">
                    {/* Logo with controlled size and proper alignment */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <Logo className="w-10 h-10 object-contain" />
                        </Link>
                    </div>

                    {/* Navigation Items */}
                    <ul className="flex items-center space-x-4">
                        {navItems.map((item) => (
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className="px-4 py-2 text-sm font-medium text-white bg-zinc-800 rounded-lg transition-colors hover:bg-zinc-700 hover:text-beige-100"
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        ))}

                        {/* Logout Button */}
                        {authStatus && (
                            <li>
                                <LogoutBtn />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
}

export default Header;