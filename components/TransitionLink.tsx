import { ReactNode } from "react";
import { Link } from "next-view-transitions";
import clsx from "clsx";

export type TransitionLinkProps = {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  tabIndex?: number;
} & {
  href?: string;
  text?: string;
};
const TransitionLink = ({
  children,
  href,
  className,
  onClick,
  tabIndex,
  text,
}: TransitionLinkProps) => {
  const url = href;
  if (!url) {
    console.log("no url found");
    return null;
  }
  return (
    <Link
      href={url}
      className={clsx(
        "inline-flex w-fit items-center justify-center border border-white px-12 py-4 text-center font-extrabold tracking-wider text-white uppercase transition-colors duration-300 hover:bg-white/20",
        className,
      )}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      {text ?? children}
    </Link>
  );
};

export default TransitionLink;
