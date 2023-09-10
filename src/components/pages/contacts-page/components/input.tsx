import { FieldError, Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "./form";

interface InputProps {
  placeholder: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  error?: FieldError | undefined;
  type?: string;
  className?: string;
}
const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  register,
  required,
  error,
  type = "text",
  className = " ",
}) => {
  const classnameForInput = `
          peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 
          text-base/6 text-neutral-950 ring-4 ring-transparent transition 
          focus:outline-none focus:ring-neutral-950/5 
          group-first:rounded-t-2xl group-last:rounded-b-2xl
          ${error ? "focus:border-rose-600" : "focus:border-neutral-950"}
          ${error && "border-rose-600"}
  `;
  const classnamelabel = `
          pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 
          transition-all duration-200 peer-focus:-translate-y-4 
          peer-focus:scale-75 peer-focus:font-semibold  
          peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 
          peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950
          ${error ? "text-rose-600" : "text-neutral-500"}
          ${error ? "peer-focus:text-rose-600" : "peer-focus:text-neutral-950"}
`;

  let pattern = undefined;
  if (type === "email") {
    pattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+)/i;
  }
  if (type === "tel") {
    pattern = /^((\+7|7|8|9)+([0-9]){10})$/;
  }

  return (
    <div
      className={`group relative z-0 transition-all focus-within:z-10 ${className}`}
    >
      <input
        type={type}
        {...register(label, { required, pattern })}
        placeholder=' '
        className={classnameForInput}
      />
      <label className={classnamelabel}>{placeholder}</label>
    </div>
  );
};

export default Input;
