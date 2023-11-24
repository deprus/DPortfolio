import { motion } from "framer-motion";

type MenuIconProps = {
  handleClick: () => void;
  isOpen: boolean;
};

export default function MenuIcon({ handleClick, isOpen }: MenuIconProps) {
  const variants = {
    closed: { rotate: 0 },
    open: { rotate: 45 },
  };

  return (
    <div className="fixed right-5 top-10 z-20 md:right-10">
      <div
        onClick={handleClick}
        className="relative h-[44px] w-[44px] cursor-pointer rounded-full bg-[#212121] shadow-[0px_0px_0px_1px_rgba(255,255,255,0.05)_inset]"
      >
        <motion.div
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className="absolute left-[calc(50%-20px/2)] top-[calc(50%-20px/2)] h-[20px] w-[20px]"
        >
          <div className="absolute left-0 right-0 top-[calc(50%-2px/2)] h-[2px] bg-white"></div>
          <div className="absolute bottom-0 left-[calc(50%-2px/2)] top-0 w-[2px] bg-white"></div>
        </motion.div>
      </div>
    </div>
  );
}
