import React, { useState, useEffect } from "react";
import { Dropzone, FileMosaic } from "@dropzone-ui/react";
import { saveAs } from "file-saver";
import { FiX } from "react-icons/fi";
import axios from "axios";
import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";
import { Document, Page, pdfjs } from "react-pdf";
import { Button, Img, Line, Text, Casename, Bar } from "components";
import Sidebar1 from "components/Sidebar1";
import { handleAlert } from "utils";

const DocumentsPage = ({ casename, setcasename }) => {
  const navigate = useNavigate();
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [files, setFiles] = React.useState([]);
  const [openFilemodal, setopenFilemodal] = useState(false);
  const [page, setpage] = useState(1);
  const [allpdf, setallpdf] = useState([]);
  const [selected, setselected] = useState(null);
  const [pdffile, setpdffile] = useState(null);

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
    const formData = new FormData();
    const data = [];
    // files.forEach((file) => {
    //   console.log(1111);
    //   data.push(file.file);
    // });
    console.log(process.env.CWD);
    files.forEach((file, index) => {
      formData.append(`files`, file.file);
    });
    // formData.append("files", JSON.stringify(data));
    console.log(data);
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
        console.log(res.data.company_files);
      });
    console.log(files);
  };
  function onDocumentLoadSuccess(numPages) {
    console.log(numPages._pdfInfo.numPages);
    setNumPages(numPages);
  }

  useEffect(() => {
    try {
      axios
        .get("http://localhost:8000/get-all-files-paths")
        .then(({ data }) => {
          setallpdf(data?.company_files?.concat(data?.customer_files));
        })
        .catch(() => {
          handleAlert("error", "unable to fetch documents");
        });
    } catch (error) {
      handleAlert("error", "unable to fetch documents");
    }
  }, []);

  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  });

  const fetchPdf = async (i) => {
    try {
      console.log(selected?.documentId);
      const response = await axios.get(
        `http://localhost:8000/get-pdf/${i?.documentId}`,
        { responseType: "blob" }
      );
      setpage(+localStorage.getItem(i?.documentId) || 1);
      setpdffile(URL.createObjectURL(response.data));
    } catch (error) {
      console.error("Error fetching PDF", error);
    }
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-nunito items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-24 bg-white-A700 border-gray-100 border-r-2 border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col items-center justify-start md:mt-0 mt-7 md:px-5 w-full">
            <Bar />
            <Line className="bg-gray-100 h-0.5 mt-5 w-full" />
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
              <div className="flex md:flex-col flex-row gap-[18px] items-start justify-start w-auto md:w-full">
                <Button
                  className="common-pointer cursor-pointer h-[42px] min-w-[142px] text-center text-sm"
                  onClick={() => navigate("/analysis")}
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
                  className="!text-gray-900 border-2 border-purple-600 border-solid cursor-pointer font-semibold h-[42px] text-center text-sm w-[150px]"
                  shape="round"
                  color="gray_200_b2"
                  variant="fill"
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
              </div>
              <div className="flex md:flex-col flex-row gap-9 items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[509px] justify-start w-[32%] md:w-full">
                  <div className="md:h-[226px] h-[227px] relative w-full">
                    {/* <div className="bg-gray-100_01 h-[75px] m-auto w-full"></div> */}
                    <div className="  border border-gray-100 border-solid flex flex-col h-full inset-[0] items-center  m-auto py-2.5 rounded-[12px] w-full h-[700px] overflow-scroll">
                      {allpdf?.map((i) => (
                        <div
                          className={`flex flex-col items-center justify-start w-full ${
                            i?.documentId === selected?.documentId &&
                            "bg-gray-100_01"
                          } my-1 py-4`}
                          onClick={() => {
                            setselected(i);
                            fetchPdf(i);
                          }}
                        >
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-2 items-center justify-start w-full">
                              <div className="flex flex-row items-center justify-between w-[96%] md:w-full">
                                <div className="flex flex-col items-center justify-start">
                                  <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                                    <Img
                                      className="h-6 w-6"
                                      src="images/img_file_gray_900.svg"
                                      alt="file_One"
                                    />
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="text-base text-gray-900"
                                        size="txtNunitoSemiBold16Gray900"
                                      >
                                        {i?.documentName}
                                      </Text>
                                      <Text
                                        className="mt-[3px] text-[10px] text-gray-600"
                                        size="txtNunitoRegular10"
                                      >
                                        237 KB
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <Img
                                  className="h-3"
                                  src="images/img_thumbsup_gray_600.svg"
                                  alt="thumbsup"
                                />
                              </div>
                              <Line className="bg-gray-100 h-px w-full" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient  h-[52px] ml-96 md:ml-[0] rotate-[-90deg] w-[21%]"></div>
                </div>
                {selected?.documentId && (
                  <div className="flex md:flex-1 md:flex-col flex-col gap-6 items-center justify-center w-[47%] md:w-full h-[700px]">
                    <div>
                      {page > 1 && (
                        <button
                          type="button"
                          class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                          onClick={() => {
                            if (page > 1) {
                              localStorage.setItem(
                                selected?.documentId,
                                page - 1
                              );
                              setpage(page - 1);
                            }
                          }}
                        >
                          prev
                        </button>
                      )}
                      <button className="mx-5">{page}</button>
                      {numPages?._pdfInfo?.numPages &&
                        page < numPages?._pdfInfo?.numPages && (
                          <button
                            type="button"
                            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                            onClick={() => {
                              if (
                                numPages?._pdfInfo?.numPages &&
                                page < numPages?._pdfInfo?.numPages
                              ) {
                                localStorage.setItem(
                                  selected?.documentId,
                                  page + 1
                                );
                                setpage(page + 1);
                              }
                            }}
                          >
                            next
                          </button>
                        )}
                    </div>
                    {console.log("http://localhost:8000/static/${selected}")}
                    <Document
                      file={pdffile}
                      onLoadSuccess={onDocumentLoadSuccess}
                      width={30}
                      className={"h-[700px] overflow-hidden"}
                    >
                      <Page pageNumber={page} width={500} height={700} />
                    </Document>
                  </div>
                )}
                <div className="bg-white-A700 border-2 border-gray-100 border-solid flex md:flex-1 flex-col items-start justify-end mb-[743px] p-3.5 rounded-[15px] w-[18%] md:w-full">
                  <div className="flex flex-col gap-[15px] h-[178px] md:h-auto items-start justify-center md:ml-[0] ml-[15px] mt-[15px] w-[230px]">
                    <Button
                      className="flex h-10 items-center justify-center rounded-lg w-10"
                      shape="round"
                      color="purple_600_19"
                      variant="fill"
                    >
                      <Img
                        src="images/img_file_purple_600_40x40.svg"
                        alt="file_Four"
                      />
                    </Button>
                    <Text
                      className="leading-[150.00%] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                      size="txtNunitoSemiBold24"
                    >
                      <>
                        Ask Anything About <br />
                        Your Case{" "}
                      </>
                    </Text>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <Text
                        className="text-purple-600 text-sm w-auto"
                        size="txtNunitoRegular14Purple600"
                        onClick={() => navigate("/searchrag")}
                      >
                        Click here
                      </Text>
                      <Img
                        className="h-1.5 w-1"
                        src="images/img_vector.svg"
                        alt="vector"
                      />
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

export default DocumentsPage;
