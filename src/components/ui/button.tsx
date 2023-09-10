import Link from "next/link";

interface ButtonProps {
  label?: string;
  type: string;
  to?: string;
  children?: any;
  onClick?: () => void;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({
  label,
  type,
  to,
  className = "",
  children,
  onClick,
}) => {
  const classname = `
  inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition
  ${type === "dark" && "bg-neutral-950 text-white hover:bg-neutral-800"}
  ${type === "white" && "bg-white text-neutral-950 hover:bg-neutral-200"}
  ${className}
  `;

  if (onClick) {
    return (
      <button onClick={() => onClick()} className={classname}>
        {children ? children : <span className='relative top-px'>{label}</span>}
      </button>
    );
  }
  if (to) {
    <Link href={to} className={classname}>
      {children ? children : <span className='relative top-px'>{label}</span>}
    </Link>;
  }
};

export default Button;
