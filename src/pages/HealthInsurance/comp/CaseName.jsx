import { FaPlus } from "react-icons/fa";
import { Button } from "../../../components/Button";
import { TbRefresh } from "react-icons/tb";
import { AiOutlineFileDone } from "react-icons/ai";

import React from "react";

export default function CaseName() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-[26px] font-semibold">Case Name</div>
        <div className="flex gap-2">
          <Button
            className="flex  gap-3 justify-center font-thin text-[12px]"
            shape="round"
            color="gray_200"
            children={"Customer File"}
            leftIcon={<FaPlus />}
            variant="fill"
          />
          <Button
            className="flex  gap-3 justify-center font-thin text-[12px]"
            shape="round"
            color="gray_200"
            children={"Company File"}
            leftIcon={<FaPlus />}
            variant="fill"
          />
          <Button
            className="flex  gap-3 justify-center font-thin text-[12px]"
            shape="round"
            color="gray_200"
            children={"Submit"}
            leftIcon={<AiOutlineFileDone />}
            variant="fill"
          />
          <Button
            className="flex  gap-3 justify-center font-thin text-[12px]"
            shape="round"
            color="purple_600"
            children={"Analyze"}
            leftIcon={<TbRefresh />}
            variant="fill"
          />
        </div>
      </div>
    </div>
  );
}
