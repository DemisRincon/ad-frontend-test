import Image from "next/image";
import Link from "next/link";

interface BackButtonProps {
  href: string;
  label: string;
}

export function BackButton({ href, label }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1 text-base font-medium text-contentSecondary hover:text-contentPrimary transition-colors"
      aria-label={label}
    >
      <Image
        src="/arrow.svg"
        alt=""
        width={24}
        height={24}
        role="presentation"
      />
      <span>{label}</span>
    </Link>
  );
}
