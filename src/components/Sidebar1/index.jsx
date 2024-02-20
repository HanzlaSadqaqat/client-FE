import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import { Img } from "components";
import { useNavigate } from "react-router-dom";

const Sidebar1 = (props) => {
  const navigate = useNavigate();

  const sideBarMenu = [
    {
      label: (
        <Img className="h-9 w-9" src="images/img_overview.svg" alt="overview" />
      ),
      url: "/",
    },
    {
      label: (
        <Img
          className="h-9 mt-2.5 rounded-[5px] text-gray-600 w-9"
          src="images/img_folder.svg"
          alt="folder"
        />
      ),
      url: "/cases",
    },
    { label: <Img className="h-9 w-9" src="images/img_file.svg" alt="file" /> },
    {
      label: (
        <Img className="h-9 w-9" src="images/img_report.svg" alt="report" />
      ),
    },
    {
      label: (
        <Img
          className="h-9 w-9"
          src="images/img_settings_gray_600.svg"
          alt="settings"
        />
      ),
    },
  ];

  return (
    <>
      <Sidebar className={props.className}>
        <Img
          className="h-3 mt-9 mx-auto"
          src="images/img_megaphone.svg"
          alt="megaphone"
        />
        <Menu
          menuItemStyles={{
            button: {
              padding: "10px",
              height: "56px !important",
              flexDirection: "column",
              marginTop: "14px",
              borderRadius: "5px",
              [`&:hover, &.ps-active`]: {
                color: "#131d21",
                backgroundColor: "#f1f1f1ff !important",
              },
            },
          }}
          className="flex flex-col items-center justify-start mt-[88px] px-5 w-[59%] "
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem
              key={`sideBarMenuItem${i}`}
              {...menu}
              onClick={() => {
                navigate(menu.url || "/404");
              }}
            >
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
