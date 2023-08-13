import { ButtonType } from "config/types";
import * as React from "react";

const Button: React.FC<ButtonType> = (props: ButtonType) => {

   const handleClick = () => {
      props?.onClick && props.onClick();
   }

  return (
     <button className={`button ${props.type}`} onClick={() => handleClick()}>
        {props.text}
     </button>
  );
};

export default Button;
