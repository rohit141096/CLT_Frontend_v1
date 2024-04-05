import React from 'react'

const TableItemPreview = ({ previewType, previewItem }) => {
    return (
        <div className="cmsDashboardTableRowItemPreview">
            <div className="cmsDashboardTableRowItemPreviewInner">
                {
                    previewType === "image"
                    ?
                    <div className="cmsDashboardTableRowItemPreviewImage">
                        <img src={previewItem} className="cmsDashboardTableRowItemPreviewImg" />
                    </div>
                    :
                    <div className="cmsDashboardTableRowItemPreviewIcon">
                        <i className={`cmsDashboardTableRowItemPreviewIco ${previewItem}`}></i>
                    </div>
                }
            </div>
        </div>
    )
}

export default TableItemPreview