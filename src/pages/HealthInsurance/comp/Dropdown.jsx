import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Button, Icon, Text } from "../../../components";
import React, { useState } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { TbCircleNumber1 } from "react-icons/tb";
import { CircularProgress } from "@nextui-org/react";
import { Progress } from "antd";

export default function Dropdown() {
  const [detailsection, setdetailsection] = useState(1);

  return (
    <>
      <div className="w-full">
        <div className="flex flex-row gap-5 items-center justify-start w-[90%] md:w-full">
          <Text
            className={
              detailsection === 1
                ? "text-purple-600 text-sm underline underline-offset-8 cursor-pointer"
                : "text-gray-600 text-sm w-auto cursor-pointer"
            }
            size="txtNunitoSemiBold14Gray600"
            onClick={() => setdetailsection(1)}
          >
            Risk Assesment
          </Text>
          <Text
            className={
              detailsection === 2
                ? "text-purple-600 text-sm underline underline-offset-8 cursor-pointer"
                : "text-gray-600 text-sm w-auto cursor-pointer"
            }
            onClick={() => setdetailsection(2)}
            size="txtNunitoSemiBold14Gray600"
          >
            Product
          </Text>
          <Text
            className={
              detailsection === 3
                ? "text-purple-600 text-sm underline underline-offset-8 cursor-pointer"
                : "text-gray-600 text-sm w-auto cursor-pointer"
            }
            onClick={() => setdetailsection(3)}
            size="txtNunitoSemiBold14Gray600"
          >
            Early Claims
          </Text>
          <Text
            className={
              detailsection === 4
                ? "text-purple-600 text-sm underline underline-offset-8 cursor-pointer"
                : "text-gray-600 text-sm w-auto cursor-pointer"
            }
            onClick={() => setdetailsection(4)}
            size="txtNunitoSemiBold14Gray600"
          >
            Decisions
          </Text>
        </div>
        <div className="mt-5">
          {detailsection === 1 ? (
            <RiskAssement />
          ) : detailsection === 2 ? (
            <Product />
          ) : detailsection === 3 ? (
            <EarlyClaims />
          ) : (
            <div>
              <Decisions />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const RiskAssement = () => {
  const [heading1, setHeading1] = useState(true);
  const [heading2, setHeading2] = useState(true);
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <h1 className="flex gap-3 text-[20px] items-center font-bold">
              Heading 1
            </h1>
            {heading1 ? (
              <FaChevronDown
                className="text-[12px]"
                onClick={() => setHeading1(false)}
              />
            ) : (
              <FaChevronUp
                className="text-[12px]"
                onClick={() => setHeading1(true)}
              />
            )}
          </div>
          {heading1 && (
            <div>
              <Text
                className="leading-[150.00%] w-full max-w-[1216px] md:max-w-full text-base text-black-900  text-justify"
                size="txtNunitoRegular16"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam.{" "}
                </>
              </Text>
              <Icon />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 items-center">
            <h1 className="flex gap-3 text-[20px] items-center font-bold">
              Heading 2
            </h1>
            {heading2 ? (
              <FaChevronDown
                className="text-[12px]"
                onClick={() => setHeading2(false)}
              />
            ) : (
              <FaChevronUp
                className="text-[12px]"
                onClick={() => setHeading2(true)}
              />
            )}
          </div>
          {heading2 && (
            <div>
              <Text
                className="leading-[150.00%] w-full max-w-[1216px] md:max-w-full text-base text-black-900  text-justify"
                size="txtNunitoRegular16"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam.{" "}
                </>
              </Text>
              <Icon />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
const Product = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <div className="flex gap-2 items-center font-bold">
            <IoDocumentTextOutline className="text-purple-600" /> Base Details
          </div>
          <div>
            <table className="border-collapse border-dashed border-2 border-gray-200 mt-4">
              <tbody>
                <tr className="flex w-full justify-center">
                  <td className=" border-gray-200 border-dashed border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                  </td>
                  <td className=" border-gray-200 border-dashed border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                  </td>
                  <td className=" border-gray-200 border-dashed border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                  </td>

                  {/* Add more data cells if needed */}
                </tr>

                {/* Add more rows of data if needed */}
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center font-bold">
            <IoDocumentTextOutline className="text-purple-600" /> Rider Details
          </div>
          <div>
            <table className="border-collapse border-dashed border-2 border-gray-200 mt-4">
              <tbody>
                <tr className="flex w-full justify-center">
                  <td className=" border-gray-200 border-dashed border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                  </td>
                  <td className=" border-gray-200 border-dashed border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                  </td>
                  <td className=" border-gray-200 border-dashed border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                    <span className="flex gap-2 text-[14px]">
                      <span className="text-gray-500">Dummy Text:</span>
                      <span className="font-bold">Value Goes Here</span>
                    </span>
                  </td>

                  {/* Add more data cells if needed */}
                </tr>

                {/* Add more rows of data if needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
const EarlyClaims = () => {
  return (
    <>
      <div>
        <div className="flex flex-col gap-5">
          {/* SCORE */}
          <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-4 w-full">
              <span className="flex flex-col gap-3 w-40 p-4 border-dashed border-2 rounded-lg">
                <span className="bg-purple-200 rounded-lg w-fit p-2">
                  <Progress
                    type="circle"
                    percent={70}
                    size={40}
                    strokeColor={"#8e24aa"}
                  />
                </span>
                <span className="flex gap-2 items-center">
                  {/* <TbCircleNumber1 className="text-purple-600" />{" "} */}
                  <span className="font-bold text-[18px]">
                    Probability Score
                  </span>
                </span>
              </span>
              <span className="flex flex-col gap-3 w-40 p-4 border-dashed border-2 rounded-lg">
                <span className="bg-purple-200 rounded-lg w-fit p-2">
                  <Progress
                    type="circle"
                    percent={70}
                    size={40}
                    strokeColor={"#8e24aa"}
                  />
                </span>
                <span className="flex gap-2 items-center">
                  {/* <TbCircleNumber1 className="text-purple-600" />{" "} */}
                  <span className="font-bold text-[18px]">Risk Analysis</span>
                </span>
              </span>
              <span className="flex flex-col gap-3 w-40 p-4 border-dashed border-2 rounded-lg">
                <span className=" rounded-lg w-fit p-2">
                  <Button
                    children={"Good"}
                    color="purple_200"
                    variant="fill"
                    className="text-[11px] font-extrabold"
                    // size=""
                    shape="round"
                  />
                </span>
                <span className="flex gap-2 items-center">
                  {/* <TbCircleNumber1 className="text-purple-600" />{" "} */}
                  <span className="font-bold text-[18px]">AI Descision</span>
                </span>
              </span>
            </div>
          </div>

          {/* Age Impact */}
          <div className="flex flex-col gap-3 w-full border-2 rounded-lg p-3">
            <div className="flex gap-2 items-center font-bold pb-3 border-b-2 border-dashed w-full">
              <IoDocumentTextOutline className="text-purple-600" /> Age Impact
            </div>
            <p className="text-[13px] text-justify ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              aut architecto corporis dolor nisi unde iste nobis neque quod
              doloribus repellat enim fugit tempore mollitia blanditiis
              excepturi. Expedita, distinctio provident. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. excepturi. Expedita, distinctio
              provident. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. excepturi. Expedita, distinctio provident. Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Heading 1 */}
          <div className="flex flex-col gap-3 w-full border-2 rounded-lg p-3">
            <div className="flex gap-2 items-center font-bold pb-3 border-b-2 border-dashed w-full">
              <IoDocumentTextOutline className="text-purple-600" /> Heading 1
            </div>
            <p className="text-[13px] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              aut architecto corporis dolor nisi unde iste nobis neque quod
              doloribus repellat enim fugit tempore mollitia blanditiis
              excepturi. Expedita, distinctio provident. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. excepturi. Expedita, distinctio
              provident. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. excepturi. Expedita, distinctio provident. Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Heading 2 */}
          <div className="flex flex-col gap-3 w-full border-2 rounded-lg p-3">
            <div className="flex gap-2 items-center font-bold pb-3 border-b-2 border-dashed w-full">
              <IoDocumentTextOutline className="text-purple-600" /> Heading 2
            </div>
            <p className="text-[13px] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              aut architecto corporis dolor nisi unde iste nobis neque quod
              doloribus repellat enim fugit tempore mollitia blanditiis
              excepturi. Expedita, distinctio provident. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. excepturi. Expedita, distinctio
              provident. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. excepturi. Expedita, distinctio provident. Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* Heading 3 */}
          <div className="flex flex-col gap-3 w-full border-2 rounded-lg p-3">
            <div className="flex gap-2 items-center font-bold pb-3 border-b-2 border-dashed w-full">
              <IoDocumentTextOutline className="text-purple-600" /> Heading 3
            </div>
            <p className="text-[13px] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              aut architecto corporis dolor nisi unde iste nobis neque quod
              doloribus repellat enim fugit tempore mollitia blanditiis
              excepturi. Expedita, distinctio provident. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. excepturi. Expedita, distinctio
              provident. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. excepturi. Expedita, distinctio provident. Lorem ipsum dolor
              sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="flex gap-5 mt-3"></div>
      </div>
    </>
  );
};
const Decisions = () => {
  return (
    <>
      <div className="">
        <table className="border-collapse rounded-2xl  border-2 border-gray-200 ">
          <thead>
            <th className="flex w-full h-14">
              <td className="w-6/12 border-gray-200  text-left border px-6 py-2 flex flex-col justify-center gap-2 pt-2 pb-2">
                Parameters
              </td>
              <td className=" border-gray-200 text-left   border px-6 py-2 flex flex-col justify-center gap-2 pt-2 pb-2 w-full">
                Details
              </td>

              {/* Add more data cells if needed */}
            </th>
          </thead>
          <tbody className="text-[14px]">
            <tr className="flex w-full justify-center">
              <td className="w-6/12 border-gray-200 font-semibold   border px-6 py-2 flex flex-col gap-2 pt-2 pb-2">
                Something Goes Here
              </td>
              <td className=" border-gray-200   border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                Value Goes Here
              </td>

              {/* Add more data cells if needed */}
            </tr>
            <tr className="flex w-full justify-center">
              <td className="w-6/12 border-gray-200 font-semibold   border px-6 py-2 flex flex-col gap-2 pt-2 pb-2">
                Something Goes Here
              </td>
              <td className=" border-gray-200   border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                Value Goes Here
              </td>

              {/* Add more data cells if needed */}
            </tr>
            <tr className="flex w-full justify-center">
              <td className="w-6/12 border-gray-200 font-semibold   border px-6 py-2 flex flex-col gap-2 pt-2 pb-2">
                Something Goes Here
              </td>
              <td className=" border-gray-200   border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                Value Goes Here
              </td>

              {/* Add more data cells if needed */}
            </tr>
            <tr className="flex w-full justify-center">
              <td className="w-6/12 border-gray-200 font-semibold   border px-6 py-2 flex flex-col gap-2 pt-2 pb-2">
                Something Goes Here
              </td>
              <td className=" border-gray-200   border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                Value Goes Here
              </td>

              {/* Add more data cells if needed */}
            </tr>
            <tr className="flex w-full justify-center">
              <td className="w-6/12 border-gray-200 font-semibold   border px-6 py-2 flex flex-col gap-2 pt-2 pb-2">
                Something Goes Here
              </td>
              <td className=" border-gray-200  border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                Value Goes Here
              </td>

              {/* Add more data cells if needed */}
            </tr>
            <tr className="flex w-full justify-center">
              <td className="w-6/12 border-gray-200 font-semibold  border px-6 py-2 flex flex-col gap-2 pt-2 pb-2">
                Something Goes Here
              </td>
              <td className=" border-gray-200  border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                Value Goes Here
              </td>

              {/* Add more data cells if needed */}
            </tr>
            <tr className="flex w-full justify-center">
              <td className="w-6/12 border-gray-200 font-semibold  border px-6 py-2 flex flex-col gap-2 pt-2 pb-2">
                Something Goes Here
              </td>
              <td className=" border-gray-200  border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                Value Goes Here
              </td>

              {/* Add more data cells if needed */}
            </tr>
            <tr className="flex w-full justify-center">
              <td className="w-6/12 border-gray-200 font-semibold  border px-6 py-2 flex flex-col gap-2 pt-2 pb-2">
                Something Goes Here
              </td>
              <td className=" border-gray-200  border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                Value Goes Here
              </td>

              {/* Add more data cells if needed */}
            </tr>
            <tr className="flex w-full justify-center">
              <td className="w-6/12 border-gray-200 font-semibold  border px-6 py-2 flex flex-col gap-2 pt-2 pb-2">
                Something Goes Here
              </td>
              <td className=" border-gray-200  border px-6 py-2 flex flex-col gap-2 pt-2 pb-2 w-full">
                Value Goes Here
              </td>

              {/* Add more data cells if needed */}
            </tr>

            {/* Add more rows of data if needed */}
          </tbody>
        </table>
      </div>
    </>
  );
};
