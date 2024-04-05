import React from 'react'

const StyledButtonLoader = ({
    bg="primary",
    bgType="fill"
}) => {
    return (
        <div className={`styledLoader ${bg} ${bgType}`}>
            <div className="ball"></div>
        </div>
    )
}

export default StyledButtonLoader