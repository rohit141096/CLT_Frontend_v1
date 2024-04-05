import React from 'react';
import Button from './Button';
import CardHeading from '../typography/dashboard/CardHeading';

const Card = ({
    hasHeading=true,
    heading, 
    isHeadingAction=true,
    headingActionIcon="fa-solid fa-ellipsis-vertical", 
    headingAction=()=>console.log(''), 
    isBottomAction=false, 
    isBottomPrimaryAction=false, 
    bottomPrimaryActionLable, 
    bottomPrimaryActionBg="primary",
    bottomPrimaryActionBgType="bordered",
    bottomPrimaryAction=()=>console.log(''), 
    isBottomSecondaryAction=false, 
    bottomSecondaryActionLable, 
    bottomSecondaryActionBg="primary",
    bottomSecondaryActionBgType="bordered",
    bottomSecondaryAction=()=>console.log(''),
    children
}) => {
    return (
        <div className="dashboardCard">
            {
                hasHeading === true 
                ?
                    <div className="dashboardCardHeadingAction">
                        <div className="dashboardCardHeadings">
                            <CardHeading heading={heading} />
                        </div>
                        {
                            isHeadingAction === true
                            ?
                            <div className="dashboardCardAction">
                                <div className="dashboardCardActionIcon" onClick={headingAction}>
                                    <i className={`${headingActionIcon} dashboardCardActionIco`}></i>
                                </div>
                            </div>
                            :
                            <></>
                        }
                    </div>
                :
                    <></>
            }
            
            <div className="dashboardCardContent">
                {children}
            </div>
            
            {
                isBottomAction === true
                ?
                <div className="dashboardCardBottomActions">
                    <div className="dashboardCardBottomActionsInner">
                        {
                            isBottomPrimaryAction === true
                            ?
                            <Button
                                type="button"
                                bgType={bottomPrimaryActionBgType}
                                width="auto"
                                bg={bottomPrimaryActionBg}
                                borderRadius="full"
                                hasIcon={false}
                                action={bottomPrimaryAction}
                            >
                                {bottomPrimaryActionLable}
                            </Button>
                            :
                            <></>
                        }
                        {
                            isBottomSecondaryAction === true
                            ?
                            <Button
                                type="button"
                                bgType={bottomSecondaryActionBgType}
                                width="auto"
                                bg={bottomSecondaryActionBg}
                                borderRadius="full"
                                hasIcon={false}
                                action={bottomSecondaryAction}
                            >
                                {bottomSecondaryActionLable}
                            </Button>
                            :
                            <></>
                        }
                    </div>
                </div>
                :
                <></>
            }
            
        </div>
    )
}

export default Card