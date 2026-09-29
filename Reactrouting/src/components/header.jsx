import { Link,NavLink } from "react-router-dom"

export default function Header () {
    return (
        <header className="boreder-b border-slate-800 bg-stone-100/90 backdrop-blur-md sticky top-0 z-50 flex items-center justify-between gap-4 p-4 text-slate-100 shadow-md transition-all duration-300">
            <Link to = "/" className="flex items-center gap-2 group">
                <img src="/logo.png" alt="DevSpace Logo" className="h-12 w-30" object-contain/>
            </Link>

            <nav className="flex items-center gap-8 text-sm font-medium">
                <NavLink to = "/" 
                className={({isActive}) => isActive ? "text-orange-600" : "text-gray-400 hover:text-orange-300"}>Home</NavLink>
                <NavLink to = "/aboutUs" 
                className={({isActive}) => isActive ? "text-orange-600" : "text-gray-400 hover:text-orange-300"}>About Us</NavLink>
                <NavLink to = "/contact" 
                className={({isActive}) => isActive ? "text-orange-600" : "text-gray-400 hover:text-orange-300"}>Contact</NavLink>
                <NavLink to = "/Github" 
                className={({isActive}) => isActive ? "text-orange-600" : "text-gray-400 hover:text-orange-300"}>Github</NavLink>
            </nav>

            <div className="flex items-center gap-4">
            <NavLink 
                to="/login" 
                className="text-sm font-semibold text-stone-700 hover:text-stone-900 border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 px-5 py-2.5 rounded-xl transition-all active:scale-95 shadow-xs"
            >
                Login
            </NavLink>
            
            <NavLink 
                to="/getstarted" 
                className="inline-flex items-center justify-center gap-2 text-sm font-semibold bg-[#d65a3b] hover:bg-[#c24e31] text-white px-5 py-2.5 rounded-xl transition-all active:scale-95 shadow-sm group"
            >
                <span>Get Started</span>
            </NavLink>
            </div>
        </header>
    )
}