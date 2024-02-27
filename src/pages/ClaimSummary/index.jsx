import { Bar, Button, Line } from "../../components";
import Bot from "../../assets/icons/Bot.png";
import Sidebar1 from "../../components/Sidebar1/index";
import React, { useState } from "react";
import { Avatar, Card } from "antd";
import CaseButtons from "../../components/Underwriting/CaseButtons";
import { button, searchButtons, summary, summaryButtons } from "./comp/data";
import Summary from "../../components/Underwriting/Summary";
import Dropdown from "./comp/DetailAnalysis";
import Search from "../../components/Underwriting/Search";

export default function ClaimSummary() {
    const [btn, setBtn] = useState(button.buttons);
    const [active, setActive] = useState("Underwriting Content");
    return (
        <div>
            {
                active === 'Search' ? (<Search />) : (
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
                                    <CaseButtons buttons={active === 'Search' ? searchButtons : summaryButtons} />
                                </div>
                                <div className="flex gap-4">
                                    {btn.map((text, index) => (
                                        <Button
                                            onClick={(e) => setActive(text)}
                                            className={`  ${active === text
                                                ? "border-2 border-[#8703CA] font-bold text-gray-900_01"
                                                : ""
                                                } border-solid cursor-pointer font-semibold text-center text-sm w-38`}
                                            shape="round"
                                            color="gray_200_b2"
                                            variant="fill"
                                        >
                                            {text}
                                        </Button>
                                    ))}
                                </div>
                                <div className="w-full">
                                    <Summary data={summary} component="claim_analysis" />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
}
