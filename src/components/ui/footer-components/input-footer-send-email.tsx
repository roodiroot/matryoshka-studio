import { useForm, SubmitHandler } from "react-hook-form";

interface InputFooterSendEmailProps {
  className?: string;
}

type Inputs = {
  email: string;
};

const InputFooterSendEmail: React.FC<InputFooterSendEmailProps> = ({
  className = "",
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const text = `<b>Новая подписка на рассылку:</b>%0A<i>${data.email}</i>`;
    await fetch(`/api/order?text=${text}`);
    reset();
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type='text'
        {...register("email", {
          required: true,
          pattern: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+)/i,
        })}
        className={`
        block w-full rounded-2xl border border-neutral-300 bg-transparent 
        py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent 
        transition placeholder:text-neutral-500 focus:outline-none focus:ring-neutral-950/5
        ${errors.email ? "focus:border-rose-600" : "focus:border-neutral-950"}
        ${errors.email && "border-rose-600"}
        `}
        placeholder='Адрес электронной почты'
      />
      <div className='absolute inset-y-1 right-1 flex justify-end'>
        <button
          onClick={handleSubmit(onSubmit)}
          className='flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputFooterSendEmail;
