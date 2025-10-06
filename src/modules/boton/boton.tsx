import type React from "react";

interface BottonProps{
    titulo:string;
    className?:string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}
export const Boton:React.FC<BottonProps>=({titulo,className="", onClick,type="button"})=>{
 return(
    <>
        <button className={className} onClick={ onClick} type={type}>{titulo}</button>
    </>
 )
}