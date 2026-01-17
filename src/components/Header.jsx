import { ThemeToggle } from '../components/ThemeToggle';

const Header = () => {
    return (
        <>
            <header className="flex justify-between items-center pt-10 pb-5">
                <h1 className="text-2xl">Character counter</h1>

                <ThemeToggle />
            </header>
        </>
    );
};

export default Header;
