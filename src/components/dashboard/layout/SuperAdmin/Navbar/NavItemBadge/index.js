import React from 'react'
import DefaultNavBadge from './Default'
import CircleNavBadge from './Circle'
import RoundedNavBadge from './Rounded'
import PlainNavBadge from './Plain'

const NavbarBadge = ({ type="default", lable="", bg="default" }) => {
    return (
        <>
            {
                type === "default"
                ?
                <DefaultNavBadge bg={bg} lable={lable} />
                :
                type === "circle"
                ?
                <CircleNavBadge bg={bg} lable={lable} />
                :
                type === "rounded"
                ?
                <RoundedNavBadge bg={bg} lable={lable} />
                :
                type === "plain"
                ?
                <PlainNavBadge lable={lable} />
                :
                <DefaultNavBadge bg={bg} lable={lable} />
            }
        </>
    )
}

export default NavbarBadge