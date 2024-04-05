import React from 'react'
import Backdrop from '../containers/Backdrop'

const PopUp = ({ width="max", hasHeading=true, heading="pop up", hasActions=false, primaryActionLable="close", primaryActionType="dashboard", primaryActionIcon="", primaryAction=()=>console.log(), hasSecondaryAction=false, secondaryActionLable="close", secondaryActionIcon="", secondaryActionType="error", secondaryAction=()=>console.log(), closePopUp=()=>console.log(), children }) => {
    return (
        <div className="cmsCorePopUpComponent">
            <Backdrop type="dark" action={closePopUp} />
            <div className={`cmsCorePopUpContainer ${width === "max" ? "maxWidth" : width === "medium" ? "midWidth" : width === "min" ? "minWidth" : width === "custom" ? width === "autoWidth" : "midWidth"}`}>
                <div className="cmsDashboardPopUpMain">
                    {
                        hasHeading === true
                        ?
                        <div className="cmsDashboardPopUpHeading">
                            <p className="cmsDashboardPopUpHeadingTxt">{heading}</p>
                        </div>
                        :
                        <></>
                    }
                    <div className="cmsDashboardPopUpContentActions">
                        <div className="cmsDashboardPopUpContent">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp