import classNames from "classnames";
//SASS
import "../../css/utils.styles.scss";
const Button = (props) => {
  const { css, icon, text, cssText, click } = props;
  return (
    <button
      className={classNames(
        "button flex gap-3 px-7 py-2 rounded-lg hover:bg-[#7b4ae2] justify-center items-center transition-all duration-300 ",
        css
      )}
      onClick={click}
    >
      {icon}
      <span className={classNames(cssText, "textMobile")}>{text}</span>
    </button>
  );
};
export default Button;
