import React from 'react';
import { motion } from 'framer-motion';

const PreLoginContentSection = ({children}) => {
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    return (
        <div className="preLoginContentSection">
            <div className="preLoginContentSectionDottedPattern">
                <img src="images/pre-login-bg-pattern-dots.png" className="preLoginContentSectionDottedPatternImg" />
            </div>

            <motion.div className="preLoginContentSectionMain" variants={container} initial="hidden" animate="visible">
                {children}
            </motion.div>
        </div>
    )
}

export default PreLoginContentSection