import classNames from "classnames";
///CSS
import "../../css/flexBox.styles.scss";
import "../../css/mobile.styles.scss";
import "../../css/utils.styles.scss";

const SkillsItem = (props) => {
  const { css, data, text } = props;

  return (
    <>
      <h4 className="text-white text-[24px] opacity-50 mb-[52px]">{text}</h4>
      <ul className={classNames("mb-[71px] flexBox gap-12", css)}>
        {data.map((skill) => {
          const { name, svg } = skill;
          return (
            <li className=" flex flex-col justify-center items-center gap-2 font-bold">
              <div>{svg}</div>
              <span className="text-[22px] text-white">{name}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default SkillsItem;
