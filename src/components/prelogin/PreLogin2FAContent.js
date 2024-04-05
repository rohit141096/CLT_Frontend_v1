import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../core/typography/prelogin/SectionHeading';

const PreLogin2FAContent = () => {
    const item = {
        hidden: { y: -10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1, 
            transition: { duration: 0.3 }
        }
    };

    return (
        <>
            <motion.div className="preLoginContentSectionHeading" variants={item}>
                <SectionHeading className="preLoginContentSectionHeadingTxt">Follow the below steps to continue!</SectionHeading>
            </motion.div>

            <div className="preLoginContentSection2fa">
                <div className="preLoginContentSection2faInner">
                    <div className="preLoginContentSection2faDotLine">
                        <div className="preLoginContentSection2faLine">&nbsp;</div>
                    </div>

                    <div className="preLoginContentSection2faDetails">
                        <div className="preLoginContentSection2faDetailStep">
                            <div className="preLoginContentSection2faDetailStepDot">
                                <div className="preLoginContentSection2faDetailStepDotWhite">
                                    <div className="preLoginContentSection2faDetailStepDotBlue">&nbsp;</div>
                                </div>
                            </div>
                            <div className="preLoginContentSection2faDetailStepLable">
                                <p className="preLoginContentSection2faDetailStepLableTxt">step 1</p>
                            </div>
                            <div className="preLoginContentSection2faDetailStepHeading">
                                <p className="preLoginContentSection2faDetailStepHeadingTxt">Download The Google Authenticator App</p>
                            </div>
                            <div className="preLoginContentSection2faDetailsStepDescription">
                                <p className="preLoginContentSection2faDetailStepDescriptionTxt">Use the below links to download the app on your phone or search for google authenticator in respective app store.</p>
                            </div>
                            <div className="preLoginContentSection2faDetailStepImages">
                                <div className="preLoginContentSection2faDetailStepImageSingle">
                                    <img src="images/play-store.png" className="preLoginContentSection2faDetailStepImageSingleImg" alt="Google Authenticator - Playstore" />
                                </div>
                                <div className="preLoginContentSection2faDetailStepImageSingle">
                                    <img src="images/app-store.png" className="preLoginContentSection2faDetailStepImageSingleImg" alt="Google Authenticator - Appstore" />
                                </div>
                            </div>
                        </div>
                        <div className="preLoginContentSection2faDetailStep">
                            <div className="preLoginContentSection2faDetailStepDot fullHight">
                                <div className="preLoginContentSection2faDetailStepDotWhite">
                                    <div className="preLoginContentSection2faDetailStepDotBlue">&nbsp;</div>
                                </div>
                                <div className="preLoginContentSection2faDetailStepDotLine">&nbsp;</div>
                            </div>
                            <div className="preLoginContentSection2faDetailStepLable">
                                <p className="preLoginContentSection2faDetailStepLableTxt">step 2</p>
                            </div>
                            <div className="preLoginContentSection2faDetailStepHeading">
                                <p className="preLoginContentSection2faDetailStepHeadingTxt">Open App & Click on Plus Icon</p>
                            </div>
                            <div className="preLoginContentSection2faDetailsStepDescription">
                                <p className="preLoginContentSection2faDetailStepDescriptionTxt">Once the installation is done, open Google Authenticator app and click on + icon in the bottom right to scan the QR code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreLogin2FAContent