
import SectionTitle from "./SectionTitle";
import SectionSuptitle from "./SectionSuptitle";
import "./SectionTitleContent.css"
function SectionTitleContent({ title, suptitle }) {
    return (
        <div className="section-title-content">
            <SectionTitle title={title} />
            <SectionSuptitle suptitle={suptitle} />
        </div>
    )
}

export default SectionTitleContent
