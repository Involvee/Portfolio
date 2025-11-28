
import "./SectionSuptitle.css"
import { motion } from "framer-motion"
function SectionSuptitle({ suptitle }) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.6 }}
            className="section-suptitle">{suptitle}</motion.p>
    )
}

export default SectionSuptitle
