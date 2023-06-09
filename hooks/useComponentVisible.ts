import { RefObject, useEffect, useRef, useState } from "react";

export const useComponentVisible = (
  initialIsVisible: boolean,
  excludeRef: RefObject<HTMLDivElement>
) => {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      if (excludeRef.current && !excludeRef.current.contains(event.target)) {
        setIsComponentVisible(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
};
