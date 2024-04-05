import React from 'react';
import { icons } from '../../../../../../constants';

const HeaderMenuItem = ({ icon, isLatest=true, isShort=false, action=()=>console.log('') }) => {
    return (
        <div className="dashboardHeaderMenuSingle" onClick={action}>
            <i className={`${icon} dashboardHeaderMenuSingleIco ${isShort === true ? 'searchIco' : ''}`}></i>
            {
                isLatest === false 
                ?
                    <div className="dashboardHeaderMenuSingleDot">
                        <div className="dashboardHeaderMenuSingleDotMain">&nbsp;</div>
                    </div>
                :
                    <></>
            }
            
        </div>
    )
}

export default HeaderMenuItem