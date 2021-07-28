import '../CSS/NavBar.css';
import { HashLink as Link } from 'react-router-hash-link';
import {FaBars} from 'react-icons/fa';
import { useGlobalContext } from '../Context';

const NavBar = () => {
    const {openSidebar} = useGlobalContext();
    return (
        <nav>
            <button className="bars" onClick={openSidebar}>
                <FaBars />
            </button>
            <div className="person-info">
                <Link to="/">Nikesh Regmi</Link>
            </div>
            <div className="nav-links">
                <Link to="/#top">home</Link>
                <Link to="/#about-me">about me</Link>
                <Link to="/#projects">projects</Link>
                {/* <a href="#about-me">about me</a>
                <a href="#projects">projects</a> */}
            </div>
        </nav>
    );
}

export default NavBar;