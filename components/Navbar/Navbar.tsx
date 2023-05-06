import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "public/rajlogo.png";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import SearchBar from "../SearchBar/SearchBar";
// import logo from "public/rajlogo.png";

interface NavLink {
  id: number;
  title: string;
  link: string;
  icon?: ReactNode;
}

const navLinks: NavLink[] = [
  {
    id: 0,
    title: "Home",
    link: "#",
  },
  {
    id: 1,
    title: "Category",
    link: "#",
  },
  {
    id: 2,
    title: "About Me",
    link: "#",
  },
  // {
  //   id: 3,
  //   title: "Search",
  //   icon: <BiSearchAlt2 />,
  //   link: "#",
  // },
];

export default function Navbar() {
  return (
    <nav className="">
      <HamburgNavbar />
      <FullNavbar />
    </nav>
  );
}

//full size navbar for large screens
const FullNavbar = () => {
  const [activeId, setActiveId] = useState<number>();
  return (
    <div className="hidden items-center justify-between py-4 pb-2 pr-28 shadow-md lg:flex">
      <div>
        <Image alt="logo" src={logo} width={100} />
      </div>
      <div className="flex items-center gap-x-10">
        {navLinks.map(({ id, title, link, icon }) => (
          <div className="group w-fit" key={id} onClick={() => setActiveId(id)}>
            <Link
              href={link}
              className={`transition-smooth inline-flex items-center gap-x-2 text-lg font-medium group-hover:text-orange-600 ${
                activeId === id && " !text-blue-900"
              }`}
            >
              {/* {icon && icon} */}
              {title}
            </Link>
            <div
              className={`${
                activeId === id && "!w-full !translate-x-0 !bg-blue-800"
              } transition-smooth mt-2 h-[3px] w-0 translate-x-[100%] rounded-full group-hover:w-full group-hover:translate-x-0 group-hover:bg-orange-600`}
            ></div>
          </div>
        ))}
        <SearchBar />
      </div>
    </div>
  );
};

//hamburger menu for small screens
const HamburgNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <MobileMenu {...{ setIsMobileMenuOpen, isMobileMenuOpen }} />

      <div className="flex items-center justify-between px-6 py-3 shadow-md">
        <RxHamburgerMenu size={22} onClick={() => setIsMobileMenuOpen(true)} />

        <div>
          <Image alt="logo" src={logo} width={70} />
        </div>
      </div>
    </div>
  );
};

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
    },
  },
};

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const MobileMenu = ({
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          key="mobile-menu"
          className="absolute left-0 top-0 z-10 flex h-[100dvh] w-full flex-col items-center bg-gradient-to-br from-blue-500 to-blue-400 pt-28 text-white"
          variants={list}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <AiOutlineClose
            size={22}
            className="absolute left-6 top-5"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="flex flex-col gap-y-6 text-center">
            {navLinks.map(({ id, title, link, icon }) => (
              <motion.div key={id} className="text-xl" variants={item}>
                <Link href={link}>{title}</Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
