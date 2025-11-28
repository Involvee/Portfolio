import "./StackIcon.css";
import { delay, motion } from "framer-motion";
export default function StackIcon({ dataSpeed, src, top, left }) {
    const iconAnimations = {
        hidden: { opacity: 0, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 3, ease: "easeInOut" }
        }
    }
    return (
        <motion.div data-speed={`${dataSpeed}`}
            variants={iconAnimations}
            initial="hidden"
            animate="visible"
            className="stack-icon"
            style={
                {
                    position: 'absolute',
                    top: top,
                    left: left,
                }
            }>
            <img src={src} alt="stack icon" />
        </motion.div>
    );
}
