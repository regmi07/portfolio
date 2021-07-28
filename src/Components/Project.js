
const Project = ({image,name,description,link}) => {
    return (
        <a href={link} className="project-link">
            <header>
                <img src={image} alt={name} />
            </header>
            <footer className="project-footer">
                <h3 className="project-name">{name}</h3>
                <p className="project-description">{description}</p>
            </footer>
        </a>


    )
}

export default Project;