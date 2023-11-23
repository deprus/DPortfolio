import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export default function AnimatedText({ text }: { text: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    text ? text.slice(0, latest) : ""
  );

  useEffect(() => {
    if (text) {
      const controls = animate(count, text.length, {
        type: "tween",
        duration: 0.1,
        ease: "easeInOut",
      });
      return controls.stop;
    }
  }, [count, text]);

  return (
    <span className="">
      <motion.span>{displayText}</motion.span>
    </span>
  );
}
