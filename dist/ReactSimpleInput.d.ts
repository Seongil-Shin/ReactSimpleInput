import React from "react";
import "./ReactSimpleInput.css";
interface IProps {
    error?: string;
    errorColor?: string;
}
declare const _default: React.MemoExoticComponent<({ id, error, errorColor, ...props }: React.InputHTMLAttributes<HTMLInputElement> & IProps) => JSX.Element>;
export default _default;
