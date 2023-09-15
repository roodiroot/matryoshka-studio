import Link from "next/link";

interface ButtonProps {
  label?: string;
  type: "dark" | "white";
  to?: string;
  children?: any;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  label,
  type,
  to,
  className = "",
  children,
  onClick,
  disabled = false,
}) => {
  const classname = `
  inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition 
  ${
    type === "dark" &&
    "bg-neutral-950 text-white hover:bg-neutral-800 disabled:bg-neutral-800"
  }
  ${
    type === "white" &&
    "bg-white text-neutral-950 hover:bg-neutral-200 disabled:bg-neutral-200"
  }
  ${className}
  `;

  if (onClick) {
    return (
      <button
        onClick={() => onClick()}
        className={classname}
        disabled={disabled}
      >
        {children ? children : <span className='relative top-px'>{label}</span>}
      </button>
    );
  }
  if (to) {
    return (
      <Link href={to} className={classname}>
        {children ? children : <span className='relative top-px'>{label}</span>}
      </Link>
    );
  }
};

export default Button;
