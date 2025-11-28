import "./SectionTitle.css"
import { motion } from "framer-motion"
function SectionTitle({ title }) {
    return (
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{once: false, amount: 0.5}}
            className="section-title">{title}
        </motion.h2>
    )
}

export default SectionTitle
