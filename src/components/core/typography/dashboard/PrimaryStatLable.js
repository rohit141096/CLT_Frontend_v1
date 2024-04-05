import React from 'react'

const PrimaryStatLable = ({ color = "primary", lable = "" }) => {
    return (
        <div className="dashboardHomeStatsLable">
            <p className={`dashboardHomeStatsLableTxt ${color}`}>{lable}</p>
        </div>
    )
}

export default PrimaryStatLable