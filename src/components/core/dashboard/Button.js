import React, { useState, useEffect } from 'react'
import StyledButtonLoader from '../form/StyledButtonLoader';

const Button = ({
    type="button", 
    width="full", 
    bg="fill",
    bgType="primary",
    disabled=false, 
    borderRadius="short",
    hasIcon=false, 
    icon="", 
    iconPosition="left",
    isLoading=false,
    action= () => console.log(''),
    height="",
    children
}) => {

    const [buttonClass, setButtonClass] = useState('');
    const [hasAction, setHasAction] = useState(false);
    const [renderAction, setRenderAction] = useState();

    useEffect(() => {
        let bgFill = `${bgType === 'fill' ? ' fill' : bgType === 'bordered' ? ' bordered' : bgType === 'underline' ? ' underline' : ' fill'}`;
        let bgColor = `${bg === 'dashboard' ? ' dashboard' : bg === 'primary' ? ' primary' : bg === 'error' ? ' error' : bg === 'warning' ? ' warning' : bg === 'success' ? ' success' : bg === 'white' ? ' white' : ' primary'}`;
        let butWidth = `${width === 'full' ? ' fullWidth' : width === 'auto' ? ' autoWidth' : width === 'half' ? ' halfWidth' : ' autoWidth'}`;
        let bordRad = `${borderRadius === "short" ? ' shortBr' : borderRadius === "full" ? ' fullBr' : borderRadius === "none" ? ' noBr' : ' fullBr' }`
        let butIcon = `${hasIcon === true ? ' hasIcon' : ''}`;
        let icoPos = hasIcon === true ? `${iconPosition === "left" ? ' icoLeft' : iconPosition === "right" ? ' icoRight' : ' icoLeft'}` : ''; 
        let butHight = `${height === "short" ? ' shortHight' : '' }`;

        let butClass = `cmsDashboardButton${bgFill}${bgColor}${butWidth}${bordRad}${butIcon}${icoPos}${butHight}`;
        setButtonClass(butClass);

    }, [bg, bgType, width, borderRadius, hasIcon, iconPosition]);

    useEffect(() => {
        if(isLoading === true){
            disabled = true;
        }
        else{
            disabled = false;
        }
    }, [isLoading]);

    useEffect(() => {
        if(type != "submit"){
            setHasAction(true);
        }
        else{
            setHasAction(false);
        }
    }, [action, type]);

    return (
        <button type= 
            {
                type === "button" ? "button" : 
                type === "submit" ? "submit" : 
                type === "reset" ? "reset" : 
                "button"
            } 
            className={buttonClass}
            onClick={ hasAction ? action : undefined }
            disabled={disabled === true ? true : disabled === false ? false : false}
            >
            {
                hasIcon === true
                ?
                    iconPosition === "left"
                    ?
                    <div className="cmsDashboardButtonIcon">
                        <i className={`${icon} cmsDashboardButtonIco`}></i>
                    </div>
                    :
                    <></>
                :
                <></>
            }

            <span className="cmsDashboardButtonLable">{children}</span>
            
            {
                hasIcon === true
                ?
                    iconPosition === "right"
                    ?
                    <div className="cmsDashboardButtonIcon">
                        <i className={`${icon} cmsDashboardButtonIco`}></i>
                    </div>
                    
                    :
                    <></>
                :
                <></>
            }
            {
                isLoading === true
                ?
                    <StyledButtonLoader bg={bg} bgType={bgType} width={`${width === 'full' ? ' fullWidth' : width === 'auto' ? ' autoWidth' : width === 'half' ? ' halfWidth' : ' autoWidth'}`} />
                :
                    <></>
            }
            
        </button>
    )
}

export default Button