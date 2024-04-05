import React from 'react'

const TableRow = ({ isCenter=false, children }) => {
    return (
        <div className="cmsDashboardTableRow">
            {children}
        </div>
    )
}

export default TableRow