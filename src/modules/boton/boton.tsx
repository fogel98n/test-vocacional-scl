import React from "react";
import "./boton.css";

interface BottonProps {
    titulo: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

export const Boton: React.FC<BottonProps> = ({ titulo, className = "", onClick, type = "button" }) => {
    const cls = `scl-boton ${className}`.trim();
    return (
        <button className={cls} onClick={onClick} type={type}>
            {titulo}
        </button>
    );
};