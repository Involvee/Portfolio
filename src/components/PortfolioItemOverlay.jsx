import { motion } from 'framer-motion'
import './PortfolioItemOverlay.css'

import goBackIcon from "/src/assets/arrow.svg"
import arrowRight from "/src/assets/arrow-right.svg"

function PortfolioItemOverlay({ project, onClose }) {
    if (!project) return null;

    const body = document.body;
    body.classList.add('lock')


    return (
        <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="portfolio-item-overlay">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .3, ease: "easeInOut", delay: .9 }}
                className="container">
                <motion.button
                    className="portfolio-item-overlay__close-button" onClick={onClose}>
                    <img src={goBackIcon} alt="arrow" />
                </motion.button>
                <div className="portfolio-item-overlay__content">
                    <motion.strong
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: .5, ease: "easeOut", delay: 1.1 }}
                        className="portfolio-item-overlay__type">{project.projectType}</motion.strong>
                    <motion.h3
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .25, ease: "easeOut", delay: 1 }}
                        className="portfolio-item-overlay__title">{project.projectTitle}</motion.h3>


                    <div className="portfolio-item-overlay__project-info">
                        <p className="portfolio-item-overlay__description">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui natus quibusdam suscipit reiciendis ex accusantium? Ut veniam laborum temporibus, rerum rem cumque velit magni earum libero magnam voluptas a.
                        </p>

                        <div className="portfolio-item-overlay__project-info-item">
                            <strong className="portfolio-item-overlay__project-info-item__title">Client</strong>
                            <p className="portfolio-item-overlay__project-info-item__value">{project.client ?? '—'}</p>
                        </div>
                        <div className="portfolio-item-overlay__project-info-item">
                            <strong className="portfolio-item-overlay__project-info-item__title">Technologies</strong>
                            <p className="portfolio-item-overlay__project-info-item__value">
                                {project.projectStack.map(((stack, index) => {
                                    return (
                                        <span key={index}>
                                            {stack}
                                        </span>
                                    )
                                }))}

                            </p>
                        </div>
                        <a href={project.link} target='_blank' className="portfolio-item-overlay__open-project">
                            <strong>Open Project</strong>
                            <img src={arrowRight} alt="arrow" />
                        </a>
                    </div>
                    {
                        project.fullPageImg.map((img, index) => {
                            return (
                                <img key={index} className='portfolio-item-overlay__img' src={img} alt="" />
                            )
                        })
                    }
                </div>
            </motion.div>
        </motion.div>
    )
}

export default PortfolioItemOverlay
