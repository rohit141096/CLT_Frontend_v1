import React from 'react'

const TableRowIcon = ({ icon, color, action=()=>console.log() }) => {
    return (
        <div className="cmsDashboardTableRowIconSingle" onClick={action}>
            <i className={`${icon} cmsDashboardTableRowIconSingleIco ${color === "dark" ? "dark" : "light"}`}></i>
        </div>
    )
}

export default TableRowIcon