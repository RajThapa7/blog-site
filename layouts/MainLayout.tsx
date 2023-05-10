import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Subscribe from "@/components/Subscribe/Subscribe";
import { ReactNode } from "react";

interface IMainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: IMainLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Subscribe />
      <Footer />
    </>
  );
}
