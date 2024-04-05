import React from 'react';
import Heading from '../core/typography/prelogin/PageHeading';
import Description from '../core/typography/prelogin/PageDescription';
import DescriptionML from '../core/typography/prelogin/PageDescriptionML';

const PreLoginSectionHeadings = ({heading="", description="", isDiscriptionML=false, hasAction=false, actionLable="", actionHandler= () => console.log('')}) => {
    return (
        <div className="preLoginFormSectionHeadingsAction" >
            <div className="preLoginFormSectionHeading">
                <Heading>{heading}</Heading>
            </div>
            <div className="preLoginFormSectionDescriptionAction">
                <div className="preLoginFormSectionDescription">
                    {
                        isDiscriptionML === false
                        ?
                            <Description className="preLoginFormSectionDescriptionTxt">{description}</Description>
                        :
                            <DescriptionML className="preLoginFormSectionDescriptionTxt" texts={description} />
                    }
                    
                </div>

                {
                    hasAction
                    ?
                    <div className="preLoginFormSectionAction" onClick={actionHandler}>
                        <p className="preLoginFormSectionActionTxt">{actionLable}</p>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}

export default PreLoginSectionHeadings