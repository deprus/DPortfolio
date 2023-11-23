import { useState } from "react";
import { IconContext } from "react-icons";
import { SiTelegram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import AnimatedTextCharacter from "./AnimatedText";
import SocialsButton from "./SocialsButton";

export default function GetInTouch() {
  const [textLink, setTextLink] = useState("Copy Email");
  return (
    <div className="flex flex-col gap-5 pb-10">
      <h2 className="text-3.5xl font-medium leading-[44.8px] text-white">
        Get in touch
      </h2>
      <div className="flex-start flex gap-[10px]">
        <div className="text-1.5xl flex items-center justify-center font-medium text-white">
          dpgodt@gmail.com
        </div>
        <button
          onClick={() => {
            setTextLink("Copied!");
            navigator.clipboard.writeText("dpgodt@gmail.com");
            setTimeout(() => {
              setTextLink("Copy Email");
            }, 1500);
          }}
          className={`inline-block translate-x-2 rounded-md bg-[#212121] px-[10px] py-[10px] leading-none text-[#bfbfbf] transition duration-300 hover:bg-[#363636]`}
        >
          <AnimatedTextCharacter text={textLink} />
        </button>
      </div>
      <div className="flex gap-2">
        <IconContext.Provider value={{ color: "#A0A0A0", size: "1.5rem" }}>
          <SocialsButton link="https://t.me/dpgod">
            <SiTelegram />
          </SocialsButton>
          <SocialsButton link="https://github.com/deprus">
            <SiGithub />
          </SocialsButton>
          <SocialsButton link="https://www.linkedin.com/in/denis-polochkin-939984256/">
            <SiLinkedin />
          </SocialsButton>
        </IconContext.Provider>
      </div>
    </div>
  );
}
