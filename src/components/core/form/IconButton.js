import React, { useState, useEffect } from 'react'
import StyledButtonLoader from './StyledButtonLoader';

const IconButton = ({
    type="button", 
    bg="fill",
    bgType="primary",
    disabled=false, 
    borderRadius="short",
    icon="", 
    isLoading=false,
    action= () => console.log(''),
    height=""
}) => {

    const [buttonClass, setButtonClass] = useState('');
    const [hasAction, setHasAction] = useState(false);
    const [renderAction, setRenderAction] = useState();

    useEffect(() => {
        let bgFill = `${bgType === 'fill' ? ' fill' : bgType === 'bordered' ? ' bordered' : bgType === 'underline' ? ' underline' : ' fill'}`;
        let bgColor = `${bg === 'dashboard' ? ' dashboard' : bg === 'primary' ? ' primary' : bg === 'error' ? ' error' : bg === 'warning' ? ' warning' : bg === 'success' ? ' success' : bg === 'white' ? ' white' : ' primary'}`;
        let bordRad = `${borderRadius === "short" ? ' shortBr' : borderRadius === "full" ? ' fullBr' : borderRadius === "none" ? ' noBr' : ' fullBr' }`;
        let butHight = `${height === "short" ? ' shortHight' : '' }`;

        let butClass = `cmsFormIconButton hasIcon${bgFill}${bgColor}${bordRad}${butHight}`;
        setButtonClass(butClass);

    }, [bg, bgType, borderRadius]);

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
            <div className="cmsFormIconButtonIco">
                <i className={icon}></i>
            </div>

            {
                isLoading === true
                ?
                    <StyledButtonLoader bg={bg} bgType={bgType} width={`auto`} />
                :
                    <></>
            }
        </button>
    )
}

export default IconButton