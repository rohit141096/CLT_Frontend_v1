import React from "react"
import { icons } from "../../../../constants"

const BasicListItem = ({
  heading,
  hasPrimaryInfo = false,
  primaryInfoHeading,
  primaryInfoIcon,
  hasPrimaryInfoIcon = false,
  hasSecondaryInfo = false,
  secondaryInfoHeading,
  hasSecondaryInfoIcon = false,
  secondaryInfoIcon,
  hasAction,
  actionIcon = "fa-solid fa-angle-right",
  action = () => console.log(""),
}) => {
  return (
    <div className={`dashboardBasicRequestListItem ${hasAction === true ? "hasAction" : ""}`}>
      <div className='dashboardBasicRequestListItemContent'>
        <div className='dashboardBasicRequestListItemHeading'>
          <p className='dashboardBasicRequestListItemHeadingTxt'>{heading}</p>
        </div>
        <div className='dashboardBasicRequestListItemInfo'>
          {hasPrimaryInfo === true ? (
            <div className='dashboardBasicRequestListItemInfoStep'>
              {hasPrimaryInfoIcon === true ? (
                <div className='dashboardBasicRequestListItemInfoStepIcon'>
                  <i className={`${primaryInfoIcon} dashboardBasicRequestListItemInfoStepIco`}></i>
                </div>
              ) : (
                <></>
              )}
              <div className='dashboardBasicRequestListItemInfoStepLable'>
                <p className='dashboardBasicRequestListItemInfoStepLableTxt'>
                  {primaryInfoHeading}
                </p>
              </div>
            </div>
          ) : (
            <></>
          )}

          {hasSecondaryInfo === true ? (
            <div className='dashboardBasicRequestListItemInfoStep'>
              {hasSecondaryInfoIcon === true ? (
                <div className='dashboardBasicRequestListItemInfoStepIcon'>
                  <i
                    className={`${secondaryInfoIcon} dashboardBasicRequestListItemInfoStepIco`}
                  ></i>
                </div>
              ) : (
                <></>
              )}

              <div className='dashboardBasicRequestListItemInfoStepLable'>
                <p className='dashboardBasicRequestListItemInfoStepLableTxt'>
                  {secondaryInfoHeading}
                </p>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      {hasAction === true ? (
        <div className='dashboardBasicRequestListItemAction'>
          <div className='dashboardBasicRequestListItemActionIcon' onClick={action}>
            <i className={`${actionIcon} dashboardBasicRequestListItemActionIco`}></i>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default BasicListItem
