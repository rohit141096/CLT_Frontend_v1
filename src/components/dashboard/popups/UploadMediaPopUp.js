import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'
import Button from '../../core/dashboard/Button';
import { constants, icons } from '../../../constants';

import Card from '../../core/dashboard/Card';
import UploadMediaPopUpMediaLibrary from './UploadMediaPopUpFiles/UploadMediaPopUpMediaLibrary';
import UploadMediaPopUpDropzone from './UploadMediaPopUpFiles/UploadMediaPopUpDropzone';

const UploadMediaPopUp = ({ user, fileType="all", isMultiple=false, maxSelection=1, concludeUploadMediaPopUp }) => {

    const [showUploadMediaTab, setShowUploadMediaTab] = useState(true);
    const [showMediaLibraryTab, setShowMediaLibraryTab] = useState(false);

    const [uploadedFileIds, setUploadedFileIds] = useState([]);
    const [selectedFileIds, setSelectedFileIds] = useState([]);
    const [selectedFilePreview, setSelectedFilePreview] = useState(null);
    const [selectedFilePreviewType, setSelectedFilePreviewType] = useState(null);

    const handleShowUploadMedia = () => {
        setUploadedFileIds([]);
        setSelectedFileIds([]);
        setShowMediaLibraryTab(false);
        setShowUploadMediaTab(true);
    }

    const handleShowMediaLibrary = () => {
        setShowUploadMediaTab(false);
        setShowMediaLibraryTab(true);
    }

    const handleUploadSuccessResponse = (e) => {
        if(e.status === true){
            let temp_uploaded_file_ids = [];
            e.id.map((this_id) => {
                temp_uploaded_file_ids.push(this_id);
            });
            setUploadedFileIds([...temp_uploaded_file_ids]);
            setSelectedFileIds([...temp_uploaded_file_ids]);
            setShowUploadMediaTab(false);
            setShowMediaLibraryTab(true);
        }
    }

    const handleFileSelectedResponse = (e) => {
        if(e.status === true){
            let temp_selected_file_ids = [...selectedFileIds];
            temp_selected_file_ids.push(e.id);
            setSelectedFileIds([...temp_selected_file_ids]);
        }
        else{
            setSelectedFileIds([]);
        }
    }

    const handleFileDeSelectedResponse = (e) => {
        let temp_selected_file_ids = [];
        selectedFileIds.map((this_id) => {
            if(this_id != e.id){
                temp_selected_file_ids.push(this_id);
            }
        });
        setSelectedFileIds([...temp_selected_file_ids]);
    }

    const [submitButtonHasIcon, setButtonHasIcon] = useState(false);
    const [submitButtonIconPosition, setButtonIconPosition] = useState('left');
    const [submitButtonIco, setButtonIco] = useState(icons.tick);
    const [submitButtonLable, setSubmitButtonLable] = useState("Submit");
    const [submitButtonBg, setSubmitButtonBg] = useState("dashboard");

    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(selectedFileIds.length === 0 ? true : false);
    const [submitButtonLoading, setSubmitButtonLoading] = useState(false);

    const [cancelButtonLable, setCancelButtonLable] = useState("Cancel");
    const [cancelButtonBg, setCancelButtonBg] = useState("error");

    const handleConcludeMediaSelection = () => {
        concludeUploadMediaPopUp({
            status: true,
            file_id: selectedFileIds,
            file_preview: selectedFilePreview,
            preview_type: selectedFilePreviewType
        });
    }

    const handleCloseMediaSelection = () => {
        concludeUploadMediaPopUp({
            status: false
        });
    }

    useEffect(() => {
        if(selectedFileIds.length > 0){
            setSubmitButtonDisabled(false);
        }
        else{
            setSubmitButtonDisabled(true);
        }
    }, [selectedFileIds]);

    return (
        <>
            <div className="cmsDashboardPopUpContentUploadMedia">
                <div className="cmsDashboardPopUpContentUploadMediaInner">
                    <div className="cmsDashboardPopUpContentUploadMediaTabsContent">
                        <div className="cmsDashboardPopUpContentUploadMediaTabs">
                            <div className="cmsDashboardPopUpContentUploadMediaTabsList">
                                <div className={`cmsDashboardPopUpContentUploadMediaTabsListItem ${showUploadMediaTab ? 'active' : ''}`} onClick={() => handleShowUploadMedia()}>
                                    <p className="cmsDashboardPopUpContentUploadMediaTabsListItemTxt">upload media</p>
                                </div>
                                <div className={`cmsDashboardPopUpContentUploadMediaTabsListItem ${showMediaLibraryTab ? 'active' : ''}`} onClick={() => handleShowMediaLibrary()}>
                                    <p className="cmsDashboardPopUpContentUploadMediaTabsListItemTxt">media library</p>
                                </div>
                            </div>
                        </div>
                        <div className="cmsDashboardPopUpContentUploadMediaContent" style={{borderRadius: showUploadMediaTab === false ? '10px' : '0px 10px 10px 10px'}}>
                            <div className="cmsDashboardPopUpContentUploadMediaTab">
                                <div className="cmsDashboardPopUpContentUploadMediaTabSelect">
                                    {
                                        showUploadMediaTab
                                        ?
                                        <>
                                            <UploadMediaPopUpDropzone user={user} fileType={fileType} isMultiple={isMultiple} maxSelection={maxSelection} uploadSuccessHandler={(e) => handleUploadSuccessResponse(e)} />
                                        </>
                                        :
                                        <>
                                            <UploadMediaPopUpMediaLibrary user={user} fileType={fileType} isMultiple={isMultiple} maxSelection={maxSelection} uploadedFiles={selectedFileIds} fileSelectedHandler={(e) => handleFileSelectedResponse(e)} fileDeSelectedHandler={(e) => handleFileDeSelectedResponse(e) } />
                                        </>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cmsDashboardPopUpContentUploadMediaActions">
                    <div className="cmsDashboardPopUpContentUploadMediaActionsMain">
                        <Button 
                            type="button"
                            bgType="fill"
                            width="auto"
                            bg={submitButtonBg}
                            borderRadius="short"
                            hasIcon={submitButtonHasIcon}
                            iconPosition={submitButtonIconPosition}
                            icon={submitButtonIco}
                            disabled={submitButtonDisabled}
                            isLoading={submitButtonLoading}
                            action={() => handleConcludeMediaSelection()}
                        >
                            {submitButtonLable}
                        </Button>
                        <Button 
                            type="button"
                            bgType="fill"
                            width="auto"
                            bg={cancelButtonBg}
                            borderRadius="short"
                            action={() => handleCloseMediaSelection()}
                        >
                            {cancelButtonLable}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadMediaPopUp
