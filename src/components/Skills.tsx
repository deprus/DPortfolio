import Scroller from "./Scroller";

export default function Skills() {
  return (
    <div className="flex flex-col gap-5" id="skills">
      <h2 className="text-3.5xl font-medium leading-[44.8px] text-white">
        Skills
      </h2>
      <Scroller />
      <ul className="list-disc px-5 leading-[25.6px] text-[#bfbfbf]">
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
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Vite</li>
        <li>Astro</li>
      </ul>
    </div>
  );
}
