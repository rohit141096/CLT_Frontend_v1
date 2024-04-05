import React from 'react'

const CardDescription = ({ description }) => {
    return (
        <div className="dashboardCardDescriptionLable">
            <p className="dashboardCardDescriptionLableTxt">{description}</p>
        </div>
    )
}

export default CardDescription