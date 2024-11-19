import { useState, useEffect } from "react";

export default function useIsScrolled() {
  const [isScrolled, setIsScrolled] = useState<boolean>();

  useEffect(() => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      setIsScrolled(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    const scrolled =
      document.body.scrollTop > 0 || document.documentElement.scrollTop > 0;
    setIsScrolled(scrolled);
  }

  return isScrolled;
}
