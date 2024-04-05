import React, { useState, useEffect, forwardRef } from 'react';

const TextInput = forwardRef(({
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
    message=""
 }, ref) => {

    const [iconClass, setIconClass] = useState('');

    useEffect(() => {
        let iconClickable = isIconClickable === true ? ` clickable` : ``;
        let icoType = iconType === "error" ? ` error` : iconType === "warning" ? ` warning` : iconType === "success" ? ` success` : '';
        setIconClass(`${icon} cmsFormStepInputIco${iconClickable}${icoType}`);
    }, [icon, isIconClickable, iconType]);

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
                
                <div className={`cmsFormStepInput ${hasIcon ? 'hasIcon' : <></>} ${iconPosition === "right" ? 'icoRight' : iconPosition === "left" ? 'icoLeft' : 'icoRight'}`}>
                    <input 
                        type={type === "text" ? 'text' : type === "email" ? 'email' : type === 'tel' ? 'tel' : 'text'} 
                        className="cmsFormStepInputText" 
                        placeholder={placeholder}
                        ref={ref}
                    />
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
});

export default TextInput