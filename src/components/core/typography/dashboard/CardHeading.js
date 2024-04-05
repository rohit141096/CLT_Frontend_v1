import React from 'react'

const CardHeading = ({ heading, color="default" }) => {
    return (
        <div className="dashboardCardHeadingLable">
            <p className={`dashboardCardHeadingLableTxt ${color === "default" ? "default" : color === "dark" ? "dark" : "default"}`}>{heading}</p>
        </div>
    )
}

export default CardHeading