import AboutMe from "./AboutMe/AboutMe.component";
import PortfolioTitle from "./PortfolioTitle/PortfolioTitle.component";
import Skills from "./Skills/Skills.component";
const PageMedium = () => {
  return (
    <section
      className="w-screen mt-[13.6rem] "
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="2800"
    >
      <AboutMe />

      <PortfolioTitle />
      <Skills />
    </section>
  );
};
export default PageMedium;
