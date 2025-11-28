import "./FeatureCard.css"

function FeatureCard({ icon, iconAlt, title, description }) {
    return (
        <div className="feature-card">
            <img className="feature-card__icon" src={icon} alt={iconAlt} />
            <h3 className="feature-card__title">{title}</h3>
            <p className="feature-card__description">{description}</p>
        </div>
    )
}

export default FeatureCard
