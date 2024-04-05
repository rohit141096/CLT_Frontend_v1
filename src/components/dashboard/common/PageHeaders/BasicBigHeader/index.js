import React from 'react'

const BasicBigHeader = ({ children }) => {
    return (
        <div className="dashboardPageBigHeader">
            <div className="dashboardPageBigHeaderInner">
                <div className="dashboardPageBigHeaderDetails">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default BasicBigHeader