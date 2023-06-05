import AboutMe from "./AboutMe/AboutMe.component";
import Experience from "./Experience/Experience.components";
import PortfolioTitle from "./PortfolioTitle/PortfolioTitle.component";
import Skills from "./Skills/Skills.component";
const PageMedium = () => {
  return (
    <section className="pageMedium w-screen h-full pt-[13.6rem] bg-black">
      <h1 className="text-3xl font-bold underline">Page Medium</h1>
      <AboutMe />
      <Experience />
      <PortfolioTitle />
      <Skills />
    </section>
  );
};
export default PageMedium;
