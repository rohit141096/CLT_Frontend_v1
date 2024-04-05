import React from 'react'
import { useNavigate } from 'react-router-dom'
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings'
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos'
import PreLoginFormInfoAction from '../../components/form/PreLoginFormInfoAction'
import Verify2FAOTPForm from '../../components/prelogin/Verify2FAOTPForm'
import Button from '../../components/core/form/Button'

const VerifyEnable2FAOTPPage = ({user}) => {
    const navigate = useNavigate();
    return (
        <>
            <PreLoginSectionLogos />
            <PreLoginSectionHeadings 
                heading="Enable 2FA" 
                description="You must enable 2 factor authenticationto proceed with login.||Almost Done, You are just one step away! Enter 6 digit OTP and complete login." 
                isDiscriptionML={true}
                hasAction={false}
            />
            <Verify2FAOTPForm user={user} />

            <div className="cmsFormStep hasMarginTop10">
                <div className="preLoginFormSection2FAScanQrAgainAction">
                    <Button 
                        width="auto"
                        borderRadius="none"
                        bgType="underline"
                        bg="error"
                        action={() => navigate('/verify-2fa-otp')}
                    >
                        Scan QR Code Again
                    </Button>
                </div>
            </div>

            <PreLoginFormInfoAction 
                info="Need Help?"
                hasAction={true}
                actionPosition="right"
                actionLable="Watch Video on How to Setup 2FA?"
                actionHandler={() => navigate('/')}
            />
        </>
    )
}

export default VerifyEnable2FAOTPPage