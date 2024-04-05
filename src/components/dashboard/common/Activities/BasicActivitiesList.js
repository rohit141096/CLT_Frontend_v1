import React from 'react'

const BasicActivitiesList = ({ children }) => {
    return (
        <div className="dashboardBasicActivitiesList">
            <div className="dashboardBasicActivitiesTimeline">
                <div className="dashboardBasicActivitiesTimelineLine">&nbsp;</div>
            </div>
            <div className="dashboardBasicActivitiesListMain">
                {children}
            </div>
        </div>
    )
}

export default BasicActivitiesList