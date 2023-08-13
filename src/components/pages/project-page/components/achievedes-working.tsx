import AchievedWorking from "./achieved-working";

interface AchievedesWorkingProps {
  achieved: { title: string; description: string }[];
}
const AchievedesWorking: React.FC<AchievedesWorkingProps> = ({ achieved }) => {
  return (
    <div className='my-32 !max-w-none'>
      <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none'>
        {achieved.map((i) => (
          <AchievedWorking title={i.title} description={i.description} />
        ))}
      </div>
    </div>
  );
};

export default AchievedesWorking;
