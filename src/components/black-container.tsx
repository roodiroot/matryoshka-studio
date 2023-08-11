interface BlackContainerProps {
  children: React.ReactNode;
  className?: string;
}
const BlackContainer: React.FC<BlackContainerProps> = ({
  className = "",
  children,
}) => {
  return (
    <div
      className={`rounded-4xl bg-neutral-950 py-20 sm:py-32 lg:mt-56 ${className}`}
    >
      {children}
    </div>
  );
};

export default BlackContainer;
