import { IconContext } from "react-icons";
import { SiTelegram } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import SocialsButton from "./SocialsButton";

export default function SocialsButtons() {
  return (
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
  );
}
