interface BurgerProps {
  x?: boolean;
  onClick: () => void;
  className?: string;
}
const Burger: React.FC<BurgerProps> = ({ onClick, className = "", x }) => {
  return (
    <button
      onClick={onClick}
      className={`group -m-2.5 rounded-full p-2.5 transition ${
        !x ? "hover:bg-neutral-950/10" : "hover:bg-white/10"
      }`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={className}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d={
            !x
              ? "M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              : "M6 18L18 6M6 6l12 12"
          }
        />
      </svg>
    </button>
  );
};

export default Burger;
