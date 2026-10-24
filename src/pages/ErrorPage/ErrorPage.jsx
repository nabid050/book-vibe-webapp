import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
            <span className="mb-3 text-8xl leading-none" role="img" aria-label="Sad face">
                😢
            </span>
            <h1 className="text-8xl font-extrabold leading-none text-base-content sm:text-9xl">
                404
            </h1>
            <p className="mt-4 text-lg text-base-content/70">
                Oops! The page you are looking for could not be found.
            </p>
            <Link
                to="/"
                className="btn mt-6 border-0 bg-[#23BE0A] text-white hover:bg-[#1fa908]"
            >
                Back to Home
            </Link>
        </main>
    );
};

export default ErrorPage;