import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import PlainContainer from '../../../core/containers/PlainContainer'
import SelectUserAvatar from './SelectUserAvatar'

const UserAddPreview = ({ user, name="User Full Name", role="Admin", email="admin-user@karnataka.gov.in", phone="1234567890" }) => {

    const [showSelectAvatar, setShowSelectAvatar] = useState(false);

    const parentVariant = {
        hidden:{ opacity: 0, height: 0 },
        visible: {
            opacity: 1, 
            height: 'auto'
        },
        exit: {
            opacity: 0, 
            height: 0,
            transition: { delay: 0.1, duration: 0.3 }
        }
    }

    const containerVariant = {
        hidden: {
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        },
        visible: {
            transition: {
                delay: 0.5,
                staggerChildren: 0.2,
                staggerDirection: 1
            }
        }
    }

    const childVariant = {
        hidden: {
            opacity: 0,
            x: -10
        },
        visible: {
            opacity: 1,
            x: 0,
        }
    }

    return (
        <div className="addUserPreviewMain">
            <div className="addUserPreviewVisual">
                <div className="addUserPreviewVisualMain">
                    <div className="addUserPreviewVisualBubble">
                        <div className="addUserPreviewVisualBubbleImageContainer">
                            <img src="/images/default-avatar.jpg" className="addUserPreviewVisualBubbleImage" alt="" />
                        </div>
                        <div className="addUserPreviewVisualBubbleEdit">
                            {
                                showSelectAvatar
                                ?
                                    <div className="addUserPreviewVisualBubbleEditSave" onClick={() => setShowSelectAvatar(false)}>
                                        <p className="addUserPreviewVisualBubbleEditSaveTxt">save</p>
                                    </div>
                                :
                                    <div className="addUserPreviewVisualBubbleEditDefault" onClick={() => setShowSelectAvatar(true)}>
                                        <p className="addUserPreviewVisualBubbleEditDefaultTxt">edit</p>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            {
                <AnimatePresence>
                    {showSelectAvatar && (
                        <motion.div style={{float: "left", width: "100%"}} 
                            variants={parentVariant}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <SelectUserAvatar user={user} containerVariant={containerVariant} childVariant={childVariant} />
                        </motion.div>
                    )}
                </AnimatePresence>
            }
            
            <div className={`${showSelectAvatar ? "hasMargin" : ""} addUserPreviewContent`}>
                <div className="addUserPreviewContentNameRole">
                    <div className="addUserPreviewContentName">
                        <p className="addUserPreviewContentNameTxt">{name}</p>
                    </div>
                    <div className="addUserPreviewContentRole">
                        <p className="addUserPreviewContentRoleTxt">Role: {role}</p>
                    </div>
                </div>
                <div className="addUserPreviewContentEmailPhone">
                    <div className="addUserPreviewContentEmail">
                        <p className="addUserPreviewContentEmailTxt">{email}</p>
                    </div>
                    <div className="addUserPreviewContentPhone">
                        <p className="addUserPreviewContentPhoneTxt">+91 {phone}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAddPreview