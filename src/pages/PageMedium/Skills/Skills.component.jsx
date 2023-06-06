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
    <div className="skills-container flexBoxColum pb-[14rem] " id="skill">
      <Chapter
        css="w-[28rem] mb-[3.3rem]"
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
