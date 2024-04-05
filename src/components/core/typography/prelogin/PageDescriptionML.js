import React, { useState, useEffect } from 'react'
import Description from './PageDescription'

const DescriptionML = ({texts}) => {
    const [descriptions, setDescriptions] = useState([]);
    useEffect(() => {
        let textArray = texts.split('||');
        setDescriptions(textArray);
    }, [texts]);

    return(
        <>
            <div className="preLoginFormSectionDescriptionML">
                {
                    descriptions.map((description, i) => {
                        return(
                            <Description key={i}>{description}</Description>
                        )
                    })
                }
            </div>
            
        </>
    )
    
}

export default DescriptionML