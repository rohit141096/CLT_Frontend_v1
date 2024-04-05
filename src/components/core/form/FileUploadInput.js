import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PopUp from '../popup';
import UploadMediaPopUp from '../../dashboard/popups/UploadMediaPopUp';
import FileServices from '../../../services/Media/File';
import { globals } from '../../../utils';
import { icons } from '../../../constants';

const FileUploadInput = ({ data, user, lable, acceptedFileType, isMultiple, maxSelection, isError, action }) => {

    const [showAddMediaPopUp, setShowAddMediaPopUp] = useState(false);

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [selectedFileType, setSelectedFileType] = useState("");
    const [selectedFilePreview, setSelectedFilePreview] = useState("");
    const [selectedFilesCount, setSelectedFilesCount] = useState(0);

    useEffect(() => {
        if(data !== null){
            setSelectedFiles(data.files);
            setSelectedFileType(data.file_type);
            setSelectedFilePreview(data.file_preview);
            setSelectedFilesCount(data.files_count);
        }
        else{
            setSelectedFiles("");
            setSelectedFileType("");
            setSelectedFilePreview("");
            setSelectedFilesCount(0);
        }
    }, [data]);

    const handleConcludeUploadMedia = async (e) => {

        if(e.status === false){
            action({
                status: false,
                files: []
            });
            setShowAddMediaPopUp(false);
        }
        else{
            if(e.file_id.length > 0){
                const filePreviewReq = await FileServices.getThisAuthFile({
                    id: e.file_id[0],
                    token: user.access_token
                });

                if(filePreviewReq.status === true){
                    setSelectedFiles([...e.file_id]);
                    setSelectedFilePreview(
                        filePreviewReq.data.file_type === "image" ? `${globals.MEDIA_API_BASE_URL}${filePreviewReq.data.image_url.thumbnail.low_res}`
                        :
                        filePreviewReq.data.file_type === "video" ? `${globals.MEDIA_API_BASE_URL}${filePreviewReq.data.video_url.thumbnail.low_res}`
                        :
                        filePreviewReq.data.file_type === "document" ? `${icons.filePDF}`
                        :
                        filePreviewReq.data.file_type === "other" ? `${icons.fileBasic}`
                        :
                        `${icons.fileBasic}`
                    );
                    setSelectedFileType(filePreviewReq.data.file_type);
                    setSelectedFilesCount(e.file_id.length);
                }
                setShowAddMediaPopUp(false);

                action({
                    status: true,
                    files: e.file_id
                });
            }
            else{
                action({
                    status: false,
                    files: []
                });
                setShowAddMediaPopUp(false);
            }
        }
    }

    const handleRemoveSelectedMedia = () => {
        setSelectedFiles([]);
        setSelectedFileType("");
        setSelectedFilePreview("");
        setSelectedFilesCount(0);

        action({
            status: false,
            files: []
        });
    }

    return (
        <>
            <div className="mediaUploadFormElementContainer">
                <motion.div className="mediaUploadFormElement" whileHover={{y: -2,scale: 1.02}}>
                    {
                        selectedFilesCount > 0
                        ?
                        <>
                            <div className="mediaUploadFormSelectionPreview">
                                <div className="mediaUploadFormSelectionPreviewAction" onClick={() => handleRemoveSelectedMedia()}>
                                    <div className="mediaUploadFormSelectionPreviewActionInner">
                                        <div className="mediaUploadFormSelectionPreviewActionIcon">
                                            <i className={`${icons.removeSolidStyledUp} mediaUploadFormSelectionPreviewActionIco`}></i>
                                        </div>
                                        <div className="mediaUploadFormSelectionPreviewActionLable">
                                            <p className="mediaUploadFormSelectionPreviewActionLableTxt">remove</p>
                                        </div>
                                    </div>
                                </div>
                                {
                                    acceptedFileType === "image" || acceptedFileType === "video"
                                    ?
                                    <div className="mediaUploadFormSelectionPreviewSingleImage">
                                        <div className="cmsDashboardTableRowItemPreviewSingleImageMain">
                                            <img src={selectedFilePreview} className="cmsDashboardTableRowItemPreviewSingleImageMainImg" alt="" />
                                        </div>
                                    </div>
                                    :
                                    <div className="mediaUploadFormSelectionPreviewSingleIcon">
                                        <i className={`${selectedFilePreview} mediaUploadFormSelectionPreviewSingleIco`}></i>
                                    </div>
                                }
                            </div>
                        </>
                        :
                        <div className="mediaUploadFormElementSelection" onClick={() => setShowAddMediaPopUp(true)}>
                            <div className="mediaUploadFormElementIcon">
                                <i className={`${acceptedFileType === "image" ? icons.image : 
                                                    acceptedFileType === "video" ? icons.film : 
                                                    acceptedFileType === "doc" ? icons.filePDF : 
                                                    acceptedFileType === "audio" ? icons.music : 
                                                    acceptedFileType === "all" ? icons.imageVideo : 
                                                    icons.imageVideo} mediaUploadFormElementIco`
                                }></i>
                            </div>
                        </div>
                    }
                </motion.div>

                {
                    isError === true
                    ?
                    <div className="mediaUploadFormError">
                        <p className="mediaUploadFormErrorTxt error">file is Required</p>
                    </div>
                    :
                    <></>
                }
            </div>
            

            {
                showAddMediaPopUp === true
                ?
                    <PopUp heading={`Select ${lable}`} hasActions={false} closePopUp={() => setShowAddMediaPopUp(false)}>
                        <UploadMediaPopUp user={user} fileType={acceptedFileType} isMultiple={isMultiple} maxSelection={maxSelection} concludeUploadMediaPopUp={(e) => handleConcludeUploadMedia(e)} />
                    </PopUp>
                :
                    <></>
            }
        </>
    )
}

export default FileUploadInput