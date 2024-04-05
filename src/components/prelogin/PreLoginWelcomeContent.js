import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "../core/typography/prelogin/SectionHeading"
import SectionDescription from "../core/typography/prelogin/SectionDescription"
import globals from "../../utils/Config"

const PreLoginWelcomeContent = () => {
  const item = {
    hidden: { y: -10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <>
      <motion.div className='preLoginContentSectionHeading' variants={item}>
        <SectionHeading className='preLoginContentSectionHeadingTxt'>
          Welcome to <br />
          CLT {globals.CMS_VERSION} Login page.
        </SectionHeading>
      </motion.div>
      <motion.div className='preLoginContentSectionDescription' variants={item}>
        <SectionDescription className='preLoginContentSectionDescriptionTxt'>
          CEG has been entrusted with the task of conducting the Online Computer Literacy Test in
          association with the Centre for e-Governance. As per the Government Order No: ಸಿಆಸುಇ 86
          ಇಆಇ ಬೆಂಗಳೂರು dated 31st November 2019, all Government employees are required to take the
          Online Computer Literacy Test ( i.e refer GO No DPAR 43 SCR 2008 Bangalore dated
          07.03.2012) for which employees need not pay for the 1st attempt. However, any employee
          attempting to clear the Online Computer Literacy Test in a 2nd attempt or any further
          attempt is required to pay an Exam Fee of Rs 359.00 +banking service charges..
        </SectionDescription>
      </motion.div>
      <motion.div className='preLoginContentSectionAvatarsDescription' variants={item}>
        <div className='preLoginContentSectionAvatars'>
          <div className='preLoginContentSectionAvatarSingle'>
            <img
              src='images/avatar.jpg'
              className='preLoginContentSectionAvatarSingleImg'
              alt='people'
            />
          </div>
          <div className='preLoginContentSectionAvatarSingle'>
            <img
              src='images/avatar.jpg'
              className='preLoginContentSectionAvatarSingleImg'
              alt='people'
            />
          </div>
          <div className='preLoginContentSectionAvatarSingle'>
            <img
              src='images/avatar.jpg'
              className='preLoginContentSectionAvatarSingleImg'
              alt='people'
            />
          </div>
          <div className='preLoginContentSectionAvatarSingle'>
            <img
              src='images/avatar.jpg'
              className='preLoginContentSectionAvatarSingleImg'
              alt='people'
            />
          </div>
        </div>
        <div className='preLoginContentSectionAvatDesc'>
          <p className='preLoginContentSectionAvatDescTxt'>
            Built over 500 websites for Govt. of Karnataka.
          </p>
        </div>
      </motion.div>
    </>
  )
}

export default PreLoginWelcomeContent
