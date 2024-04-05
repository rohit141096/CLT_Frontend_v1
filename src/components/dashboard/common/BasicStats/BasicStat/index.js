import React from 'react'
import Card from '../../../../core/dashboard/Card'
import PrimaryStatCount from '../../../../core/typography/dashboard/PrimaryStatCount'
import PrimaryStatLable from '../../../../core/typography/dashboard/PrimaryStatLable'
import SecondaryStat from '../../../../core/typography/dashboard/SecondaryStat'

const BasicStat = ({ 
    cardHeading, 
    headingAction = () => console.log(cardHeading),
    cardStatColor = "blue",
    statCount = 0,
    statLable = "CMS 4",
    secondaryStatLable = "",
    secondaryStatCount = 0,
    headingActionIcon,
    statId
}) => {
    return (
        <div className="dashboardPageStatSingle">
            <Card heading={cardHeading} isHeadingAction={true} headingAction={headingAction} headingActionIcon={headingActionIcon}>
                <div className="dashboardHomeStats">
                    <div className="dashboardHomeStatsNumberLable">
                        <PrimaryStatCount 
                            color = {cardStatColor}
                            count={statCount}
                            updateCount={false}
                            statId={`${statId}Primary`}
                        />
                        <PrimaryStatLable 
                            color={cardStatColor}
                            lable={statLable}
                        />
                    </div>
                    <SecondaryStat 
                        lable={secondaryStatLable}
                        count={secondaryStatCount}
                        statId={`${statId}Secondary`}
                    />
                </div>
            </Card>
        </div>
    )
}

export default BasicStat