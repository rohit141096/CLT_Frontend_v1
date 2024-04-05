import React from 'react'

const TableRowImage = ({src}) => {
    return (
        <div className="cmsDashboardTableRowItemImage center">
            <div className="cmsDashboardTableRowItemImageMain">
                <img src={src?.url} className="cmsDashboardTableRowItemImg" alt={src?.alt_text} />
            </div>
        </div>
    )
}

export default TableRowImage