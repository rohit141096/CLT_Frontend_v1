import React from 'react'

const Backdrop = ({ type="dark", action=()=>console.log() }) => {
    return (
        <div className={`cmsCoreBackdrop ${type}`} onClick={action}>&nbsp;</div>
    )
}

export default Backdrop