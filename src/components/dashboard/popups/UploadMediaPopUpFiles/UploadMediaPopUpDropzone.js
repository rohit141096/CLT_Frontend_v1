import React, { useState, useEffect, useRef } from 'react';
import PlainContainer from '../../../core/containers/PlainContainer';
import TableButton from '../../../../components/core/table/inputs/Button';
import Table from '../../../../components/core/table/containers/Table';
import TableHeading from '../../../../components/core/table/containers/TableHeading';
import TableHeadingItem from '../../../../components/core/table/containers/TableHeadingItem';
import TableRows from '../../../../components/core/table/containers/TableRows';
import TableRow from '../../../../components/core/table/containers/TableRow';
import TableRowItem from '../../../../components/core/table/containers/TableRowItem';
import TableRowActions from '../../../../components/core/table/containers/TableRowActions';
import TableRowIcons from '../../../../components/core/table/containers/TableRowIcons';
import TableRowIcon from '../../../../components/core/table/containers/TableRowIcon';
import TableIconButton from '../../../../components/core/table/inputs/IconButton';
import TableErrorPlain from '../../../../components/core/typography/dashboard/TableErrorPlain';
import TooltipWrapper from '../../../../components/core/tooltip';
import TooltipContent from '../../../../components/core/tooltip/content';
import TooltipContentText from '../../../../components/core/typography/dashboard/TooltipContentText';
import PopUp from '../../../../components/core/popup';
import BasicCropPopUp from '../../../../components/dashboard/popups/BasicCropPopUp';
import { constants, icons } from '../../../../constants';
import { ToastAlert, functions } from '../../../../utils';
import FileServices from '../../../../services/Media/File';

