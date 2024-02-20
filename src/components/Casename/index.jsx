import React, { useState } from "react";
import { Text, Img } from "../index";
const Casename = ({ casename, setcasename }) => {
  const [openEditName, setopenEditName] = useState(false);
  const [name, setname] = useState("");
  const handleSave = () => {
    console.log(casename);
    if (name.trim() === "") {
      setopenEditName(false);
    } else {
      setcasename(name);
      setopenEditName(false);
      console.log("sfasasfasd");
    }
  };
  return (
    <>
      {!openEditName ? (
        <>
          <Text
            className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01 w-auto"
            size="txtNunitoBold36"
          >
            {casename}
          </Text>
          <Img
            className="h-[46px] w-6"
            src="images/img_edit.svg"
            alt="edit"
            onClick={() => setopenEditName(true)}
          />
        </>
      ) : (
        <>
          <input
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="case name"
            onChange={(e) => {
              setname(e.target.value);
            }}
          ></input>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[100px] text-white"
            style={{ color: "white" }}
            onClick={handleSave}
          >
            Save
          </button>
        </>
      )}
    </>
  );
};

export { Casename };
