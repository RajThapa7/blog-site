import { BiSearchAlt2 } from "react-icons/bi";
import Key from "../Key/Key";
import classNames from "@/utils/className";

export default function SearchBar({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        className,
        `transition-smooth flex w-fit items-center gap-x-3 rounded-full border-2 px-4 py-2 font-sans hover:border-blue-800`
      )}
    >
      <BiSearchAlt2 />
      Search
      <span className="inline-flex items-center text-xs">
        <Key>CTRL</Key>+<Key>K</Key>
      </span>
    </div>
  );
}
