
import SectionTitleContent from "../components/SectionTitleContent"
import FeatureCard from "../components/FeatureCard.jsx"
import IconProSupport from "../assets/Features/icon-pro-support.svg"
import IconUniqueDesign from "../assets/Features/icon-unique-design.svg"
import IconCalendar from "../assets/Features/icon-calendar.svg"
import IconHeart from "../assets/Features/icon-heart.svg"


function Features() {
    return (
        <section className="features primary-section">
            <div className="container">
                <SectionTitleContent title="Features" suptitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae eros dui. Sed quis tincidunt purus, sit amet sodales arcu. 
                Maecenas suscipit magna id viverra euismod. Aenean viverra dui convallis ante lobortis laoreet."/>


                <div className="feature-card-container">
                    <FeatureCard icon={IconProSupport} iconAlt={"Icon pro"} title="Pro support" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." />
                    <FeatureCard icon={IconUniqueDesign} iconAlt={"Icon pro"} title="Pro support" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." />
                    <FeatureCard icon={IconCalendar} iconAlt={"Icon pro"} title="Pro support" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." />
                    <FeatureCard icon={IconHeart} iconAlt={"Icon pro"} title="Pro support" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore." />
                </div>


            </div>
        </section>
    )
}

export default Features
