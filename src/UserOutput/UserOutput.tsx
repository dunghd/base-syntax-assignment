import React from 'react';

export interface IUserOutputProps {
  userName: string;
}

const userOutput = (props: IUserOutputProps) => {
  return (
    <div>
      <p>Username: {props.userName}</p>
      <p>I hope I'll be overwritten!</p>
    </div>
  );
};

export default userOutput;