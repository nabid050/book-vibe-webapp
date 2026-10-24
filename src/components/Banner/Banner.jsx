import { Link } from 'react-router';
import bookingImg from './../../assets/pngwing 1.jpg';

const Banner = () => {
    return (
        <section className="mx-auto w-10/12 max-w-6xl py-6 sm:py-8">
            <div className="flex min-h-[300px] flex-col items-center justify-between gap-8 rounded-xl bg-[#f3f3f3] px-6 py-10 sm:px-10 md:min-h-[360px] md:flex-row md:px-12 lg:px-16">
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-3xl font-bold leading-tight text-[#131313] sm:text-4xl lg:text-5xl">
                        Books to freshen up
                        <br className="hidden sm:block" /> your bookshelf
                    </h1>
                    <Link
                        to="/books"
                        className="btn mt-6 border-0 bg-[#23BE0A] px-5 text-sm font-semibold text-white hover:bg-[#1fa908]"
                    >
                        View The List
                    </Link>
                </div>
                <img
                    alt="The Dating Playbook for Men book cover"
                    src={bookingImg}
                    className="w-40 max-w-full mix-blend-multiply sm:w-48 md:w-44 lg:w-56"
                />
            </div>
        </section>
    );
};

export default Banner;