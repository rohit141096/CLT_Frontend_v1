import React from 'react'

const PasswordPatternValidation = ({validation}) => {
    return (
        <>
            <div className="cmsFormStep passwordPatternStep">
                <div className="cmsFormStepPasswordPatternSingle">
                    <div className="cmsFormStepPasswordPatternSingleIcon">
                        {
                            validation.isPasswordMinCharValid ?
                            <i className="fa-solid fa-check cmsFormStepPasswordPatternSingleIco successIcon"></i>
                            :
                            <i className="fa-solid fa-xmark cmsFormStepPasswordPatternSingleIco errorIcon"></i>
                        }
                    </div>
                    <div className="cmsFormStepPasswordPatternSingleLable">
                        <p className="cmsFormStepPasswordPatternSingleLableTxt">8 character minimum</p>
                    </div>
                </div>
                <div className="cmsFormStepPasswordPatternSingle">
                    <div className="cmsFormStepPasswordPatternSingleIcon">
                        {
                            validation.isPasswordDigitValid ?
                            <i className="fa-solid fa-check cmsFormStepPasswordPatternSingleIco successIcon"></i>
                            :
                            <i className="fa-solid fa-xmark cmsFormStepPasswordPatternSingleIco errorIcon"></i>
                        }
                    </div>
                    <div className="cmsFormStepPasswordPatternSingleLable">
                        <p className="cmsFormStepPasswordPatternSingleLableTxt">Must contain one number</p>
                    </div>
                </div>
                <div className="cmsFormStepPasswordPatternSingle">
                    <div className="cmsFormStepPasswordPatternSingleIcon">
                        {
                            validation.isPasswordSpecialCharValid ?
                            <i className="fa-solid fa-check cmsFormStepPasswordPatternSingleIco successIcon"></i>
                            :
                            <i className="fa-solid fa-xmark cmsFormStepPasswordPatternSingleIco errorIcon"></i>
                        }
                    </div>
                    <div className="cmsFormStepPasswordPatternSingleLable">
                        <p className="cmsFormStepPasswordPatternSingleLableTxt">Must contain one special character</p>
                    </div>
                </div>
                <div className="cmsFormStepPasswordPatternSingle">
                    <div className="cmsFormStepPasswordPatternSingleIcon">
                        {
                            validation.isPasswordUpperCaseValid ?
                            <i className="fa-solid fa-check cmsFormStepPasswordPatternSingleIco successIcon"></i>
                            :
                            <i className="fa-solid fa-xmark cmsFormStepPasswordPatternSingleIco errorIcon"></i>
                        }
                    </div>
                    <div className="cmsFormStepPasswordPatternSingleLable">
                        <p className="cmsFormStepPasswordPatternSingleLableTxt">One upper case letter</p>
                    </div>
                </div>
                <div className="cmsFormStepPasswordPatternSingle">
                    <div className="cmsFormStepPasswordPatternSingleIcon">
                        {
                            validation.isPasswordLowerCaseValid ?
                            <i className="fa-solid fa-check cmsFormStepPasswordPatternSingleIco successIcon"></i>
                            :
                            <i className="fa-solid fa-xmark cmsFormStepPasswordPatternSingleIco errorIcon"></i>
                        }
                    </div>
                    <div className="cmsFormStepPasswordPatternSingleLable">
                        <p className="cmsFormStepPasswordPatternSingleLableTxt">One lower case letter</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PasswordPatternValidation