type SocialsButtonProps = {
  link: string;
  children: React.ReactNode;
};

export default function SocialsButton({ link, children }: SocialsButtonProps) {
  return (
    <a
      href={link}
      target="blank"
      rel="noopener noreferrer"
      className="transition duration-300 hover:bg-[#363636] inline-block px-[10px] py-[10px] bg-[#212121] rounded-md"
    >
      {children}
    </a>
  );
}
