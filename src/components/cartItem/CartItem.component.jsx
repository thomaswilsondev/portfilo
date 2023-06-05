import "../../css/utils.styles.scss";
// COMPONENTS
import Programming from "../programming/Programming.component";
const CartItem = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <li className="li-cart w-[36rem] h-[46rem] p-[3.2rem] rounded-lg hover:bg-[#7b4ae2] hover:opacity-90 transition-all duration-300">
      <h3 className="font-bold text-[20px] text-white mb-[14px] ">
        {data.name}
      </h3>
      <p className="text-[14px] text-white opacity-50 h-[100px] w-[300px]">
        {data.description}
      </p>
      <div className="flex gap-3 mb-[2.2rem] ">
        {data.technology.map((item, idx) => (
          <Programming key={idx} color="  colorPuple" text={item} />
        ))}
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
