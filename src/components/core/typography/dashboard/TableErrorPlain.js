import React from 'react'

const TableErrorPlain = ({ lable="", isClickable=false, action=()=>console.log() }) => {
    return (
        <div className="cmsDashboardTableRowErrorPlain" onClick={action}>
            <p className="cmsDashboardTableRowErrorPlainTxt">{lable}</p>
        </div>
    )
}

export default TableErrorPlain