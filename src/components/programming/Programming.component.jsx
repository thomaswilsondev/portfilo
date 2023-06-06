import classNames from "classnames";
import "../../css/utils.styles.scss";
const Programming = (props) => {
  const { text, color } = props;
  return (
    <div
      className={classNames(
        " text-[18px] font-bold w-[83px] h-[30px] rounded-lg px-[19px] py-[9px] flex  justify-center items-center",
        color
      )}
    >
      <span>{text}</span>
    </div>
  );
};
export default Programming;
