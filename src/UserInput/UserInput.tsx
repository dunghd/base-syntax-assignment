import React from 'react';

export interface IUserInputProps {
  changed: (event: any) => void,
  currentName: string
};

const userInput = (props: IUserInputProps) => {
  const inputStyle = {
    border: '2px solid red'
  } as React.CSSProperties;

  return <input
    type="text"
    style={inputStyle}
    onChange={props.changed}
    value={props.currentName}
  />
};

export default userInput;