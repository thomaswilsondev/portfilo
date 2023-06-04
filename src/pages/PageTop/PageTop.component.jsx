import HeaderNavigation from "./HeaderNavigation/HeaderNavigation.component";
import Navigation from "./Navigation/Navigation.component";
const PageTop = () => {
  return (
    <section className="pageTop h-screen bg-amber-900">
      <h1 className="text-3xl font-bold underline">Page Top</h1>
      <Navigation />
      <HeaderNavigation />
    </section>
  );
};
export default PageTop;
