import React, { useState, useEffect, forwardRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TextInputRT = ({
    isMandatory=false,
    hasLable=true, 
    lable="", 
    showLable=false, 
    placeholder="", 
    type="", 
    hasIcon=false, 
    icon="",
    iconPosition="right",
    iconType="",
    isIconClickable=false,
    iconAction= () => console.log(''),
    hasMessage=false,
    messageType="",
    message="",
    isLimited=false,
    limit=0,
    value="",
    children
}) => {


    const [iconClass, setIconClass] = useState('');
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setPercentage(value.length / limit * 100);
    }, [value]);

    useEffect(() => {
        let iconClickable = isIconClickable === true ? ` clickable` : ``;
        let icoType = iconType === "error" ? ` error` : iconType === "warning" ? ` warning` : iconType === "success" ? ` success` : '';
        setIconClass(`${icon} cmsFormStepInputIco${iconClickable}${icoType}`);
    }, [hasIcon, icon, isIconClickable, iconType]);

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
                
                <div className={`cmsFormStepInput ${hasIcon ? 'hasIcon' : <></>} ${iconPosition === "right" ? 'icoRight' : iconPosition === "left" ? 'icoLeft' : 'icoRight'} ${isLimited === true ? "isLimited" : ""}`}>
                    {children}
                    {
                        isLimited === false
                        ?
                        <>
                            {
                                hasIcon
                                ?
                                <div className="cmsFormStepInputIcon">
                                    <i className={iconClass}></i>
                                </div>
                                :
                                <></>
                            }
                        </>
                        :
                        <>
                            {
                                percentage != 0
                                ?
                                    <div className="cmsFormStepInputLimit">
                                        <CircularProgressbar value={percentage} text={value.length} strokeWidth={10} className="cmsFormStepInputProgress" styles={
                                            buildStyles({
                                                pathColor: `
                                                ${
                                                    percentage > 0 && percentage < 70 
                                                    ? 
                                                        "rgba(76, 175, 80, 1)" 
                                                    : 
                                                    percentage > 70 && percentage < 100
                                                    ? 
                                                        "rgba(225, 179, 0, 1)" 
                                                    : 
                                                    percentage === 100
                                                    ? 
                                                        "rgba(229, 57, 53, 1)" 
                                                    : 
                                                        "rgba(76, 175, 80, 1)"
                                                }`,
                                                trailColor: "#e0e0e0",
                                            }
                                        )} />
                                    </div>
                                :
                                    <></>
                            }
                        </>
                        
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
}

export default TextInputRT