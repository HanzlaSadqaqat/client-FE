import { AiOutlineFileDone } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";

export const button = {
  active: 0,
  buttons: ["Underwriting Content", "Agent Log", "Original Document", "Search"],
};

export const summaryButtons = [{ name: 'Customer File', icon: <GoPlus className=" mr-2 text-[24px]" /> }, { name: 'Company File', icon: <GoPlus className=" mr-2 text-[24px]" /> }, { name: 'Submit', icon: <AiOutlineFileDone className=" mr-2 text-[22px]" /> }]
export const searchButtons = [{ name: 'Submit', icon: <AiOutlineFileDone className=" mr-2 text-[22px]" /> }]
export const summary = {
  case_info: {
    case_id: "DRF-789748HFJG5648#",
    created_by: "Krish Bhardwaj",
    created_on: "12:09:45 · 13 June 2024",
    last_edit: "24 Minutes ago",
  },
  customer_detail: {
    client_name: "Aniket Packaging Industries Private Limited.",
    address:
      "GMC Vastu, Flat no 1056, Opp Indica material gate, Chikali road, Purna nagar, Chinchwad, Pune 411019 ,Maharashtra, India",
    l_o_b: "Property / Casualty",
  },
  decision: {
    text: "Your Feedback can really help us provide you with better results. Would you like to contribute? Your Feedback can really help us provide you with better results. Would you like to contribute?",
  },
  smart_summarization: {
    img_path:
      "https://www.superprof.co.uk/blog/wp-content/uploads/2021/11/taking-better-pictures-scaled.jpg",
    sumarization_text:
      "Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    points: [
      "Something Goes Here",
      "Something Very Long Goes In Here",
      "Something Goes Here",
      "Something Even Very Very Long Goes In Here",
      "Something Goes Here",
      "Something Goes Here",
    ],
  },
  add_comment: {},
};


export const claimSumaryDetail = {
  event: 'Event goes here',
  injury: 'Injury 1, Injury 2, Injury 3, Injury 4',
  treatment: 'Treatment Goes Here',
  placeOfTreatment: 'Place Of Treatment Goes Here',
  hospitalName: 'Name Goes Here',
  docSpecilization: 'Specialization Goes Here',
  surgeryDetail: 'Details Go Here Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
}

export const claimSumaryExpense = {
  surgeryExpense: '$4530',
  hospitalExpense: '$894',
  roomExpense: '$324',
  otherExpense: '$23',
  documentationExpense: '$345',
  misellaneousExpense: '$235'
}



export const claimDoc = [
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
  {
    icon: <IoDocumentTextOutline />,
    text: "Layoff Policies",
    select: true,
    size: "176 KB",
  },
  {
    icon: <IoDocumentTextOutline />,
    text: "Financial Report FYI 2023",
    select: false,
    size: "176 KB",
  },
];


export const payableDummy = {
  roomExpense: { value: '$784', select: false },
  surgeryExpense: { value: '$784', select: false },
  medicinalExpense: { value: '$784', select: false },
  documentationExpense: { value: '$784', select: false },
  misellaneousExpense: { value: '$784', select: false },
}
export const paidDummy = {
  roomExpense: { value: '$704', select: false },
  surgeryExpense: { value: '$734', select: false },
  medicinalExpense: { value: '$724', select: false },
  documentationExpense: { value: '$584', select: false },
  misellaneousExpense: { value: '$734', select: false },
}



