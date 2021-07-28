
const Project = ({image,name,description,link}) => {
    return (
        <a href={link} className="project-link">
            <header>
                <img src={image} alt={name} />
            </header>
            <footer className="project-footer">
                <h3 className="project-name">{name}</h3>
                <div className="project-description">
                    <h5>description</h5>
                    <p>
                        {description}
                    </p>
                </div>
            </footer>
        </a>


    )
}

export default Project;