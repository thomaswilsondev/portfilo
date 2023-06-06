import "../../css/utils.styles.scss";
// COMPONENTS
import Programming from "../programming/Programming.component";
const CartItem = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <li className="programmingContainer  li-cart w-[34rem] h-[46rem] p-[3.2rem] rounded-lg ">
      <h3 className="font-bold text-[20px] text-white mb-[14px] opacity-60 ">
        {data.name}
      </h3>
      <p className="text-[14px] text-white opacity-50 h-[100px] w-[27.3rem]">
        {data.description}
      </p>
      <div className="programmingChapter flex gap-3 mb-[2.2rem] ">
        {data.technology.map((item, idx) =>
          idx === 0 ? (
            <Programming key={idx} color="colorGreen" text={item} />
          ) : (
            <Programming key={idx} color="colorPuple" text={item} />
          )
        )}
      </div>
      <div>
        <img
          className="imgContainer w-[30rem] h-[20rem] rounded-lg border 2  "
          src={data.image[0]}
          alt={data.name}
        />
      </div>
    </li>
  );
};
export default CartItem;
