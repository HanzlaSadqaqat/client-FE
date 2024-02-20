import React, { useState } from "react";
import { Text, Icon } from "../index";
import { FaAngleDown } from "react-icons/fa";
import Dropdown from "./Dropdown";

const Analysis = ({ summary, table, id }) => {
  const dummySummary = {
    customer: {
      summary: "Raven Industries, Inc. is an American company that makes precision agriculture products and information management tools for growers. Before a series of acquisitions in 2021, it also had an Engineered Films segment that produced plastic films for various agricultural and industrial applications, as well as an Aerostar segment that designed and manufactured high-altitude balloons, tethered aerostats, and radar systems, and sold military parachutes, uniforms, and protective wear. The company was founded in 1956 and headquartered in Sioux Falls, South Dakota. Its stock was traded on Nasdaq until 2021 when it was acquired by CNH Industrial. Main Products: Products for industrial, construction, agricultural, and military. Solutions: Planting and Seeding, Crop Protection, Harvesting, Soil Management and Hay and Forage",
      code: "NAICS Customer Code",
      heading: "Customer Business Summary",
      dropdownData: {
        confidenceLevel: 'High',
        middleSection: '4923823492',
        summaryBlock: {
          summaryText:'1 Reasoning: Raven Industries is involved in producing crop protection solutions, which likely includes pesticides and agricultural chemicals. This NAICS code aligns with their Crop Protection solutions.'
        },
        confidenceColour: 'green'
      }
    }, internal: {
      summary: "Internal Raven Industries, Inc. is an American company that makes precision agriculture products and information management tools for growers. Before a series of acquisitions in 2021, it also had an Engineered Films segment that produced plastic films for various agricultural and industrial applications, as well as an Aerostar segment that designed and manufactured high-altitude balloons, tethered aerostats, and radar systems, and sold military parachutes, uniforms, and protective wear. The company was founded in 1956 and headquartered in Sioux Falls, South Dakota. Its stock was traded on Nasdaq until 2021 when it was acquired by CNH Industrial. Main Products: Products for industrial, construction, agricultural, and military. Solutions: Planting and Seeding, Crop Protection, Harvesting, Soil Management and Hay and Forage",
      code: "NAICS Internal Code",
      heading: "Internal Business Summary",
      dropdownData: {
        confidenceLevel: 'Low',
        middleSection: '546345645',
        summaryBlock: {
          summaryText:'2 Reasoning: Raven Industries is involved in producing crop protection solutions, which likely includes pesticides and agricultural chemicals. This NAICS code aligns with their Crop Protection solutions.'
        },
        confidenceColour: 'red'
      }
    }, external: {
      summary: "External Raven Industries, Inc. is an American company that makes precision agriculture products and information management tools for growers. Before a series of acquisitions in 2021, it also had an Engineered Films segment that produced plastic films for various agricultural and industrial applications, as well as an Aerostar segment that designed and manufactured high-altitude balloons, tethered aerostats, and radar systems, and sold military parachutes, uniforms, and protective wear. The company was founded in 1956 and headquartered in Sioux Falls, South Dakota. Its stock was traded on Nasdaq until 2021 when it was acquired by CNH Industrial. Main Products: Products for industrial, construction, agricultural, and military. Solutions: Planting and Seeding, Crop Protection, Harvesting, Soil Management and Hay and Forage",
      code: "NAICS External Code",
      heading: "External Business Summary",
      dropdownData: {
        confidenceLevel: 'mid',
        middleSection: '02342483234',
        summaryBlock: {
          summaryText:'3 Reasoning: Raven Industries is involved in producing crop protection solutions, which likely includes pesticides and agricultural chemicals. This NAICS code aligns with their Crop Protection solutions.'
        },
        confidenceColour: 'blue'
      }
    },
  }
  return (
    <>
      <Text
        className="leading-[150.00%] max-w-[1356px] md:max-w-full text-base text-black-900"
        size="txtNunitoBold14"
      >
        {summary?.heading || id === 3 ? dummySummary.external.heading : id === 2 ? dummySummary.internal.heading : dummySummary.customer.heading}
        <Icon />
      </Text>
      <Text
        className="leading-[150.00%] max-w-[1356px] md:max-w-full text-base text-black-900"
        size="txtNunitoRegular16"
      >
        {summary?.summaryText || id === 3 ? dummySummary.external.summary : id === 2 ? dummySummary.internal.summary : dummySummary.customer.summary}
      </Text>
      <Text
        className="leading-[150.00%] max-w-[1356px] md:max-w-full text-base text-black-900"
        size="txtNunitoBold14"
      >
        {table?.heading || id === 3 ? dummySummary.external.code : id === 2 ? dummySummary.internal.code : dummySummary.customer.code}
      </Text>

      <Text
        className="leading-[150.00%] max-w-[1356px] md:max-w-full text-base text-black-900"
        size="txtNunitoRegular16"
      >
        {table?.summaryText || "Details"}
      </Text>
      {table?.tableData?.map((i, index) => (
        <Dropdown data={i} index={index} id={id} />
      )) || <Dropdown data={id === 3 ? dummySummary.external.dropdownData : id === 2 ? dummySummary.internal.dropdownData : dummySummary.customer.dropdownData} id={id} index={1} />}

      {/* </Text> */}
    </>
  );
};

export { Analysis };
