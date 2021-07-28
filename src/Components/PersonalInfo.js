import '../CSS/Home.css';
import {FaGithub} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';

const PersonalInfo = () => {
    return (
        <div className="personal-info">
            <div className="info-wrapper">
                <h1>Nikesh Regmi</h1>
                <p>Front-end developer</p>
                <div className="links">
                    <a href="https://github.com/regmi07" className="btn">
                        <FaGithub className="icon" />
                    </a>
                    <a href="https://twitter.com/NikesRegmi" className="btn">
                        <FaTwitterSquare className="icon" />
                    </a>
                    <a href="mailto: regmi.nikes1@gmail.com" className="btn">
                        <SiGmail className="icon" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;