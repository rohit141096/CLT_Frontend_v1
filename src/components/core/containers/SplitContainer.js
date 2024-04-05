import React from 'react'

const SplitContainer = ({ type="full", styles={}, children }) => {
    return (
        <div className={`dashboardSplitContainer ${type === "full" ? "fullWidth" : type === "half" ? "halfWidth" : ""}`} style={styles}>
            {children}
        </div>
    )
}

export default SplitContainer