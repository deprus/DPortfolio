import Photo from "./Photo";

export default function Hero() {
  return (
    <div className="flex h-1/2 w-full flex-col gap-5 pt-10">
      <Photo />
      <h1 className="leading-12 text-4xl font-medium text-white">
        Hey, I'm Denis
      </h1>
      <p className="leading-[1.6rem] text-[#bfbfbf]">
        An accomplished figure in the world of competitive backgammon who's now
        navigating the fascinating terrain of front-end development. From
        competing at the highest levels in backgammon, I've brought a strategic
        mindset, adaptability, and a hunger for excellence into the world of
        front-end. My switch to coding might seem unexpected, but it's driven by
        the same passion for problem-solving and continuous improvement. Beyond
        work, I'm passionate about football, cross-country skiing and traveling,
        finding balance and inspiration outside the digital realm. Join me on
        this exciting transition, and let's create meaningful experiences
        together.
      </p>
    </div>
  );
}
