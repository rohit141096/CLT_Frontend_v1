import React, { useState, useEffect } from 'react';
import { icons } from '../../../constants';

const RadioButtonGroup = ({
    isMandatory=false,
    hasLable=true, 
    lable="", 
    hasMessage=false,
    messageType="",
    message="",
    children
}) => {

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
                
                <div className={`cmsFormStepInput radioButtonGroup`}>
                    {children}
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

export default RadioButtonGroup