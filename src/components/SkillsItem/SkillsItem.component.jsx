import classNames from "classnames";
///CSS
import "../../css/flexBox.styles.scss";
import "../../css/mobile.styles.scss";
import "../../css/utils.styles.scss";

const SkillsItem = (props) => {
  const { css, data, text } = props;

  return (
    <div className="skillItem">
      <h4 className="text-white text-[2.4rem] opacity-50 mb-[52px]">{text}</h4>
      <ul
        className={classNames(
          "SkillsItemContainer mb-[71px] flexBox gap-12",
          css
        )}
        data-aos="flip-left"
        data-aos-delay="100"
        data-aos-duration="2000"
      >
        {data.map((skill, idx) => {
          const { name, svg } = skill;
          return (
            <li
              key={idx}
              className=" flex flex-col justify-center items-center gap-2 font-bold"
            >
              <div>{svg}</div>
              <span className="text-[22px] text-white">{name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SkillsItem;
