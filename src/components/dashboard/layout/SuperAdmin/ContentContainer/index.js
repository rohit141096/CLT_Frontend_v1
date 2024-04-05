import React from 'react'

const ContentContainer = ({hasSidebar=true, children}) => {
    return (
        <div className="dashboardHeaderContent hasSidebar">
            {children}
        </div>
    )
}

export default ContentContainer