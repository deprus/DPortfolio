import { RefObject, useRef, useEffect, useState } from "react";
import MenuIcon from "./MenuIcon";
import CopyButton from "./CopyButton";
import SocialsButtons from "./SocialsButtons";
import { motion, AnimatePresence, useCycle } from "framer-motion";

export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpen, toggleOpen] = useCycle(false, true);

  function handleMenuToggle() {
    {
      document.body.classList.toggle("overflow-hidden");
      setIsNavOpen((prev) => !prev);
      toggleOpen();
    }
  }
  const useOutsideClick = (callback: () => void): RefObject<HTMLDivElement> => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClick = (e: MouseEvent) => {
        if (
          isNavOpen &&
          ref.current &&
          !ref.current.contains(e.target as Node)
        ) {
          callback();
        }
      };

      if (isNavOpen) {
        document.addEventListener("click", handleClick, true);
      } else {
        document.removeEventListener("click", handleClick, true);
      }

      return () => {
        document.removeEventListener("click", handleClick, true);
      };
    }, [callback]);

    return ref;
  };

  const NavRef = useOutsideClick(handleMenuToggle);

  return (
    <>
      {isNavOpen && <div className="fixed inset-0 bg-[#00000080]"></div>}
      <div ref={NavRef}>
        <MenuIcon handleClick={handleMenuToggle} isOpen={isOpen} />
        <AnimatePresence>
          {isNavOpen && (
            <motion.div
              variants={{ open: { x: "0%" }, closed: { x: "100%" } }}
              initial="closed"
              animate="open"
              transition={{ duration: 0.3, type: "tween" }}
              exit="closed"
              className="border-[rgb(38,38,38)] fixed bottom-0 right-0 top-0 z-10 flex h-full w-[300px] items-center border-l bg-[#111111]"
            >
              <nav className="flex flex-col gap-10 px-10">
                <ul className="text-3.5xl flex flex-col font-medium text-white">
                  <li>
                    <a href="./#home" onClick={handleMenuToggle}>
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="./#skills" onClick={handleMenuToggle}>
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="./#projects" onClick={handleMenuToggle}>
                      Projects
                    </a>
                  </li>
                </ul>
                <div className="h-[1px] w-full bg-[rgb(38,38,38)]"></div>
                <div className="flex flex-wrap place-content-start gap-2.5">
                  <h3 className="text-1.5xl font-medium text-white">
                    dpgodt@gmail.com
                  </h3>
                  <CopyButton />
                </div>
                <SocialsButtons />
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
