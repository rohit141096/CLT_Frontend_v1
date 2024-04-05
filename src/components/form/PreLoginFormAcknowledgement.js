import React, { useState, useEffect, forwardRef } from 'react'

const PreLoginFormAcknowledgement = forwardRef((
    {
        lable="", 
        hasAction=false, 
        actionLable="", 
        actionHandler= ()=>console.log('')
    }, ref) => {
    return (
        <>
            <div className="cmsFormStep">
                <div className="cmsPreLoginFormAcknowledgement">
                    <div className="cmsPreLoginFormAcknowledgementMain">
                        <div className="cmsPreLoginFormAcknowledgementCheckBox">
                            <div className="checkbox-wrapper-12">
                                <div className="cbx">
                                    <input id="cbx-12" type="checkbox" ref={ref} />
                                    <label htmlFor="cbx-12"></label>
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                                        <path d="M2 8.36364L6.23077 12L13 2"></path>
                                    </svg>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                                    <defs>
                                        <filter id="goo-12">
                                            <fegaussianblur in="SourceGraphic" stdDeviation="4" result="blur"></fegaussianblur>
                                            <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></fecolormatrix>
                                            <feblend in="SourceGraphic" in2="goo-12"></feblend>
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                        <div className="cmsPreLoginFormAcknowledgementLable">
                            <p className="cmsPreLoginFormAcknowledgementLableTxt">{lable}</p>
                        </div>
                    </div>
                    {
                        hasAction === true
                        ?
                        <div className="cmsPreLoginFormAcknowledgementAction">
                            <p className="cmsPreLoginFormAcknowledgementActionTxt" onClick={actionHandler}>{actionLable}</p>
                        </div>
                        :
                        <></>
                    }
                </div>
            </div>
        </>
    )
});

export default PreLoginFormAcknowledgement