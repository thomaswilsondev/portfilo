import "../../css/flexBox.styles.scss";
const Chapter = (props) => {
  const { text, cssText } = props;
  return (
    <div className="flexBox gap-3 bg-[#7B4AE2] h-18 w-52 rounded-lg">
      <p className={cssText}>{text}</p>
    </div>
  );
};

export default Chapter;
