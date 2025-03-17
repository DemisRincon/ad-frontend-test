import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-fillQuaternary h-[172px] w-full flex justify-center items-center"
      role="contentinfo"
      aria-label="Footer"
    >
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center">
          <Link href="/" aria-label="Go to home page" role="link">
            <Image
              src="/logo.svg"
              alt="Company Logo"
              width={170}
              height={44}
              style={{ width: "auto", height: "auto" }}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
