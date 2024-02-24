import { Card, ConfigProvider, Image, Input } from "antd";
import { Button, Icon, Img, Text } from "..";
import React, { useEffect, useState } from "react";
import { LuRefreshCcw } from "react-icons/lu";
import { MdContentCopy } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";
import GaugeChart from "react-gauge-chart";
import { FiEdit3 } from "react-icons/fi";
import { IoMdInformationCircleOutline, IoMdSend } from "react-icons/io";
import Search from "antd/es/input/Search";
import Dropdown from "../../pages/HealthInsurance/comp/Dropdown";
import { handleAlert } from "utils";
import { FaRegEdit } from "react-icons/fa";


const tabListNoTitle = [
  {
    key: "claimSummary",
    label: "Claim Summary",
  },
  {
    key: "rulesQuestions",
    label: "Rules & Questions",
  },
  {
    key: "adjudicationSummary",
    label: "Adjudication Summary",
  },
];

const contentListNoTitle = {
  claimSummary: <p>article content</p>,
  rulesQuestions: <p>app content</p>,
  adjudicationSummary: <p>project content</p>,
};

export default function Summary(prop) {
  const [caseInfo, setCaseInfo] = useState({});
  const [customerDetail, setCustomerDetail] = useState({});
  const [decision, setDecision] = useState({});
  const [smartSmz, setSmartSmz] = useState({});
  const [editName, setEditName] = useState(false)
  const [clientName, setClientName] = useState('')
  const [editAddress, setEditAddress] = useState(false)
  const [clientAddress, setClientAddress] = useState('')


  useEffect(() => {
    console.log(prop);
    setCaseInfo(prop.data.case_info);
    setCustomerDetail(prop.data.customer_detail);
    setDecision(prop.data.decision);
    setSmartSmz(prop.data.smart_summarization);
    setClientAddress(prop.data.customer_detail.address)
    setClientName(prop.data.customer_detail.client_name)
  }, []);

  return (
    <>
      <div>

        {/* DIV 1 */}
        <div className="pt-5 flex gap-3">
          <div className="flex gap-3 w-[72%]">
            {/* CLIENT INFO */}
            <div className="border-2 border-gray-100 border-solid flex md:flex-1 flex-col gap-5 items-center justify-start pb-[19px] rounded-[15px] w-[32%] md:w-full">
              <div className="bg-blue_gray-50 flex flex-col items-start justify-end p-[19px] rounded-tl-[15px] rounded-tr-[15px] w-full">
                <Text
                  className="md:ml-[0] ml-[5px] text-gray-900 text-sm"
                  size="txtNunitoSemiBold14Gray900"
                >
                  Case Info
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-full md:w-full pl-3">
                <div className="flex flex-row gap-2 justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtNunitoSemiBold14Gray900"
                  >
                    Case ID:
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto flex gap-2 items-center"
                    size="txtNunitoRegular14"
                  >
                    {caseInfo.case_id}
                    <span className="text-purple-600">
                      <MdContentCopy />
                    </span>
                  </Text>
                </div>
                <div className="flex flex-col justify-start w-full md:w-full">
                  <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtNunitoSemiBold14Gray900"
                    >
                      Created By:
                    </Text>
                    <Text
                      className="text-gray-600 text-sm w-auto"
                      size="txtNunitoRegular14"
                    >
                      {/* {console.log(apidata?.caseInfo?.createdBy)} */}
                      {caseInfo.created_by}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col justify-start w-full">
                  <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtNunitoSemiBold14Gray900"
                    >
                      Created On:
                    </Text>
                    <Text
                      className="text-gray-600 text-sm w-auto"
                      size="txtNunitoRegular14"
                    >
                      <span className="text-gray-600 font-nunito text-left font-normal">
                        {caseInfo.created_on}{" "}
                      </span>
                      {/* <span className="text-gray-600 font-nunito text-left font-normal">
                  · 13 June 2024
                </span> */}
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col justify-start w-full md:w-full">
                  <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtNunitoSemiBold14Gray900"
                    >
                      Last Edit:
                    </Text>
                    <Text
                      className="text-gray-600 text-sm w-auto"
                      size="txtNunitoRegular14"
                    >
                      {caseInfo.last_edit}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            {/* CUSTOMER DETAIL */}
            <div className="border-2 border-gray-100 border-solid flex md:flex-1 flex-col gap-5 items-center justify-start pb-[19px] rounded-[15px] w-[67%] ">
              <div className="bg-blue_gray-50 flex flex-col items-start justify-end p-[19px] rounded-tl-[15px] rounded-tr-[15px] w-full">
                <Text
                  className="md:ml-[0] ml-[5px] text-gray-900 text-sm"
                  size="txtNunitoSemiBold14Gray900"
                >
                  Customer Detail
                </Text>
              </div>
              <div className="flex flex-col gap-3 items-start justify-start w-full md:w-full pl-3 pr-3 ">
                <div className="flex flex-row gap-2 items-center w-full">
                  <Text
                    className="text-gray-900 text-sm w-fit"
                    size="txtNunitoSemiBold14Gray900"
                  >
                    Client Name:
                  </Text>


                  {editName ?
                    (<div className="flex gap-2 items-center">
                      <input
                        type="text"
                        id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                        placeholder="customer name"
                        style={{ height: "20px" }}
                        value={clientName}
                        onChange={(e) => {
                          setClientName(e.target.value)
                          // setname(e.target.value);
                        }}
                      ></input>
                      <button
                        type="submit"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xsm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[50px] p-1 text-white my-1"
                        style={{ color: "white" }}
                        onClick={() => {

                          setEditName(false)
                          handleAlert("success", "Updated Successful");
                        }}
                      // onClick={setcustomerDetail}
                      >
                        Save
                      </button>
                    </div>) : (<>
                      <Text
                        className="text-gray-600 text-sm w-auto flex gap-2"
                        size="txtNunitoRegular14"
                      >
                        {customerDetail.client_name}
                        <span>

                          <FaRegEdit onClick={() => setEditName(true)} />
                        </span>

                      </Text></>)

                  }
                </div>
                <div className="flex flex-col justify-start w-full md:w-full">
                  <div className="flex flex-row gap-[5px] items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtNunitoSemiBold14Gray900"
                    >
                      Address:
                    </Text>
                    {
                      editAddress ? (<div className="flex gap-2 items-center w-full">
                        <input
                          type="text"
                          id="first_name"
                          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                          placeholder="customer name"
                          style={{ height: "20px" }}
                          value={clientAddress}
                          onChange={(e) => {
                            setClientAddress(e.target.value)
                            // setname(e.target.value);
                          }}
                        ></input>
                        <button
                          type="submit"
                          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xsm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[50px] p-1 text-white my-1"
                          style={{ color: "white" }}
                          onClick={() => {

                            setEditAddress(false)
                            handleAlert("success", "Updated Successful");
                          }}
                        >
                          Save
                        </button>
                      </div>) : (<>

                        <Text
                          className="text-gray-600 text-sm w-auto flex gap-2"
                          size="txtNunitoRegular14"
                        >
                          {/* {console.log(apidata?.caseInfo?.createdBy)} */}
                          {clientAddress}
                          <span>
                            {" "}
                            <FaRegEdit onClick={() => setEditAddress(true)} />

                          </span>
                        </Text>
                      </>)
                    }
                  </div>
                </div>
                <div className="flex flex-col justify-start w-full">
                  <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                    <Text
                      className="text-gray-900 text-sm w-auto"
                      size="txtNunitoSemiBold14Gray900"
                    >
                      L.O.B:
                    </Text>
                    <Text
                      className="text-gray-600 text-sm w-auto"
                      size="txtNunitoRegular14"
                    >
                      <span className="text-gray-600 font-nunito text-left font-normal">
                        {customerDetail.l_o_b}{" "}
                      </span>
                      {/* <span className="text-gray-600 font-nunito text-left font-normal">
                  · 13 June 2024
                </span> */}
                    </Text>


                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* DECISION */}
          <div className="border-2 border-gray-100 border-solid flex md:flex-1 flex-col gap-5 items-center justify-start pb-[19px] rounded-[15px] w-[26%] md:w-full ">
            <div className="bg-blue_gray-50 flex flex-col items-start justify-end p-[19px] rounded-tl-[15px] rounded-tr-[15px] w-full">
              <Text
                className="md:ml-[0] ml-[5px] text-gray-900 text-sm"
                size="txtNunitoSemiBold14Gray900"
              >
                Decision
              </Text>
            </div>
            <div className="flex flex-col gap-3 items-start justify-start w-full md:w-full pl-3 pr-3">
              <div className="flex flex-col justify-start w-full">
                <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtNunitoRegular14"
                  >
                    <span className="text-gray-600 font-nunito text-left font-semibold">
                      {decision.text}{" "}
                    </span>
                    <div className="flex gap-2 mt-4">
                      {" "}
                      <Button
                        children={"No"}
                        variant="fill"
                        color="gray_200"
                        shape="round"
                      />
                      <Button
                        children={"Sure"}
                        variant="fill"
                        color="purple_600"
                        shape="round"
                      />
                    </div>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div >

        {/* DIV 2 */}

        < div className="mt-5 flex gap-3" >
          {/* SMART SUMMARIZATION */}
          < div className="border border-gray-100 border-solid flex md:flex-1 flex-col gap-5  justify-start pb-[38px] rounded-[15px] w-[72%] md:w-full" >
            <div className="bg-blue_gray-50 flex flex-row md:gap-10  justify-between p-[18px] rounded-tl-[15px] rounded-tr-[15px] w-full">
              <Text
                className="ml-[7px] text-gray-900 text-sm"
                size="txtNunitoSemiBold14Gray900"
              >
                Smart Summarization
              </Text>
              <div>
                <LuRefreshCcw />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-auto md:w-full">
              <div className="flex gap-3 items-start justify-start w-auto md:w-full pl-3 pr-3">
                <div>
                  <Image
                    className="rounded-lg"
                    width={150}
                    height={150}
                    src={smartSmz.img_path}
                  />
                </div>
                <div className="">
                  <Text
                    className="leading-[150.00%] w-full max-w-[1216px] md:max-w-full text-base text-black-900  text-justify"
                    size="txtNunitoRegular16"
                  >
                    <>{smartSmz.sumarization_text}</>
                  </Text>
                  <Icon />
                  <div className="flex flex-wrap gap-5">
                    {smartSmz.points &&
                      smartSmz.points.map((point) => (
                        <span className="flex gap-1 items-center">
                          <IoMdInformationCircleOutline className="text-purple-700" />{" "}
                          {point}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div >

          {/* ADD COMMENT */}
          < div className="border border-gray-100 border-solid flex md:flex-1 flex-col gap-5  justify-start pb-[38px] rounded-[15px] w-[26%] md:w-full" >
            <div className="bg-blue_gray-50 flex flex-row md:gap-10  justify-between p-[18px] rounded-tl-[15px] rounded-tr-[15px] w-full">
              <Text
                className="ml-[7px] text-gray-900 text-sm"
                size="txtNunitoSemiBold14Gray900"
              >
                Add Comments
              </Text>
              <div></div>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-auto h-full md:w-full">
              <div className="flex flex-col items-start justify-between h-full w-auto md:w-full px-3 ">
                {/* <Text
                className="leading-[150.00%] w-full max-w-[1216px] md:max-w-full text-base text-black-900"
                size="txtNunitoRegular16"
              ></Text> */}
                <div className=" flex flex-col justify-center text-center h-full">
                  <span className="font-bold">Add Comment</span>
                  <span className="text-gray-500">
                    You can add your comments to this underwriting for other's to
                    see here
                  </span>
                </div>
                <div className="w-full">
                  {" "}
                  <Input addonAfter={<IoMdSend />} placeholder="Enter comment" />
                </div>
              </div>
            </div>
          </div >
        </div >
        {/* DIV 3 */}

        < div className="mt-5 flex gap-3" >
          {/* DETAIL ANALYSIS */}
          < div className="border border-gray-100 border-solid flex md:flex-1 flex-col gap-5  justify-start pb-[38px] rounded-[15px] w-[72%] md:w-full" >
            <div className="bg-blue_gray-50 flex flex-row md:gap-10  justify-between p-[18px] rounded-tl-[15px] rounded-tr-[15px] w-full">
              <Text
                className="ml-[7px] text-gray-900 text-sm"
                size="txtNunitoSemiBold14Gray900"
              >
                Smart Summarization
              </Text>
              <div>
                <LuRefreshCcw />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full md:w-full">
              <div className="flex gap-3 items-start justify-start md:w-full pl-3 pr-3 w-full">
                {prop.component === "underwriting" ? <Dropdown /> : <></>}
              </div>
            </div>
          </div >

          {/* ADD COMMENT */}
          < div className="border border-gray-100 border-solid flex md:flex-1 flex-col gap-5  justify-start pb-[38px] rounded-[15px] w-[26%] md:w-full" >
            <div className="bg-blue_gray-50 flex flex-row md:gap-10  justify-between p-[18px] rounded-tl-[15px] rounded-tr-[15px] w-full">
              <Text
                className="ml-[7px] text-gray-900 text-sm"
                size="txtNunitoSemiBold14Gray900"
              >
                Ask Questions
              </Text>
              <div></div>
            </div>
            <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-auto h-full md:w-full">
              <div className="flex flex-col items-start justify-between h-full w-auto md:w-full px-3 ">
                {/* <Text
                className="leading-[150.00%] w-full max-w-[1216px] md:max-w-full text-base text-black-900"
                size="txtNunitoRegular16"
              ></Text> */}
                <div className=" flex flex-col justify-center text-center h-full">
                  <span className="font-bold">Ask Us Anything</span>
                  <span className="text-gray-500">
                    I am ready to chat about anything related to this file and beyond.
                  </span>
                </div>
                <div className="w-full">
                  {" "}
                  <Input addonAfter={<IoMdSend />} placeholder="Ask Question" />
                </div>
              </div>
            </div>
          </div >
        </div >
      </div>

    </>
  );
}
