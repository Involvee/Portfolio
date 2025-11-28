import React from 'react'
import "./ServicesItem.css"
function ServicesItem({ itemIcon, itemTitle, itemContent, underlineColor }) {
    return (
        <div className={"services-item " + `${underlineColor}`}>
            <header>
                <img className="services-item-icon" src={itemIcon} />
                <h3 className="services-item-title">{itemTitle}</h3>
            </header>

            <div className="services-content-wrapper">
                <div className="services-item-content">
                    {itemContent}
                </div>
            </div>
        </div>
    )
}

export default ServicesItem
