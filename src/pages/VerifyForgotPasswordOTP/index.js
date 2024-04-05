import React from 'react'
import PreLoginSectionHeadings from '../../components/prelogin/PreLoginSectionHeadings'
import PreLoginSectionLogos from '../../components/prelogin/PreLoginSectionLogos'
import ForgotPasswordVerifyOTPForm from '../../components/prelogin/ForgotPasswordVerifyOTPForm'
import PreLoginFormInfoAction from '../../components/form/PreLoginFormInfoAction'
import { ToastAlert, defaults } from '../../utils'
import { ResetPasswordServices } from '../../services'
import { toast } from 'react-hot-toast'

const VerifyForgotPasswordOTPPage = ({ user }) => {

    const resendOTP = async () => {

        let loadingToast = toast.loading("Resending OTP...", {
            position: "bottom-center",
            duration: 5000
        });

        const resendValidateResetPasswordReq = await ResetPasswordServices.resendValidateResetPasswordOTP({
            request_id: user.reset_password_request_id
        });

        if(resendValidateResetPasswordReq.status === false){
            toast.dismiss(loadingToast);
            ToastAlert.notifySuccess(resendValidateResetPasswordReq.message);
            return false
        }
        else{
            toast.dismiss(loadingToast);
            ToastAlert.notifySuccess("OTP Resent Successfully!");
            return true
        }
    }

    return (
        <>
            <PreLoginSectionLogos />
            <PreLoginSectionHeadings 
                heading="Verify OTP" 
                description={`Hello ${defaults.capitalize(user.name)}, your request for change of password has been approved. Please enter the OTP that's been sent to your Email ID - ${user.email_id}.`} 
                hasAction={false}
            />
            <ForgotPasswordVerifyOTPForm user={user} />
            <PreLoginFormInfoAction 
                info="haven't received OTP?"
                hasAction={true}
                actionPosition="right"
                actionLable="send again"
                actionHandler={() => resendOTP()}
            />
        </>
    )
}

export default VerifyForgotPasswordOTPPage