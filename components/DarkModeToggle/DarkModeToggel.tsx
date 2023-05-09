import { useDarkMode } from "@/layouts/ThemeProvider";
import { useCallback } from "react";
import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

export default function DarkModeToggel() {
  const darkMode = useDarkMode()?.darkMode;
  const setDarkMode = useDarkMode()?.setDarkMode;

  //toggles the dark class to the html when darkmode is toggled
  const togggleDarkClass = useCallback(() => {
    if (typeof setDarkMode !== "undefined" && typeof window !== "undefined") {
      if (darkMode === true) {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        setDarkMode(false);
        document.documentElement.classList.remove("dark");
      }
    }
  }, [darkMode, setDarkMode]);

  togggleDarkClass();

  console.log(darkMode, "darkMode");

  const DarkModeToggleButton = useCallback(() => {
    return darkMode ? (
      <FaSun size={25} className="text-yellow-500" />
    ) : (
      <BsMoonFill size={25} className="text-purple-500" />
    );
  }, [darkMode]);

  return (
    <button
      type="button"
      onClick={() => setDarkMode && setDarkMode((prev) => !prev)}
    >
      <DarkModeToggleButton />
    </button>
  );
}
