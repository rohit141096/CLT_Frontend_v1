import React from 'react'

const Form = ({ action=()=>console.log(), children }) => {
    return (
        <form onSubmit={(e) => action(e)} noValidate>
            <div className="cmsDashboardForm">
                {children}
            </div>
        </form>
    )
}

export default Form