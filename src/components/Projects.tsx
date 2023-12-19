import Project from "./Project";

export default function Projects() {
  return (
    <div className="flex flex-col gap-5" id="projects">
      <h2 className="text-3.5xl font-medium leading-[44.8px] text-white">
        Projects
      </h2>
      <div className="flex flex-col gap-10">
        <Project
          heading={"JustBG"}
          codeLink="https://github.com/deprus/JustBG"
          liveLink={"https://justbg.vercel.app/"}
          img={"/justbg.png"}
          alt="Photo of JustBG starting page"
        >
          <p>An informative, content-heavy website about backgammon.</p>
          <p>Stack: JavaScript, Astro.</p>
        </Project>
        <Project
          heading={"FMDB"}
          codeLink="https://github.com/deprus/FMDB"
          liveLink={"https://fmdb.vercel.app/"}
          img={"/fmdb.png"}
          alt="Photo of FMDB starting page"
        >
          <p>
            Dynamic Football Manager database website with forms enabling
            addition, deletion, and editing of players.
          </p>
          <p>
            Stack: Tailwind CSS, shadcn/ui, TypeScript, React, TanStack Query,
            React Hook Form, Zod, Supabase, Next.js 14.
          </p>
        </Project>
        <Project
          heading={"Top100Books"}
          codeLink="https://github.com/deprus/top100books"
          liveLink={"https://top100books.vercel.app/"}
          img={"/top100books.png"}
          alt="Photo of Top100Books page"
        >
          <p>
            JWT authentication and HTTP-Only cookies for secure user login.
            Tagging books as 'Want to Read' or 'Mark to Read', with all data
            stored on a MySQL (PlanetScale) database.
          </p>
          <p>
            Stack: Tailwind CSS, TypeScript, React, Redux Toolkit, React Router,
            Node.js, Express, Prisma, Vite.
          </p>
        </Project>
      </div>
    </div>
  );
}
