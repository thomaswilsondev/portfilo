import classNames from "classnames";

//SASS
import "../../css/flexBox.styles.scss";
import "../../css/utils.styles.scss";
const Chapter = (props) => {
  const { css, text, cssText } = props;
  return (
    <div
      className={classNames(
        "chapter bground flexBox gap-3 bg-[#7B4AE2] h-18 rounded-lg chapter px-[1rem] py-[1rem]",
        css
      )}
    >
      <p className={classNames(cssText, "text-[#7B4AE2] font-extrabold")}>
        {text}
      </p>
    </div>
  );
};

export default Chapter;
