import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 300 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99] text-pink-500 dark:text-black">
      {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="hover:shadow-lg picboxh flex h-12 w-12 cursor-pointer items-center justify-center rounded-full dark:bg-[#1a1a1a] text-pink-500 dark:text-black shadow-md transition duration-300 ease-in-out hover:bg-pink-800"
        >
          <span className="mt-[6px] text-pink-500 dark:text-black h-4 w-4 rotate-45 border-l border-t border-pink-500"></span>
          <span className="sr-only text-pink-500 dark:text-black">scroll to top</span>
        </div>
      )}
    </div>
  );
}
