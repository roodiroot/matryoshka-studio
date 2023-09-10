interface InputFooterSendEmailProps {
  className?: string;
}
const InputFooterSendEmail: React.FC<InputFooterSendEmailProps> = ({ className = '' }) => {
  const submit = async () => {
    const response = await fetch('/api/order?text=dfjsdkfjbvsdjfv');
    console.log(response);
  };
  return (
    <div className={`relative ${className}`}>
      <input
        type="email"
        className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        placeholder="Адрес электронной почты"
      />
      <div className="absolute inset-y-1 right-1 flex justify-end">
        <button
          onClick={submit}
          className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InputFooterSendEmail;
