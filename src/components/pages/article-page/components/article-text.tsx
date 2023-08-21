import PhotoElement from "@/components/ui/photo-element";
import Note from "./note";

interface ArticleTextProps {
  article: [];
}

const ArticleText: React.FC<ArticleTextProps> = ({ article }) => {
  return (
    <div className='typography'>
      {article &&
        article?.map((i: any) => (
          <div
            key={i.title}
            className='[&>h2]:text-2xl [&>p]:my-6 [&>h2]:font-bold [&>p]:text-lg [&>h2]:text-neutral-950 [&>h2]:mt-16 '
          >
            <h2>{i.title}</h2>
            {i.p.map((j: any) => {
              if (j.trim().slice(0, 2) === "-t") {
                return <Note key={j} text={j.trim().slice(2)} />;
              }
              if (j.trim().slice(0, 4) === "-img") {
                const img = j.trim().slice(4);
                console.log(img);
                return <PhotoElement key={j} className='my-10  max-sm:-mx-6' />;
              }
              return <p key={j}>{j.trim()}</p>;
            })}
          </div>
        ))}
    </div>
  );
};

export default ArticleText;
