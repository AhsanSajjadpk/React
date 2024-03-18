import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function Profile() {

    const { user } = useContext(UserContext);

    if (!user) return <div> Login Panel</div>

    return <div>In Login Panel - Welcome {user.username}</div>

}

export default Profile