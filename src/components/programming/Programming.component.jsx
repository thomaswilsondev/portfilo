import classNames from "classnames";
import "../../css/utils.styles.scss";
const Programming = (props) => {
  const { text, color } = props;
  return (
    <div
      className={classNames(
        "programmingContainer text-[18px] font-bold rounded-lg flex mt-[12px] justify-center items-center",
        color
      )}
    >
      <span>{text}</span>
    </div>
  );
};
export default Programming;
