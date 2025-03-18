"use client";
import Link from "next/link";
import Image from "next/image";

interface ErrorPageProps {
  error: Error & { digest?: string };
}

const Error: React.FC<ErrorPageProps> = ({ error }) => {
  console.error("Unhandled error:", error);

  return (
    <div className="font-archivo flex flex-col items-center justify-center py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4" role="alert">
        Something went wrong!
      </h1>
      <p className="text-contentSecondary mb-4 max-w-md">
        We&apos;re sorry, but we encountered an unexpected error.
      </p>

      {error.digest && (
        <p className="text-sm text-contentSecondary mb-6">
          Error ID: {error.digest}
        </p>
      )}
      <div className="mb-8">
        <Image
          src="/error.svg"
          alt="Error illustration"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="border border-gray-300 px-6 py-3 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
