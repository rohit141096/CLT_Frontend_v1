import React from "react"
import { useLocation } from "react-router-dom"
import NavbarHeader from "./NavbarHeader"
import NavBarUserDetails from "./UserDetails"
import NavbarContent from "./NavbarContent"
import NavbarSection from "./NavSection"
import NavbarActionItem from "./NavItem"
import { icons } from "../../../../../constants"
import { functions } from "../../../../../utils"

const routeList = [
  {
    basic: {
      heading: "dashboards",
      description: "All you need at your fingertips",
    },
    routes: [
      {
        name: "owner",
        goTo: "/dashboard/owner",
        icon: icons.userSolid,
        tagline: "",
        badgeData: {
          hasBadge: false,
          badgeType: "default",
          badgeBg: "default",
          lable: "",
        },
        subRoutes: [],
      },
    ],
  },
]

const SuperAdminLayoutNavBar = ({ user }) => {
  const location = useLocation()

  return (
    <div className='dashboardNavBar'>
      <NavbarHeader />
      <NavBarUserDetails
        avatar={"/images/default-avatar.jpg"}
        name={user.name}
        emailID={user.email_id}
      />
      <NavbarContent>
        {routeList.map((section, i) => {
          return (
            <NavbarSection
              heading={section.basic.heading}
              description={section.basic.description}
              key={i}
            >
              {section.routes.map((route, i) => {
                return (
                  <NavbarActionItem
                    key={i}
                    icon={route.icon}
                    lable={route.name}
                    tagline={route.tagline}
                    isBadge={route.badgeData.hasBadge}
                    badgeType={route.badgeData.badgeType}
                    badgeBg={route.badgeData.badgeBg}
                    badgeContent={route.badgeData.lable}
                    goTo={route.goTo}
                    isActive={location.pathname == route.goTo}
                    hasSubRoutes={route.subRoutes.length != 0 ? true : false}
                    subRoutes={route.subRoutes}
                  />
                )
              })}
            </NavbarSection>
          )
        })}
      </NavbarContent>
    </div>
  )
}

export default SuperAdminLayoutNavBar
