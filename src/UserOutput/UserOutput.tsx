import React from 'react';

import './UserOutput.css'

export interface IUserOutputProps {
  userName: string;
}

const userOutput = (props: IUserOutputProps) => {
  return (
    <div className="UserOutput">
      <p>Username: {props.userName}</p>
      <p>I hope I'll be overwritten!</p>
    </div>
  );
};

export default userOutput;