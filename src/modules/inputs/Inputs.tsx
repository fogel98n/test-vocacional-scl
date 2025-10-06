import type { FieldErrors, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  type?: string;
}

export function Inputs({ label, name, register, errors, type = "text" }: InputProps) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}:</label>
      <input type={type} {...register(name)} style={{ marginLeft: "10px", padding: "5px" }} />
      {errors[name] && (
        <span style={{ color: "red", marginLeft: "10px" }}>
          {errors[name]?.message?.toString()}
        </span>
      )}
    </div>
  );
}
