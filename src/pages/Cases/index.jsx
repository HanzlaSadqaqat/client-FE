import { CloseSVG } from "assets/images";
import { Bar, Button, Img, Input, Line } from "components";
import Sidebar1 from "components/Sidebar1";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import TableTab from "./comp/TableTab";
import NewCase from "./comp/AddCase";
import { users } from "./comp/data";
import { Pagination } from "antd";

export default function Cases() {
  const [addCase, setAddCase] = useState(false);
  const handleAddCase = (value) => {
    setAddCase(value);
  };
  return (
    <div>
      <div className="flex bg-gray-50 font-nunito">
        <Sidebar1 className="!sticky !w-24 bg-white-A700 border-gray-100 border-r-2 border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />

        <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-7 md:px-5 w-full ">
          <div className="flex pl-10 pr-10 w-full">
            <Input
              name="groupSeven"
              placeholder="Search"
              // value={groupsevenvalue}
              // onChange={(e) => setGroupsevenvalue(e)}
              className="font-medium p-0 placeholder:text-gray-600 sm:pr-5 text-base text-gray-600 text-left w-full"
              wrapClassName="bg-white-A700 border border-gray-400 border-solid flex pl-[15px] pr-[35px] py-3 rounded-[10px] sm:w-full"
              prefix={
                <Img
                  className="cursor-pointer h-6 mr-[15px] my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  fillColor="#7a757c"
                  className="cursor-pointer h-6 my-auto"
                  //   onClick={() => setGroupsevenvalue("")}
                  // style={{
                  //   visibility:
                  //     groupsevenvalue?.length <= 0 ? "hidden" : "visible",
                  // }}
                  height={24}
                  width={24}
                  viewBox="0 0 24 24"
                />
              }
            ></Input>
            <Bar className="border-1" />
          </div>
          <Line className="bg-gray-100 h-0.5 mt-5 w-full" />
          {/* generage new case section */}
          <div className="NewCase flex justify-between items-center w-full">
            <div className="font-bold text-2xl p-5">Cases</div>
            <div className="pr-10" onClick={() => setAddCase(true)}>
              <Button
                className="flex  gap-3 justify-center font-thin text-[12px]"
                shape="round"
                color="purple_600"
                variant="fill"
                leftIcon={<FaPlus />}
              >
                New Case
              </Button>
            </div>
          </div>
          {/* Calculate Avg of Cases */}
          <div className="calculationCases w-full flex gap-3 pl-5">
            <Box text={"Total Cases"} total={"17,890"} />
            <Box text={"Average Accuracy"} total={"87.89%"} />
            <Box text={"Average Document Reduction"} total={"- 67%"} />
            <Box text={"Average Completion Time"} total={"56 Sec"} />
          </div>
          {/* Cases Table Section */}

          <div className="TableSection w-full p-5 ">
            <thead className=" w-full flex">
              <th className="flex justify-between font-thin w-full text-[16px] p-3 text-gray-500">
                <td className="w-3/12 flex justify-start">Name</td>
                <td className="w-32">Upload Date</td>
                <td className="w-32">Case Type</td>
                <td className="w-32">Uploaded By</td>
                <td className="w-32">Document ID</td>
                <td className="w-32">Status</td>
                <td className="w-14"></td>
              </th>
            </thead>
            <tbody className="w-full flex flex-col">
              {users.map((tab) => (
                <TableTab case={tab} />
              ))}
            </tbody>
            <div className="mt-5">
              <Pagination size="small" total={50} />
            </div>
          </div>
        </div>
        {addCase ? <NewCase handleCross={handleAddCase} /> : <></>}
      </div>
    </div>
  );
}

const Box = ({ text, total }) => {
  return (
    <div className="border-1 bg-white-A700 rounded-xl flex flex-col p-3 w-1/6 gap-2">
      <span className="text-purple-600 text-xs font-bold">{text}</span>
      <span className="text-3xl font-bold">{total}</span>
    </div>
  );
};
