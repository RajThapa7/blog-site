import classNames from "@/utils/className";
import { ReactNode } from "react";

interface IPageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function PageLayout({ children, className }: IPageLayoutProps) {
  return (
    <div className={classNames(className, `px-4 py-12 pt-32 md:px-20`)}>
      {children}
    </div>
  );
}
