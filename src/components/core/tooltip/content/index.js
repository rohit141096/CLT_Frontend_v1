import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import Backdrop from '../../containers/Backdrop';

const parentVariant = {
    hidden:{ opacity: 0, height: 0 },
    visible: {
        opacity: 1, 
        height: 'auto'
    },
    exit: {
        opacity: 0, 
        height: 0,
        transition: { delay: 0.3, duration: 0.3 }
    }
}

const TooltipContent = ({
    showContent=false,
    width="small", 
    position="bottomRight", 
    bg="lightBg", 
    border="curvedBorder", 
    shadow="defaultShadow", 
    action=()=>console.log(""),
    children 
}) => {
    return (
        <>
            {
                <AnimatePresence>
                    {showContent && (
                        <motion.div
                            className={`cmsDashboardTooltipMain ${width} ${position} ${bg} ${border} ${shadow}`} 
                            variants={parentVariant}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <Backdrop type={"light"} action={action} />
                            <div className="cmsDashboardTooltipInner">
                                {children}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            }
        </>
        
    )
}

export default TooltipContent