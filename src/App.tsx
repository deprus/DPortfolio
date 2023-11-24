import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div
      className="font-inter min-h-screen w-auto bg-[#141414] md:flex md:items-center md:justify-center"
      id="home"
    >
      <Nav />
      <div className="flex max-w-[53.75rem] flex-col gap-10 px-5">
        <Hero />
        <Skills />
        <Projects />
        <GetInTouch />
      </div>
    </div>
  );
}
export default App;
