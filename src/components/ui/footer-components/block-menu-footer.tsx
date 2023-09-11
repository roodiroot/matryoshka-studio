import Link from "next/link";

interface BlockMenuFooterProps {
  title: string;
  links: { name: string; path: string }[];
  blank?: boolean;
  children?: React.ReactNode;
}

const BlockMenuFooter: React.FC<BlockMenuFooterProps> = ({
  title,
  links,
  blank,
  children,
}) => {
  return (
    <li>
      <div className='font-display text-sm font-semibold tracking-wider text-neutral-950'>
        {title}
      </div>
      <ul className='mt-4 text-sm text-neutral-700'>
        {links.map((l) => (
          <div key={l?.name} className='mt-4'>
            <Link
              href={l?.path}
              target={blank ? "_blank" : "_self"}
              className='transition hover:text-neutral-950'
            >
              {l?.name}
            </Link>
          </div>
        ))}
        {children && children}
      </ul>
    </li>
  );
};

export default BlockMenuFooter;
