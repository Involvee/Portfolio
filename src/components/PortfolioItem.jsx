
import "./PortfolioItem.css";

function PortfolioItem({ projectImgSrc, projectTitle, projectType, projectStack, type }) {
    const openProjectLink = () => {

    }

    return (
        <div onClick={() => openProjectLink()} className={"portfolio__item " + `${type}`}>
            <div className="portfolio__item-img-wrapper">
                <img src={projectImgSrc} alt="project-image" />
            </div>
            <div className="portfolio__item-content">
                <h3 className="portfolio__item-title">{projectTitle}</h3>
                <p className="portfolio__item-description">{projectType}</p>
                <ul className="portfolio__item-stack-list">
                    {projectStack.map((tech, index) => (
                        <li className="portfolio__item-stack-item" key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PortfolioItem
