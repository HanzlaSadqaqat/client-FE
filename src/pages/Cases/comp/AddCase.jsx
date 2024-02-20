import Dragger from "antd/es/upload/Dragger";
import React, { useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { LuRefreshCcw } from "react-icons/lu";

import { InboxOutlined } from "@ant-design/icons";
import { animals, document, props } from "./data";
import { MdUploadFile } from "react-icons/md";
import { IoDocumentTextOutline, IoFileTrayFullOutline } from "react-icons/io5";
import { Progress } from "antd";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa";

export default function NewCase(prop) {
  const [proceed, setProceed] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [UpComplete, setUpComplete] = useState(false);

  const handleButton = () => {};
  return (
    <div className="w-2/6 h-full absolute right-0 bottom-0 bg-white-A700 shadow-md">
      <div className="HEADING flex w-full h-20 border-b-small p-6 font-bold text-[20px] items-center justify-between">
        <div className="flex gap-1">
          New Case <RiEdit2Line />
        </div>
        <div
          className="border-1 border-gray-300 rounded-full p-1 hover:scale-105"
          onClick={() => prop.handleCross(false)}
        >
          <RxCross1 className="text-[14px] " />
        </div>
      </div>
      {!proceed ? (
        <div>
          <div className="DRAGGER p-5 flex flex-col gap-2">
            <Drag
              prop={{
                uploadFile: "Upload Customer Files",
                uploadHint: [
                  "The only accepted file formats are PNG, Docx, PDF, etc.",
                ],
              }}
            />
            <Drag
              prop={{
                uploadFile: "Upload Customer Files",
                uploadHint: [
                  "The only accepted file formats are PNG, Docx, PDF, etc.",
                ],
              }}
            />
          </div>
          <div className="PROCEED-BUTTON px-5 absolute bottom-3 w-full ">
            <button
              onClick={() => setProceed(true)}
              className="w-full p-2 bg-gray-100 rounded-md text-xs hover:bg-[#8703CA] hover:text-white-A700 transition duration-3000"
            >
              Proceed
            </button>
            <button className="w-full p-2 rounded-md text-xs text-gray-400 hover:text-gray-700">
              Edit Filter
            </button>
          </div>
        </div>
      ) : !uploading ? (
        <div>
          <div className="DRAGGER p-5 flex flex-col gap-2">
            <Drag
              prop={{
                uploadFile: "Upload Files",
                uploadHint: [
                  "The only accepted file formats are PNG, Docx, PDF, etc.",
                  "Maximum file size is 68 MB",
                  "Some other instruction goes here",
                ],
              }}
            />
          </div>
          <div className="flex justify-between px-5">
            <span className="flex gap-1">
              <IoFileTrayFullOutline /> Uploaded Docs
            </span>
            <span>
              <button className="flex gap-2 text-[10px] text-gray-500 bg-slate-100 rounded-md p-2">
                <LuRefreshCcw />
                sync
              </button>
            </span>
          </div>
          <div className="px-5 flex gap-2 flex-wrap pt-3">
            {document.map((prop) => (
              <div onClick={handleButton}>
                <UploadedBtn prop={prop} />
              </div>
            ))}
          </div>
          <div className="PROCEED-BUTTON px-5 absolute bottom-3 w-full ">
            <button
              onClick={() => setUploading(true)}
              className="w-full p-2 hover:bg-gray-100 rounded-md hover:text-black-900 text-xs bg-[#8703CA] text-white-A700 transition duration-3000"
            >
              Proceed
            </button>
            <button className="w-full p-2 rounded-md text-xs text-gray-400 hover:text-gray-700">
              Edit Filter
            </button>
          </div>
        </div>
      ) : UpComplete ? (
        <div className="p-5">
          <div className="flex gap-3 items-center">
            <div>
              <IoDocumentTextOutline />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px]">BusinessProposal.PDF</span>
              <span className="text-[9px] text-gray-500">179 KB</span>
            </div>
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap pt-5 gap-2">
            Category
            <Select placeholder="Select" className="w-full">
              {animals.map((animal) => (
                <SelectItem key={animal.value} value={animal.value}>
                  {animal.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="flex w-full flex-wrap pt-5 gap-2">
            Add Tags
            <Input type="text" placeholder="ex: #Finance, #Marketing" />
          </div>
          <div className="w-full flex gap-2 flex-wrap mt-5">
            {document.slice(0, 3).map((doc) => (
              <button
                className={`border-dashed rounded-lg ${
                  doc.select ? "border-[#8703CA]" : ""
                } border-1 p-2  flex gap-1 items-center text-[11px]`}
              >
                <span className="flex gap-1 text-gray-500">
                  <span>
                    <FaPlus />
                  </span>
                  {doc.text}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-5">
            <button
              onClick={() => prop.handleCross(false)}
              className="w-full p-2 hover:bg-gray-100 rounded-md hover:text-black-900 text-xs bg-[#8703CA] text-white-A700 transition duration-3000"
            >
              Proceed
            </button>
          </div>
          <div className="flex gap-3 items-center mt-5 border-b-1 pb-4">
            <div className="text-[16px]">
              <IoDocumentTextOutline />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px]">Legal Compliances.PDF</span>
              <span className="text-[9px] text-gray-500">179 KB</span>
            </div>
          </div>
          <div className="flex gap-3 items-center mt-5 border-b-1 pb-4">
            <div className="text-[16px]">
              <IoDocumentTextOutline />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[14px]">
                Sales Report For Last Quarter.PDF
              </span>
              <span className="text-[9px] text-gray-500">179 KB</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-5/6 w-full flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col justify-center gap-2 text-center">
            <span className="font-semibold text-[18px]">Uploading Files</span>
            <span
              className="text-gray-400 text-[12px]"
              onClick={() => setUpComplete(true)}
            >
              Hold Tight! We're Uploading Your File
            </span>
          </div>
          <Progress
            percent={30}
            showInfo={false}
            size={"small"}
            className="w-3/5"
          />
        </div>
      )}
    </div>
  );
}

const Drag = ({ prop }) => {
  return (
    <Dragger {...props}>
      <p className="text-[78px] text-gray-400">
        <MdUploadFile />
      </p>
      <p className="text-left">{prop.uploadFile}</p>
      {prop.uploadHint.map((hint) => (
        <p className="text-left  text-[10px] text-gray-400">{hint}</p>
      ))}
    </Dragger>
  );
};

const UploadedBtn = ({ prop }) => {
  return (
    <>
      <button
        className={`border-dotted rounded-lg border-1 p-2 ${
          prop.select ? "border-[#8703CA]" : "border-gray-300 "
        } flex gap-1 items-center`}
      >
        <span>{prop.icon}</span>
        <span className="text-[11px] flex flex-col text-left">
          {prop.text} <span className="">{prop.size}</span>
        </span>
      </button>
    </>
  );
};
