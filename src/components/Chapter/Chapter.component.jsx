import classNames from "classnames";

//SASS
import "../../css/flexBox.styles.scss";
const Chapter = (props) => {
  const { css, text, cssText } = props;
  return (
    <div
      className={classNames(
        "flexBox gap-3 bg-[#7B4AE2] h-18 w-52 rounded-lg chapter",
        css
      )}
    >
      <p className={cssText}>{text}</p>
    </div>
  );
};

export default Chapter;
