import projects from '../data';
import Project from '../Components/Project';
import  '../CSS/AllProjects.css';

const AllProjects = () => {
    return (
        <section className="all-projects-section">
            <h2>Projects</h2>
            <div className="project-container">
                {
                    projects.map((project) => {
                        return (
                            <article className="project" key={project.id}>
                                <Project {...project} />
                            </article>
                        );
                    })
                }
            </div>
        </section>
    );
}

export default AllProjects;