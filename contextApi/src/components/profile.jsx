import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {

    const {user} = useContext(UserContext)
    console.log(user, "this is user in profile component");
    

    if(!user) {
        return (
            <div>please login</div>
        )
    }
    return (
        <div>
            <div>welcome {user.username}</div>
        </div>
    )
}

export default Profile