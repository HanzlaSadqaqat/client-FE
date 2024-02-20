import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";
import Sidebar1 from "components/Sidebar1";

const PlatformOverviewPage = () => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      label: (
        <Img
          className="h-9 mt-2.5 text-gray-600 w-9"
          src="images/img_overview.svg"
          alt="overview"
        />
      ),
    },
    {
      label: (
        <Img
          className="h-9 rounded-[5px] w-9"
          src="images/img_folder.svg"
          alt="folder"
        />
      ),
    },
    { label: <Img className="h-9 w-9" src="images/img_file.svg" alt="file" /> },
    {
      label: (
        <Img className="h-9 w-9" src="images/img_report.svg" alt="report" />
      ),
    },
    {
      label: (
        <Img className="h-9 w-9" src="images/img_settings.svg" alt="settings" />
      ),
    },
  ];
  const [groupsevenvalue, setGroupsevenvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-nunito items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar1 className="!sticky !w-24 bg-white-A700 border-gray-100 border-r-2 border-solid flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-3 items-center justify-start mt-9 mx-auto w-[19%]"
              style={{ backgroundImage: "url('images/img_group4.svg')" }}
            >
              {/* <Img
                className="h-3"
                src="images/img_group4.svg"
                alt="megaphone"
              /> */}
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "10px",
                  height: "56px !important",
                  flexDirection: "column",
                  marginTop: "24px",
                  borderRadius: "5px",
                  [`&:hover, &.ps-active`]: {
                    color: "#131d21",
                    backgroundColor: "#f1f1f1ff !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-start mb-[588px] mt-[78px] px-5 w-[59%]"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar1>
          <div className="flex flex-1 flex-col items-center justify-start mt-7 md:px-5 w-full">
            <div className="flex md:flex-col flex-row gap-7 items-start justify-start w-[95%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mb-[3px] w-[90%] md:w-full">
                <Input
                  name="groupSeven"
                  placeholder="Search"
                  value={groupsevenvalue}
                  onChange={(e) => setGroupsevenvalue(e)}
                  className="font-medium p-0 placeholder:text-gray-600 sm:pr-5 text-base text-gray-600 text-left w-full"
                  wrapClassName="bg-white-A700 border border-gray-400 border-solid flex pl-[15px] pr-[35px] py-3 rounded-[10px] sm:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-6 mr-[15px] my-auto"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#7a757c"
                      className="cursor-pointer h-6 my-auto"
                      onClick={() => setGroupsevenvalue("")}
                      style={{
                        visibility:
                          groupsevenvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={24}
                      width={24}
                      viewBox="0 0 24 24"
                    />
                  }
                ></Input>
                <Img
                  className="h-[19px] w-[19px]"
                  src="images/img_group34.svg"
                  alt="groupThirtyFour"
                />
              </div>
              <div className="flex flex-row gap-2 items-start justify-between md:mt-0 mt-1 w-[10%] md:w-full">
                <Button className="bg-purple-600 flex h-[38px] items-center justify-center mb-[9px] p-[9px] rounded-[10px] w-[38px]">
                  <Img
                    className="h-[17px]"
                    src="images/img_lock.svg"
                    alt="lock"
                  />
                </Button>
                <div className="md:h-[41px] h-[35px] mt-[3px] relative w-[72%]">
                  <Text
                    className="absolute left-[0] text-[10px] text-gray-600 top-[0]"
                    size="txtNunitoRegular10"
                  >
                    Welcome,
                  </Text>
                  <div
                    className="absolute bottom-[0] flex flex-row gap-2 inset-x-[0] items-center justify-between mx-auto w-auto"
                    style={{ width: "auto" }}
                  >
                    <Text
                      className="text-gray-900_01 text-sm w-auto"
                      size="txtNunitoSemiBold14"
                    >
                      Krish Bhardwaj
                    </Text>
                    <Img
                      className="h-[3px] w-1.5"
                      src="images/img_group31.svg"
                      alt="groupThirtyOne_One"
                    />
                  </div>
                </div>
              </div>
            </div>
            <Line className="bg-gray-100 h-0.5 mt-5 w-full" />
            <div className="flex flex-col items-start justify-start mt-[49px] w-[95%] md:w-full">
              <Text
                className="text-base text-gray-600"
                size="txtNunitoSemiBold16"
              >
                Quick Actions
              </Text>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start mt-[15px] w-auto md:w-full">
                <List
                  className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-2/5 md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col items-start justify-end p-3.5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[15px] h-[178px] md:h-auto items-start justify-center md:ml-[0] ml-[15px] mt-[15px] w-[179px]">
                      <Button className="bg-purple-600_19 flex h-10 items-center justify-center p-2.5 rounded-lg w-10">
                        <Img
                          className="h-5"
                          src="images/img_profile.svg"
                          alt="profile"
                        />
                      </Button>
                      <Text
                        className="leading-[150.00%] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtNunitoSemiBold24"
                      >
                        <>
                          Health Claims <br />
                          Adjudication
                        </>
                      </Text>
                      <div
                        className="flex flex-row gap-[5px] items-center justify-start w-auto"
                        onClick={() => navigate("/analysis")}
                      >
                        <Text
                          className="text-purple-600 text-sm w-auto"
                          size="txtNunitoRegular14"
                        >
                          Click to get started
                        </Text>
                        <Img
                          className="h-1.5 w-1"
                          src="images/img_vector.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-end p-3.5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[15px] h-[178px] md:h-auto items-start justify-center md:ml-[0] ml-[15px] mt-[15px] w-[158px]">
                      <Button className="bg-purple-600_19 flex h-10 items-center justify-center p-2.5 rounded-lg w-10">
                        <Img
                          className="h-5"
                          src="images/img_profile.svg"
                          alt="profile"
                        />
                      </Button>
                      <Text
                        className="leading-[150.00%] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtNunitoSemiBold24"
                      >
                        <>
                          Business Loan
                          <br />
                          Underwriting{" "}
                        </>
                      </Text>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtNunitoRegular14Gray600"
                        >
                          Click to get started
                        </Text>
                        <Img
                          className="h-1.5 w-1"
                          src="images/img_vector_gray_600.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                  </div>
                </List>
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/5 md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 flex flex-col items-start justify-end p-3.5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[15px] h-[178px] md:h-auto items-start justify-center md:ml-[0] ml-[15px] mt-[15px] w-[186px]">
                      <div className="bg-purple-600_19 flex flex-col items-center justify-start p-[9px] rounded-lg w-1/5 md:w-full">
                        <Img
                          className="h-5"
                          src="images/img_profile.svg"
                          alt="profile"
                        />
                      </div>
                      <Text
                        className="leading-[150.00%] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtNunitoSemiBold24"
                      >
                        <>
                          Health Insurance
                          <br />
                          Underwriting{" "}
                        </>
                      </Text>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtNunitoRegular14Gray600"
                        >
                          Click to get started
                        </Text>
                        <Img
                          className="h-1.5 w-1"
                          src="images/img_vector_gray_600.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-end p-3.5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[15px] h-[178px] md:h-auto items-start justify-center md:ml-[0] ml-[15px] mt-[15px] w-[165px]">
                      <div className="bg-purple-600_19 flex flex-col items-center justify-start p-[9px] rounded-lg w-[22%] md:w-full">
                        <Img
                          className="h-5"
                          src="images/img_profile.svg"
                          alt="profile"
                        />
                      </div>
                      <Text
                        className="leading-[150.00%] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtNunitoSemiBold24"
                      >
                        <>
                          Life Insurance
                          <br />
                          Underwriting{" "}
                        </>
                      </Text>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtNunitoRegular14Gray600"
                        >
                          Click to get started
                        </Text>
                        <Img
                          className="h-1.5 w-1"
                          src="images/img_vector_gray_600.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-center justify-end p-3.5 rounded-[15px] w-full">
                    <div className="flex flex-col gap-[15px] h-[178px] md:h-auto items-start justify-center mt-[15px] w-[241px]">
                      <div className="bg-purple-600_19 flex flex-col items-center justify-start p-[9px] rounded-lg w-[15%] md:w-full">
                        <Img
                          className="h-5"
                          src="images/img_profile.svg"
                          alt="profile"
                        />
                      </div>
                      <Text
                        className="leading-[150.00%] text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtNunitoSemiBold24"
                      >
                        <>
                          Commercial Insurance
                          <br />
                          Underwriting{" "}
                        </>
                      </Text>
                      <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtNunitoRegular14Gray600"
                        >
                          Click to get started
                        </Text>
                        <Img
                          className="h-1.5 w-1"
                          src="images/img_vector_gray_600.svg"
                          alt="vector"
                        />
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start mt-11 w-full">
                <Text
                  className="text-base text-gray-600"
                  size="txtNunitoSemiBold16"
                >
                  Recent Files
                </Text>
                <div className="flex flex-col items-start justify-start max-w-[1723px] w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <List
                      className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 justify-center w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                        <div className="bg-white-A700_b2 border border-blue_gray-50 border-solid flex flex-col items-center justify-start px-4 py-2 rounded-[10px] w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_file_purple_600.svg"
                                alt="file"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-base text-gray-900_02"
                                  size="txtNunitoSemiBold16Gray90002"
                                >
                                  Health Policy
                                </Text>
                                <Text
                                  className="mt-1 text-[10px] text-gray-600"
                                  size="txtNunitoRegular10"
                                >
                                  Last visited 17 min ago
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                        <div className="bg-white-A700_b2 border border-blue_gray-50 border-solid flex flex-col items-center justify-start px-4 py-2 rounded-[10px] w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_file_purple_600.svg"
                                alt="file"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-base text-gray-900_02"
                                  size="txtNunitoSemiBold16Gray90002"
                                >
                                  Diagnosis Report
                                </Text>
                                <Text
                                  className="mt-1 text-[10px] text-gray-600"
                                  size="txtNunitoRegular10"
                                >
                                  Last visited 19 min ago
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                        <div className="bg-white-A700_b2 border border-blue_gray-50 border-solid flex flex-col items-center justify-start px-4 py-2 rounded-[10px] w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_file_purple_600.svg"
                                alt="file"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-base text-gray-900_02"
                                  size="txtNunitoSemiBold16Gray90002"
                                >
                                  Medical Report
                                </Text>
                                <Text
                                  className="mt-1 text-[10px] text-gray-600"
                                  size="txtNunitoRegular10"
                                >
                                  Last visited 19 min ago
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                        <div className="bg-white-A700_b2 border border-blue_gray-50 border-solid flex flex-col items-center justify-start px-4 py-2 rounded-[10px] w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_file_purple_600.svg"
                                alt="file"
                              />
                              <div className="flex flex-col items-center justify-start">
                                <Text
                                  className="text-base text-gray-900_02"
                                  size="txtNunitoSemiBold16Gray90002"
                                >
                                  Property Docs
                                </Text>
                                <Text
                                  className="mt-1 text-[10px] text-gray-600"
                                  size="txtNunitoRegular10"
                                >
                                  Last visited 38 min ago
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                        <div className="bg-white-A700_b2 border border-blue_gray-50 border-solid flex flex-col items-center justify-start px-4 py-2 rounded-[10px] w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_file_purple_600.svg"
                                alt="file"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-base text-gray-900_02"
                                  size="txtNunitoSemiBold16Gray90002"
                                >
                                  Legal Documents
                                </Text>
                                <Text
                                  className="mt-1 text-[10px] text-gray-600"
                                  size="txtNunitoRegular10"
                                >
                                  Last visited 19 min ago
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                        <div className="bg-white-A700_b2 border border-blue_gray-50 border-solid flex flex-col items-center justify-start px-4 py-2 rounded-[10px] w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_file_purple_600.svg"
                                alt="file"
                              />
                              <div className="flex flex-col gap-1.5 items-start justify-start">
                                <Text
                                  className="text-base text-gray-900_02"
                                  size="txtNunitoSemiBold16Gray90002"
                                >
                                  Proof of Incident
                                </Text>
                                <Text
                                  className="text-[10px] text-gray-600"
                                  size="txtNunitoRegular10"
                                >
                                  Last visited 47 min ago
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                        <div className="bg-white-A700_b2 border border-blue_gray-50 border-solid flex flex-col items-center justify-start px-4 py-2 rounded-[10px] w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_file_purple_600.svg"
                                alt="file"
                              />
                              <div className="flex flex-col gap-1.5 items-start justify-start">
                                <Text
                                  className="text-base text-gray-900_02"
                                  size="txtNunitoSemiBold16Gray90002"
                                >
                                  Communication Records
                                </Text>
                                <Text
                                  className="text-[10px] text-gray-600"
                                  size="txtNunitoRegular10"
                                >
                                  Last visited 19 min ago
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                        <div className="bg-white-A700_b2 border border-blue_gray-50 border-solid flex flex-col items-center justify-start px-4 py-2 rounded-[10px] w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_file_purple_600.svg"
                                alt="file"
                              />
                              <div className="flex flex-col gap-1.5 items-start justify-start">
                                <Text
                                  className="text-base text-gray-900_02"
                                  size="txtNunitoSemiBold16Gray90002"
                                >
                                  Business Docs
                                </Text>
                                <Text
                                  className="text-[10px] text-gray-600"
                                  size="txtNunitoRegular10"
                                >
                                  Last visited 1 hr ago
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                    <List
                      className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-2 w-[24%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-white-A700_b2 border border-blue_gray-50 border-solid flex flex-col items-center justify-start px-4 py-2 rounded-[10px] w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_file_purple_600.svg"
                                alt="file"
                              />
                              <div className="flex flex-col items-start justify-start">
                                <Text
                                  className="text-base text-gray-900_02"
                                  size="txtNunitoSemiBold16Gray90002"
                                >
                                  Policy/Quote Docs
                                </Text>
                                <Text
                                  className="mt-1 text-[10px] text-gray-600"
                                  size="txtNunitoRegular10"
                                >
                                  Last visited 38 min ago
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-white-A700_b2 border border-blue_gray-50 border-solid flex flex-col items-center justify-start px-4 py-2 rounded-[10px] w-auto">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-row gap-[15px] items-center justify-start w-auto">
                              <Img
                                className="h-6 w-6"
                                src="images/img_file_purple_600.svg"
                                alt="file"
                              />
                              <div className="flex flex-col gap-[5px] items-start justify-start">
                                <Text
                                  className="text-base text-gray-900_02"
                                  size="txtNunitoSemiBold16Gray90002"
                                >
                                  Proof of Loss
                                </Text>
                                <Text
                                  className="text-[10px] text-gray-600"
                                  size="txtNunitoRegular10"
                                >
                                  Last visited 17 min ago
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
              <Text
                className="mt-[45px] text-base text-gray-600"
                size="txtNunitoSemiBold16"
              >
                FAQ’s
              </Text>
              <div className="border border-gray-100 border-solid flex flex-col gap-4 items-center justify-start mt-[15px] p-[15px] rounded-[12px] w-[31%] md:w-full">
                <List
                  className="flex flex-col gap-[15px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-gray-900_02 text-sm"
                            size="txtNunitoSemiBold14"
                          >
                            Dummy Question Goes Here
                          </Text>
                          <Img
                            className="h-[3px]"
                            src="images/img_vector_gray_600_3x7.svg"
                            alt="vector"
                          />
                        </div>
                        <Line className="bg-gray-100 h-px w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-gray-900_02 text-sm"
                            size="txtNunitoSemiBold14"
                          >
                            Dummy Question Goes Here
                          </Text>
                          <Img
                            className="h-[3px]"
                            src="images/img_vector_gray_600_3x7.svg"
                            alt="vector"
                          />
                        </div>
                        <Line className="bg-gray-100 h-px w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-gray-900_02 text-sm"
                            size="txtNunitoSemiBold14"
                          >
                            Dummy Question Goes Here
                          </Text>
                          <Img
                            className="h-[3px]"
                            src="images/img_vector_gray_600_3x7.svg"
                            alt="vector"
                          />
                        </div>
                        <Line className="bg-gray-100 h-px w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-gray-900_02 text-sm"
                            size="txtNunitoSemiBold14"
                          >
                            Dummy Question Goes Here
                          </Text>
                          <Img
                            className="h-[3px]"
                            src="images/img_vector_gray_600_3x7.svg"
                            alt="vector"
                          />
                        </div>
                        <Line className="bg-gray-100 h-px w-full" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col gap-[15px] items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-between w-full">
                          <Text
                            className="text-gray-900_02 text-sm"
                            size="txtNunitoSemiBold14"
                          >
                            Dummy Question Goes Here
                          </Text>
                          <Img
                            className="h-[3px]"
                            src="images/img_vector_gray_600_3x7.svg"
                            alt="vector"
                          />
                        </div>
                        <Line className="bg-gray-100 h-px w-full" />
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row items-center justify-between w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-gray-900_02 text-sm"
                      size="txtNunitoSemiBold14"
                    >
                      Dummy Question Goes Here
                    </Text>
                  </div>
                  <Img
                    className="h-[3px]"
                    src="images/img_vector_gray_600_3x7.svg"
                    alt="vector"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformOverviewPage;
