import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "public/rajlogo.png";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";
import DarkModeToggel from "../DarkModeToggle/DarkModeToggel";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggel";

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
    link: "/",
  },
  {
    id: 1,
    title: "Category",
    link: "/category",
  },
  {
    id: 2,
    title: "About Me",
    link: "#",
  },
];

export default function Navbar() {
  const [isNavbarVisible, setIsNavbarVisible] = useState<boolean>(true);

  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function (e) {
      // Get the new Value
      currentScrollPosition = window.pageYOffset;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setIsNavbarVisible(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setIsNavbarVisible(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  return (
    <motion.nav
      className={`transition-smooth fixed z-50 w-full bg-white dark:bg-[rgb(13,20,35)] dark:text-gray-300`}
      animate={{
        y: isNavbarVisible ? 0 : -100,
        transition: {
          duration: 0.3,
          type: "just",
        },
      }}
    >
      <HamburgNavbar />
      <FullNavbar />
    </motion.nav>
  );
}

//full size navbar for large screens
const FullNavbar = () => {
  const router = useRouter();
  const [activeId, setActiveId] = useState<number>();
  return (
    <div className="hidden cursor-pointer items-center justify-between py-4 pb-2 pr-28 shadow-md dark:shadow-[rgb(22,30,49)] lg:flex">
      <div>
        <Image
          alt="logo"
          src={logo}
          width={100}
          onClick={() => {
            router.push("/");
            setActiveId(0);
          }}
        />
      </div>
      <div className="flex items-center gap-x-10">
        {navLinks.map(({ id, title, link, icon }) => (
          <div
            className="group w-fit"
            key={id}
            onClick={() => {
              router.push(link);
              setActiveId(id);
            }}
          >
            <p
              className={`transition-smooth inline-flex items-center gap-x-2 text-lg font-medium group-hover:text-orange-600 ${
                activeId === id && " !text-blue-900 dark:!text-blue-500"
              }`}
            >
              {/* {icon && icon} */}
              {title}
            </p>
            <div
              className={`${
                activeId === id && "!w-full !translate-x-0 !bg-blue-800"
              } transition-smooth mt-2 h-[3px] w-0 translate-x-[100%] rounded-full group-hover:w-full group-hover:translate-x-0 group-hover:bg-orange-600`}
            ></div>
          </div>
        ))}
        <SearchBar />
        <DarkModeToggle />
      </div>
    </div>
  );
};

//hamburger menu for small screens
const HamburgNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative z-50 lg:hidden">
      <MobileMenu {...{ setIsMobileMenuOpen, isMobileMenuOpen }} />

      <div className="flex items-center justify-between px-6 py-3 shadow-md">
        {isMobileMenuOpen ? (
          <AiOutlineClose
            size={22}
            className=""
            onClick={() => setIsMobileMenuOpen(false)}
          />
        ) : (
          <RxHamburgerMenu
            size={22}
            onClick={() => setIsMobileMenuOpen(true)}
          />
        )}
        <div>
          <Image alt="logo" src={logo} width={70} />
        </div>
      </div>
    </div>
  );
};

const list = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.05,
      duration: 0.4,
    },
  },
  hidden: {
    y: -250,
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      duration: 0.5,
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
          className="absolute left-0 top-16 z-10 flex h-fit w-full flex-col items-center bg-white pb-10 pt-6 text-black shadow-md dark:bg-[rgb(13,20,35)] dark:text-gray-200 dark:shadow-gray-800"
          variants={list}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <div className="flex flex-col gap-y-6 text-center">
            <div>
              <DarkModeToggel />
            </div>
            {navLinks.map(({ id, title, link, icon }) => (
              <motion.div key={id} className="text-lg" variants={item}>
                <Link href={link} onClick={() => setIsMobileMenuOpen(false)}>
                  {title}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
