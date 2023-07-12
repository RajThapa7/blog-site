import { useState } from "react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const scrollBtn = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      setVisible(true);
    } else if (scrolled <= 200) {
      setVisible(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", scrollBtn);
  }

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 600,
      smooth: true,
      spy: true,
    });
  };

  return (
    <>
      <button
        style={{ display: visible ? "inline" : "none" }}
        onClick={scrollToTop}
        className="transition-smooth fixed bottom-8 right-5 rounded-full bg-gray-200 p-[5px] text-gray-600 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700"
      >
        <MdOutlineKeyboardDoubleArrowUp size={25} />
      </button>
    </>
  );
}
