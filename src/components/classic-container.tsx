interface ClassicContainerInterface {
  children: React.ReactNode;
  className?: string;
  teg?: any;
}
const ClassicContainer: React.FC<ClassicContainerInterface> = ({ children, className, teg }) => {
  const TagName = teg || 'div';
  return (
    <TagName className={`mx-auto max-w-7xl px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </TagName>
  );
};

export default ClassicContainer;
