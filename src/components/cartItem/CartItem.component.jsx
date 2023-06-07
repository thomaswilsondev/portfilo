import "../../css/utils.styles.scss";
// COMPONENTS
import Programming from "../programming/Programming.component";
const CartItem = (props) => {
  const { data } = props;
  console.log(data.url);
  return (
    <li className="li-cart p-[3.2rem] rounded-lg ">
      <h3 className="font-bold text-[20px] text-white mb-[14px] opacity-60 ">
        <a
          className=" transition duration-300 hover:text-purple-700 hover:text-[2rem]"
          href={data.url}
        >
          {data.name}
        </a>
      </h3>
      <p className="text-[14px] text-white opacity-50 ">{data.description}</p>
      <div className="w-[250px] flex gap-4  ">
        {data.technology.map((item, idx) =>
          idx === 0 ? (
            <Programming key={idx} color="colorGreen" text={item} />
          ) : (
            <Programming key={idx} color="colorPuple" text={item} />
          )
        )}
      </div>
      <div className="flex gap-4 mb-[2.2rem]">
        {data.tools.map((item, idx) => (
          <Programming
            key={idx}
            color="colorPuple p-[3px] mb-[20px]"
            text={item}
          />
        ))}
      </div>
      <div className="imager">
        <img
          className="imgContainer rounded-lg border 2  "
          src={data.image[0]}
          alt={data.name}
        />
      </div>
    </li>
  );
};
export default CartItem;
