import React, { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { Dropzone, FileMosaic } from "@dropzone-ui/react";
import { saveAs } from "file-saver";
import axios from "axios";
import { Document, Page, pdfjs } from "react-pdf";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
    Button,
    Img,
    Input,
    Line,
    List,
    Text,
    Casename,
    Icon,
    Bar,
} from "../../components";
import Sidebar1 from "../../components/Sidebar1";
import {
    caseUrl,
    casesUrl,
    submitUrl,
    rag_qna,
    finilizeCaseUrl,
    overallSummaryUrl,
    customerSummaryUrl,
    customerSummaryTableUrl,
    internalOverviewSummaryUrl,
    internalOverviewSummaryTableUrl,
    externalOverviewSummaryUrl,
    externalOverviewSummaryTableUrl,
} from "../../Urls";
import { handleAlert } from "../../utils";

const Search = ({ casename, setcasename }) => {
    const animatedComponents = makeAnimated();
    const navigate = useNavigate();
    const [openFilemodal, setopenFilemodal] = useState(false);
    const [msg, setmsg] = useState(JSON.parse(localStorage.getItem("msg")) || []);
    const [files, setFiles] = React.useState([]);
    const [openpdfmodal, setopenpdfmodal] = useState(false);
    const [numPages, setNumPages] = useState();
    const [query, setquery] = useState("");
    const options = [
        { value: "Customer Files", label: "Customer Files" },
        { value: "Company Files", label: "Company Files" },
        { value: "External Data", label: "External Data" },
    ];
    const [multiselect, setmultiselect] = useState([
        "Customer Files",
        "Company Files",
        "External Data",
    ]);
    const [pdffile, setpdffile] = useState(null);
    const [page, setpage] = useState(1);
    const updateFiles = (incommingFiles) => {
        setFiles(incommingFiles);
        // saveAs(incommingFiles[0].file);
    };
    const handleStart = (filesToUpload) => {
        //console.log("advanced demo start upload", filesToUpload);
        saveAs(files[0].file);
    };
    const handleFinish = (uploadedFiles) => {
        //console.log("advanced demo finish upload", uploadedFiles);
    };

    const handleUpload = () => {
        const formData = new FormData();
        const data = [];
        // files.forEach((file) => {
        //   //console.log(1111);
        //   data.push(file.file);
        // });
        //console.log(process.env.CWD);
        files.forEach((file, index) => {
            formData.append(`files`, file.file);
        });
        // formData.append("files", JSON.stringify(data));
        //console.log(data);
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
                //console.log(res.data.company_files);
            });
        //console.log(files);
    };

    const getAnswer = () => {
        if (query.trim() !== "") {
            setmsg([...msg, query]);
            const tempQuery = query;
            setquery("");
            handleAlert("warning", "waiting for response");

            axios
                .post(rag_qna, {
                    query,
                    docSources: {
                        customer_files: multiselect.includes("Customer Files"),
                        company_files: multiselect.includes("Company Files"),
                        external_files: multiselect.includes("External Data"),
                        internet: true,
                    },
                })
                .then((res) => {
                    setmsg([...msg, tempQuery, res?.data]);
                    localStorage.setItem(
                        "msg",
                        JSON.stringify([...msg, tempQuery, res?.data])
                    );
                    handleAlert("success", "Request successful");
                })
                .catch((err) => {
                    handleAlert("error", err); // handle alert according to backend response while chating in search rag.
                });
        }
    };

    const fetchPdf = async (j) => {
        try {
            // const {data} = await axios.get('')
            console.log(j);
            const response = await axios.get(
                `http://localhost:8000/get-pdf/${j?.refDocumentId}`,
                {
                    responseType: "blob",
                }
            );
            setpage(j?.refPageId);
            setpdffile(URL.createObjectURL(response.data));
        } catch (error) {
            handleAlert("error", "Error fetching PDF");
            console.error("Error fetching PDF", error);
        }
    };

    function onDocumentLoadSuccess(numPages) {
        console.log(numPages._pdfInfo.numPages);
        setNumPages(numPages);
    }
    // const [openEditName, setopenEditName] = useState(second)
    return (
        <>
            <div className="bg-gray-50 flex flex-col font-nunito items-center justify-start mx-auto w-full border-5">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
                    <Sidebar1 className="!sticky !w-24 bg-white-A700 border-gray-100 border-r-2 border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
                    <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-7 md:px-5 w-[90%]">
                        <Bar />
                        <div className="flex flex-col items-center justify-start w-full mt-5">
                            <Line className="bg-gray-100 h-0.5 w-full" />
                            <div className="flex flex-col gap-[25px] items-start justify-start mt-12 w-[95%] md:w-full">
                                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-full">
                                    <div className="flex flex-row gap-2 items-end justify-end w-auto">
                                        <Casename casename={casename} setcasename={setcasename} />
                                    </div>
                                    <div className="flex sm:flex-1 sm:flex-col flex-row gap-[18px] items-start justify-start w-auto sm:w-full">
                                        {/* <Button
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
                    </Button> */}

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
                                            <div className="text-left text-sm">Submit</div>
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
                                        >
                                            <div className="text-left text-sm">Analyze</div>
                                        </Button>
                                    </div>
                                </div>
                                <div className="flex flex-col md:gap-10 gap-[57px] justify-start w-full">
                                    <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start md:ml-[0] w-auto md:w-full">
                                        <Button
                                            // onClick={(e) => setActive(text)}
                                            className={`border-2 border-[#8703CA] font-bold text-gray-900_01 border-solid cursor-pointer text-center text-sm w-38`}
                                            shape="round"
                                            color="gray_200_b2"
                                            variant="fill"
                                        >
                                            Underwriting Content
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
                                            className="common-pointer cursor-pointer h-[42px] text-center text-sm w-[150px]"
                                            onClick={() => navigate("/documents")}
                                            shape="round"
                                            color="gray_200_b2"
                                            variant="fill"
                                        >
                                            Documents
                                        </Button>
                                        <Button
                                            className="!text-gray-900 border-2 border-purple-600 border-solid cursor-pointer font-semibold h-[42px] text-center text-sm w-[150px]"
                                            shape="round"
                                            color="gray_200_b2"
                                            variant="fill"
                                            onClick={() => navigate("/searchrag")}
                                        >
                                            Search
                                        </Button>
                                    </div>
                                </div>
                                <Select
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    defaultValue={options}
                                    isMulti
                                    options={options}
                                    styles={{ backgroundColor: "blue" }}
                                    onChange={(e) => {
                                        setmultiselect(e?.map((i) => i?.value));
                                    }}
                                />
                                <div className="flex flex-col md:gap-10 gap-[57px] justify-start w-full mb-[60px]">
                                    <div className="overflow-auto h-[720px] pb-[20px] ">
                                        {msg?.map((i, index) => {
                                            //console.log(msg);
                                            if (!i?.answer) {
                                                return (
                                                    <>
                                                        <div className="bg-purple-600_05 flex flex-col justify-start p-[9px] w-[95%] my-5">
                                                            <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start md:ml-[0] mr-[1399px] w-[21%] md:w-full">
                                                                <Button
                                                                    className="flex h-9 items-center justify-center w-9"
                                                                    shape="round"
                                                                    color="purple_600"
                                                                    variant="fill"
                                                                >
                                                                    <Img
                                                                        className="h-[17px]"
                                                                        src="images/img_lock.svg"
                                                                        alt="lock_One"
                                                                    />
                                                                </Button>
                                                                <Text
                                                                    className="text-base text-black-900"
                                                                    size="txtNunitoRegular16"
                                                                >
                                                                    {i}
                                                                    <Img
                                                                        className="h-[13px] md:ml-[0] w-[13px] mt-2.5"
                                                                        src="images/img_edit_gray_600_13x13.svg"
                                                                        alt="edit_One"
                                                                    />
                                                                </Text>
                                                            </div>
                                                        </div>
                                                    </>
                                                );
                                            } else {
                                                return (
                                                    <>
                                                        <div className="flex flex-col items-center justify-start w-[95%] p-[9px] md:w-full mb-5">
                                                            <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-full">
                                                                <Img
                                                                    className="h-9 md:h-auto md:mt-0 mt-[11px] object-cover rounded-[10px] w-9 my-3"
                                                                    src="images/img_rectangle3.png"
                                                                    alt="rectangle126"
                                                                />
                                                                <Text
                                                                    className="sm:flex-1 leading-[150.00%] text-base text-black-900 w-[97%] sm:w-full"
                                                                    size="txtNunitoRegular16"
                                                                >
                                                                    <span className="text-black-900 font-nunito text-left font-normal">
                                                                        {i?.answer}
                                                                    </span>

                                                                    <div className="flex flex-row md:gap-10 items-center justify-between mt-2.5 w-[100%] md:w-full">
                                                                        <div>
                                                                            <Icon
                                                                                className="inline"
                                                                                innerclass={"inline"}
                                                                            />
                                                                            <Img
                                                                                className="h-[15px] w-[19px] inline"
                                                                                src="images/img_edit_gray_600_13x13.svg"
                                                                                alt="edit_One"
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-row gap-[9px] items-center justify-start">
                                                                            <Img
                                                                                className="h-3 w-3"
                                                                                src="images/img_settings.svg"
                                                                                alt="settings_One"
                                                                            />
                                                                            <Text
                                                                                className="text-purple-600 text-sm"
                                                                                size="txtNunitoRegular14Purple600"
                                                                            >
                                                                                Feedback
                                                                            </Text>
                                                                        </div>
                                                                    </div>
                                                                </Text>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-3 justify-start  w-[95%] md:w-full ml-[3rem]">
                                                            <Text
                                                                className="md:ml-[0] ml-[21px] text-base text-gray-900_01"
                                                                size="txtNunitoSemiBold16Gray90001"
                                                            >
                                                                Sources
                                                            </Text>
                                                            <List
                                                                className="sm:flex-col flex-row grid-cols-5 gap-[18px] grid sm:grid-cols-1 justify-start w-auto sm:w-full"
                                                                orientation="horizontal"
                                                            >
                                                                {i?.caseReference?.references?.map((j, ind) => (
                                                                    <div
                                                                        className="common-pointer flex flex-row gap-2.5 items-center justify-start w-full"
                                                                    // onClick={() => navigate("/searchrag")}
                                                                    >
                                                                        <div className="h-3.5 relative w-[5%]">
                                                                            <div className="absolute bg-purple-600_19 bottom-[0] h-3 inset-x-[0] mx-auto rounded-[3px] w-3"></div>
                                                                            <Text
                                                                                className="absolute h-full inset-[0] justify-center m-auto text-[10px] text-purple-600 w-max"
                                                                                size="txtNunitoSemiBold10"
                                                                            >
                                                                                {1 + +ind}
                                                                            </Text>
                                                                        </div>
                                                                        <div className="flex flex-col items-center justify-start  w-[92%]">
                                                                            <div
                                                                                className="bg-gray-200_b2 flex flex-row gap-[15px] items-center justify-start px-4 py-2 rounded-[10px] w-full h-[100px]"
                                                                                onClick={() => {
                                                                                    fetchPdf(j);
                                                                                    setopenpdfmodal(true);
                                                                                }}
                                                                            >
                                                                                <div className="flex flex-col items-center justify-start w-[82%]">
                                                                                    <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                                                                                        <Img
                                                                                            className="h-6 w-6"
                                                                                            src="images/img_file_purple_600.svg"
                                                                                            alt="file"
                                                                                        />
                                                                                        <div className="flex flex-col items-start justify-start">
                                                                                            <Text
                                                                                                className="text-base text-gray-900_01"
                                                                                                size="txtNunitoSemiBold16Gray90001"
                                                                                            >
                                                                                                {j?.refDocName?.length > 15
                                                                                                    ? j?.refDocName?.slice(
                                                                                                        0,
                                                                                                        15
                                                                                                    ) + "..."
                                                                                                    : j?.refDocName}
                                                                                            </Text>
                                                                                            <Text
                                                                                                className="mt-[3px] text-[10px] text-gray-600"
                                                                                                size="txtNunitoRegular10"
                                                                                            >
                                                                                                {/* 178 KB · DRF-6759 */}
                                                                                            </Text>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <Img
                                                                                    className="h-6 w-6"
                                                                                    src="images/img_group89.svg"
                                                                                    alt="groupEightyNine"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                                {/* <div className="flex flex-row gap-2.5 items-center justify-start w-auto">
                          <div className="h-3.5 relative w-[5%]">
                            <div className="absolute bg-purple-600_19 bottom-[0] h-3 inset-x-[0] mx-auto rounded-[3px] w-3"></div>
                            <Text
                              className="absolute h-full inset-[0] justify-center m-auto text-[10px] text-purple-600 w-max"
                              size="txtNunitoSemiBold10"
                            >
                              2
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[94%]">
                            <div className="bg-gray-200_b2 flex flex-row gap-[15px] items-center justify-start px-4 py-2 rounded-[10px] w-auto h-[100px]">
                              <div className="flex flex-col items-center justify-start w-[82%]">
                                <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                                  <Img
                                    className="h-[18px] w-[18px]"
                                    src="images/img_search.svg"
                                    alt="search"
                                  />
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-base text-gray-900_01"
                                      size="txtNunitoSemiBold16Gray90001"
                                    >
                                      Top 10 Ways to...
                                    </Text>
                                    <Text
                                      className="mt-1 text-[10px] text-gray-600"
                                      size="txtNunitoRegular10"
                                    >
                                      WWW.dummylink/xbfh/dbg...
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Img
                                className="h-6 w-6"
                                src="images/img_group89.svg"
                                alt="groupEightyNine"
                              />
                            </div>
                          </div>
                        </div> */}
                                                            </List>
                                                        </div>
                                                    </>
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                                <div className=" fixed bottom-0 w-full h-[60px] bg-slate-50 pr-24">
                                    <Input
                                        name="frameSeven"
                                        placeholder="Ask Us Anything"
                                        className="font-medium p-0 placeholder:text-gray-600 text-base text-left w-full"
                                        wrapClassName=" flex max-w-[1722px] outline outline-[3px] outline-gray-400_4c w-[90%] mb-15"
                                        value={query}
                                        handleChange={(e) => setquery(e.target.value)}
                                        enterClick={getAnswer}
                                        suffix={
                                            <div className="h-6 ml-[35px] w-6 rounded-[1px]">
                                                <FaSearch
                                                    className="h-6 rounded-[1px] my-auto"
                                                    onClick={getAnswer}
                                                />
                                            </div>
                                        }
                                    ></Input>
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
            {openpdfmodal && (
                <div
                    className="absolute float-right z-100 h-[100%] w-[40%] mt-24 bg-neutral-50 border-2 rounded-2xl border-black"
                    style={{ top: "0", right: "0" }}
                >
                    <div className="my-5 mx-3">
                        <Text
                            className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900_01 w-auto inline"
                            size="txtNunitoBold36"
                        ></Text>
                        <button
                            className="float-right"
                            onClick={() => {
                                setopenpdfmodal(false);
                            }}
                        >
                            <FiX />
                        </button>
                        {pdffile && (
                            <>
                                <div>
                                    {+page > 1 && (
                                        <button
                                            type="button"
                                            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                            onClick={() => {
                                                if (+page > 1) {
                                                    setpage(+page - 1);
                                                }
                                            }}
                                        >
                                            prev
                                        </button>
                                    )}
                                    <button className="mx-5">{page}</button>
                                    {numPages?._pdfInfo?.numPages &&
                                        +page < numPages?._pdfInfo?.numPages && (
                                            <button
                                                type="button"
                                                class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                                onClick={() => {
                                                    if (
                                                        numPages?._pdfInfo?.numPages &&
                                                        +page < numPages?._pdfInfo?.numPages
                                                    ) {
                                                        setpage(+page + 1);
                                                    }
                                                }}
                                            >
                                                next
                                            </button>
                                        )}
                                </div>
                                <Document
                                    file={pdffile}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    width={30}
                                    className={"h-[700px] overflow-hidden"}
                                >
                                    <Page pageNumber={+page || 1} width={500} height={700} />
                                </Document>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Search;
