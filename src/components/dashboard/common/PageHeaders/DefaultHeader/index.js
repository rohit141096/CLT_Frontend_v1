import React from 'react'

const DefaultHeader = ({ children }) => {
    return (
        <div className="dashboardPageDefaultHeader">
            <div className="dashboardPageDefaultHeaderInner">
                <div className="dashboardPageDefaultHeaderDetails">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DefaultHeader