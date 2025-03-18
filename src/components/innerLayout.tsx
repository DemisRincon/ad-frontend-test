import type React from "react";

import Footer from "@/components/footer";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

const InnerLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default InnerLayout;
