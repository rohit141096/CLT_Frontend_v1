import React from 'react'
import { icons } from '../../../constants'

const DashboardHeaderSearchBar = ({showAction=false, action=()=>console.log(''), children}) => {
    return (
        <div className="cmsDashboardHeaderSearchBar">
            <div className="cmsDashboardHeaderSearchBarInput">
                {children}
            </div>
            <div className="cmsDashboardHeaderSearchBarMGlassIcon">
                <i className={`${icons.search} cmsDashboardHeaderSearchBarMGlassIco`}></i>
            </div>
            {
                showAction && (
                    <div className="cmsDashboardHeaderSearchBarSubmit">
                        <button className="cmsDashboardHeaderSearchBarSubmitButton">
                            <span className="cmsDashboardHeaderSearchBarSubmitButtonTxt">Search</span>
                        </button>
                    </div>
                )
            }
            
        </div>
    )
}

export default DashboardHeaderSearchBar