interface NoteProps {
  text: string;
}
const Note: React.FC<NoteProps> = ({ text }) => {
  return (
    <div className='my-10 pl-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-6 before:w-px after:bottom-0 after:left-0 after:top-8 after:w-px'>
      <p className='font-display text-sm font-bold uppercase tracking-widest text-neutral-950'>
        Важно заметить
      </p>
      <div className='mt-4'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Note;
