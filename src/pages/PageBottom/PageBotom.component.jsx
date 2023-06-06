//COMPONENT
import Contact from "./Contact/Contact.component";
import Footer from "./Footer/Footer.component";
import "../../css/flexBox.styles.scss";
const PageBottom = () => {
  return (
    <section className="flexBoxColum">
      <Contact />
      <Footer />
    </section>
  );
};
export default PageBottom;
