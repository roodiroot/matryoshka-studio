"use client";

interface InfoProjectProps {
  info_arr: { title: string; description: string }[];
}

const InfoProject: React.FC<InfoProjectProps> = ({ info_arr }) => {
  return (
    <dl className='-mx-6 grid grid-cols-1 text-sm text-neutral-950 sm:mx-0 sm:grid-cols-3'>
      {info_arr?.map((i) => (
        <div
          key={i?.description}
          className='border-t border-neutral-200 px-6 py-4 first:border-t-0 sm:border-l sm:border-t-0'
        >
          <dt className='font-semibold'>{i?.title}</dt>
          <dd>{i?.description}</dd>
        </div>
      ))}
    </dl>
  );
};

export default InfoProject;
