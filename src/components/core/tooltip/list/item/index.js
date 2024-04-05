import React from "react"
import { motion } from "framer-motion"

const childVariant = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
}

const TooltipListItem = ({ hasIcon = false, icon, lable = "", action = () => console.log("") }) => {
  return (
    <motion.div
      className={`cmsDashboardTooltipListItem ${hasIcon === true ? `hasIcon` : ``}`}
      variants={childVariant}
      onClick={action}
    >
      {hasIcon === true ? (
        <div className='cmsDashboardTooltipListItemIcon'>
          <i className={`${icon} cmsDashboardTooltipListItemIco`}></i>
        </div>
      ) : (
        <></>
      )}
      <div className='cmsDashboardTooltipListItemLable'>
        <p className='cmsDashboardTooltipListItemLableTxt'>{lable}</p>
      </div>
    </motion.div>
  )
}

export default TooltipListItem
