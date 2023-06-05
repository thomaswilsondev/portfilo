import { useState } from "react";
// SVG
import { ReactComponent as BatteryFull } from "../../../assets/batteryFull.svg";
import { ReactComponent as BatteryMedium } from "../../../assets/batteryMedium.svg";
import { ReactComponent as BatteryLow } from "../../../assets/batteryLow.svg";
import { ReactComponent as ArrowRight } from "../../../assets/ArrowRight.svg";

// SASS
import "../../../css/mobile.styles.scss";

//COMPONENT
import Button from "../../../components/button/Button.component";
import Chapter from "../../../components/Chapter/Chapter.component";
// Data
import projectDoingData from "../../../data/project-doing-data";
import projectLargeData from "../../../data/project-large-data";
import projectMediumData from "../../../data/project-medium-data";
import CartItem from "../../../components/cartItem/CartItem.component";
const PortfolioTitle = () => {
  const [showAll, setShowAll] = useState(false);
  const handlerRenderCar = () => {
    setShowAll(!showAll);
  };

  const [listIndex, setListIndex] = useState(0);
  const lists = [projectLargeData, projectMediumData, projectDoingData];
  const handleButtonClick = (index) => {
    setListIndex(index);
  };
  const renderItems = showAll ? lists[listIndex] : lists[listIndex].slice(0, 8);
  return (
    <div className=" px-[11.6rem] h-full mb-[10.6rem]">
      <Chapter
        cssText="text-[2rem] text-white font-bold "
        text="🔗 Portfolio"
        css="mb-[3.7rem] "
      />
      <div className=" project-container flex  justify-between items-cente mb-[11.2rem]">
        <h2 className="text-white text-[4.8rem] font-extrabold">Projects</h2>
        {/* List button */}
        <div className="flex gap-6">
          <Button
            cssText="text-[2rem] text-bold text-[#7B4AE2] opacity-50 "
            text="Done Project Large"
            css="h-[50px]"
            icon={
              <BatteryFull className="icon w-16 h-16 stroke-[#7B4AE2] opacity-40 hover:stroke-white" />
            }
            click={() => handleButtonClick(0)}
          />
          <Button
            cssText="text-[2rem] text-bold text-[#7B4AE2] opacity-50 "
            text="Done Project Small"
            css="h-[50px]"
            icon={
              <BatteryMedium className="icon w-16 h-16 stroke-[#7B4AE2] opacity-40 hover:stroke-white" />
            }
            click={() => handleButtonClick(1)}
          />
          <Button
            cssText="text-[2rem] text-bold text-[#7B4AE2] opacity-50 "
            text="Doing Project "
            css="h-[50px]"
            icon={
              <BatteryLow className="icon w-16 h-16 stroke-[#7B4AE2] opacity-40 hover:stroke-white" />
            }
            click={() => handleButtonClick(2)}
          />
        </div>
      </div>

      <ul className="project grid grid-cols-4 gap-x-[7.9rem] gap-y-[4.8rem] mb-[6rem]">
        {renderItems.map((item, idx) => (
          <CartItem data={item} key={idx}></CartItem>
        ))}
      </ul>
      <button onClick={handlerRenderCar} className="w-full">
        <p className="flex text-[2rem] justify-end items-center  gap-2 text-white transition-all duration-30 opacity-50 hover:opacity-100 ">
          {!showAll ? (
            <span className="  m-[3px] text-[#7B4AE2] ">See more projects</span>
          ) : (
            <span className="  m-[3px] text-[#7B4AE2] ">
              Hide more projects
            </span>
          )}
          <ArrowRight className="w-14 h-14 stroke-[#7B4AE2] " />
        </p>
      </button>
    </div>
  );
};
export default PortfolioTitle;
