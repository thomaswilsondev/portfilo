import "../../../css/flexBox.styles.scss";
// COMPONENTS
import Chapter from "../../../components/Chapter/Chapter.component";

const AboutMe = () => {
  return (
    <div
      className="AboutMe flex gap-12 w-[1639.92px] h-[498px] mb-[14.7rem] ml-[20px]"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="2800"
    >
      <div
        className="flex-1 flexBox "
        data-aos="fade-up-right"
        data-aos-delay="100"
        data-aos-duration="2500"
      >
        <div className="w-[40rem] h-[40rem] relative bg-white rounded-full ">
          <img className="w-[44rem] h-[44rem] absolute" src="" alt="avatar" />
        </div>
      </div>
      <div
        className="AboutMeContent flex-1 flex flex-col gap-12"
        data-aos="fade-up-left"
        data-aos-delay="100"
        data-aos-duration="2500"
      >
        <Chapter
          css=" w-[16rem]"
          cssText="text-white text-[2rem] tex-bold"
          text="🧐 About me"
        />
        <h3 className="text-[4.8rem] text-white font-extraBold font-sans">
          LE TAN BAO BAO
        </h3>
        <p className="text-white opacity-80 text-[2.2rem] font-sans">
          👋 My name is Le Tan Bao Bao, but you can call me Bao. Honor!
        </p>
        <div className="flex flex-col gap-2 text-white text-[2.2rem] opacity-80 ">
          <p>
            👨‍💻 For more than 1 year developing and programming interfaces with
            JavaScript, React JS.
          </p>
          <p>
            🎓 I am studying 3rd year Electronics and Telecommunications at Viet
            Nam National University Ho Chi Minh City – University of Science
          </p>
          <p>💡 Love Front-end development and UX/UI Design.</p>
        </div>
        <p className="text-white opacity-80 text-[2.2rem] font-sans">
          🚀 Every day try to be a little better than yesterday.
        </p>
      </div>
      <div id="project" className="mt-[500px]"></div>
    </div>
  );
};
export default AboutMe;
