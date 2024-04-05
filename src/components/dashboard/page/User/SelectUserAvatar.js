import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { icons } from '../../../../constants'
import AvatarServices from '../../../../services/Avatar';
import { globals, ToastAlert } from '../../../../utils';

const SelectUserAvatar = ({user, containerVariant, childVariant}) => {

    const [avatars, setAvatars] = useState([]);
    const [selectedAvatar, setSelectedAvatar] = useState(0);

    const handleGetAvatarsRequest = async () => {
        const getAvatarsReq = await AvatarServices.getPublicAvatars();

        if(getAvatarsReq.status === false){
            ToastAlert.notifyError(getAvatarsReq.message);
            setAvatars([]);
        }
        else{
            if(getAvatarsReq.data.length > 0){
                setAvatars(getAvatarsReq.data);
            }
            else{
                setAvatars([]);
            }
        }
    }

    useEffect(() => {
        handleGetAvatarsRequest();
    }, []);

    return (
        <div className="selectAvatarSection">
            <div className="selectAvatarSectionArrow">
                <i className={`selectAvatarSectionArrowMain ${icons.play}`}></i>
            </div>
            <motion.div className="selectAvatarSectionList" variants={containerVariant} initial="hidden" animate="visible" exit="hidden">
                {
                    avatars.map((avatar, i) => {
                        return (
                            <motion.div className="selectAvatarSectionListItem" variants={childVariant}>
                                <div className="selectAvatarSectionListItemImage">
                                    <img src={`${globals.MEDIA_API_BASE_URL}${avatar.image.image_url.thumbnail.low_res}`} className="selectAvatarSectionListItemImg" alt="" />
                                    <div className={`selectedAvatarItem ${i === 0 ? 'selected' : ''}`}>
                                        <div className="selectedAvatarIcon">
                                            <i className={`selectedAvatarIco ${icons.tick}`}></i>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}

export default SelectUserAvatar