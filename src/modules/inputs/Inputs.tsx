import type { FieldErrors, UseFormRegister } from "react-hook-form";
import "./inputs.css";

interface InputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  type?: string;
}

export function Inputs({ label, name, register, errors, type = "text" }: InputProps) {
  const errorMsg = errors[name]?.message?.toString();
  return (
    <div className="scl-input-group">
      <label className="scl-input-label">{label}</label>
      <input className="scl-input-field" type={type} {...register(name)} />
      {errorMsg && <span className="scl-input-error">{errorMsg}</span>}
    </div>
  );
}
