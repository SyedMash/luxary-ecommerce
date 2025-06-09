import Link from "next/link";
import clsx from "clsx";

export interface IButtonLinkProps {
  href: string;
  className?: string;
  content: string;
}

const ButtonLink = ({
  content,
  className,
  href,
  ...props
}: IButtonLinkProps) => {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex w-fit items-center justify-center border border-white px-12 py-4 text-center font-extrabold tracking-wider text-white uppercase transition-colors duration-300 hover:bg-white/20",
        className,
      )}
      {...props}
    >
      {content}
    </Link>
  );
};
export default ButtonLink;
