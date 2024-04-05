import React from 'react'

const PlainContainer = ({ type="full", styles={}, children }) => {
    return (
        <div className={`dashboardPlainContainer ${type === "full" ? "fullWidth" : type === "half" ? "halfWidth" : ""}`} style={styles}>
            {children}
        </div>
    )
}

export default PlainContainer