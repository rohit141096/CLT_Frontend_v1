import React from "react"
import FooterActions from "./FooterActions"
import FooterButton from "./FooterButton"
import FooterInfo from "./FooterInfo"
import FooterCopyright from "./FooterInfo/Copyright"
import FooterCMSv from "./FooterInfo/CMSv"
import FooterPoweredBy from "./FooterInfo/PoweredBy"
import { icons } from "../../../../../constants"

const SuperAdminLayoutFooter = () => {
  return (
    <div className='dashboardFooter'>
      <FooterActions>
        <FooterButton
          lable={"watch support videos"}
          icon={icons.film}
          buttonBg={"primary"}
          goTo={"/"}
        />
        <FooterButton
          lable={"read documentation"}
          icon={icons.bookOpenSolid}
          buttonBg={"greyDark"}
          goTo={"/"}
        />
      </FooterActions>
      <FooterInfo>
        <FooterCopyright year={2024} />
        <FooterCMSv version={4} />
        <FooterPoweredBy logo='/images/pre-login-ceg-logo.png' />
      </FooterInfo>
    </div>
  )
}

export default SuperAdminLayoutFooter
