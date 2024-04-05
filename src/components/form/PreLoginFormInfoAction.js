import React from 'react'

const PreLoginFormInfoAction = ({info="", hasAction=false, actionPosition="regular", actionLable="", actionHandler= ()=>console.log('')}) => {
    return (
        <div className="cmsFormStep hasMarginTop">
            <div className="cmsPreLoginFormInfoActionContainer">
                <div className="cmsPreLoginFormInfoMain">
                    <p className="cmsPreLoginFormInfoMainTxt">{info}</p>
                </div>
                {
                    hasAction === true
                    ?
                        actionPosition === "regular"
                        ?
                        <div className="cmsPreLoginFormInfoAction" onClick={actionHandler}>
                            <p className="cmsPreLoginFormInfoActionTxt">{actionLable}</p>
                        </div>
                        :
                        <></>
                    :
                    <></>
                }
            </div>
            {
                hasAction === true
                ?
                    actionPosition === "right"
                    ?
                    <div className="cmsPreLoginFormInfoActionRight" onClick={actionHandler}>
                        <p className="cmsPreLoginFormInfoActionRightTxt">{actionLable}</p>
                    </div>
                    :
                    <></>
                :
                <></>
            }
        </div>
    )
}

export default PreLoginFormInfoAction