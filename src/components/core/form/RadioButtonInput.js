import React from 'react'

const RadioButtonInput = ({lable, name, value, action, checked, reference, disabled}) => {
    return (
        <label className="cmsRadio">
            <input type="radio" ref={reference} name={name} value={value} onChange={(e) => action(e.target.value)} defaultChecked={checked} disabled={disabled} />
            {lable}
        </label>
    )
}

export default RadioButtonInput