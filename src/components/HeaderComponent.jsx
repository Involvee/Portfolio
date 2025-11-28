
import { motion } from 'framer-motion'
import './HeaderComponent.css'


import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
function HeaderComponent() {

    document.addEventListener('scroll', (event) => {
        const scrollY = window.scrollY;
        const header = document.querySelector('.header');
        if (scrollY > 10) {
            header.classList.add('sticky');
        }
        else {
            header.classList.remove('sticky');
        }
    })

    const handleScroll = (e, href) => {
        e.preventDefault();
        // href like '#hero' or selector string
        gsap.to(window, {
            duration: 1,
            scrollTo: href,
            ease: "power3.out"
        });
    }
    const headerLinks = [
        { name: 'Home', href: '#hero', id: "scrollToHero" },
        { name: 'Services', href: '#services', id: "scrollToServices" },
        { name: 'Works', href: '#works', id: "scrollToWorks" },
        { name: 'Contact', href: '#contact', id: "scrollToContacts" },
    ];

    return (
        <header className="header" >
            <div className="container">
                <div className="header__content">
                    {/* <strong className='logo'>Involvee</strong> */}

                    <nav className="header__nav">
                        <ul className="header__nav-list">
                            {headerLinks.map((item, index) => {
                                return (
                                    <motion.li key={index} className="header__nav-item"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 2.5 + index * 0.2, duration: 0.3, ease: "easeInOut" }}>
                                        <a href={item.href} id={item.id}
                                            onClick={() => handleScroll(event, item.href)}
                                        >
                                            <span>//</span>
                                            {item.name}
                                        </a>
                                    </motion.li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent