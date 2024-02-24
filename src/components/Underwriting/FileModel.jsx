import { FiX } from "react-icons/fi";
import {
    Text,
} from "components";
import { saveAs } from "file-saver";


import { Dropzone, FileMosaic } from "@dropzone-ui/react";
import React, { useState } from "react";




export const FileModel = (props) => {
    const [files, setFiles] = React.useState([]);


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
            className="absolute float-right z-100 h-[100%] w-[40%] mt-24 bg-neutral-50 border-2 rounded-2xl border-black"
            style={{ top: "0", right: "0" }}
        >
            <div className="my-5 mx-3">
                <Text
                    className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01 w-auto inline"
                    size="txtNunitoBold36"
                >
                    {localStorage.getItem("uploadType")} File
                </Text>
                <button
                    className="float-right"
                    onClick={() => {
                        // setopenFilemodal(false);
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