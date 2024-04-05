import React, { useEffect, useState } from 'react'
import UserAddForm from './UserAddForm'
import UserAddPreview from './UserAddPreview'

const UserAddFormPreview = ({ user, role }) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const setAddedUserDetails = async (payload) => {
        setName(payload.name.replaceAll(/\s/g,'') === "" ? "User Full Name" : payload.name);
        setEmail(payload.email_id === "" ? "admin-user@karnataka.gov.in" : payload.email_id);
        setPhone(payload.phone_no === "" ? "1234567890" : payload.phone_no);
    }

    return (
        <div className="addUserFormPreviewContainer">
            <div className="addUserFormContainer">
                <UserAddForm user={user} role={role} updateAddedUser = {(e) => setAddedUserDetails(e)} />
            </div>
            <div className="addUserPreviewContainer">
                <UserAddPreview user={user} name={name} role={role} email={email} phone={phone} />
            </div>
        </div>
    )
}

export default UserAddFormPreview