import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "../index";
const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:gap-10 gap-[273px] justify-start mt-[25px] w-full">
      <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start md:ml-[0] ml-[50px] w-auto md:w-full">
        <Button
          className="common-pointer cursor-pointer h-[42px] min-w-[142px] text-center text-sm"
          onClick={() => navigate("/")}
          shape="round"
          color="gray_200_b2"
          variant="fill"
        >
          Summary Analysis
        </Button>
        <Button
          className="cursor-pointer h-[42px] text-center text-sm w-[136px]"
          shape="round"
          color="gray_200_b2"
          variant="fill"
        >
          Comparison View
        </Button>
        <Button
          className="cursor-pointer h-[42px] text-center text-sm w-[90px]"
          shape="round"
          color="gray_200_b2"
          variant="fill"
        >
          Agent Log
        </Button>
        <Button
          className="common-pointer cursor-pointer h-[42px] text-center text-sm w-[150px]"
          onClick={() => navigate("/documents")}
          shape="round"
          color="gray_200_b2"
          variant="fill"
        >
          Documents
        </Button>
        <Button
          className="!text-gray-900 border-2 border-purple-600 border-solid cursor-pointer font-semibold h-[42px] text-center text-sm w-[150px]"
          shape="round"
          color="gray_200_b2"
          variant="fill"
          onClick={() => navigate("/searchrag")}
        >
          Search
        </Button>
      </div>
      <div className="bg-purple-600_05 flex flex-col justify-start p-[9px] w-full">
        <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start ml-10 md:ml-[0] mr-[1399px] w-[21%] md:w-full">
          <Button
            className="flex h-9 items-center justify-center w-9"
            shape="round"
            color="purple_600"
            variant="fill"
          >
            <Img
              className="h-[17px]"
              src="images/img_lock.svg"
              alt="lock_One"
            />
          </Button>
          <Text className="text-base text-black-900" size="txtNunitoRegular16">
            How Much Did I Spend This Financial Year?
          </Text>
        </div>
        <Img
          className="h-[13px] md:ml-[0] ml-[95px] w-[13px]"
          src="images/img_edit_gray_600_13x13.svg"
          alt="edit_One"
        />
      </div>
    </div>
  );
};
export { Menu };
