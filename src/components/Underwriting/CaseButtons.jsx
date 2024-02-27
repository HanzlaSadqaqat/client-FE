import { FaPlus } from "react-icons/fa";
import { Button } from "../Button";
import { GoPlus } from "react-icons/go";
import { AiOutlineFileDone } from "react-icons/ai";

import { TbRefresh } from "react-icons/tb";
import { RiEdit2Line } from "react-icons/ri";


//////////////////////FileModel Imports
import { FiX } from "react-icons/fi";
import {
  Text,
} from "components";
import { saveAs } from "file-saver";


import { Dropzone, FileMosaic, uploadExtFile } from "@dropzone-ui/react";
import React, { useState } from "react";

let setUploadedType;


export default function CaseButtons(props) {
  const [openSelect, setOpenSelect] = useState(false)


  const handleButton = (btn) => {
    console.log(btn)
    if (btn.name === 'Customer File' || btn.name === 'Company File') {
      setUploadedType = btn.name
      setOpenSelect(true)

    }
  }
  const setFileOpen = (value) => {
    setOpenSelect(value)
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
              onClick={() => handleButton(btn)}
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
          openSelect && <FileModel setFileOpen={setFileOpen} />
        }
      </div>
    </div>
  );
}









export const FileModel = (props) => {
  const [files, setFiles] = useState([]);


  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
    // saveAs(incommingFiles[0].file);
  };
  const handleStart = (filesToUpload) => {
    console.log("advanced demo start upload", filesToUpload);
    saveAs(files[0].file);
  };
  const handleFinish = (uploadedFiles) => {
    console.log("advanced demo finish upload", uploadedFiles);
  };

  return (
    <div
      className="fixed z-20 float-right z-100 h-[100%] w-[40%] mt-24 bg-neutral-50 border-2 rounded-2xl border-black"
      style={{ top: "0", right: "0" }}
    >
      <div className="my-5 mx-3">
        <Text
          className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01 w-auto inline"
          size="txtNunitoBold36"
        >
          {setUploadedType}
        </Text>
        <button
          className="float-right"
          onClick={() => {
            props.setFileOpen(false)
          }}
        >
          <FiX />
        </button>
      </div>
      <Dropzone
        onChange={updateFiles}
        value={files}
        accept=".pdf/*"
        minHeight="395px"
        onUploadStart={handleStart}
        onUploadFinish={handleFinish}
        fakeUploading
        disableScroll
      // url=''
      >
        {files.map((file) => (
          <FileMosaic {...file} preview />
        ))}
      </Dropzone>
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 mt-5 m-2 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 text-white"
        // onClick={handleUpload}
        style={{ color: "white" }}
      >
        upload
      </button>
    </div>
  )
}