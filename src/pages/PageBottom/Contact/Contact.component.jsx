import { useRef } from "react";

//SVG
import { ReactComponent as Phone } from "../../../assets/contact/phone1.svg";
import { ReactComponent as ContactItem } from "../../../assets/contact/contatos.svg";

import { ReactComponent as Arrow } from "../../../assets/sign/arrow.svg";
import { ReactComponent as Copy } from "../../../assets/sign/copy.svg";
import { ReactComponent as PaperAirphane } from "../../../assets/sign/paper-airplane.svg";
// COMPONENT
import Chapter from "../../../components/Chapter/Chapter.component";
// SASS
import "../../../css/flexBox.styles.scss";
import "../../../css/utils.styles.scss";
import "../../../css/mobile.styles.scss";
const Contact = () => {
  const addrsFieldRef = useRef(null);

  function copyToClipboard(text) {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    const message = document.getElementById("message");
    if (!message) {
      const newMessage = document.createElement("div");
      newMessage.id = "message";
      newMessage.textContent = "Copied!";
      newMessage.classList.add("show");
      document.body.appendChild(newMessage);
      setTimeout(() => {
        document.body.removeChild(newMessage);
      }, 2000);
    } else {
      message.textContent = "Copied!";
      message.classList.add("show");
      setTimeout(() => {
        message.classList.remove("show");
      }, 2000);
    }
  }

  function handleClick() {
    const element = document.getElementById("email");
    const text = element.textContent;
    copyToClipboard(text);
  }
  return (
    <div className="contact-container flexBoxStart w-full h-full ">
      <div className="flexBoxStartColum w-[66.3rem] h-[44.7rem] ">
        <div className="contact-information w-full h-[34.6rem] flexBoxStartColum gap-[6.4rem]">
          <div className="flexBoxColum contact-title">
            <Chapter
              text="📬 Contact"
              cssText="text-[20px] text-white font-bold opacity-100 "
            />
            <h3 className="text-white font-extrabold  text-[48px] font-extrabold">
              Let's talk!
            </h3>
          </div>

          <div className="flexBox gap-[4rem] contact-EmailPhone">
            <buton className=" flexBox gap-8 text-[#7B4AE2] rounded-md px-12  py-4 border-2 border-[#7B4AE2]  hover:stroke-white hover:bg-[#7B4AE2] hover:text-white transition-all duration-300 ">
              <Phone className="w-12 h-12 " />
              <span className=" font-semibold text-[2rem]">Call me</span>
            </buton>
            <div className="contact-callMe w-[28.9rem] h-[15.3rem] flexBoxColum gap-[2.1rem] ">
              <p className="flexBoxColum ">
                <PaperAirphane className="w-13 h-13  stroke-[#7B4AE2]" />
                <span className="text-[#7B4AE2] font-extrabold  text-[2rem]">
                  E-mail:
                </span>
                <span
                  className="text-white font-semibold  text-[1.8rem]"
                  id="email"
                >
                  baobao22.work@gmail.com
                </span>
              </p>
              <Copy
                onClick={handleClick}
                className="copy w-12 h-12 stroke-[#7B4AE2]"
              />
            </div>
          </div>
        </div>
        <a
          href="#home"
          className="flexBox gap-12 opacity-50 hover:opacity-30 transition-all duration-300 "
        >
          <span className="text-[#7B4AE2] text-[2rem] font-semibold ">
            Back to the top
          </span>
          <Arrow className=" arrow w-12 h-12 stroke-[#7B4AE2]  " />
        </a>
      </div>
    </div>
  );
};
export default Contact;
