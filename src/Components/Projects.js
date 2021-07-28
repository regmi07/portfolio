import { useState,useEffect } from "react";
import data from '../data';
import Project from "./Project";
import '../CSS/Projects.css';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const Projects = () => {
    const [projects,setProjects] = useState(data);
    const [index,setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = projects.length - 1;
        if(index < 0)
            setIndex(lastIndex);
        if(index > lastIndex)
            setIndex(0);
    },[index,projects]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        },6000)
        return () => clearInterval(slider);
    },[index]);

    return (
        <section id="projects">
            <div className="title">
                <h2>Projects</h2>
            </div>
            <div className="slider-section">
                <div className="section-center">
                    {
                        projects.map((project,projectIndex) => {
                            //position is declare to give article a class and other functionality of slider  is managed in css
                            let position = "nextSlide";

                            if(index === projectIndex)
                                position = 'leftActiveSlide';

                            if(index + 1 === projectIndex || (index + 1 === projects.length && projectIndex === 0))
                                position = 'rightActiveSlide';

                            if(projectIndex === index - 1 || (index === 0 && projectIndex === projects.length - 1))
                                position = 'lastSlide';

                            //yea I know I'm fucking dumb this is the only way I can think of in my brain less head

                            return <article className={`article ${position}`} key={project.id}>
                                <Project {...project}/>
                            </article>

                        })
                    }
                    <button className="slider-btn previous" onClick={() => setIndex(index - 1)}><FiChevronLeft/></button>
                    <button className="slider-btn next" onClick={() => setIndex(index + 1)}><FiChevronRight/></button>
                </div>
                <div className="slider-footer">
                    <Link to='/all-projects' className="show-all-btn">Show All</Link>
                </div>
            </div>
        </section>
    );
}

export default Projects;