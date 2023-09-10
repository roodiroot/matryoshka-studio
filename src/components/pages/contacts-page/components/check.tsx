import { FieldError, Path, UseFormRegister } from "react-hook-form";
import { IFormValues } from "./form";

interface CheckProps {
  text: string;
  value: string;
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  error?: FieldError | undefined;
}
const Check: React.FC<CheckProps> = ({ value, text, register, label }) => {
  return (
    <label className='flex gap-x-3'>
      <input
        {...register(label)}
        type='radio'
        className='h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2'
        value={value}
      />
      <span className='text-base/6 text-neutral-950'>{text}</span>
    </label>
  );
};

export default Check;
