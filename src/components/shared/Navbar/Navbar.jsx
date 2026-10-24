import { NavLink } from 'react-router';

const navigationLinks = [
    { label: 'Home', to: '/' },
    { label: 'Listed Books', to: '/books' },
    { label: 'Pages to Read', to: '/pages-to-read' },
];

const linkClassName = ({ isActive }) =>
    `rounded-md border px-3 py-2 text-xs transition-colors ${
        isActive
            ? 'border-green-500 text-green-600'
            : 'border-transparent text-base-content/80 hover:border-green-500 hover:text-green-600'
    }`;

const NavigationLinks = ({ mobile = false }) => (
    <ul className={mobile ? 'menu w-52 gap-1 p-2' : 'flex items-center gap-1'}>
        {navigationLinks.map(({ label, to }) => (
            <li key={to}>
                <NavLink to={to} end={to === '/'} className={linkClassName}>
                    {label}
                </NavLink>
            </li>
        ))}
    </ul>
);

const Navbar = () => {
    return (
        <header className="border-b border-base-200 bg-base-100">
            <nav
                aria-label="Main navigation"
                className="navbar mx-auto min-h-[72px] w-10/12 max-w-6xl px-0"
            >
                <div className="navbar-start">
                    <NavLink to="/" className="text-base font-bold text-base-content">
                        Book Vibe
                    </NavLink>
                </div>

                <div className="navbar-center hidden md:flex">
                    <NavigationLinks />
                </div>

                <div className="navbar-end gap-2">
                    <div className="hidden items-center gap-2 md:flex">
                        <button
                            type="button"
                            className="btn btn-sm min-h-8 border-0 bg-[#23BE0A] px-4 text-xs text-white hover:bg-[#1fa908]"
                        >
                            Sign In
                        </button>
                        <button
                            type="button"
                            className="btn btn-sm min-h-8 border-0 bg-cyan-500 px-4 text-xs text-white hover:bg-cyan-600"
                        >
                            Sign Up
                        </button>
                    </div>

                    <details className="dropdown dropdown-end md:hidden">
                        <summary
                            className="btn btn-ghost btn-square"
                            aria-label="Open navigation menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </summary>
                        <div className="dropdown-content z-10 mt-3 rounded-box bg-base-100 p-2 shadow-lg">
                            <NavigationLinks mobile />
                            <div className="flex gap-2 p-2">
                                <button
                                    type="button"
                                    className="btn btn-sm flex-1 border-0 bg-[#23BE0A] text-xs text-white hover:bg-[#1fa908]"
                                >
                                    Sign In
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-sm flex-1 border-0 bg-cyan-500 text-xs text-white hover:bg-cyan-600"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </details>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;