import React, { useState, useEffect } from 'react';
import { icons } from '../../../constants';

const SelectInput = ({
    isMandatory=false,
    hasLable=true, 
    lable="", 
    hasIcon=false, 
    icon="",
    iconType="",
    hasMessage=false,
    messageType="",
    message="",
    toggleIco=false,
    children
 }) => {

    const [iconClass, setIconClass] = useState('');

    useEffect(() => {
        let icoType = iconType === "error" ? ` error` : iconType === "warning" ? ` warning` : iconType === "success" ? ` success` : '';
        setIconClass(`${icon} cmsFormStepInputIco${icoType}`);
    }, [icon, iconType]);

    return (
        <>
            <div className="cmsFormStep">
                {
                    hasLable === true
                    ?
                    <div className="cmsFormStepLable">
                        <p className="cmsFormStepLableTxt">{lable}</p>
                        {
                            isMandatory
                            ?
                            <i className="fa-solid fa-star-of-life cmsFormStepLableMandatoryIco"></i>
                            :
                            <></>
                        }
                    </div>
                    :
                    <></>
                }
                
                <div className={`cmsFormStepInput ${hasIcon ? 'hasIcon' : <></>} 'icoLeft'`}>
                    {children}
                    <div className="cmsFormStepSelectToggleIcon">
                        <i className={`${icons.downArrow} cmsFormStepSelectToggleIco`}></i>
                    </div>
                    {
                        hasIcon
                        ?
                        <div className="cmsFormStepInputIcon">
                            <i className={iconClass}></i>
                        </div>
                        :
                        <></>
                    }
                </div>
                {
                    hasMessage
                    ?
                    <div className="cmsFormStepMessage">
                        <p className={
                            messageType === 'error' ? `cmsFormStepMessageTxt error` : 
                            messageType === 'warning' ? `cmsFormStepMessageTxt warning` :
                            messageType === 'success' ? `cmsFormStepMessageTxt success` : `cmsFormStepMessageTxt`
                            }>
                            {message}
                        </p>
                    </div>
                    :
                    <></>
                }
            </div>
        </>
    )
};

export default SelectInput