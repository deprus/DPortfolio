import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-[#141414] md:flex md:justify-center md:items-center min-h-screen w-auto font-inter">
      <div className="px-5 max-w-[53.75rem] flex flex-col gap-10">
        <Hero />
        <Skills />
        <Projects />
        <GetInTouch />
      </div>
    </div>
  );
}
export default App;
