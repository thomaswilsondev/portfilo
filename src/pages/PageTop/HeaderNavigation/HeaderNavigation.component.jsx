// ICON
import { ReactComponent as Github } from "../../../assets/contact/github.svg";
import { ReactComponent as Linkedin } from "../../../assets/contact/linkedin.svg";
import { ReactComponent as Phone } from "../../../assets/contact/phone.svg";
import { ReactComponent as Email } from "../../../assets/contact/email.svg";
// AVATAR
import { ReactComponent as AvatarAndIcons } from "../../../assets/AvatarAndIcons.svg";
import Chapter from "../../../components/Chapter/Chapter.component";
const HeaderNavigation = () => {
  return (
    <div className="flex w-[138rem] gap-[10rem] justify-center items-center ">
      <div
        className="w-3/6 pl-[30px] flex  flex-col gap-[2.11375rem] self-center"
        data-aos="fade-right"
        data-aos-delay="1400"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        <Chapter
          css=" w-[16rem]"
          cssText="text-[2rem]   "
          text="👋 Greetings!"
        />
        <h1 className="w-[350px] text-[42px] text-white font-extrabold">
          LE TAN BAO BAO
        </h1>
        <h3 className=" text-[20px] text-[#868e96]">Front-end developer</h3>
        {/* ICON */}
        <div className="flex gap-[0.5rem]">
          {/* GITHUB */}
          <a
            href=""
            className="flex justify-center rounded-full items-center bg-gray-300 w-11 h-11 hover:bg-[#7B4AE2] transition-all duration-300 "
          >
            <Github className="w-7 h-7 " />
          </a>
          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/thomaswilsondev/"
            className="flex justify-center rounded-full items-center bg-gray-300 w-11 h-11 hover:bg-[#7B4AE2] hover:text-white transition-all duration-300 "
          >
            <Linkedin className="w-7 h-7" />
          </a>
          {/* PHONE */}
          <a
            href="tel:+84976120848"
            className="flex justify-center rounded-full items-center bg-gray-300 w-11 h-11 hover:bg-[#7B4AE2] hover:text-white transition-all duration-300 "
          >
            <Phone className="w-7 h-7" />
          </a>
          {/* EMAIL */}
          <a
            href="mailto:baobao22.work@gmail.com"
            className="flex justify-center rounded-full items-center bg-gray-300 w-11 h-11 hover:bg-[#7B4AE2] hover:text-white transition-all duration-300 "
          >
            <Email className="w-7 h-7" />
          </a>
        </div>
      </div>
      <div
        className="w-3/6 justify-self-center self-center "
        data-aos="flip-left"
        data-aos-delay="1000"
        data-aos-duration="2000"
      >
        <AvatarAndIcons className="w-[600px] h-[600px]" />
      </div>
      <div
        className="w-2/6 flex flex-col justify-center items-center pr-6"
        data-aos="fade-left"
        data-aos-delay="1400"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        <a href="/data/autoCV.pdf" download>
          <button class="flex gap-2 justify-center items-center rounded-full rounded-30 border-2 border-purple-700 py-[1.25rem] px-[2.5rem] text-purple-700 hover:text-white hover:bg-purple-700 hover:border-gray-700">
            <span>Download CV</span>
          </button>
        </a>
      </div>
      <div id="about" className="mt-[500px]"></div>
    </div>
  );
};
export default HeaderNavigation;
