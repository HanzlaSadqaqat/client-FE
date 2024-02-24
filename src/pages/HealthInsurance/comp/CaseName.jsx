import { FaPlus } from "react-icons/fa";
import { Button } from "../../../components/Button";
import { GoPlus } from "react-icons/go";
import { AiOutlineFileDone } from "react-icons/ai";

import React from "react";
import { TbRefresh } from "react-icons/tb";
import { RiEdit2Line } from "react-icons/ri";

export default function CaseName() {
  return (
    <div>
      <div className="flex justify-between pb-5">
        <div className="text-[36px] font-bold flex gap-2 items-center">
          Case Name <RiEdit2Line className="text-[24px]" />
        </div>
        <div className="flex gap-4">
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[91px] gap-2"
            shape="round"
            color="blue_gray_50"
            size="md"
            leftIcon={<GoPlus className=" mr-2 text-[24px]" />}
            variant="fill"
          >
            <div className="text-left text-sm">Customer File</div>
          </Button>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[91px] gap-2"
            shape="round"
            color="blue_gray_50"
            leftIcon={<GoPlus className=" mr-2 text-[24px]" />}
            variant="fill"
          >
            <div className="text-left text-sm">Company File</div>
          </Button>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[91px] gap-2"
            shape="round"
            color="blue_gray_50"
            leftIcon={<AiOutlineFileDone className=" mr-2 text-[22px]" />}
            variant="fill"
          >
            <div className="text-left text-sm">Submit</div>
          </Button>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[133px]"
            shape="round"
            color="purple_600"
            leftIcon={<TbRefresh className=" mr-3 text-[24px]" />}
            variant="fill"
          >
            <div className="text-left text-sm">Analyze</div>
          </Button>
        </div>
      </div>
    </div>
  );
}
