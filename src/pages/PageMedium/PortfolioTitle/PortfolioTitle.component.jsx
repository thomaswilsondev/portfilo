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
    <div
      className="portFolioTitle mx-[7.6rem] h-full  mb-[12.6rem]"
      id="project"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="2800"
    >
      <Chapter
        cssText="text-[2rem] font-bold "
        text="🔗 Portfolio"
        css="mb-[3.5rem] "
      />
      <div
        className="ContextProject flex justify-between items-center mb-[11.2rem]"
        x
      >
        <h2
          className="text-white text-[4.8rem] font-extrabold"
          data-aos="fade-up-right"
          data-aos-delay="100"
          data-aos-duration="2000"
        >
          Projects
        </h2>
        {/* List button */}
        <div
          className="ListButton flex gap-6"
          data-aos="fade-up-left"
          data-aos-delay="100"
          data-aos-duration="2000"
        >
          <Button
            cssText="text-[1.8rem] text-bold font-extrabold text-[#7B4AE2] opacity-80 "
            text="Done Project Large"
            css="h-18 rounded-lg "
            icon={
              <BatteryFull className="icon w-12 h-12 stroke-[#7B4AE2] opacity-80 hover:stroke-white" />
            }
            click={() => handleButtonClick(0)}
          />
          <Button
            cssText="text-[1.8rem] text-bold font-extrabold text-[#7B4AE2] opacity-80 "
            text="Done Project Small"
            css="h-18 rounded-lg"
            icon={
              <BatteryMedium className="icon w-16 h-16 stroke-[#7B4AE2] opacity-80 hover:stroke-white" />
            }
            click={() => handleButtonClick(1)}
          />
          <Button
            cssText="text-[1.8rem] font-extrabold text-[#7B4AE2] opacity-80 "
            text="Doing Project "
            css="h-18 rounded-lg"
            icon={
              <BatteryLow className="icon w-16 h-16 stroke-[#7B4AE2] opacity-80 hover:stroke-white" />
            }
            click={() => handleButtonClick(2)}
          />
        </div>
      </div>
      <div className="GridProject flex justify-center items-center mb-[5.9rem] ">
        <ul
          className=" GridProjectList grid grid-cols-4 gap-x-12 gap-y-12 "
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="2800"
        >
          {renderItems.map((item, idx) => (
            <CartItem data={item} key={idx}></CartItem>
          ))}
        </ul>
      </div>

      <button
        onClick={handlerRenderCar}
        className="buttonShow w-[127.3rem] flex justify-center items-center"
      >
        <p
          className="flex text-[2.2rem] p-[4px]  justify-end items-center  gap-4 transition-all duration-300 opacity-40 hover:opacity-100 "
          id="skill"
        >
          {!showAll ? (
            <span className="  font-bold text-[#7B4AE2] ">
              See more projects
            </span>
          ) : (
            <span className="  font-bold text-[#7B4AE2] ">
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
