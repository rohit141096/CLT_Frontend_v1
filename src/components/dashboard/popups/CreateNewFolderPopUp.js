import React, { useState } from 'react'
import TextInputRT from '../../core/form/TextInputRT'
import { icons, inputs } from '../../../constants';
import Form from '../../form/Form';
import Button from '../../core/dashboard/Button';
import FormActions from '../../form/FormActions';
import { ToastAlert, statusCodes, validations } from '../../../utils';
import { FolderServices } from '../../../services';

const CreateNewFolderPopUp = ({ user, concludeNewFolderPopUp }) => {

    const [folderName, setFolderName] = useState("");
    const [hasFolderNameMessage, setHasFolderNameMessage] = useState(false);
    const [folderNameMessage, setFolderNameMessage] = useState("");
    const [folderNameMessageType, setFolderNameMessageType] = useState("");

    const [submitButtonLable, setSubmitButtonLable] = useState("Submit");
    const [submitButtonBg, setSubmitButtonBg] = useState("dashboard");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);
    const [submitButtonLoading, setSubmitButtonLoading] = useState(false);

    const [cancelButtonLable, setCancelButtonLable] = useState("Cancel");
    const [cancelButtonBg, setCancelButtonBg] = useState("error");

    const [folderNameAlreadyExist, setFolderNameAlreadyExist] = useState(false);

    const handleFolderNameChanged = async (e, input) => {
        if(e.length > 0){
            if(e.length <= inputs.folderName.max_characters){
                const isFolderNameValid = await validations.validateFolderName(e);
                if(isFolderNameValid.status === true){
                    setFolderName(e);

                    const checkFolderNameAvailabilityReq = await FolderServices.checkFolderNameAvailability({
                        name: e,
                        token: user.access_token
                    });

                    if(checkFolderNameAvailabilityReq.status === false){
                        if(checkFolderNameAvailabilityReq.status_code === 403){
                            setHasFolderNameMessage(true);
                            setFolderNameMessage("Folder with same name already exists.");
                            setFolderNameMessageType("error");
                            setSubmitButtonDisabled(true);
                            setFolderNameAlreadyExist(true);
                        }
                        else{
                            ToastAlert.notifyError(checkFolderNameAvailabilityReq.message);
                            setSubmitButtonLoading(false);
                            setSubmitButtonDisabled(true);
                            setFolderNameAlreadyExist(false);
                        }
                    }
                    else{
                        setHasFolderNameMessage(false);
                        setFolderNameMessage("");
                        setFolderNameMessageType("");
                        setSubmitButtonLoading(false);
                        setSubmitButtonDisabled(false);
                        setFolderNameAlreadyExist(false);
                    }
                }
            }
            else{
                setHasFolderNameMessage(true);
                setFolderNameMessage(`Name Cannot Exceed ${inputs.folderName.max_characters} Characters.`);
                setFolderNameMessageType("error");
            }
        }
        else{
            setFolderName(e);
            setSubmitButtonDisabled(true);
        }
    }
    
    const handleSubmitCreateFolder = async (e) => {
        e.preventDefault();

        setSubmitButtonLoading(true);
        setSubmitButtonDisabled(true);

        if(folderName.length <= inputs.folderName.max_characters){
            if(folderNameAlreadyExist === false){
                const isFolderNameValid = await validations.validateFolderName(folderName);
                if(isFolderNameValid.status === true){
                    const createNewFolderReq = await FolderServices.createNewFolder({
                        name: folderName,
                        token: user.access_token
                    });

                    if(createNewFolderReq.status === false){
                        ToastAlert.notifyError(createNewFolderReq.message);
                        setSubmitButtonLoading(false);
                    }
                    else{
                        ToastAlert.notifySuccess(createNewFolderReq.message);
                        setSubmitButtonLoading(false);
                        concludeNewFolderPopUp({
                            status: true
                        });
                    }
                }
            }
        }
    }

    return (
        <div className="cmsDashboardPopUpContentCreateFolder">
            <Form action={(e)=> handleSubmitCreateFolder(e)} >
                <TextInputRT 
                    hasLable={inputs.folderName.hasLable}
                    lable={inputs.folderName.lable}
                    isMandatory={inputs.folderName.is_mandatory}
                    hasMessage={hasFolderNameMessage}
                    message={folderNameMessage}
                    messageType={folderNameMessageType}
                    isLimited={inputs.folderName.is_limited}
                    limit={inputs.folderName.max_characters}
                    value={folderName}
                >
                    <input 
                        type={inputs.folderName.type} 
                        className="cmsFormStepInputText" 
                        placeholder={inputs.folderName.placeholder}
                        onChange={(e) => handleFolderNameChanged(e.target.value)}
                        value={folderName}
                    />
                </TextInputRT>

                <FormActions>
                    <Button 
                        type="submit"
                        bgType="fill"
                        width="auto"
                        bg={submitButtonBg}
                        borderRadius="short"
                        disabled={submitButtonDisabled}
                        isLoading={submitButtonLoading}
                    >
                        {submitButtonLable}
                    </Button>
                    <Button 
                        type="button"
                        bgType="fill"
                        width="auto"
                        bg={cancelButtonBg}
                        borderRadius="short"
                        action={() => concludeNewFolderPopUp({
                            status: false
                        })}
                    >
                        {cancelButtonLable}
                    </Button>
                </FormActions>
            </Form>
                    
        </div>
    )
}

export default CreateNewFolderPopUp