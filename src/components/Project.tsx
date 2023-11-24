type ProjectProps = {
  codeLink: string;
  liveLink: string;
  img: string;
  heading: string;
  alt: string;
  children: React.ReactNode;
};

export default function Project({
  codeLink,
  liveLink,
  img,
  heading,
  alt,
  children,
}: ProjectProps) {
  return (
    <div className="relative flex flex-col gap-5 lg:flex-row">
      <a
        href={liveLink}
        className="lg:w-[45%]"
        target="blank"
        rel="noopener noreferrer"
      >
        <img src={img} alt={alt} className="rounded-lg" />
      </a>
      <div className="flex flex-1 flex-col justify-between gap-10 lg:gap-0">
        <div className="flex flex-col gap-5 lg:gap-0">
          <h2 className="text-[1.375rem] font-medium leading-[30.8px] text-white">
            {heading}
          </h2>
          <div className="leading-[25.6px] text-[#bfbfbf]">{children}</div>
        </div>
        <div className="flex gap-2">
          <a
            href={codeLink}
            target="blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-[#212121] px-[15px] py-[10px] leading-[25.6px] text-white transition duration-300 hover:bg-[#363636]"
          >
            View code
          </a>
          <a
            href={liveLink}
            target="blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-[#212121] px-[15px] py-[10px] leading-[25.6px] text-white transition duration-300 hover:bg-[#363636]"
          >
            Live demo
          </a>
        </div>
      </div>
    </div>
  );
}
