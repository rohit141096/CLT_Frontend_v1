import React, { useState, useEffect } from 'react'
import StyledButtonLoader from '../../form/StyledButtonLoader';

const TableButton = ({
    type="button", 
    width="auto", 
    bg="fill",
    disabled=false, 
    clickable=true,
    borderRadius="full",
    hasIcon=false, 
    icon="", 
    iconPosition="left",
    isLoading=false,
    action= () => console.log(''),
    children
}) => {

    const [buttonClass, setButtonClass] = useState('');
    const [hasAction, setHasAction] = useState(false);
    const [renderAction, setRenderAction] = useState();

    useEffect(() => {
        let bgFill = `${' fill'}`;
        let bgColor = `${bg === 'dashboard' ? ' dashboard' : bg === 'primary' ? ' primary' : bg === 'error' ? ' error' : bg === 'warning' ? ' warning' : bg === 'success' ? ' success' : bg === 'white' ? ' white' : ' primary'}`;
        let butWidth = `${width === 'full' ? ' fullWidth' : width === 'auto' ? ' autoWidth' : width === 'half' ? ' halfWidth' : ' autoWidth'}`;
        let bordRad = `${borderRadius === "short" ? ' shortBr' : borderRadius === "full" ? ' fullBr' : borderRadius === "none" ? ' noBr' : ' fullBr' }`
        let butIcon = `${hasIcon === true ? ' hasIcon' : ''}`;
        let icoPos = hasIcon === true ? `${iconPosition === "left" ? ' icoLeft' : iconPosition === "right" ? ' icoRight' : ' icoLeft'}` : ''; 
        let buttonClickable = clickable === true ?  ` clickable` : ' clickDisabled';

        let butClass = `cmsDashboardTableButton${bgFill}${bgColor}${butWidth}${bordRad}${butIcon}${icoPos}${buttonClickable}`;
        setButtonClass(butClass);

    }, [bg, width, borderRadius, hasIcon, iconPosition, clickable]);

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
                    <div className="cmsDashboardTableButtonIcon">
                        <i className={`${icon} cmsDashboardTableButtonIco`}></i>
                    </div>
                    :
                    <></>
                :
                <></>
            }

            <span className="cmsDashboardTableButtonLable">{children}</span>
            
            {
                hasIcon === true
                ?
                    iconPosition === "right"
                    ?
                    <div className="cmsDashboardTableButtonIcon">
                        <i className={`${icon} cmsDashboardTableButtonIco`}></i>
                    </div>
                    
                    :
                    <></>
                :
                <></>
            }
            {
                isLoading === true
                ?
                    <StyledButtonLoader bg={bg} bgType={"fill"} width={`${width === 'full' ? ' fullWidth' : width === 'auto' ? ' autoWidth' : width === 'half' ? ' halfWidth' : ' autoWidth'}`} />
                :
                    <></>
            }
            
        </button>
    )
}

export default TableButton