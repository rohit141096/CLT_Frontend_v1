import React from 'react'

const TableCheckbox = ({ name }) => {
    return (
        <div className="cmsDashboardTableCheckbox">
            <input id={name} type="checkbox"/>
            <label className="cbx" htmlFor={name}>
                <div className="flip">
                    <div className="front"></div>
                    <div className="back">
                        <svg width="16" height="14" viewBox="0 0 16 14">
                            <path d="M2 8.5L6 12.5L14 1.5"></path>
                        </svg>
                    </div>
                </div>
            </label>
        </div>
    )
}

export default TableCheckbox