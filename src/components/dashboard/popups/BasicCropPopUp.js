import React from 'react'
import BasicImageCrop from '../common/ImageCrop/BasicImageCrop'

const BasicCropPopUp = ({ fileToCrop, fileData, concludeCropPopUp }) => {
    return (
        <div className="cmsDashboardPopUpContentCrop">
            <BasicImageCrop url={fileToCrop} file={fileData} concludeCrop={ (e) => concludeCropPopUp(e) } />
        </div>
    )
}

export default BasicCropPopUp