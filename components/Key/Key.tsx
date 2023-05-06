import { ReactNode } from "react";

export default function Key({ children }: { children: ReactNode }) {
  return (
    <div className="w-fit rounded-sm bg-gray-200 p-1 py-[2px] font-sans text-[11px] font-semibold text-gray-700 shadow-sm">
      {children}
    </div>
  );
}
