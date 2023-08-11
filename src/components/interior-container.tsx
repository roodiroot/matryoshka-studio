interface InteriorContainerProps {
  children: React.ReactNode;
  className?: string;
}
const InteriorContainer: React.FC<InteriorContainerProps> = ({
  className = "",
  children,
}) => {
  return (
    <div className={`mx-auto max-w-7xl px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default InteriorContainer;
