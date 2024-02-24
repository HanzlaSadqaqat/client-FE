import { FaPlus } from "react-icons/fa";
import { Button } from "../Button";
import { GoPlus } from "react-icons/go";
import { AiOutlineFileDone } from "react-icons/ai";

import React from "react";
import { TbRefresh } from "react-icons/tb";
import { RiEdit2Line } from "react-icons/ri";
import { FileModel } from "./FileModel";



export default function CaseButtons(props) {
  const [openSelect, setOpenSelect] = useState(false)
  const handleButton = (btn) => {
    if (btn.name === 'Customer File' || btn.name === 'Company File') {

    }
  }
  return (
    <div>
      <div className="flex justify-between pb-5">
        <div className="text-[36px] font-bold flex gap-2 items-center">
          Case Name <RiEdit2Line className="text-[24px]" />
        </div>
        <div className="flex gap-4">
          {
            props.buttons.map((btn) => <Button
              className="cursor-pointer flex items-center justify-center min-w-[91px] gap-2"
              shape="round"
              color="blue_gray_50"
              size="md"
              leftIcon={btn.icon}
              onClick={(btn) => handleButton(btn)}
              variant="fill"
            >
              <div className="text-left text-sm">{btn.name}</div>
            </Button>)
          }


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

        {
          openSelect && <FileModel />
        }
      </div>
    </div>
  );
}
