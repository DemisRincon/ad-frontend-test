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
    >
      <Image src="/arrow.svg" alt="Arrow Image" width={24} height={24} />
      {label}
    </Link>
  );
}
