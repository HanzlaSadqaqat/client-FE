import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  getKeyValue,
} from "@nextui-org/react";
import { columns, users } from "./data";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { IoDocumentTextOutline, IoPersonCircleSharp } from "react-icons/io5";
import { IoIosArrowForward, IoMdAttach } from "react-icons/io";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { items } from "./data";
import React, { useState } from "react";
import { Dropdown, Space } from "antd";
export default function TableTab(props) {
  const [hover, setHover] = useState(false);
  const [viewDoc, setViewDoc] = useState(false);
  const handleHoverEnter = () => {
    setHover(true);
  };
  const handleHoverLeave = () => {
    setHover(false);
  };
  return (
    <div
      className={`flex flex-col w-full ${
        viewDoc && "bg-gray-100"
      } hover:bg-gray-100`}
    >
      <tr
        className=" w-full flex justify-between p-1 items-center  border-b-1 p-2"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
      >
        <td className="w-3/12 marketingTab flex flex-col gap-2">
          <div className=" text-[16px] font-medium hover:text-[#8703CA] cursor-pointer flex items-center gap-2">
            {props.case.report.name}{" "}
            {hover && <IoIosArrowForward className="text-xs font-bold" />}
          </div>
          <div className="text-xs text-slate-400 flex gap-1 items-center  cursor-pointer">
            <span className="hover:text-[#8703CA]">
              Last Modified {props.case.report.last_modification} ago
            </span>{" "}
            <span
              className={`flex gap-1 ${
                viewDoc && "text-[#8703CA]"
              } hover:text-[#8703CA]`}
              onClick={() => setViewDoc(!viewDoc)}
            >
              {" "}
              View Document <IoDocumentTextOutline />
            </span>
          </div>
        </td>
        <td className="uploadData flex justify-center w-32">
          <div>02-03-2024</div>
        </td>
        <td className="caseType w-32 flex justify-center">
          <div>cases</div>
        </td>
        <td className="uploadedBy w-32 flex justify-center items-center gap-1">
          <IoPersonCircleSharp className="text-3xl text-[#8703CA]" />
          <div>Krishna</div>
        </td>
        <td className="documentId w-32 flex justify-center">
          <div>DEF-234</div>
        </td>
        <td className="status w-32 flex justify-center">
          <Chip
            className="relative flex items-center gap-2 bg-gray-200"
            radius="sm"
          >
            <div className="text-[11px]">Processing</div>
          </Chip>
        </td>
        <td className="status w-14">
          <div>
            {/* <Space> */}
            <Dropdown
              menu={{ items }}
              // onClick={handleButtonClick}
              placement="bottomLeft"
              arrow={{
                pointAtCenter: true,
              }}
            >
              <HiOutlineDotsVertical />
            </Dropdown>
            {/* </Space> */}
          </div>
        </td>
      </tr>
      {viewDoc && (
        <div className="  w-full flex flex-col p-3  hover:bg-gray-100 border-b-1">
          <div className="flex gap-1 items-center ">
            <IoMdAttach className="text-[#8703CA]" />
            <span>Business Proposal.PDF</span>
          </div>
          <div className="flex gap-1 items-center ">
            <IoMdAttach className="text-[#8703CA]" />
            <span>Business Proposal.PDF</span>
          </div>
          <div className="flex gap-1 items-center ">
            <IoMdAttach className="text-[#8703CA]" />
            <span>Business Proposal.PDF</span>
          </div>
        </div>
      )}
    </div>
  );

  // const renderCell = React.useCallback((user, columnKey) => {
  //   const cellValue = user[columnKey];
  //   switch (columnKey) {
  //     case "name":
  //       return (
  //         <div className="flex flex-col gap-2">
  // <div className=" text-[16px] font-medium ">{user.report.name}</div>
  // <div className="text-xs text-slate-400 flex gap-2 items-center hover:text-red-300">
  //   Last Modified {user.report.last_modification} ago . View Document{" "}
  //   <IoDocumentTextOutline />
  // </div>
  //         </div>
  //       );
  //     case "uploaded_date":
  //       return <div className="flex flex-col">{user.uploaded_date}</div>;
  //     case "case_type":
  //       return <div>{user.case}</div>;
  //     case "uploaded_by":
  //       return (
  //         <div className="relative flex items-center gap-2">
  //           <IoPersonCircleSharp className="text-3xl text-[#8703CA]" />
  //           {user.uploaded_by}
  //         </div>
  //       );
  //     case "document_id":
  //       return (
  //         <div className="relative flex items-center gap-2">
  //           {user.document_id}
  //         </div>
  //       );
  //     case "status":
  //       return (
  //         <Chip
  //           className="relative flex items-center gap-2 bg-gray-100"
  //           radius="sm"
  //         >
  //           <div className="text-[11px]">{user.status}</div>
  //         </Chip>
  //       );
  //     case "drop_down":
  //       return (
  //         <div>
  //           <BsThreeDotsVertical />
  //         </div>
  //       );
  //     default:
  //       return cellValue;
  //   }
  // }, []);
  // return (
  //   <div className="w-full mt-5 bg-gray-50">
  //     <Table
  //       aria-label="Example table with custom cells"
  //       className=""
  //       shadow="none"
  //       // bgcolor="primary"
  //     >
  //       <TableHeader columns={columns} className="">
  //         {(column) => (
  //           <TableColumn
  //             key={column.uid}
  //             align={column.uid === "actions" ? "center" : "start"}
  //             className="bg-gray-50"
  //           >
  //             {column.name}
  //           </TableColumn>
  //         )}
  //       </TableHeader>
  //       <TableBody items={users}>
  //         {(item) => (
  //           <TableRow
  //             key={item.id}
  //             className="border-b-1 cursor-pointer hover:bg-[#f9f2fc] hover:text-red-400"
  //           >
  //             {(columnKey) => (
  //               <TableCell>{renderCell(item, columnKey)}</TableCell>
  //             )}
  //           </TableRow>
  //         )}
  //       </TableBody>
  //     </Table>
  //   </div>
  // );
}
