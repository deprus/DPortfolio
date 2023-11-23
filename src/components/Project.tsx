type ProjectProps = {
  link: string;
  img: string;
  heading: string;
  alt: string;
  children: React.ReactNode;
};

export default function Project({
  link,
  img,
  heading,
  alt,
  children,
}: ProjectProps) {
  return (
    <div className="flex flex-col lg:flex-row relative gap-5">
      <a
        href={link}
        className="lg:w-[45%]"
        target="blank"
        rel="noopener noreferrer"
      >
        <img src={img} alt={alt} className="rounded-lg" />
      </a>
      <div className="flex flex-col flex-1 justify-between gap-10 lg:gap-0">
        <div className="flex flex-col gap-5 lg:gap-0">
          <h2 className="text-[1.375rem] text-white font-medium leading-[30.8px]">
            {heading}
          </h2>
          <div className="text-[#bfbfbf] leading-[25.6px]">{children}</div>
        </div>
        <div>
          <a
            href={link}
            target="blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:bg-[#363636] inline-block px-[15px] py-[10px] bg-[#212121] leading-[25.6px] rounded-md text-white"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
}
