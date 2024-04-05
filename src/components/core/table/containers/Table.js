import React from 'react'

const Table = ({ children }) => {
    return (
        <div className="cmsDashboardTableContainer">
            <div className="cmsDashboardTable">
                {children}
            </div>
        </div>
    )
}

export default Table