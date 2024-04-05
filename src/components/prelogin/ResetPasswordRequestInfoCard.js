import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import BorderedCard from '../core/dashboard/BorderedCard';
import { ResetPasswordServices } from '../../services';
import { ToastAlert, functions } from '../../utils';
import { moments } from '../../utils';
import Button from '../core/form/Button';
import { icons } from '../../constants';
import IconButton from '../core/form/IconButton';
import { resetPassword } from '../../reducers/User';

const ResetPasswordRequestInfoCard = ({ request_id, user_id, user }) => {
    const dispatch = useDispatch();

    const [requestDetails, setRequestDetails] = useState(null);
    const [requestDetailsError, setRequestDetailsError] = useState(false);
    const [showPendingAction, setShowPendingAction] = useState(true);
    const [pendingAction, setPendingAction] = useState("");
    const [showRequestActions, setShowRequestActions] = useState(true);
    const [showWithdrawAction, setShowWithdrawAction] = useState(true);
    const [currentStatus, setCurrentStatus] = useState("REQUESTED");
    const [isRefreshLoading, setIsRefreshLoading] = useState(false);
    const [isContinueLoading, setIsContinueLoading] = useState(false);
    const [isWithdrawLoading, setIsWithdrawLoading] = useState(false);
    const [isRefreshDisabled, setIsRefresDisabled] = useState(false);
    const [isContinueDisabled, setIsContinueDisabled] = useState(false);
    const [isWithdrawDisabled, setIsWithdrawDisabled] = useState(false);
    const [withdrawBg, setWithdrawBg] = useState('error');
    const [withdrawHasIcon, setWithdrawHasIcon] = useState(false);
    const [withdrawIconPosition, setWithdrawIconPosition] = useState('left');
    const [withdrawLable, setWithdrawLable] = useState('Withdraw');
    const [withdrawIco, setWithdrawIco] = useState(icons.tick);

    const getThisResetPasswordReqHandler = async () => {
        const resetPasswordReq = await ResetPasswordServices.getThisResetPasswordRequest({
            request_id: request_id
        });
        if(resetPasswordReq.status === false){
            ToastAlert.notifyError(resetPasswordReq.message);
            setRequestDetails(null);
            setRequestDetailsError(true);
        }
        else{
            setRequestDetails(resetPasswordReq.data);
            setRequestDetailsError(false);

            const activities_length = resetPasswordReq.data.activities.length - 1;

            if(resetPasswordReq.data.activities[activities_length].activity_type === "REQUESTED"){
                setCurrentStatus("REQUESTED");
                setShowPendingAction(true);
                setPendingAction("Waiting For Approval.");
                setShowRequestActions(true);
                setShowWithdrawAction(true);
                setIsContinueDisabled(true);
            }
            else if(resetPasswordReq.data.activities[activities_length].activity_type === "APPROVED"){
                setCurrentStatus("APPROVED");
                setShowPendingAction(true);
                setPendingAction("Validate OTP");
                setShowRequestActions(true);
                setShowWithdrawAction(true);
                setIsContinueDisabled(false);
            }
            else if(resetPasswordReq.data.activities[activities_length].activity_type === "REJECTED"){
                setCurrentStatus("REJECTED");
                setShowPendingAction(false);
                setPendingAction("");
                setShowRequestActions(false);
                setShowWithdrawAction(false);
                setIsContinueDisabled(true);
            }
            else if(resetPasswordReq.data.activities[activities_length].activity_type === "VALIDATION_SUCCESS"){
                setCurrentStatus("VALIDATION_SUCCESS");
                setShowPendingAction(true);
                setPendingAction("Set New Password");
                setShowRequestActions(true);
                setShowWithdrawAction(true);
                setIsContinueDisabled(false);
            }
            else if(resetPasswordReq.data.activities[activities_length].activity_type === "VALIDATION_FAILED"){
                setCurrentStatus("VALIDATION_FAILED");
                setShowPendingAction(true);
                setPendingAction("Retry OTP Validation");
                setShowRequestActions(true);
                setShowWithdrawAction(true);
                setIsContinueDisabled(false);
            }
            else if(resetPasswordReq.data.activities[activities_length].activity_type === "REQUESTED_NEW_OTP"){
                setCurrentStatus("REQUESTED_NEW_OTP");
                setShowPendingAction(true);
                setPendingAction("Validate OTP");
                setShowRequestActions(true);
                setShowWithdrawAction(true);
                setIsContinueDisabled(false);
            }
            else if(resetPasswordReq.data.activities[activities_length].activity_type === "WITHDRAWN"){
                setCurrentStatus("WITHDRAWN");
                setShowPendingAction(false);
                setPendingAction("");
                setShowRequestActions(false);
                setShowWithdrawAction(false);
                setIsContinueDisabled(true);
            }
            else if(resetPasswordReq.data.activities[activities_length].activity_type === "SUCCESSFULLY_UPDATED"){
                setCurrentStatus("SUCCESSFULLY_UPDATED");
                setShowPendingAction(false);
                setPendingAction("");
                setShowRequestActions(false);
                setShowWithdrawAction(false);
                setIsContinueDisabled(true);
            }
            else{
                setShowPendingAction(false);
                setPendingAction("");
                setShowRequestActions(false);
                setShowWithdrawAction(false);
                setIsContinueDisabled(true);
            }
        }
    }

    useEffect(() => {
        getThisResetPasswordReqHandler();
    }, [request_id]);

    const proceedToNextStep = async () => {
        if(currentStatus === "REQUESTED" || currentStatus === "WITHDRAWN" || currentStatus === "SUCCESSFULLY_UPDATED" || currentStatus === "REJECTED"){
            ToastAlert.notifyError("Something Went Wrong. Try Again Later.");
        }
        else if(currentStatus === "APPROVED" || currentStatus === "VALIDATION_FAILED" || currentStatus === "REQUESTED_NEW_OTP"){
            dispatch(
                resetPassword(
                    {
                        id: user.id,
                        name: user.name,
                        role: user.role,
                        email_id: user.email_id,
                        reset_password_request_id: request_id,
                        reset_password_request_readable_id: `RPR${functions.getMultiDigitObjectID(requestDetails.request_id, 4)}`,
                        reset_password_requested_on: moments.getBasicDateFormat(requestDetails?.activities[0].createdAt),
                        reset_password_request_try_after: 0,
                        is_reset_password_error: false,
                        is_reset_password_error_type: "VALIDATE_OTP",
                        forgot_password_current_route: "VALIDATE_OTP"
                    }
                )
            );
        }
        else if(currentStatus === "VALIDATION_SUCCESS"){
            dispatch(
                resetPassword(
                    {
                        id: user.id,
                        name: user.name,
                        role: user.role,
                        email_id: user.email_id,
                        reset_password_request_id: request_id,
                        reset_password_request_readable_id: `RPR${functions.getMultiDigitObjectID(requestDetails.request_id, 4)}`,
                        reset_password_requested_on: moments.getBasicDateFormat(requestDetails?.activities[0].createdAt),
                        reset_password_request_try_after: 0,
                        is_reset_password_error: false,
                        is_reset_password_error_type: "CHANGE_PASSWORD",
                        forgot_password_current_route: "CHANGE_PASSWORD"
                    }
                )
            );
        }
        else{
            ToastAlert.notifyError("Something Went Wrong. Try Again Later.");
        }
    }

    const withdrawRequest = async () => {

        setIsWithdrawLoading(true);

        const withdrawReq = await ResetPasswordServices.withdrawResetPasswordRequest({
            request_id: request_id
        });
        if(withdrawReq.status === false){
            ToastAlert.notifyError(withdrawReq.message);
            setIsWithdrawLoading(false);
        }
        else{
            setIsWithdrawLoading(false);
            setIsWithdrawDisabled(true);
            setWithdrawBg('success');
            setWithdrawHasIcon(true);
            setWithdrawLable('Success');
            setTimeout(() => {
                dispatch(
                    resetPassword(
                        {
                            id: user.id,
                            name: user.name,
                            role: user.role,
                            email_id: user.email_id,
                            reset_password_request_id: request_id,
                            reset_password_request_readable_id: `RPR${functions.getMultiDigitObjectID(requestDetails.request_id, 4)}`,
                            reset_password_requested_on: moments.getBasicDateFormat(requestDetails?.activities[0].createdAt),
                            reset_password_request_try_after: 0,
                            is_reset_password_error: false,
                            is_reset_password_error_type: "REQUEST_WITHDRAWN",
                            forgot_password_current_route: "REQUEST_WITHDRAWN"
                        }
                    )
                );
            }, 1000);
        }
    }

    const refreshRequest = async () => {
        setIsRefreshLoading(true);
        setIsRefresDisabled(true);
        getThisResetPasswordReqHandler();
    }

    useEffect(() => {
        if(isRefreshLoading){
            setIsRefreshLoading(false);
            setIsRefresDisabled(false);
        }
    }, [requestDetails]);

    return (
        <BorderedCard styles={{marginTop: '-20px'}}>
            <div className="resetPasswordRequestHeading">
                <div className="resetPasswordRequestHeadingLable">
                    <p className="resetPasswordRequestHeadingLableTxt">request ID</p>
                </div>
                <div className="resetPasswordRequestHeadingContent">
                    <div className="resetPasswordRequestHeadingSeperator">
                        <p className="resetPasswordRequestHeadingSeperatorTxt">:</p>
                    </div>
                    <p className="resetPasswordRequestHeadingContentTxt">{ requestDetails != null ? `RPR${functions.getMultiDigitObjectID(requestDetails.request_id, 4)}`: 0}</p>
                </div>
            </div>
            <div className="resetPasswordRequestDetails">
                <div className="resetPasswordRequestDetailsStep">
                    <div className="resetPasswordRequestDetailsStepLable">
                        <p className="resetPasswordRequestDetailsStepLableTxt">requested on</p>
                    </div>
                    <div className="resetPasswordRequestDetailsStepContent">
                        <div className="resetPasswordRequestDetailsStepSeperator">
                            <p className="resetPasswordRequestDetailsStepSeperatorTxt">:</p>
                        </div>
                        <p className="resetPasswordRequestDetailsStepContentTxt">{moments.getBasicDateFormat(requestDetails?.activities[0].createdAt)}</p>
                    </div>
                </div>
                <div className="resetPasswordRequestDetailsStep">
                    <div className="resetPasswordRequestDetailsStepLable">
                        <p className="resetPasswordRequestDetailsStepLableTxt">current status</p>
                    </div>
                    <div className="resetPasswordRequestDetailsStepContent">
                        <div className="resetPasswordRequestDetailsStepSeperator">
                            <p className="resetPasswordRequestDetailsStepSeperatorTxt">:</p>
                        </div>
                        <p className="resetPasswordRequestDetailsStepContentTxt">
                            {
                                currentStatus === "REQUESTED"
                                ?
                                "Requested"
                                :
                                currentStatus === "APPROVED"
                                ?
                                "Approved"
                                :
                                currentStatus === "REJECTED"
                                ?
                                "Rejected"
                                :
                                currentStatus === "VALIDATION_SUCCESS"
                                ?
                                "OTP Validated"
                                :
                                currentStatus === "VALIDATION_FAILED"
                                ?
                                "OTP Validation Failed"
                                :
                                currentStatus === "REQUESTED_NEW_OTP"
                                ?
                                "Resent New OTP"
                                :
                                currentStatus === "WITHDRAWN"
                                ?
                                "Withdrawn"
                                :
                                "------"
                            }
                        </p>
                    </div>
                </div>
                {
                    showPendingAction ?
                        <div className="resetPasswordRequestDetailsStep">
                            <div className="resetPasswordRequestDetailsStepLable">
                                <p className="resetPasswordRequestDetailsStepLableTxt">pending actions</p>
                            </div>
                            <div className="resetPasswordRequestDetailsStepContent">
                                <div className="resetPasswordRequestDetailsStepSeperator">
                                    <p className="resetPasswordRequestDetailsStepSeperatorTxt">:</p>
                                </div>
                                <p className="resetPasswordRequestDetailsStepContentTxt">{pendingAction}</p>
                            </div>
                        </div>
                    :
                    <></>
                }

                {
                    showRequestActions 
                    ?
                    <div className="resetPasswordRequestActions">
                        <div className="resetPasswordRequestActionsInner">
                            <IconButton 
                                type="button"
                                bgType="fill"
                                bg={"warning"}
                                borderRadius="short" 
                                icon={icons.refresh}
                                height="short"
                                action={refreshRequest}
                                isLoading={isRefreshLoading}
                                disabled={isRefreshDisabled}
                            />
                            {
                                showWithdrawAction
                                ?
                                <Button 
                                    type="button"
                                    bgType="fill"
                                    width="auto"
                                    bg={withdrawBg}
                                    borderRadius="short"
                                    height="short"
                                    action={withdrawRequest}
                                    isLoading={isWithdrawLoading}
                                    disabled={isWithdrawDisabled}
                                    hasIcon={withdrawHasIcon}
                                    icon={withdrawIco}
                                    iconPosition={withdrawIconPosition} 
                                >
                                    {withdrawLable}
                                </Button>
                                :
                                <></>
                            }
                            
                            <Button 
                                type="button"
                                bgType="fill"
                                width="auto"
                                bg={"primary"}
                                borderRadius="short"
                                height="short"
                                action={proceedToNextStep}
                                isLoading={isContinueLoading}
                                disabled={isContinueDisabled}
                            >
                                continue
                            </Button>
                        </div>
                    </div>
                    :
                    <></>
                }
                
            </div>
        </BorderedCard>
    )
}

export default ResetPasswordRequestInfoCard