const UploadMediaPopUpDropzone = ({ user, fileType="all", isMultiple=false, maxSelection=1, uploadSuccessHandler }) => {

    const [files, setFiles] = useState([]);
    const [selectedFiles, setSelectedFiles] = useState([]);

    let fileTypes = constants.allowedFileTypes;

    let tempFileTypes = null;

    if(fileType === "all"){
        tempFileTypes = fileTypes;
    }
    else if(fileType === "image"){
        tempFileTypes = fileTypes.filter((e) => e.type === "image");
    }
    else if(fileType === "video"){
        tempFileTypes = fileTypes.filter((e) => e.type === "video");
    }
    else if(fileType === "doc"){
        tempFileTypes = fileTypes.filter((e) => e.type === "document");
    }
    else if(fileType === "audio"){
        tempFileTypes = fileTypes.filter((e) => e.type === "audio");
    }

    const [acceptedFileTypes, setAcceptedFileTypes] = useState(tempFileTypes.map(type => type.mimetype).join());

    const filesInputRef = useRef();

    const [showAvailableFileTypesTooltip, setShowAvailableFileTypesTooltip] = useState(false);
    const [showFileSizeLimitExceededTooltip, setShowFileSizeLimitExceededTooltip] = useState(false);

    const [showImageCropPopUp, setShowImageCropPopUp] = useState(false);
    const [fileToCrop, setFileToCrop] = useState(null);
    const [fileToCropFileData, setFileToCropFileData] = useState(null);

    const [selectedImagesCount, setSelectedImagesCount] = useState(0);
    const [selectedAudiosCount, setSelectedAudiosCount] = useState(0);
    const [selectedVideosCount, setSelectedVideosCount] = useState(0);
    const [selectedDocsCount, setSelectedDocsCount] = useState(0);

    const [uploadedFilesId, setUploadedFilesId] = useState([]);

    const handleFileUpload = (e) => {
        if(e.target.files.length > maxSelection){
            ToastAlert.notifyError(`You can select upto ${maxSelection} files at once.`);
            return
        }
        else{
            let temp_files = [];
            Array.from(e.target.files).forEach(file => temp_files.push(file));

            const temp_selected_files = [...files];
            const selected_files = [...selectedFiles];

            // Step 1 - Loop through each selected file
            temp_files.map((file, i) => {

                let isFileTypeError = false;
                let isFileSizeError = false;

                // Step 1.1 - Check if the file type is allowed to be uploaded
                const thisFileType = file.type;

                const acceptedFileTypesArray = acceptedFileTypes.split(',');
                const fileTypeIndexCheck = acceptedFileTypesArray.indexOf(thisFileType);

                // "fileTypeIndexCheck" will return -1 If not supported & will return 0 to any positive integer if supported.
                if(fileTypeIndexCheck === -1){
                    isFileTypeError = true;
                }
                else{
                    isFileTypeError = false;
                }

                // Step 1.2 - Get the max file size limit defined for this file type.

                let max_upload_size_of_this_file_type;

                if(isFileTypeError === true){
                    max_upload_size_of_this_file_type = 0;
                }
                else{
                    max_upload_size_of_this_file_type = tempFileTypes[fileTypeIndexCheck].max_upload_size;
                }
                
                    
                const selectedFileSizeInMegaBytesWithDecimal = (file.size / (1024*1024)).toFixed(2);

                const selectedFileSizeInMegaBytesWithoutDecimal = Math.floor(selectedFileSizeInMegaBytesWithDecimal);

                // Step 1.3 - Check if the selected file size is lesser than the allowed size.

                if(isFileSizeError === false){
                    if(selectedFileSizeInMegaBytesWithoutDecimal >= max_upload_size_of_this_file_type){
                        isFileSizeError = true;
                    }
                    else{
                        isFileSizeError = false;
                    }
                }
                else{
                    isFileSizeError = false;
                }
                
                // Step 1.4 - Create a preview if the selected file type is image
                
                let selectedFileType;

                if(isFileTypeError === false){
                    selectedFileType = tempFileTypes[fileTypeIndexCheck].type;
                }
                else{
                    selectedFileType = "unkown";
                }

                let preview_file = URL.createObjectURL(file);
                
                // Step 1.5 - Create a new file object which will be used to push to the preview files array

                const file_data = {
                    id: `${Date.now()}${i}`,
                    file: file,
                    name: file.name,
                    document_type: selectedFileType,
                    preview: selectedFileType === "image" ? preview_file : isFileTypeError === false ? tempFileTypes[fileTypeIndexCheck].icon : "",
                    file_path: preview_file,
                    file_size: functions.getReadableFileSize(file.size),
                    max_file_size: max_upload_size_of_this_file_type,
                    show_crop: selectedFileType === "image" ? true : false,
                    // show_preview: selectedFileType === "image" || selectedFileType === "document" ? true : false,
                    show_preview: true,
                    is_file_type_error: isFileTypeError,
                    is_file_size_error: isFileSizeError,
                    is_allowed: isFileTypeError === true || isFileSizeError === true ? false : true,
                    is_uploading: false,
                    is_uploaded: false
                } 

                selected_files.push(file_data);
                temp_selected_files.push(file);
            });

            setSelectedFiles(selected_files);
            setFiles(temp_selected_files);
            filesInputRef.current.value = "";
        }
    }

    const checkFilesCountOfEachFileTypeHandler = () => {
        let temp_selected_images_count = 0;
        let temp_selected_audios_count = 0;
        let temp_selected_videos_count = 0;
        let temp_selected_docs_count = 0;

        selectedFiles.map(s_file => {
            if(s_file.document_type === "image"){
                temp_selected_images_count += 1;
            }
            else if(s_file.document_type === "audio"){
                temp_selected_audios_count += 1;
            }
            else if(s_file.document_type === "video"){
                temp_selected_videos_count += 1;
            }
            else if(s_file.document_type === "document"){
                temp_selected_docs_count += 1;
            }
        });

        setSelectedImagesCount(temp_selected_images_count);
        setSelectedAudiosCount(temp_selected_audios_count);
        setSelectedVideosCount(temp_selected_videos_count);
        setSelectedDocsCount(temp_selected_docs_count);
    }

    useEffect(() => {
        if(selectedFiles.length != 0){
            checkFilesCountOfEachFileTypeHandler();
        }
    }, [selectedFiles]);

    const openFileInNewTab = (file) => {
        window.open(file, '_blank');
    }

    const showAvailableFileTypesTooltipHandler = () => {
        setShowAvailableFileTypesTooltip(showAvailableFileTypesTooltip === true ? false : true);
    }

    const showFileSizeLimitExceededTooltipHandler = () => {
        setShowFileSizeLimitExceededTooltip(showFileSizeLimitExceededTooltip === true ? false : true);
    }

    const cropThisFileHandler = async (file) => {
        const file_url = await functions.convertFileToBase64(file.file);
        setFileToCrop(file_url);
        setFileToCropFileData(file);
        setShowImageCropPopUp(true);
    }

    const handleConcludeCrop = async (e) => {
        if(e.status === false){
            setShowImageCropPopUp(false); 
        }
        else{

            const selectedFileIndex = selectedFiles.findIndex(s_file => s_file.id === fileToCropFileData.id);

            let temp_selected_files = selectedFiles;

            temp_selected_files[selectedFileIndex].preview = e.preview;
            temp_selected_files[selectedFileIndex].file = e.file;

            temp_selected_files[selectedFileIndex].file_path = URL.createObjectURL(e.file);;
            temp_selected_files[selectedFileIndex].file_size = functions.getReadableFileSize(e.file.size)

            setSelectedFiles(temp_selected_files);

            setShowImageCropPopUp(false); 
        }
    }

    const deleteSelectedFileHandler = async (file_id) => {
        const temp_selected_files = [...selectedFiles];
        let selected_file_index = temp_selected_files.findIndex(s_file => s_file.id === file_id);
        temp_selected_files.splice(selected_file_index, 1);
        setSelectedFiles(temp_selected_files);
    }

    const uploadThisFile = async (file_id) => {
        let temp_selected_files = [...selectedFiles];
        let selected_file_index = temp_selected_files.findIndex(s_file => s_file.id === file_id);
        temp_selected_files[selected_file_index].is_uploading = true;
        setSelectedFiles(temp_selected_files);

        const uploadFileReq = await FileServices.saveThisFile({
            file: selectedFiles[selected_file_index],
            token: user.access_token
        });

        console.log(uploadFileReq);

        if(uploadFileReq.status === false){
            if(uploadFileReq.status_code === 403){
                ToastAlert.notifyError(uploadFileReq.message);
                temp_selected_files[selected_file_index].is_uploading = false;
                temp_selected_files[selected_file_index].is_uploaded = false;
                setSelectedFiles(temp_selected_files);
            }
            else{
                ToastAlert.notifyError(uploadFileReq.message);
                temp_selected_files[selected_file_index].is_uploading = false;
                temp_selected_files[selected_file_index].is_uploaded = false;
                setSelectedFiles(temp_selected_files);
            }
        }
        else{

            ToastAlert.notifySuccess("Media upload successfull");
            temp_selected_files[selected_file_index].is_uploading = false;
            temp_selected_files[selected_file_index].is_uploaded = true;
            setSelectedFiles([...temp_selected_files]);
            
            let temp_uploaded_file_ids = [...uploadedFilesId];
            temp_uploaded_file_ids.push(uploadFileReq.data.data);

            console.log(temp_uploaded_file_ids);

            setUploadedFilesId([...temp_uploaded_file_ids]);

            // setShowUploadMediaTab(false);
            // setShowMediaLibraryTab(true);
        }
    }

    useEffect(() => {
        if(selectedFiles.length > 0){
            const checkIfAnyFilePendingUpload = selectedFiles.filter((sf) => sf.is_uploaded === false);
            if(checkIfAnyFilePendingUpload.length === 0){
                uploadSuccessHandler({
                    status: true,
                    id: uploadedFilesId
                });
            }
        }
    }, [selectedFiles])

    return (
        <>
            <div className="uploadFilesDropzonePopUp">
                <div className="uploadFilesDropzonePopUpInner">
                    <div className="uploadFilesDropzonePopUpIcon">
                        <i className={`${fileType === "image" ? icons.image : fileType === "video" ? icons.film : fileType === "doc" ? icons.filePDF : fileType === "audio" ? icons.music : icons.imageVideo} uploadFilesDropzonePopUpIco`}></i>
                    </div>
                    <div className="uploadFilesDropzonePopUpDetails">
                        <div className="uploadFilesDropzonePopUpHeading">
                            <p className="uploadFilesDropzonePopUpHeadingTxt">Drag &amp; Drop or Click To Select File{maxSelection > 1 ? 's' : '' }</p>
                        </div>
                        <div className="uploadFilesDropzonePopUpDescription">
                            {
                                maxSelection > 1
                                ?
                                    <p className="uploadFilesDropzonePopUpDescriptionTxt">You can upload upto {maxSelection > constants.maxFileSelection ? constants.maxFileSelection : maxSelection } files at once.</p>
                                :
                                    <></>
                            }
                            {
                                fileType === "all"
                                ?
                                    <p className="uploadFilesDropzonePopUpDescriptionTxt">Maximum Sizes: Images/Photos: {constants.fileTypeLimits.image} MB, Videos: {constants.fileTypeLimits.video} MB, Documents: {constants.fileTypeLimits.document} MB.</p>
                                :
                                fileType === "image"
                                ?
                                    <p className="uploadFilesDropzonePopUpDescriptionTxt">Maximum Size: Images/Photos: {constants.fileTypeLimits.image} MB</p>
                                :
                                fileType === "video"
                                ?
                                    <p className="uploadFilesDropzonePopUpDescriptionTxt">Maximum Size: Videos: {constants.fileTypeLimits.video} MB</p>
                                :
                                fileType === "doc"
                                ?
                                    <p className="uploadFilesDropzonePopUpDescriptionTxt">Maximum Size: Documents (PDF): {constants.fileTypeLimits.document} MB</p>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>
                <div className="uploadFilesDropzonePopUpInput">
                    <input type="file" className="uploadFilesDropzonePopUpInputFile" accept={acceptedFileTypes} ref={filesInputRef} onChange={(e) => handleFileUpload(e)} multiple={maxSelection > 1 ? true : false} />
                </div>
            </div>

            {
                selectedFiles.length != 0
                ?
                    <PlainContainer type="full" styles={{marginTop: "15px", background: "#fff", overflow: "hidden", borderRadius: "15px"}}>
                        <div className="uploadMediaPopUpSelectedFilesTableContainer">
                            <Table>
                                <TableHeading>
                                    <TableHeadingItem size={5} lable={"File Name"} />
                                    <TableHeadingItem size={1} lable={"File Type"} />
                                    <TableHeadingItem size={1} lable={"File Size"} />
                                    <TableHeadingItem size={1} lable={""} />
                                    <TableHeadingItem size={1} lable={"Actions"} />
                                </TableHeading>
                                {
                                    selectedFiles.length != 0
                                    ?
                                        <TableRows>
                                            {
                                                selectedFiles.map((selectedFile) => {
                                                    return (
                                                        <TableRow isCenter={false} key={selectedFile.id}>
                                                            <TableRowItem size={5} isCenter={false} hasPreview={selectedFile.is_allowed === true ? true : false} previewType={selectedFile.document_type} previewItem={selectedFile.preview} lable={selectedFile.name} isCapital={false} />
                                                            <TableRowItem size={1} isCenter={false} lable={selectedFile.document_type} />
                                                            <TableRowItem size={1} isCenter={false} lable={selectedFile.file_size} />
                                                            <TableRowItem size={1} isCenter={true} hasChildren={true}>
                                                                <TableRowIcons>
                                                                    {
                                                                        selectedFile.show_crop === true && selectedFile.is_allowed === true
                                                                        ?
                                                                            <TableRowIcon icon={icons.crop} color={"dark"} action={() => cropThisFileHandler(selectedFile)} />
                                                                        :
                                                                            <></>
                                                                    }
                                                                    <TableRowIcon icon={icons.eye} color={"dark"} action={ ()=> openFileInNewTab(selectedFile.file_path) } />
                                                                </TableRowIcons>
                                                            </TableRowItem>
                                                            <TableRowItem size={1} isCenter={false} hasChildren={true}>
                                                                <TableRowActions>
                                                                    {
                                                                        selectedFile.is_allowed === true
                                                                        ?
                                                                            <>
                                                                                {
                                                                                    selectedFile.is_uploaded === false
                                                                                    ?
                                                                                        <>
                                                                                            <TableIconButton icon={icons.upload} iconPosition={"left"} hasIcon={true} isLoading={selectedFile.is_uploading ? true : false} bg={"dashboard"} action={() => uploadThisFile(selectedFile.id)}></TableIconButton>
                                                                                            <TableIconButton icon={icons.removePlain} iconPosition={"left"} hasIcon={true} bg={"error"} disabled={selectedFile.is_uploading ? true : false} action={() => deleteSelectedFileHandler(selectedFile.id)}></TableIconButton>
                                                                                        </>
                                                                                    :
                                                                                        <></>
                                                                                }
                                                                                
                                                                            </>
                                                                        :
                                                                            <>
                                                                                {
                                                                                    selectedFile.is_file_type_error === true
                                                                                    ?
                                                                                        <TooltipWrapper>
                                                                                            <TableErrorPlain lable='File type not supported!' action={showAvailableFileTypesTooltipHandler} />
                                                                                            <TooltipContent 
                                                                                                showContent={showAvailableFileTypesTooltip} 
                                                                                                width="small" 
                                                                                                position="topRight" 
                                                                                                bg="lightBg" 
                                                                                                border="curvedBorder" 
                                                                                                shadow="defaultShadow"
                                                                                                action={() => showAvailableFileTypesTooltipHandler(false)}
                                                                                            >
                                                                                                <TooltipContentText content={`Available file types comes here!`} />
                                                                                            </TooltipContent>
                                                                                        </TooltipWrapper>
                                                                                        
                                                                                    :
                                                                                    selectedFile.is_file_size_error === true
                                                                                    ?
                                                                                        <TooltipWrapper>
                                                                                            <TableErrorPlain lable='File size limit exceeded!' action={showFileSizeLimitExceededTooltipHandler} />
                                                                                            <TooltipContent 
                                                                                                showContent={showFileSizeLimitExceededTooltip} 
                                                                                                width="small" 
                                                                                                position="topRight" 
                                                                                                bg="lightBg" 
                                                                                                border="curvedBorder" 
                                                                                                shadow="defaultShadow"
                                                                                                action={() => showFileSizeLimitExceededTooltipHandler(false)}
                                                                                            >
                                                                                                <TooltipContentText content={`${selectedFile.document_type} should be below ${selectedFile.max_file_size} MB.`} />
                                                                                            </TooltipContent>
                                                                                        </TooltipWrapper>
                                                                                        
                                                                                    :
                                                                                    <></>
                                                                                }
                                                                                <TableIconButton icon={icons.removePlain} iconPosition={"left"} bg={"error"} action={() => deleteSelectedFileHandler(selectedFile.id)} />
                                                                            </> 
                                                                    }
                                                                </TableRowActions>
                                                            </TableRowItem>
                                                        </TableRow>
                                                    )
                                                })
                                            }
                                        </TableRows>
                                    :
                                        <></>
                                }
                            </Table>
                        </div>
                    </PlainContainer>
                :
                    <></>
            }

            {
                showImageCropPopUp === true
                ?
                    <PopUp heading="Crop Image" hasActions={false} closePopUp={() => setShowImageCropPopUp(false)}>
                        <BasicCropPopUp fileToCrop={fileToCrop} fileData={fileToCropFileData} concludeCropPopUp={(e) => handleConcludeCrop(e)} />
                    </PopUp>
                :
                    <></>
            }
        </>
    )
}

export default UploadMediaPopUpDropzone