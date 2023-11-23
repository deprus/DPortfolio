import Project from "./Project";

export default function Projects() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-3.5xl text-white font-inter font-medium leading-[44.8px]">
        Projects
      </h2>
      <div className="flex flex-col gap-10">
        <Project
          heading={"JustBG"}
          link={"https://justbg.vercel.app/"}
          img={"/justbg.png"}
          alt="Photo of JustBG starting page"
        >
          <p>An informative, content-heavy website about backgammon.</p>
          <p>Stack: JavaScript, Astro.</p>
        </Project>
        <Project
          heading={"FMDB"}
          link={"https://fmdb.vercel.app/"}
          img={"/fmdb.png"}
          alt="Photo of FMDB starting page"
        >
          <p>
            Dynamic Football Manager database website with forms enabling
            addition, deletion, and editing of players.
          </p>
          <p>
            Stack: Tailwind CSS, shadcn/ui, TypeScript, React, TanStack Query,
            React Hook Form, Zod, Supabase, Next.js.
          </p>
        </Project>
      </div>
    </div>
  );
}
