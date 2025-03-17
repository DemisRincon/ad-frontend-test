import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Oops! The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <div className="mb-8" role="img" aria-label="Sad face icon">
        <Image src="/nofound.svg" alt="Sad face icon" width={64} height={64} />
      </div>
      <Link
        href="/"
        className="bg-fillQuaternary text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;
