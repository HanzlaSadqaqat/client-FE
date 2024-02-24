import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { saveAs } from "file-saver";
import {
  Button,
  Img,
  Line,
  Text,
  Casename,
  Analysis,
  Icon,
  Bar,
} from "components";
import Sidebar1 from "components/Sidebar1";
import GaugeChart from "react-gauge-chart";
import { Dropzone, FileMosaic } from "@dropzone-ui/react";
import axios from "axios";
import { handleAlert } from "../../utils";
import ReactLoading from "react-loading";
import {
  caseUrl,
  casesUrl,
  submitUrl,
  finilizeCaseUrl,
  overallSummaryUrl,
  customerSummaryUrl,
  customerSummaryTableUrl,
  internalOverviewSummaryUrl,
  internalOverviewSummaryTableUrl,
  externalOverviewSummaryUrl,
  externalOverviewSummaryTableUrl,
  ResetUrl,
} from "../../Urls";

const SummaryAnalysisPage = ({ casename, setcasename }) => {
  const navigate = useNavigate();
  const [detailsection, setdetailsection] = useState(1);
  const analysisData = {
    heading: "Bussiness Summary",
  };
  const [openFilemodal, setopenFilemodal] = useState(false);
  const [openpdfmodal, setopenpdfmodal] = useState(false);
  const [editname, seteditname] = useState(false);
  const [editaddress, seteditaddress] = useState(false);
  const [loading, setloading] = useState(true);
  const [files, setFiles] = React.useState([]);
  const [proceed, setproceed] = useState(null);
  const [tempdetail, settempdetail] = useState({
    name: "Raven Industries Inc.",
    address: "205 E 6TH St Sioux Falls, SD, 57104-5931 United States",
    LOB: "Property/Casuality",
  });
  const [apidata, setapidata] = useState(
    JSON.parse(localStorage.getItem("apidata"))
  );

  const [customerDetail, setcustomerDetail] = useState({
    name: "Raven Industries Inc.",
    address: "205 E 6TH St Sioux Falls, SD, 57104-5931 United States",
    LOB: "Property/Casuality",
  });

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

  const handleUpload = () => {
    try {
    } catch (error) {
      console.log(error);
    }
    const formData = new FormData();
    const data = [];
    // files.forEach((file) => {
    //   console.log(1111);
    //   data.push(file.file);
    // });
    // console.log(process.env.CWD);
    files.forEach((file, index) => {
      formData.append(`files`, file.file);
    });
    // formData.append("files", JSON.stringify(data));
    // console.log(data);
    axios
      .post(
        `http://127.0.0.1:8000/upload-pdf-${localStorage
          .getItem("uploadType")
          .toLowerCase()}`,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
          },
        }
      )
      .then((res) => {
        handleAlert("success", "uploaded successfully");
        console.log(res.data.company_files);
        setFiles([]);
        setopenFilemodal(false);
      })
      .catch((err) => {
        handleAlert("error", err?.message || "something went wrong");
      });
    // console.log(files);
  };

  // API calls

  const handleSubmit = async () => {
    try {
      axios
        .post(submitUrl, {
          customerName: customerDetail.name,
          customerAddress: customerDetail.address,
        })
        .then((res) => {
          setapidata({
            caseInfo: res.data,
          });
          localStorage.setItem(
            "apidata",
            JSON.stringify({ ...apidata, caseInfo: res.data })
          );
          localStorage.setItem("caseId", res.data.caseId);
          // console.log(apidata.caseInfo)
          handleAlert("success", "submited");
        })
        .catch((err) => handleAlert("error", "something went wrong"));
    } catch (error) {
      handleAlert("error", "submit case first");
    }
  };

  const handleAnalize = async () => {
    try {
      const overallSummary = await axios.post(overallSummaryUrl, {
        caseId: localStorage.getItem("caseId"),
        customerName: customerDetail.name,
        customerAddress: customerDetail.address,
      });

      const customerSummary = await axios.post(customerSummaryUrl, {
        caseId: localStorage.getItem("caseId"),
        customerName: customerDetail.name,
        customerAddress: customerDetail.address,
      });

      const internalSummary = await axios.post(internalOverviewSummaryUrl, {
        caseId: localStorage.getItem("caseId"),
        customerName: customerDetail.name,
        customerAddress: customerDetail.address,
      });
      const externalSummary = await axios.post(externalOverviewSummaryUrl, {
        caseId: localStorage.getItem("caseId"),
        customerName: customerDetail.name,
        customerAddress: customerDetail.address,
      });
      const customerSummaryTable = await axios.post(customerSummaryTableUrl, {
        caseId: localStorage.getItem("caseId"),
        customerName: customerDetail.name,
        customerAddress: customerDetail.address,
      });

      const internalSummaryTable = await axios.post(
        internalOverviewSummaryTableUrl,
        {
          caseId: localStorage.getItem("caseId"),
          customerName: customerDetail.name,
          customerAddress: customerDetail.address,
        }
      );

      const externalSummaryTable = await axios.post(
        externalOverviewSummaryTableUrl,
        {
          caseId: localStorage.getItem("caseId"),
          customerName: customerDetail.name,
          customerAddress: customerDetail.address,
        }
      );

      setapidata({
        ...apidata,
        overallSummary: overallSummary?.data,
        customerSummary: customerSummary?.data,
        internalSummary: internalSummary?.data,
        externalSummary: externalSummary?.data,
        customerSummaryTable: customerSummaryTable?.data,
        internalSummaryTable: internalSummaryTable?.data,
        externalSummaryTable: externalSummaryTable?.data,
      });
      localStorage.setItem(
        "apidata",
        JSON.stringify({
          ...apidata,
          overallSummary: overallSummary?.data,
          customerSummary: customerSummary?.data,
          internalSummary: internalSummary?.data,
          externalSummary: externalSummary?.data,
          customerSummaryTable: customerSummaryTable?.data,
          internalSummaryTable: internalSummaryTable?.data,
          externalSummaryTable: externalSummaryTable?.data,
        })
      );
      handleAlert("success", "Request Successful");
    } catch (error) {
      handleAlert("error", "Something went wrong");
    }
  };

  const summaryRegenetate = async () => {
    try {
      const overallSummary = await axios.post(overallSummaryUrl, {
        caseId: localStorage.getItem("caseId"),
        customerName: customerDetail.name,
        customerAddress: customerDetail.address,
      });

      setapidata({
        ...apidata,
        overallSummary: overallSummary?.data,
      });
      localStorage.setItem(
        "apidata",
        JSON.stringify({
          ...apidata,
          overallSummary: overallSummary?.data,
        })
      );
      handleAlert("success", "Request Successful");
    } catch (error) {
      handleAlert("error", "Something went wrong");
    }
  };

  const detailRegenerate = async () => {
    try {
      const customerSummary = await axios.post(customerSummaryUrl, {
        caseId: localStorage.getItem("caseId"),
        customerName: customerDetail.name,
        customerAddress: customerDetail.address,
      });

      const internalSummary = await axios.post(internalOverviewSummaryUrl, {
        caseId: localStorage.getItem("caseId"),
        customerName: customerDetail.name,
        customerAddress: customerDetail.address,
      });
      const externalSummary = await axios.post(externalOverviewSummaryUrl, {
        caseId: localStorage.getItem("caseId"),
        customerName: customerDetail.name,
        customerAddress: customerDetail.address,
      });
      const customerSummaryTable = await axios.post(customerSummaryTableUrl, {
        caseId: localStorage.getItem("caseId"),
        customerName: customerDetail.name,
        customerAddress: customerDetail.address,
      });

      const internalSummaryTable = await axios.post(
        internalOverviewSummaryTableUrl,
        {
          caseId: localStorage.getItem("caseId"),
          customerName: customerDetail.name,
          customerAddress: customerDetail.address,
        }
      );

      const externalSummaryTable = await axios.post(
        externalOverviewSummaryTableUrl,
        {
          caseId: localStorage.getItem("caseId"),
          customerName: customerDetail.name,
          customerAddress: customerDetail.address,
        }
      );

      setapidata({
        ...apidata,
        customerSummary: customerSummary?.data,
        internalSummary: internalSummary?.data,
        externalSummary: externalSummary?.data,
        customerSummaryTable: customerSummaryTable?.data,
        internalSummaryTable: internalSummaryTable?.data,
        externalSummaryTable: externalSummaryTable?.data,
      });
      localStorage.setItem(
        "apidata",
        JSON.stringify({
          ...apidata,
          customerSummary: customerSummary?.data,
          internalSummary: internalSummary?.data,
          externalSummary: externalSummary?.data,
          customerSummaryTable: customerSummaryTable?.data,
          internalSummaryTable: internalSummaryTable?.data,
          externalSummaryTable: externalSummaryTable?.data,
        })
      );
      handleAlert("success", "Request Successful");
    } catch (error) {
      handleAlert("error", "Something went wrong");
    }
  };

  const reset = () => {
    axios
      .post(ResetUrl, {})
      .then(() => {
        handleAlert("succes", "Reset Successful");
        localStorage.clear();
        window.location.reload(false);
      })
      .catch((err) => handleAlert("error", "something went wrong"));
  };

  return (
    <>
      {/* <ReactLoading type={'bars'} color={"skyblue"} height={'5%'} width={'5%'} className={'m-auto'} /> */}
      {/* {console.log(apidata?.caseInfo?.createdBy )} */}
      <div className="bg-gray-50 flex flex-col font-nunito items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-24 bg-white-A700 border-gray-100 border-r-2 border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0] overflow-hidden" />
          <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-7 md:px-5 w-full">
            <Bar />
            <Line className="bg-gray-100 h-0.5 mt-5 w-full" />
            <div className="flex flex-col items-start justify-start mt-12 w-[95%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <div className="flex flex-row gap-2 items-end justify-end w-auto">
                  <Casename casename={casename} setcasename={setcasename} />
                </div>
                <div className="flex sm:flex-1 sm:flex-col flex-row gap-[18px] items-start justify-start w-auto sm:w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[113px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-3"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    }
                    shape="round"
                    color="blue_gray_50"
                    variant="fill"
                    onClick={() => {
                      localStorage.setItem("uploadType", "Customer");
                      setopenFilemodal(true);
                    }}
                  >
                    <div className="text-left text-sm">Customer File</div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[113px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-3"
                        src="images/img_plus.svg"
                        alt="plus"
                      />
                    }
                    shape="round"
                    color="blue_gray_50"
                    variant="fill"
                    onClick={() => {
                      localStorage.setItem("uploadType", "Company");
                      setopenFilemodal(true);
                    }}
                  >
                    <div className="text-left text-sm">Company File</div>
                  </Button>

                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[91px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-3"
                        src="images/img_download.svg"
                        alt="download"
                      />
                    }
                    shape="round"
                    color="blue_gray_50"
                    variant="fill"
                  >
                    <div className="text-left text-sm" onClick={handleSubmit}>
                      Submit
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[133px]"
                    leftIcon={
                      <Img
                        className="h-6 mr-3"
                        src="images/img_qrcode.svg"
                        alt="qrcode"
                      />
                    }
                    shape="round"
                    color="purple_600"
                    variant="fill"
                    onClick={handleAnalize}
                  >
                    <div className="text-left text-sm">Analyze</div>
                  </Button>
                </div>
              </div>
              <div className="common-pointer flex md:flex-col flex-row gap-[18px] items-start justify-start mt-[25px] w-auto md:w-full">
                <Button
                  className="!text-gray-900_01 border-2 border-purple-600 border-solid cursor-pointer font-semibold text-center text-sm w-38"
                  shape="round"
                  color="gray_200_b2"
                  variant="fill"
                >
                  Summary Analysis
                </Button>
                <Button
                  className="cursor-pointer h-[42px] text-center text-sm w-[136px]"
                  shape="round"
                  color="gray_200_b2"
                  variant="fill"
                >
                  Comparison View
                </Button>
                <Button
                  className="cursor-pointer h-[42px] text-center text-sm w-[90px]"
                  shape="round"
                  color="gray_200_b2"
                  variant="fill"
                >
                  Agent Log
                </Button>
                <Button
                  className="cursor-pointer h-[42px] text-center text-sm w-[150px]"
                  shape="round"
                  color="gray_200_b2"
                  variant="fill"
                  onClick={() => navigate("/documents")}
                >
                  Documents
                </Button>
                <Button
                  className="cursor-pointer h-[42px] text-center text-sm w-[150px]"
                  shape="round"
                  color="gray_200_b2"
                  variant="fill"
                  onClick={() => navigate("/searchrag")}
                >
                  Search
                </Button>
                <Button
                  className="cursor-pointer h-[42px] text-center text-sm w-[150px]"
                  shape="round"
                  color="purple_600"
                  variant="fill"
                  style={{
                    right: 0,
                    position: "absolute",
                    width: "133px",
                    marginRight: "2.5%",
                  }}
                  onClick={reset}
                >
                  Reset
                </Button>
              </div>
              <div className="flex md:flex-col flex-row gap-5 justify-between mt-[25px] w-full">
                <div className="border-2 border-gray-100 border-solid flex md:flex-1 flex-col gap-5 items-center justify-start pb-[19px] rounded-[15px] w-[24%] md:w-full">
                  <div className="bg-blue_gray-50 flex flex-col items-start justify-end p-[19px] rounded-tl-[15px] rounded-tr-[15px] w-full">
                    <Text
                      className="md:ml-[0] ml-[5px] text-gray-900 text-sm"
                      size="txtNunitoSemiBold14Gray900"
                    >
                      Case Info
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-4/5 md:w-full">
                    <div className="flex flex-row gap-2 justify-start w-auto">
                      <Text
                        className="text-gray-900 text-sm w-auto"
                        size="txtNunitoSemiBold14Gray900"
                      >
                        Case ID:
                      </Text>
                      <Text
                        className="text-gray-600 text-sm w-auto"
                        size="txtNunitoRegular14"
                      >
                        {apidata?.caseInfo?.caseId || "DRF-789748HFJG5648#"}
                      </Text>
                    </div>
                    <div className="flex flex-col justify-start w-full md:w-full">
                      <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtNunitoSemiBold14Gray900"
                        >
                          Created By:
                        </Text>
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtNunitoRegular14"
                        >
                          {/* {console.log(apidata?.caseInfo?.createdBy)} */}
                          {apidata?.caseInfo?.createdBy || "Krish Bhardwaj"}
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtNunitoSemiBold14Gray900"
                        >
                          Created On:
                        </Text>
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtNunitoRegular14"
                        >
                          <span className="text-gray-600 font-nunito text-left font-normal">
                            12:09:45{" "}
                          </span>
                          <span className="text-gray-600 font-nunito text-left font-normal">
                            · 13 June 2024
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col justify-start w-full md:w-full">
                      <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtNunitoSemiBold14Gray900"
                        >
                          Last Edit:
                        </Text>
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtNunitoRegular14"
                        >
                          24 Minutes ago
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border border-gray-100 border-solid flex md:flex-1 flex-col gap-5  justify-start pb-[38px] rounded-[15px] w-[76%] md:w-full">
                  <div className="bg-blue_gray-50 flex flex-row md:gap-10  justify-between p-[18px] rounded-tl-[15px] rounded-tr-[15px] w-full">
                    <Text
                      className="ml-[7px] text-gray-900 text-sm"
                      size="txtNunitoSemiBold14Gray900"
                    >
                      Smart Summarization
                    </Text>
                    <div onClick={summaryRegenetate}>
                      <Img
                        className="h-6 mr-[7px] w-6"
                        src="images/img_qrcode_gray_900.svg"
                        alt="qrcode"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-auto md:w-full">
                    <GaugeChart
                      id="gauge-chart4"
                      style={{ width: "150px", color: "#000" }}
                      textColor={"#000"}
                      percent={
                        apidata?.overallSummary?.gaugeIndicator / 100 || 0.45
                      }
                      animate={false}
                    />
                    <div className="flex flex-col items-start justify-start w-auto md:w-full">
                      <Text
                        className="leading-[150.00%] w-full max-w-[1216px] md:max-w-full text-base text-black-900"
                        size="txtNunitoRegular16"
                      >
                        {apidata?.overallSummary?.summary || (
                          <>
                            Raven Industries, headquartered in Sioux Falls,
                            South Dakota, specializes in precision agriculture
                            products and information management tools. It
                            previously operated segments manufacturing plastic
                            films for agricultural and industrial applications
                            and designing high-altitude balloons, aerostats, and
                            radar systems. Its solutions cater to various
                            sectors, including industrial, construction,
                            agricultural, and military, aligning with relevant
                            NAICS categories.
                          </>
                        )}
                      </Text>
                      <Icon />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-5 justify-between mt-[18px] w-full">
                <div className="flex md:flex-1 flex-col gap-[18px] items-center justify-start w-[24%] md:w-full">
                  <div className="border-2 border-gray-100 border-solid flex flex-col gap-5 items-center justify-start pb-[19px] rounded-[15px] w-full">
                    <div className=" bg-blue_gray-50 flex flex-col items-start justify-end p-[19px] rounded-tl-[15px] rounded-tr-[15px] w-full">
                      <Text
                        className="md:ml-[0] ml-[5px] text-gray-900 text-sm"
                        size="txtNunitoSemiBold14Gray900"
                      >
                        Customer Details
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-start justify-start w-[85%] md:w-full">
                      <div className="flex flex-row gap-2 justify-start w-auto">
                        <Text
                          className="text-gray-900 text-sm w-auto"
                          size="txtNunitoSemiBold14Gray900"
                        >
                          Name:
                        </Text>
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtNunitoRegular14"
                        >
                          {editname ? (
                            <>
                              <input
                                type="text"
                                id="first_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                placeholder="case name"
                                style={{ height: "20px" }}
                                value={tempdetail.name}
                                onChange={(e) => {
                                  settempdetail({
                                    ...tempdetail,
                                    name: e.target.value,
                                  });
                                  // setname(e.target.value);
                                }}
                              ></input>
                              <button
                                type="submit"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xsm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[50px] p-1 text-white my-1"
                                style={{ color: "white" }}
                                onClick={() => {
                                  if (tempdetail?.name?.trim()) {
                                    setcustomerDetail({
                                      ...customerDetail,
                                      name: tempdetail.name,
                                    });
                                  }
                                  seteditname(false);
                                  handleAlert("success", "Updated Successful");
                                }}
                                // onClick={setcustomerDetail}
                              >
                                Save
                              </button>
                            </>
                          ) : (
                            <>
                              {customerDetail.name}
                              <FaRegEdit
                                className="inline mx-2"
                                onClick={() => seteditname(true)}
                              />
                            </>
                          )}
                        </Text>
                      </div>
                      <div className="flex flex-col justify-start w-full">
                        <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                          <Text
                            className="text-gray-900 text-sm w-auto"
                            size="txtNunitoSemiBold14Gray900"
                          >
                            Address:
                          </Text>
                          <Text
                            className="text-gray-600 text-sm w-auto"
                            size="txtNunitoRegular14"
                          >
                            {editaddress ? (
                              <>
                                <input
                                  type="text"
                                  id="first_name"
                                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                                  style={{ height: "20px" }}
                                  placeholder="case name"
                                  value={tempdetail.address}
                                  onChange={(e) => {
                                    settempdetail({
                                      ...tempdetail,
                                      address: e.target.value,
                                    });
                                  }}
                                ></input>
                                <button
                                  type="submit"
                                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xsm w-full sm:w-auto p-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[50px] text-white"
                                  style={{ color: "white" }}
                                  onClick={() => {
                                    if (tempdetail?.address) {
                                      setcustomerDetail({
                                        ...customerDetail,
                                        address: tempdetail.address,
                                      });
                                    }
                                    seteditaddress(false);
                                    handleAlert("success", "update Successful");
                                  }}
                                >
                                  Save
                                </button>
                              </>
                            ) : (
                              <>
                                {customerDetail.address}
                                <FaRegEdit
                                  className="inline mx-2"
                                  onClick={() => seteditaddress(true)}
                                />
                              </>
                            )}
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start w-full md:w-full">
                        <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                          <Text
                            className="text-gray-900 text-sm w-auto"
                            size="txtNunitoSemiBold14Gray900"
                          >
                            LOB:
                          </Text>
                          <Text
                            className="text-gray-600 text-sm w-auto"
                            size="txtNunitoRegular14"
                          >
                            Property/Casuality
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col  justify-start w-full md:w-full">
                        <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                          <Text
                            className="text-gray-900 text-sm w-auto"
                            size="txtNunitoSemiBold14Gray900"
                          >
                            Case Type:
                          </Text>
                          <Text
                            className="text-gray-600 text-sm w-auto"
                            size="txtNunitoRegular14"
                          >
                            Underwriting
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-2 border-gray-100 border-solid flex flex-col gap-2.5 items-center justify-start pb-4 rounded-[15px] w-full">
                    <div className="bg-blue_gray-50 flex flex-col items-start justify-end p-[19px] rounded-tl-[15px] rounded-tr-[15px] w-full">
                      <Text
                        className="md:ml-[0] ml-[5px] text-gray-900 text-sm"
                        size="txtNunitoSemiBold14Gray900"
                      >
                        Decision?
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[29px] items-start justify-start w-[84%] md:w-full">
                      <Text
                        className="leading-[150.00%] text-gray-600 text-sm w-full"
                        size="txtNunitoRegular14"
                      >
                        Will you proceed with this Case?
                      </Text>
                      <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                        <Button
                          className="cursor-pointer h-[42px] min-w-[57px] text-center text-sm"
                          shape="round"
                          color={
                            proceed === "no" ? "purple_600" : "blue_gray_50"
                          }
                          variant="fill"
                          onClick={() => setproceed("no")}
                        >
                          No
                        </Button>
                        <Button
                          className="cursor-pointer h-[42px] min-w-[57px] text-center text-sm"
                          shape="round"
                          color={
                            proceed === "yes" ? "purple_600" : "blue_gray_50"
                          }
                          variant="fill"
                          onClick={() => setproceed("yes")}
                        >
                          Sure!
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-2 border-gray-100 border-solid flex md:flex-1 flex-col items-center justify-start pb-[161px] rounded-[15px] w-[76%] md:w-full">
                  <div className="flex flex-col gap-5 items-center justify-start w-full">
                    <div className="bg-blue_gray-50 flex flex-row md:gap-10 items-center justify-between p-[18px] rounded-tl-[15px] rounded-tr-[15px] w-full">
                      <Text
                        className="ml-[7px] text-gray-900 text-sm"
                        size="txtNunitoSemiBold14Gray900"
                      >
                        Detailed Analysis
                      </Text>
                      <Img
                        className="h-6 mr-[7px] w-6"
                        src="images/img_qrcode_gray_900.svg"
                        alt="qrcode_One"
                        onClick={detailRegenerate}
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                      <div className="flex flex-row gap-5 items-center justify-start w-[90%] md:w-full">
                        <Text
                          className={
                            detailsection === 1
                              ? "text-purple-600 text-sm underline underline-offset-8"
                              : "text-gray-600 text-sm w-auto"
                          }
                          size="txtNunitoSemiBold14Gray600"
                          onClick={() => setdetailsection(1)}
                        >
                          Customer Summary
                        </Text>
                        <Text
                          className={
                            detailsection === 2
                              ? "text-purple-600 text-sm underline underline-offset-8"
                              : "text-gray-600 text-sm w-auto"
                          }
                          onClick={() => setdetailsection(2)}
                          size="txtNunitoSemiBold14Gray600"
                        >
                          Internal Overview
                        </Text>
                        <Text
                          className={
                            detailsection === 3
                              ? "text-purple-600 text-sm underline underline-offset-8"
                              : "text-gray-600 text-sm w-auto"
                          }
                          onClick={() => setdetailsection(3)}
                          size="txtNunitoSemiBold14Gray600"
                        >
                          External Overview
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[15px] items-start justify-start mt-[13px] w-full md:w-full">
                        {detailsection === 1 && (
                          <Analysis
                            summary={
                              detailsection === 2
                                ? apidata?.internalSummary?.internalSummary
                                : detailsection === 3
                                ? apidata?.externalSummary?.externalSummary
                                : apidata?.customerSummary?.customerSummary
                            }
                            table={
                              detailsection === 2
                                ? apidata?.internalSummaryTable
                                : detailsection === 3
                                ? apidata?.externalSummaryTable
                                : apidata?.customerSummaryTable
                            }
                            id={detailsection}
                          />
                        )}
                        {detailsection === 2 && (
                          <Analysis
                            summary={
                              detailsection === 2
                                ? apidata?.internalSummary?.internalSummary
                                : detailsection === 3
                                ? apidata?.externalSummary?.externalSummary
                                : apidata?.customerSummary?.customerSummary
                            }
                            table={
                              detailsection === 2
                                ? apidata?.internalSummaryTable
                                : detailsection === 3
                                ? apidata?.externalSummaryTable
                                : apidata?.customerSummaryTable
                            }
                            id={detailsection}
                          />
                        )}
                        {detailsection === 3 && (
                          <Analysis
                            summary={
                              detailsection === 2
                                ? apidata?.internalSummary?.internalSummary
                                : detailsection === 3
                                ? apidata?.externalSummary?.externalSummary
                                : apidata?.customerSummary?.customerSummary
                            }
                            table={
                              detailsection === 2
                                ? apidata?.internalSummaryTable
                                : detailsection === 3
                                ? apidata?.externalSummaryTable
                                : apidata?.customerSummaryTable
                            }
                            id={detailsection}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openFilemodal && (
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
                setopenFilemodal(false);
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
            onClick={handleUpload}
            style={{ color: "white" }}
          >
            upload
          </button>
        </div>
      )}
    </>
  );
};

export default SummaryAnalysisPage;
