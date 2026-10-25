import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="relative isolate overflow-hidden bg-[#10251d] text-white">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-28 -z-10 h-80 w-80 rounded-full bg-[#23be0a]/15 blur-3xl"
            />

            <div className="mx-auto w-11/12 max-w-6xl py-14 sm:py-16">
                <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-10 sm:mb-14 sm:flex-row sm:items-end sm:justify-between sm:pb-12">
                    <div className="max-w-xl">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#8be37b]">
                            Your next chapter starts here
                        </p>
                        <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                            Find a story that
                            <span className="text-[#8be37b]"> stays with you.</span>
                        </h2>
                    </div>
                    <Link
                        to="/books"
                        className="inline-flex w-fit items-center gap-3 rounded-full bg-[#23be0a] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#23be0a]/15 transition hover:-translate-y-0.5 hover:bg-[#2bd316] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8be37b]"
                    >
                        Explore the library
                        <svg
                            aria-hidden="true"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.8"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                        </svg>
                    </Link>
                </div>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] lg:gap-16">
                    <div className="max-w-sm">
                        <Link to="/" className="inline-flex items-center gap-3 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8be37b]">
                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#8be37b] ring-1 ring-white/10">
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v14m0-14C10.5 5.7 8.6 5 6.5 5 4.8 5 3.3 5.4 2 6.2v13.4C3.3 18.8 4.8 18.4 6.5 18.4c2.1 0 4 .7 5.5 2.6m0-14C13.5 5.7 15.4 5 17.5 5c1.7 0 3.2.4 4.5 1.2v13.4c-1.3-.8-2.8-1.2-4.5-1.2-2.1 0-4 .7-5.5 2.6" />
                                </svg>
                            </span>
                            <span className="font-serif text-xl font-semibold tracking-tight">Book Vibe</span>
                        </Link>
                        <p className="mt-4 text-sm leading-6 text-white/60">
                            A cozy corner for curious readers. Discover new favorites, keep track of your list, and make every page count.
                        </p>
                    </div>

                    <nav aria-label="Explore">
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                            Explore
                        </h3>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li><Link className="transition hover:text-[#8be37b]" to="/">Home</Link></li>
                            <li><Link className="transition hover:text-[#8be37b]" to="/books">Browse books</Link></li>
                            <li><Link className="transition hover:text-[#8be37b]" to="/pages-to-read">Pages to read</Link></li>
                        </ul>
                    </nav>

                    <div>
                        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                            A reader’s note
                        </h3>
                        <p className="max-w-xs text-sm leading-6 text-white/60">
                            “There is no friend as loyal as a book.”
                        </p>
                        <p className="mt-2 text-xs font-medium text-[#8be37b]">— Ernest Hemingway</p>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/45 sm:mt-14 sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Book Vibe. Made for the love of reading.</p>
                    <Link
                        to="/"
                        className="w-fit transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8be37b]"
                    >
                        Back to the beginning ↑
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;