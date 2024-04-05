import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Card from '../../../core/dashboard/Card'
import { icons } from '../../../../constants'
import FileServices from '../../../../services/Media/File'
import { globals, ToastAlert } from '../../../../utils'

const UploadMediaPopUpMediaLibrary = ({ user, fileType, isMultiple, maxSelection, uploadedFiles=[], fileSelectedHandler, fileDeSelectedHandler }) => {

    const [files, setFiles] = useState([]);
    const [totalFilesCount, setTotalFilesCount] = useState(0);
    const [totalFilePagesCount, setTotalFilePagesCount] = useState(0);
    const [currentFilePage, setCurrentFilePage] = useState(1);

    const [uploadedFilesIds, setUploadedFilesIds] = useState([]);

    const handleGetFilesRequest = async () => {

        const getFilesReq = await FileServices.getAllAuthFiles({
            token: user.access_token,
            current_page: currentFilePage,
            belongs_to_folder: true,
            media_types: fileType !== "ALL" && fileType !== "all" ? [`${fileType}`] : fileType,
            created_on: "RECENT",
            created_by: null
        });

        if(getFilesReq.status === false){
            ToastAlert.notifyError(getFilesReq.message);
            setFiles([]);
            setTotalFilesCount(0);
            setTotalFilePagesCount(0);
            setCurrentFilePage(1);
        }
        else{
            if(getFilesReq.data.items.length > 0){

                const temp_files = [];

                if(uploadedFiles.length > 0){
                    const temp_uploaded_files_ids = [];
                    uploadedFiles.map(uf => {
                        temp_uploaded_files_ids.push(uf);
                    });

                    setUploadedFilesIds(temp_uploaded_files_ids);

                    await Promise.all(getFilesReq.data.items.map((item) => {
                        const isItemNewlyUploadedFile = temp_uploaded_files_ids.includes(item._id);
                        if(isItemNewlyUploadedFile === true){
                            let item_data = {...item};
                            item_data.is_selected = true;
                            temp_files.push(item_data);
                        }
                        else{
                            let item_data = {...item};
                            item_data.is_selected = false;
                            temp_files.push(item_data);
                        }
                    }));
                }
                else{
                    await Promise.all(getFilesReq.data.items.map((item) => {
                        let item_data = {...item};
                        item_data.is_selected = false;
                        temp_files.push(item_data);
                    }));
                }

                setFiles(temp_files);
                setTotalFilesCount(getFilesReq.data.total_items);
                setTotalFilePagesCount(getFilesReq.data.total_pages);
                setCurrentFilePage(getFilesReq.data.current_page);
            }
            else{
                setFiles([]);
                setTotalFilesCount(0);
                setTotalFilePagesCount(0);
                setCurrentFilePage(1);
            }
        }
    }

    useEffect(() => {
        handleGetFilesRequest();
    }, [currentFilePage]);

    const handleSelectThisFile = async (e, currentStatus) => {
        console.log(e.image_url.thumbnail.low_res);

        if(currentStatus === false){
    
            const temp_files = [...files];

            if(maxSelection === 1){
                fileSelectedHandler({
                    status: true,
                    id: e._id,
                    preview_type: e.file_type === "image" ? "image" : e.file_type === "video" ? "video" : "doc",
                    preview: e.file_type === "image" ? e.image_url.thumbnail.low_res : e.file_type === "video" ? e.video_url.thumbnail.low_res : ""
                });

                await Promise.all(temp_files.map((item) => {
                    if(item._id == e._id){
                        item.is_selected = true;
                    }
                    else{
                        item.is_selected = false;
                    }
                }));
            }
            else{
                if(uploadedFiles.length === maxSelection){
                    ToastAlert.notifyError(`You can select upto ${maxSelection} files.`);
                    return
                }
                else{
                    fileSelectedHandler({
                        status: true,
                        id: e._id,
                        preview_type: e.file_type === "image" ? "image" : e.file_type === "video" ? "video" : "doc",
                        preview: e.file_type === "image" ? e.image_url.thumbnail.low_res : e.file_type === "video" ? e.video_url.thumbnail.low_res : ""
                    });

                    await Promise.all(temp_files.map((item) => {
                        if(item._id == e._id){
                            item.is_selected = true;
                        }
                    }));
                }
            }
    
            setFiles(temp_files);
        }
        else{
            fileDeSelectedHandler({
                id: e._id
            });

            const temp_files = [...files];
    
            await Promise.all(temp_files.map((item) => {
                if(item._id == e._id){
                    item.is_selected = false;
                }
            }));
    
            setFiles(temp_files);
        }
    }

    return (
        <div className="mediaLibraryPopUp">
            <div className="mediaLibraryPopUpList">
                {
                    files.map((file, i) => {
                        return (
                            <motion.div key={i} className="mediaLibraryPopUpListItem" whileHover={{ scale: 1.05 }} onClick={(e) => handleSelectThisFile(file, file.is_selected)}>
                                {
                                    file.is_selected === true
                                    ?
                                    <div className="mediaLibraryPopUpListItemSelected">
                                        <i className={`${icons.tickCircleSolid} mediaLibraryPopUpListItemSelectedIco`}></i>
                                    </div>
                                    :
                                    <></>
                                }
                                
                                <Card hasHeading={false} heading={``} isHeadingAction={false} headingActionIcon={icons.warningCircle}>
                                    <div className="mediaLibraryPopUpListItemFileType">
                                        <div className="mediaLibraryPopUpListItemFileType">
                                            {/* <div className="mediaLibraryPopUpListItemFileTypeIcon">
                                                <i className={`${icons.filePDF} mediaLibraryPopUpListItemFileTypeIco`}></i>
                                            </div> */}
                                            <div className="mediaLibraryPopUpListItemFileTypeImage">
                                                <div className="mediaLibraryPopUpListItemFileTypeImageInner">
                                                    <div className="mediaLibraryPopUpListItemFileTypeImageContainer" style={{backgroundImage: `url(${globals.MEDIA_API_BASE_URL}${file.image_url.thumbnail.low_res})`}}>&nbsp;</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mediaLibraryPopUpListItemFileDetails">
                                            <div className="mediaLibraryPopUpListItemFileName">
                                                <p className="mediaLibraryPopUpListItemFileNameTxt">{file.name.current}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UploadMediaPopUpMediaLibrary