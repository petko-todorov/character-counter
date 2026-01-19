import { ThemeToggle } from '../components/ThemeToggle';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <>
            <header className="flex justify-between items-center pt-10 pb-5">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="w-14" />
                    <h1 className="text-2xl">Character counter</h1>
                </div>

                <ThemeToggle />
            </header>
        </>
    );
};

export default Header;
