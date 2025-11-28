import './Hero.css'
import { delay, motion, scale } from 'framer-motion'
import stripPatterns from "/src/assets/Hero/Strip-Patterns.png"


function HeroSection() {

    const suptitle = "I’m a Frontend developer with experience in building responsive websites and web applications"
    function splitSupTitle(text) {
        return text.split(" ").map((word, index) => (
            <motion.span key={index} className="page-suptitle-word"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.3, ease: "easeInOut" }}>
                {word}
            </motion.span>
        ))
    }
    return (
        <section className="hero" id="hero">
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.8, ease: "easeOut" }}
                className='hero__strip-patterns' src={stripPatterns} alt="Strip-Patterns" />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.8, ease: "easeOut" }}
                className='hero__strip-patterns right' src={stripPatterns} alt="Strip-Patterns" />

            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.8, ease: "easeOut" }}
                className='hero__strip-patterns hero__strip-patterns-mobile' src={stripPatterns} alt="Strip-Patterns" />
            <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.8, ease: "easeOut" }}
                className='hero__strip-patterns hero__strip-patterns-mobile right' src={stripPatterns} alt="Strip-Patterns" />
            < div className="hero__content" >
                <motion.h1 className="page-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: .5, duration: .4, ease: "easeInOut" }}
                >
                    Hi, my name is Talgat ;)
                </motion.h1>
                <motion.p className="page-suptitle">
                    {splitSupTitle(suptitle)}
                </motion.p>

                {/* <button className='hero__get-start-btn'>
                    <img src="/src/assets/Hero/play-icon.svg" alt="play-icon" />
                    View works
                </button> */}
            </div >
        </section >
    )
}
export default HeroSection