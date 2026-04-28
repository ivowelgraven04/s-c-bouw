import Link from "next/link";
import Image from "next/image";

type Props = { className?: string; height?: number };

export function Logo({ className = "", height = 44 }: Props) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="S&C Bouw — home"
    >
      <Image
        src="/images/logo.png"
        alt="S&C Bouw"
        width={height * 3}
        height={height}
        priority
        className="h-10 w-auto sm:h-11"
      />
    </Link>
  );
}
