interface ClassicContainerInterface {
  children: React.ReactNode;
  className?: string;
}
const ClassicContainer: React.FC<ClassicContainerInterface> = ({
  children,
  className,
}) => {
  return (
    <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${className}`}>
      <div className='mx-auto max-w-2xl lg:max-w-none'>{children}</div>
    </div>
  );
};

export default ClassicContainer;
