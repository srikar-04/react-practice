import React, {useContext} from 'react'
import userContext from '../context/UserContext'

function profile() {

    const {user} = useContext(userContext)

    if(user) {
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

export default profile