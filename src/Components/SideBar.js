import '../CSS/Sidebar.css';
import { useGlobalContext } from '../Context';
import {FaTimes,FaHome} from 'react-icons/fa';
import {SiAboutDotMe} from 'react-icons/si';
import {AiFillProject} from 'react-icons/ai';
import { HashLink as Link } from 'react-router-hash-link';

const SideBar = () => {
    const {isSidebarOpen,closeSidebar} = useGlobalContext();
    return (
        <section className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
            <div className="sidebar-wrapper">
                <div className="sidebar-links">
                    <Link to="/#top" onClick={closeSidebar} className='link'><FaHome/> <span>home</span></Link>
                    <Link to="/#about-me" onClick={closeSidebar} className='link'><SiAboutDotMe/><span>about me</span></Link>
                    <Link to="/#projects" onClick={closeSidebar} className='link'><AiFillProject/><span>projects</span></Link>
                </div>
                <button className="close-btn" onClick={closeSidebar}><FaTimes/></button>
            </div>
        </section>
    );
}

export default SideBar;