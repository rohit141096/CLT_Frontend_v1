import React, { useEffect } from 'react'
import Count, { useCountUp } from 'react-countup'

const SecondaryStat = ({ lable = "", count = 0, updateCount = false, statId }) => {

    const counter = useCountUp({
        ref: statId,
        start: 0,
        end: count,
        duration: 5
    });

    const updateCounter = () => {
        counter.update(count);
    }

    return (
        <div className="dashboardHomeStatsSecondaryStats">
            <div className="dashboardHomeStatsSecondaryStatsContent">
                <span className="dashboardHomeStatsSecondaryStatLable">{lable}:</span>
                <span className="dashboardHomeStatsSecondaryStatCount" id={statId}></span>
            </div>
        </div>
    )
}

export default SecondaryStat