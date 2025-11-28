import React from 'react'
import "./FooterComponent.css"

import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin);


function FooterComponent() {
    const handleScroll = (e, href) => {
        e.preventDefault();
        gsap.to(window, {
            duration: 1,
            scrollTo: href,
            ease: "power3.out"
        });
    }
    const Links = [
        { name: 'Home', href: '#hero', id: "scrollToHero" },
        { name: 'Services', href: '#services', id: "scrollToServices" },
        { name: 'Works', href: '#works', id: "scrollToWorks" },
    ];

    return (
        <div className="footer" id="contact">
            <div className="container">
                <div className="title-content">
                    <h2>Involvee.dev</h2>
                    <strong>Frontend Developer</strong>

                    <strong className='contact-btn'>Let’s work together — <a href="https://t.me/gheedst" target='_blank'>@gheedst</a></strong>
                    <span>©2025</span>
                </div>

                <nav className="footer-social">
                    <ul>
                        {
                            Links.map((link, index) => {
                                return (
                                    <li>
                                        <a key={index} href={link.href} onClick={() => handleScroll(event, link.href)}>{link.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <ul>
                        <li>
                            <a href="https://github.com/Involvee" target='_blank'>GitHub</a>
                        </li>
                        <li>
                            <a href="https://t.me/gheedst" target='_blank'>Telegram</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default FooterComponent
