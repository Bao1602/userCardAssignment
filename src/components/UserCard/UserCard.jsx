import React from 'react';
import './UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className='user-card'>

      <img src={user.avatar} className='avatar' />

      <div className='user-info'>

        <h4>{user.first_name} {user.last_name}</h4>

        <p>{user.email}</p>

        <div className='comment'>{ user.comments}</div> 
        
      </div>

    </div>
  );
};

export default UserCard;
