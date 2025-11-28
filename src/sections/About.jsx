
import SectionTitleContent from "../components/SectionTitleContent"
function About() {
    return (
        <section className="about primary-section">
            <div className="container">
                <SectionTitleContent title="About Me" suptitle="I’m a developer who entered the IT field through hands-on experience and training at IT Step Computer Academy. I love building practical tools, streamlining processes, and creating intuitive, user-friendly interfaces. I’m constantly exploring new technologies, expanding my skill set, and striving to grow professionally." />


                <div className="about__container">
                    <img className="about__diplom-img" src="https://media.licdn.com/dms/image/v2/D4D22AQE55eRxdLZgOg/feedshare-shrink_800/feedshare-shrink_800/0/1706191165228?e=2147483647&v=beta&t=21NqjZU57pbtWDODIG8c93c5IDgOpuGoI3wmxSSYmYk" alt="img" />
                    
                    <div className="about__timeline">
                        
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
