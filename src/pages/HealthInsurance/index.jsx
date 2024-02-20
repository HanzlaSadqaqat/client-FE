import { Bar, Button, Line } from "../../components";
import Bot from "../../assets/icons/Bot.png";
import Sidebar1 from "../../components/Sidebar1/index";
import React from "react";
import { Avatar, Card } from "antd";
import CaseName from "./comp/CaseName";
import { button, summary } from "./comp/data";
import Summary from "./comp/Summary";

export default function Insurance() {
  return (
    <div>
      <div className="flex bg-gray-50 font-nunito">
        <Sidebar1 className="!sticky !w-24 bg-white-A700 border-gray-100 border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-7 md:px-5 w-full ">
          <div className="flex px-10 w-full">
            <div className="flex gap-2 items-center w-2/4 ">
              <div>
                <Avatar shape="square" size={40} src={Bot} icon={Bot} />
              </div>
              <div className="items-start flex flex-col gap-1">
                <span className=" text-[10px] text-gray-400">Powered By</span>
                <span className="text-center font-semibold">
                  Bot name here.
                </span>
              </div>
            </div>
            <Bar className="" />
          </div>
          <Line className="bg-gray-100 h-0.5 mt-5 w-full" />
          <div className="h-full w-full p-10">
            <div>
              <CaseName />
            </div>
            <div className="flex gap-2">
              {button.buttons.map((text, index) => (
                <Button
                  children={text}
                  className={`${
                    button.active === index ? "border-[#8703CA] font-bold" : ""
                  } border-1 text-[14px]`}
                  color="gray_200"
                  variant="fill"
                  shape="round"
                />
              ))}
            </div>
            <div className="w-full">
              <Summary data={summary} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
