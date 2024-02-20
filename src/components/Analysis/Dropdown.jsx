import React, { useState } from "react";
import { Icon, Text } from "../index";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

export default function Dropdown({ data, index, id }) {
  const [drop, setdrop] = useState(localStorage.getItem(`${id}_${index}`));
  // localStorage.setItem(`${id}_${index}`, 0);
  return (
    <div className="grid grid-cols-9 w-[100%]">
      <div className="col-span-1">
        <Text
          className="leading-[150.00%] max-w-[1356px] md:max-w-full text-base text-black-900"
          size="txtNunitoBold14"
        >
          <span
            className="w-5 h-5 p-1 px-3 rounded text-xs"
            style={{
              color: "#fff",
              backgroundColor: data?.confidenceColour?.toLowerCase() || "green",
            }}
          >
            {data?.confidenceLevel || "High"}
          </span>
        </Text>
      </div>
      <div className="col-span-1">
        <Text
          className="leading-[150.00%] max-w-[1356px] md:max-w-full text-base text-black-900"
          size="txtNunitoBold14"
        >
          {data?.middleSection
            ? data?.middleSection?.length > 15
              ? data?.middleSection?.slice(0, 15) + "..."
              : data?.middleSection
            : "325320"}
        </Text>
      </div>

      <div className="col-span-7">
        <Text
          className="leading-[150.00%] max-w-[1356px] md:max-w-full text-base text-black-500"
          size="txtNunitoBold14"
        >
          {data?.summaryBlock?.heading ||
            "Pesticide and Other Agricultural Chemical Manufacturing"}

          <span>
            {localStorage.getItem(`${id}_${index}`) == 1 ? (
              <FaAngleDown
                className="inline"
                onClick={() => {
                  localStorage.setItem(
                    `${id}_${index}`,
                    localStorage.getItem(`${id}_${index}`) == 0 ? 1 : 0
                  );
                  setdrop(localStorage.getItem(`${id}_${index}`));
                }}
              />
            ) : (
              <FaAngleRight
                className="inline"
                onClick={() => {
                  localStorage.setItem(
                    `${id}_${index}`,
                    localStorage.getItem(`${id}_${index}`) == 0 ? 1 : 0
                  );
                  setdrop(localStorage.getItem(`${id}_${index}`));
                }}
              />
            )}
          </span>
          <Icon />
          {/* <Text
          className="leading-[150.00%] max-w-[1056px] md:max-w-full text-black-500 text-sm"
          size="txtNunitoRegular10"
        > */}
          {/* </Text> */}
        </Text>
        {drop == 1 && (
          <>
            {data?.summaryBlock?.summaryText ||
              "Reasoning: Raven Industries is involved in producing crop protection solutions, which likely includes pesticides and agricultural chemicals. This NAICS code aligns with their Crop Protection solutions."}
          </>
        )}
      </div>
    </div>
  );
}
