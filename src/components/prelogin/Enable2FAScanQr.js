import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from "react-qr-code";

const Enable2FAScanQr = ({qrcode="", description="", actionLable="", actionHandler=() => console.log('')}) => {
    const navigate = useNavigate();

    return (
        <div className="preLoginFormSection2FA reduceTopMargin">
            <div className="preLoginFormSection2FAQrCodeContainer">
                <div className="preLoginFormSection2FAQrCodeMain">
                    <div className="preLoginFormSection2FAQrCode">
                        {
                            qrcode != null
                            ?
                            <QRCode
                                size={256}
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                value={qrcode}
                                viewBox={`0 0 256 256`}
                            />
                            :
                                <></>
                        }
                    </div>
                </div>
            </div>
            <div className="preLoginFormSection2FAQrDescription">
                <p className="preLoginFormSection2FAQrDescriptionTxt">
                    {description}
                    <span className="preLoginFormSection2FAQrDescriptionAction" onClick={actionHandler}>{actionLable}</span>
                </p>
            </div>
        </div>
    )
}

export default Enable2FAScanQr