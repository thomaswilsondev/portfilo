import HeaderNavigation from "./HeaderNavigation/HeaderNavigation.component";
import Navigation from "./Navigation/Navigation.component";
const PageTop = () => {
  return (
    <section
      className="pageTop h-screen  border-b-2 border-[#7B4AE2] px-[11.9rem] pt-[36px]"
      id="home"
    >
      <Navigation />
      <HeaderNavigation />
    </section>
  );
};
export default PageTop;
