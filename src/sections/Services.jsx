import SectionTitleContent from '../components/SectionTitleContent'
import ServicesItem from '../components/ServicesItem'
import softWareIcon from "../assets/Services/software-icon.svg"
import reactIcon from "../assets/Services/react.svg"
import "./Services.css"
import { motion } from 'framer-motion'

function Services() {
    const servcesItems = [
        { underlineColor: "red", itemIcon: softWareIcon, itemTitle: "Software Dev", itemContent: "Build reliable web software: backend logic, databases, APIs, and interactive interfaces. С++, JavaScript Python" },
        { underlineColor: "blue", itemIcon: reactIcon, itemTitle: "Frontend Dev", itemContent: "Passionate about UI/UX. Over 3 years of development experience with HTML, CSS, JS, React framework." },
        { underlineColor: "yellow", itemIcon: softWareIcon, itemTitle: "UI/UX", itemContent: "Understand structure, layout, consistency; transform inspirations into clean, modern interface designs." }
    ]



    return (
        <section className="features primary-section" id="services">
            <div className="container">
                <SectionTitleContent title="Services" suptitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae eros dui. Sed quis tincidunt purus, sit amet sodales arcu. 
                Maecenas suscipit magna id viverra euismod. Aenean viverra dui convallis ante lobortis laoreet."/>

                <div className="services-card-container">
                    {servcesItems.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut", delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.25 }}
                            key={index}
                            className="services-card-wrapper"
                        >
                            <ServicesItem key={index} underlineColor={item.underlineColor} itemIcon={item.itemIcon} itemTitle={item.itemTitle} itemContent={item.itemContent} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
