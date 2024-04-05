import React, { useState, useEffect, forwardRef } from 'react';

const PasswordInput = forwardRef(({
    isMandatory=false,
    hasLable=true, 
    lable="",
    placeholder="",
    hasMessage=false,
    messageType="",
    message=""
 }, ref) => {

    const [showPassword, setShowPassword] = useState(false);
    
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
                
                <div className={`cmsFormStepInput hasIcon icoRight`}>
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        className="cmsFormStepInputText" 
                        placeholder={placeholder}
                        ref={ref}
                    />
                    {
                        showPassword === false
                        ?
                        <div className="cmsFormStepInputIcon">
                            <i className={`fa-solid fa-eye cmsFormStepInputIco clickable`} onClick={() => setShowPassword(true)}></i>
                        </div>
                        :
                        <div className="cmsFormStepInputIcon">
                            <i className={`fa-solid fa-eye-slash cmsFormStepInputIco clickable`} onClick={() => setShowPassword(false)}></i>
                        </div>
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

export default PasswordInput