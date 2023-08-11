interface CheckProps {
  text: string;
  name: string;
  value: string;
}
const Check: React.FC<CheckProps> = ({ name, value, text }) => {
  return (
    <label className='flex gap-x-3'>
      <input
        type='radio'
        className='h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2'
        name={name}
        value={value}
      />
      <span className='text-base/6 text-neutral-950'>{text}</span>
    </label>
  );
};

export default Check;
