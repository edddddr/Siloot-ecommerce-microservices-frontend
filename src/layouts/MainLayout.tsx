import type { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* <main className="flex-1 p-4">{children}</main> */}
      <main className="flex-1 ">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;