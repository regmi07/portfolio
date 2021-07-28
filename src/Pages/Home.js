import AboutMe from "../Components/AboutMe";
import PersonalInfo from '../Components/PersonalInfo';
import Projects from "../Components/Projects";
import '../CSS/Home.css';

const Home = () => {
    return (
        <main className="home" id="top">
            <PersonalInfo />
            <AboutMe />
            <Projects />
        </main>
    );
}

export default Home;