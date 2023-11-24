import CopyButton from "./CopyButton";
import SocialsButtons from "./SocialsButtons";

export default function GetInTouch() {
  return (
    <div className="flex flex-col gap-5 pb-10">
      <h2 className="text-3.5xl font-medium leading-[44.8px] text-white">
        Get in touch
      </h2>
      <div className="flex-start flex gap-[10px]">
        <div className="text-1.5xl flex items-center justify-center font-medium text-white">
          dpgodt@gmail.com
        </div>
        <CopyButton />
      </div>
      <SocialsButtons />
    </div>
  );
}
