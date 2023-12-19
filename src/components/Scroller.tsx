import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiAstro } from "react-icons/si";

export default function Scroller() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      setIsAnimated(true);
  }, []);
  return (
    <IconContext.Provider value={{ color: "#A0A0A0", size: "3em" }}>
      <div className={`${isAnimated && "max-w-sm  overflow-hidden mask"}`}>
        <ul
          className={`flex gap-4 ${
            isAnimated ? "w-max flex-nowrap animate-scroll" : "flex-wrap"
          }`}
        >
          <li>
            <SiHtml5 />
          </li>
          <li>
            <SiCss3 />
          </li>
          <li>
            <SiTailwindcss />
          </li>
          <li>
            <SiJavascript />
          </li>
          <li>
            <SiTypescript />
          </li>
          <li>
            <SiReact />
          </li>
          <li>
            <SiRedux />
          </li>
          <li>
            <SiReactrouter />
          </li>
          <li>
            <SiReactquery />
          </li>
          <li>
            <SiZod />
          </li>
          <li>
            <SiReacthookform />
          </li>
          <li>
            <SiNodedotjs />
          </li>
          <li>
            <SiExpress />
          </li>
          <li>
            <SiPrisma />
          </li>
          <li>
            <SiNextdotjs />
          </li>
          <li>
            <SiVite />
          </li>
          <li>
            <SiAstro />
          </li>
          {isAnimated && (
            <>
              <li aria-hidden={true}>
                <SiHtml5 />
              </li>
              <li aria-hidden={true}>
                <SiCss3 />
              </li>
              <li aria-hidden={true}>
                <SiTailwindcss />
              </li>
              <li aria-hidden={true}>
                <SiJavascript />
              </li>
              <li aria-hidden={true}>
                <SiTypescript />
              </li>
              <li aria-hidden={true}>
                <SiReact />
              </li>
              <li aria-hidden={true}>
                <SiRedux />
              </li>
              <li aria-hidden={true}>
                <SiReactrouter />
              </li>
              <li aria-hidden={true}>
                <SiReactquery />
              </li>
              <li aria-hidden={true}>
                <SiZod />
              </li>
              <li aria-hidden={true}>
                <SiReacthookform />
              </li>
              <li aria-hidden={true}>
                <SiNodedotjs />
              </li>
              <li aria-hidden={true}>
                <SiExpress />
              </li>
              <li aria-hidden={true}>
                <SiPrisma />
              </li>
              <li aria-hidden={true}>
                <SiNextdotjs />
              </li>
              <li aria-hidden={true}>
                <SiVite />
              </li>
              <li aria-hidden={true}>
                <SiAstro />
              </li>
            </>
          )}
        </ul>
      </div>
    </IconContext.Provider>
  );
}
