import { ThemeToggle } from '../components/ThemeToggle';

const Header = () => {
    return (
        <>
            <header className="flex justify-between items-center py-10">
                <h1 className="text-2xl">Character counter</h1>

                <ThemeToggle />
            </header>
        </>
    );
};

export default Header;
