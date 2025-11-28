
import { useEffect, useState } from "react"
import PortfolioItem from "../components/PortfolioItem"
import SectionTitleContent from "../components/SectionTitleContent"
import PortfolioItemOverlay from "../components/PortfolioItemOverlay"
import "./Portfolio.css"
import { motion } from 'framer-motion'

import armaniFullimg from "@/assets/projects/armani-fullpage.png"
import armaniFullimg2 from "@/assets/projects/armani-fullpage-2.png"
import armaniImg from "@/assets/projects/armani.png"

// Gtech
import gtechFull from "@/assets/projects/gtech-fullpage.png";
import gtechImg from "@/assets/projects/gtech.png";

// El Dacha
import dachaFull from "@/assets/projects/el-dacha-fullpage.png";
import dachaImg from "@/assets/projects/el-dacha.png";

// Filmberry
import filmberryFull1 from "@/assets/projects/filmberry-fullpage.png";
import filmberryFull2 from "@/assets/projects/filmberry-fullpage-2.png";
import filmberryImg from "@/assets/projects/filmberry.png";

// Silent Wallet
import silentFull from "@/assets/projects/silentwallet-fullpage.png";
import silentImg from "@/assets/projects/silent-wallet.png";

// Arcade
import arcadeFull from "@/assets/projects/arcade-fullpage.png";
import arcadeImg from "@/assets/projects/arcade.png";

// C++ 2048
import cppFull1 from "@/assets/projects/cplusplus-1.png";
import cppFull2 from "@/assets/projects/cplusplus-2.png";
import cppFull3 from "@/assets/projects/cplusplus-3.png";
import cppFull4 from "@/assets/projects/cplusplus-4.png";
import cppImg from "@/assets/projects/cplusplus.png";

// Jean Semenov
import jeanFull from "@/assets/projects/Jean-Semenov-fullpage.png";
import jeanImg from "@/assets/projects/jean.png";

// Shiply
import cargoFull1 from "@/assets/projects/cargo-fullpage.png";
import cargoFull2 from "@/assets/projects/cargo-fullpage-2.png";
import cargoFull3 from "@/assets/projects/cargo-fullpage-3.png";
import cargoImg from "@/assets/projects/cargo.png";



