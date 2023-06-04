import { ReactComponent as Linkedin } from "../../../assets/contact/linkedin.svg";
import { ReactComponent as Github } from "../../../assets/contact/github.svg";
import { ReactComponent as Email } from "../../../assets/contact/email.svg";
import { ReactComponent as Phone } from "../../../assets/contact/phone.svg";

// SASS
import "../../../css/utils.styles.scss";
import "../../../css/flexBox.styles.scss";
import "../../../css/mobile.styles.scss";
import "../../../css/desktop.styles.scss";
const Footer = () => {
  return (
    <footer className="footer-container w-full h-[8.8rem]  left-[-7%]  bottom-0 flex justify-evenly ">
      <p className="flexBox flex-1  text-white opacity-50 text-[1.6rem] font-bold  ">
        Copyright © BaoBao · 2023
      </p>
      <div className="flexBox flex-1 gap-12">
        <a
          href="/"
          className=" flexBox w-[38px]  h-[38px] bg-white rounded-full opacity-30 hover:bg-[#7B4AE2] hover:opacity-100 transition-all duration-300"
        >
          <Linkedin className="icon w-[24px] h-[24px]" />
        </a>

        <a
          href="/"
          className="flexBox w-[38px]  h-[38px] bg-white rounded-full opacity-30 hover:bg-[#7B4AE2] hover:opacity-100 transition-all duration-300"
        >
          <Github className="icon w-[24px] h-[24px]" />
        </a>

        <a
          href="/"
          className=" flexBox w-[38px]  h-[38px] bg-white rounded-full opacity-30 hover:bg-[#7B4AE2] hover:opacity-100 transition-all duration-300"
        >
          <Email className=" icon w-[24px] h-[24px]" />
        </a>
        <a
          href="/"
          className=" flexBox w-[38px]  h-[38px] bg-white rounded-full opacity-30 hover:bg-[#7B4AE2] hover:opacity-100 transition-all duration-300"
        >
          <Phone className=" icon w-[24px] h-[24px]" />
        </a>
      </div>
      <div className="flex-1"></div>
    </footer>
  );
};
export default Footer;
