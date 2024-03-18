import React,{useContext} from 'react'
import UserContext from '../context/UserContext';

function Admin() {


    const { user } = useContext(UserContext);

    if (!user) return <div>Admin Pannel</div>

    return <div>In Admin Panel Welcome {user.username}</div>
}

export default Admin