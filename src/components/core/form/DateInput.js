import React, { useState, useEffect } from 'react';
import { icons } from '../../../constants';

const DateInput = ({
    isMandatory=false,
    hasLable=true, 
    lable="", 
    hasMessage=false,
    messageType="",
    message="",
    children
}) => {

    const [iconClass, setIconClass] = useState(`${icons.calenderDays} cmsFormStepInputIco`);

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
                
                <div className={`cmsFormStepInput hasIcon icoRight datePicker`}>
                    {children}

                    <div className="cmsFormStepInputIcon">
                        <i className={iconClass}></i>
                    </div>
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

export default DateInput