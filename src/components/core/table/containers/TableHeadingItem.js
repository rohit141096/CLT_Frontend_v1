import React from 'react'
import TableHeadingLable from '../../typography/dashboard/TableHeadingLable'

const TableHeadingItem = ({size, lable, isIcon=false, icon, hasChildren=false, children}) => {
    return (
        <div className={`cmsDashboardTableHeadingItem col-${size}`}>
            {
                hasChildren === true
                ?
                <>
                    {children}
                </>
                :
                    <>
                        {
                            isIcon === false
                            ?
                                <TableHeadingLable>{lable}</TableHeadingLable>
                            :
                                <i className={`cmsDashboardTableHeadingItemIco ${icon}`}></i>
                        }
                    </>
                    
            }
        </div>
    )
}

export default TableHeadingItem