import { useState } from "react";
import AnimatedTextCharacter from "./AnimatedText";

export default function CopyButton() {
  const [textLink, setTextLink] = useState("Copy Email");

  return (
    <button
      onClick={() => {
        setTextLink("Copied!");
        navigator.clipboard.writeText("dpgodt@gmail.com");
        setTimeout(() => {
          setTextLink("Copy Email");
        }, 1500);
      }}
      className="inline-block rounded-md bg-[#212121] px-[10px] py-[10px] leading-none text-[#bfbfbf] transition duration-300 hover:bg-[#363636]"
    >
      <AnimatedTextCharacter text={textLink} />
    </button>
  );
}
