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
      className="inline-block rounded-md bg-[#212121] px-[10px] py-[10px] transition duration-300 hover:bg-[#363636]"
    >
      {children}
    </a>
  );
}
