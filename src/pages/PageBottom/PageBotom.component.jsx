//COMPONENT
import Contact from "./Contact/Contact.component";
import Footer from "./Footer/Footer.component";
import "../../css/flexBox.styles.scss";
const PageBottom = () => {
  return (
    <section
      className="flexBoxColum"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="2800"
    >
      <Contact />
      <Footer />
    </section>
  );
};
export default PageBottom;
