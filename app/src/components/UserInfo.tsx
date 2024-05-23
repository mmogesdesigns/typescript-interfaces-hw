import React from 'react';
import { UserInfoProps } from '../interfaces/UserInfoProps';

const UserInfo = ({name, age,email}: UserInfoProps) => {
  return (
    <div>
        
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      
    </div>
  )
}

export default UserInfo