function Portfolio() {
    const categories = ["All", "Websites", "Web Apps", "C++ Projects"]

    const projects = [

        // === Armani ===
        {
            fullPageImg: [armaniFullimg, armaniFullimg2],
            imgSrc: armaniImg,
            projectTitle: "Armani",
            projectType: "Web Development",
            client: "Kwork customer",
            projectStack: ["HTML", "SCSS", "JS", "GSAP", "AOS library"],
            projectCategory: ["All", "Web Apps"],
            type: "larger",
            link: "https://involvee.github.io/Armani/"
        },

        // === Gtech ===
        {
            fullPageImg: [gtechFull],
            imgSrc: gtechImg,
            projectTitle: "Gtech",
            projectType: "Web Development",
            client: "Pet Project",
            projectStack: ["HTML", "SCSS", "JS", "GSAP", "AOS library"],
            projectCategory: ["All", "Websites"],
            type: "",
            link: "https://involvee.github.io/Gtech-landing-page/"
        },

        // === El Dacha ===
        {
            fullPageImg: [dachaFull],
            imgSrc: dachaImg,
            projectTitle: "EL Dacha",
            projectType: "Web Development",
            client: "Pet Project",
            projectStack: ["HTML", "SCSS", "JS", "GSAP", "AOS library"],
            projectCategory: ["All", "Websites"],
            type: "larger",
            link: "https://involvee.github.io/El-Dacha-landing-page/"
        },

        // === Filmberry app ===
        {
            fullPageImg: [filmberryFull1, filmberryFull2],
            imgSrc: filmberryImg,
            projectTitle: "Filmberry",
            projectType: "Web Development",
            client: "Pet Project",
            projectStack: ["HTML", "SCSS", "JS", "GSAP", "AOS library"],
            projectCategory: ["All", "Web Apps"],
            type: "",
            link: "https://involvee.github.io/Filmberry-movie-app/"
        },

        // === Silent Wallet ===
        {
            fullPageImg: [silentFull],
            imgSrc: silentImg,
            projectTitle: "Silent Wallet",
            projectType: "Web Development",
            client: "Kwork customer",
            projectStack: ["HTML", "SCSS", "JS", "GSAP", "AOS library"],
            projectCategory: ["All", "Websites"],
            type: "",
            link: "https://involvee.github.io/SilentWallet/"
        },

        // === Arcade ===
        {
            fullPageImg: [arcadeFull],
            imgSrc: arcadeImg,
            projectTitle: "Crypto Arcade",
            projectType: "Web Development",
            client: "Kwork customer",
            projectStack: ["HTML", "SCSS", "JS", "GSAP", "AOS library"],
            projectCategory: ["All", "Websites"],
            type: "larger",
            link: "https://involvee.github.io/Arcade/"
        },

        // === С++ 2048 ===
        {
            fullPageImg: [cppFull1, cppFull2, cppFull3, cppFull4],
            imgSrc: cppImg,
            projectTitle: "2048 C++",
            projectType: "C++ Project",
            client: "Exam project",
            projectStack: ["С++", "Console", "2048", "Console game"],
            projectCategory: ["All", "C++ Projects"],
            type: "",
            link: "https://github.com/Involvee/Simple-Console-2048-game"
        },

        // === Jean Semenov LLC ===
        {
            fullPageImg: [jeanFull],
            imgSrc: jeanImg,
            projectTitle: "Jean Semenov & Co, LLC",
            projectType: "Web Development",
            client: "Kwork customer",
            projectStack: ["HTML", "SCSS", "JS", "GSAP", "AOS library"],
            projectCategory: ["All", "Websites"],
            type: "larger",
            link: "https://involvee.github.io/Jean-semenov/"
        },

        // === Shiply (Cargo) ===
        {
            fullPageImg: [cargoFull1, cargoFull2, cargoFull3],
            imgSrc: cargoImg,
            projectTitle: "Shiply",
            projectType: "Web Development",
            client: "Pet Project",
            projectStack: ["HTML", "SCSS", "JS", "GSAP", "AOS library"],
            projectCategory: ["All", "Web Apps"],
            type: "larger",
            link: "https://involvee.github.io/Cargo/"
        }

    ]


    const [activeCategory, setActiveCategory] = useState("All")
    const [openProject, setOpenProject] = useState(null)
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (isOpen) {
            body.classList.add('lock')
        }
        else {
            body.classList.remove('lock')
        }
    })

    return (
        <section className="portfolio primary-section" id="works">
            <SectionTitleContent title="== Works ==" suptitle="" />

            <div className="portfolio__pagination">
                <ul className="portfolio__pagination-list">
                    {categories.map(category => (
                        <li key={category} className={"portfolio__pagination-item " + (activeCategory === category ? 'active' : '')} onClick={() => setActiveCategory(category)}>{category}</li>
                    ))}
                </ul>
            </div>

            <div className="portfolio__container">
                {
                    projects
                        .filter(item => item.projectCategory.includes(activeCategory, 0))
                        .map((project, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0 }}
                                transition={{ duration: .5, ease: "easeOut" }}
                                key={activeCategory + index}
                                onClick={() => { setOpenProject(project), setOpen(true) }}>

                                <PortfolioItem type={project.type} key={index} projectImgSrc={project.imgSrc} projectTitle={project.projectTitle} projectType={project.projectType} projectStack={project.projectStack} />
                            </motion.div>
                        ))}
            </div>

            <PortfolioItemOverlay project={openProject} onClose={() => { setOpenProject(null), setOpen(false) }} />

        </section>

    )
}

export default Portfolio
