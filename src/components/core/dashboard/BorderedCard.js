import React, { useState, useEffect } from 'react';

const BorderedCard = ({hasPadding=true, borderRadius=true, borderClr="grey", styles={}, children}) => {
    const [cardClass, setCardClass] = useState('');

    useEffect(() => {
        let paddingClass = `${hasPadding === true ? 'hasPadding' : hasPadding === false ? '' : 'hasPadding'}`;
        let borderRadiusClass = `${borderRadius === true ? 'curved' : borderRadius === false ? '' : 'curved'}`;
        let borderColorClass = `${borderClr === "grey" ? "grey" : borderClr === "primary" ? "primary" : borderClr === "success" ? "success" : borderClr === "error" ? "error" : borderClr === "warning" ? "warning" : borderClr === "dark" ? "dark" : borderClr === "light" ? "light" : "grey"}`;
        
        setCardClass(`cmsCoreBorderedCard ${paddingClass} ${borderRadiusClass} ${borderColorClass}`);
    }, [hasPadding, borderRadius, borderClr])

    return (
        <div className={cardClass} style={styles}>
            {children}
        </div>
    )
}

export default BorderedCard