import React from 'react'
import { FaUsers } from 'react-icons/fa';

const User = () => {
    return (
        <div class="user_card">
        <FaUsers size={180} />
        <div class="user_container">
          <h4><b>John Doe {} </b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    )
}

export default User;
