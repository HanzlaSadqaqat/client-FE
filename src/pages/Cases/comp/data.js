import React from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { MdDeleteOutline } from "react-icons/md";
import { PiExportBold } from "react-icons/pi";
import { CiShare2 } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { message, Upload } from "antd";
import { IoDocumentTextOutline } from "react-icons/io5";

const columns = [
  { name: "Name", uid: "name" },
  { name: "Upload Date", uid: "uploaded_date" },
  { name: "Case Type", uid: "case_type" },
  { name: "Uploaded By", uid: "uploaded_by" },
  { name: "Document ID", uid: "document_id" },
  { name: "Status", uid: "status" },
  { name: "", uid: "drop_down" },
];

const users = [
  {
    id: 1,
    report: { name: "Marketing Report", last_modification: "12 min" },
    uploaded_date: "03-11-2019",
    case: "Claims",
    uploaded_by: "Krishna",
    document_id: "DRF-6768",
    status: "Processing",
  },
  {
    id: 2,
    report: { name: "Marketing Report", last_modification: "12 min" },
    uploaded_date: "03-11-2019",
    case: "Claims",
    uploaded_by: "Krishna",
    document_id: "DRF-6768",
    status: "Processing",
  },
  {
    id: 3,
    report: { name: "Marketing Report", last_modification: "12 min" },
    uploaded_date: "03-11-2019",
    case: "Claims",
    uploaded_by: "Krishna",
    document_id: "DRF-6768",
    status: "Processing",
  },
  {
    id: 4,
    report: { name: "Marketing Report", last_modification: "12 min" },
    uploaded_date: "03-11-2019",
    case: "Claims",
    uploaded_by: "Krishna",
    document_id: "DRF-6768",
    status: "Processing",
  },
  {
    id: 5,
    report: { name: "Marketing Report", last_modification: "12 min" },
    uploaded_date: "03-11-2019",
    case: "Claims",
    uploaded_by: "Krishna",
    document_id: "DRF-6768",
    status: "Processing",
  },
];

export const items = [
  {
    label: "Delete Case",
    key: "1",
    icon: <MdDeleteOutline />,
  },
  {
    label: "Export Result",
    key: "2",
    icon: <PiExportBold />,
  },
  {
    label: "Share Result",
    key: "3",
    icon: <CiShare2 />,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <CiCircleInfo />,
  },
];

export const props = {
  name: "file",
  multiple: true,
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

export const document = [
  {
    icon: <IoDocumentTextOutline />,
    text: "Business Proposal",
    select: true,
    size: "176 KB",
  },
  {
    icon: <IoDocumentTextOutline />,
    text: "Financial Report FYI 2023",
    select: false,
    size: "176 KB",
  },
  {
    icon: <IoDocumentTextOutline />,
    text: "Layoff Policies",
    select: true,
    size: "176 KB",
  },
  {
    icon: <IoDocumentTextOutline />,
    text: "Legal Compliances",
    select: false,
    size: "176 KB",
  },
  {
    icon: <IoDocumentTextOutline />,
    text: "Sales Report For Last Quarter",
    select: true,
    size: "176 KB",
  },
];

export const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
];

export { columns, users };
