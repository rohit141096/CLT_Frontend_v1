import React from 'react';
import { useNavigate } from 'react-router-dom';

const BasicActivityListItem = ({ 
    activityIcon="fa-solid fa-eye", 
    activityBy="unknown", 
    activityPrimaryEntity="unknown", 
    activitySecondaryEntity="", 
    activityType="unknown", 
    activityTime=new Date(), 
    activityLink="/", 
    activityDetails 
}) => {
    const navigate = useNavigate();

    return (
        <div className="dashboardBasicActivitiesListItem">
            <div className="dashboardBasicActivitiesListItemTimeline">
                <div className="dashboardBasicActivitiesListItemTimelineInner">
                    <div className="dashboardBasicActivitiesListItemTimelineIcon">
                        <i className={`${activityIcon} dashboardBasicActivitiesListItemTimelineIco`}></i>
                    </div>
                </div>
            </div>

            <div className="dashboardBasicActivitiesListItemInfo">
                <div className="dashboardBasicActivitiesListItemInfoInner">
                    <div className="dashboardBasicActivitiesListItemInfoHeading">
                        <p className="dashboardBasicActivitiesListItemInfoHeadingTxt">
                            <span className="dashboardBasicActivitiesListItemInfoHeadingTxtBold">{activityPrimaryEntity}</span>
                            {
                                activitySecondaryEntity != ""
                                ?
                                <span className="dashboardBasicActivitiesListItemInfoHeadingTxtNormal">in {activitySecondaryEntity} section</span>
                                :
                                <></>
                            }
                            <span className="dashboardBasicActivitiesListItemInfoHeadingTxtBold">{activityType}</span>
                            <span className="dashboardBasicActivitiesListItemInfoHeadingTxtNormal">by</span>
                            <span className="dashboardBasicActivitiesListItemInfoHeadingTxtBold">{activityBy}</span>
                        </p>
                    </div>
                    <div className="dashboardBasicActivitiesListItemInfoContent">
                        <div className="dashboardBasicActivitiesListItemInfoDateTime">
                            <p className="dashboardBasicActivitiesListItemInfoDateTimeTxt">{activityTime}</p>
                        </div>
                        <div className="dashboardBasicActivitiesListItemInfoSeperator">
                            <span className="dashboardBasicActivitiesListItemInfoSeperatorInner">&nbsp;</span>
                        </div>
                        <div className="dashboardBasicActivitiesListItemInfoLink">
                            <p className="dashboardBasicActivitiesListItemInfoLinkTxt" onClick={() => navigate(activityLink)}>view activity details</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasicActivityListItem