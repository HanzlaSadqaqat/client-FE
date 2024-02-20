import React from "react";
import { Button, Img, Line, Text, Casename, Analysis, Icon } from "../index.js";

const Bar = ({ children, className = "" }) => {
  return (
    <>
      <div className="flex md:flex-col flex-row gap-7 items-center justify-end w-full md:w-full">
        {/* <div className="flex flex-row md:gap-10 items-center justify-between w-[90%] md:w-full">
          <div className="flex flex-row gap-2 items-start justify-between w-[11%]">
            <Img
                    className="h-[38px] md:h-auto object-cover rounded-[10px] w-[38px]"
                    src="images/img_rectangle3.png"
                    alt="rectangleThree"
                  />
            <div className="md:h-[41px] h-[43px] mt-[3px] relative w-[72%]">
              <Text
                className="absolute left-[0] text-[10px] text-gray-600 top-[0]"
                size="txtNunitoRegular10"
              >
              </Text>
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-auto">
                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                  <Text
                    className="text-gray-900_01 text-sm w-24"
                    size="txtNunitoSemiBold14"
                  >
                   
                  </Text>
                  <Img
                          className="h-[3px] w-1.5"
                          src="images/img_group31.svg"
                          alt="groupThirtyOne"
                        />
                </div>
              </div>
            </div>
          </div>
          <Img
            className="h-[19px] w-[19px]"
            src="images/img_group34.svg"
            alt="groupThirtyFour"
          />
        </div> */}
        <div className="flex flex-row gap-2 items-start justify-between w-[12%] md:w-full">
          <Button
            className="flex h-[38px] items-center justify-center mb-[9px] w-[38px]"
            shape="round"
            color="purple_600"
            variant="fill"
          >
            <Img className="h-[17px]" src="images/img_lock.svg" alt="lock" />
          </Button>
          <div className="md:h-[41px] h-[35px] mt-[3px] relative w-[72%]">
            <Text
              className="absolute left-[0] text-[10px] text-gray-600 top-[0]"
              size="txtNunitoRegular10"
            >
              Welcome,
            </Text>
            <div
              className="absolute bottom-[0] flex flex-row gap-2 inset-x-[0] items-center justify-between mx-auto w-auto"
              style={{ width: "auto" }}
            >
              <Text
                className="text-gray-900_01 text-sm w-auto"
                size="txtNunitoSemiBold14"
              >
                Krish Bhardwaj
              </Text>
              <Img
                className="h-[3px] w-1.5"
                src="images/img_group31.svg"
                alt="groupThirtyOne_One"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Bar };
