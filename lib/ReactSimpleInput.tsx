import React from "react";
import "./ReactSimpleInput.css";

interface IProps {
   error?: string;
   errorColor?: string;
}

const CustomInput = ({
   id = "react-simple-input",
   error,
   errorColor,
   ...props
}: React.InputHTMLAttributes<HTMLInputElement> & IProps) => {
   return (
      <div className="container">
         <input
            {...props}
            id={id}
            className="form_field"
            style={{
               ...props.style,
               borderColor: error && (errorColor || "#e81e25"),
            }}
         />
         <label
            htmlFor={id}
            className="form_label"
            style={{
               ...props.style,
               color: error && (errorColor || "#e81e25"),
               fontWeight: error ? 600 : 500,
            }}>
            {props.placeholder}
         </label>
         <div style={{ color: error && (errorColor || "#e81e25") }}>
            {error}
         </div>
      </div>
   );
};

export default React.memo(CustomInput);
