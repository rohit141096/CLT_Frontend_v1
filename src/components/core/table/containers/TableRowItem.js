import React from 'react'
import TableItemPreview from './TableItemPreview'
import TableLable from '../../typography/dashboard/TableLable'

const TableRowItem = ({size=1, lable, isCenter=false, isCapital=true, hasPreview=false, previewType, previewItem, hasChildren=false, children}) => {
    return (
        <div className={`cmsDashboardTableRowItem ${isCenter === true ? "center" : "vCenter"} col-${size}`}>
            <div className={`cmsDashboardTableRowItemInner ${isCenter === true ? "center" : "vCenter"}`}>
                <div className={`cmsDashboardTableRowItemContent ${isCenter === true ? "center" : "vCenter"} ${hasPreview === true ? "hasPreview" : ""}`}>
                    {
                        hasChildren === false
                        ?
                            <>
                                {
                                    hasPreview === true
                                    ?
                                        <TableItemPreview previewType={previewType} previewItem={previewItem} />
                                    :
                                        <></>
                                }
                                <div className="cmsDashboardTableRowItemLable">
                                    <TableLable isCapital={isCapital}>{lable}</TableLable>
                                </div>
                            </>
                        :
                            children
                    }
                </div>
            </div>
        </div>
    )
}

export default TableRowItem