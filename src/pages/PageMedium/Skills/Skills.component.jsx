//SASS
import "../../../css/flexBox.styles.scss";
import "../../../css/mobile.styles.scss";
import "../../../css/utils.styles.scss";
//COMPONENTS
import Chapter from "../../../components/Chapter/Chapter.component";
import SkillsItem from "../../../components/SkillsItem/SkillsItem.component";
// Data
import { skillData, otherTechnologies } from "../../../data/skill.data";
const Skills = () => {
  return (
    <div
      className="skills-container flexBoxColum border-b-2 border-[#7B4AE2] pb-[2rem] mt[2.6rem]"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="2800"
    >
      <Chapter
        css=" mb-[3.3rem]"
        cssText="text-[2rem] text-white font-bold"
        text="🧑‍💻 Skills - Experiences"
      />
      <h2 className="text-white text-[4.8rem] font-extrabold mb-[11rem]">
        Technologies and skills
      </h2>

      <SkillsItem text="Technology I use every day" data={skillData} />

      <SkillsItem
        css="gap-14"
        text="Other technologies"
        data={otherTechnologies}
      />
    </div>
  );
};
export default Skills;
