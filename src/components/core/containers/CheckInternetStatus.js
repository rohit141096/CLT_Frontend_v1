import React from 'react'
import { Offline, Online } from "react-detect-offline";

const CheckInternetStatus = () => {
    return (
        <Offline>
            <div className="noInternetTemp">&nbsp;</div>
        </Offline>
    )
}

export default CheckInternetStatus