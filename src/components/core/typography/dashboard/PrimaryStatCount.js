import React, { useEffect } from 'react'
import Count, { useCountUp } from 'react-countup'

const PrimaryStatCount = ({ color = "primary", count = 0, updateCount = false, statId }) => {

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
        <div className="dashboardHomeStatsNumber">
            <p className={`dashboardHomeStatsNumberTxt ${color}`} id={statId}></p>
        </div>
    )
}

export default PrimaryStatCount