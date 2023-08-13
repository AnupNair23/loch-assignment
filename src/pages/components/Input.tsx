import { InputType } from "config/types";
import * as React from "react";

const Input: React.FC<InputType> = (props: InputType) => {

  const handleInputChange = (val: string) => {
    if (props.onChange)
      props.onChange(val);
  }

  return (
    <div className="input-div">
      <input type={props.type} placeholder={props.placeholder} className={`input-text input_${props.size}`}
        onChange={(e) => handleInputChange(e.target.value)} />
    </div>
  );
};

export default Input;
