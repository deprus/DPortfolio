import Scroller from "./Scroller";

export default function Skills() {
  return (
    <div className="flex flex-col gap-5 ">
      <h2 className="text-3.5xl text-white font-medium leading-[44.8px]">
        Skills
      </h2>
      <Scroller />
      <ul className="text-[#bfbfbf] leading-[25.6px] list-disc px-5">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>Tailwind CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>TanStack Query (React Query)</li>
        <li>Zod</li>
        <li>React Hook Form</li>
        <li>Next.js</li>
        <li>Vite</li>
        <li>Astro</li>
      </ul>
    </div>
  );
}
