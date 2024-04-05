import React from 'react'

const TableLable = ({ isCapital=true, isClickable=false, action=()=>console.log(), children }) => {
    return (
        <p className={`cmsDashboardTableRowItemLableTxt ${isCapital === false ? "emailTxt" : ""} ${isClickable === true ? "clickable" : ""}`}>{children}</p>
    )
}

export default TableLable