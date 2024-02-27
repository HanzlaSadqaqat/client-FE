import { FaChevronDown, FaChevronUp, FaPlus, FaRegCreditCard, FaRegEdit } from "react-icons/fa";
import { Button, Icon, Text } from "../../../components";
import React, { useEffect, useState } from "react";
import { IoDocumentTextOutline, IoSaveOutline } from "react-icons/io5";
import { TbCircleNumber1 } from "react-icons/tb";
import { CircularProgress } from "@nextui-org/react";
import { Card, Input, Progress } from "antd";
import { FaRegCircleCheck } from "react-icons/fa6";

import { claimDoc, claimSumaryDetail, claimSumaryExpense, paidDummy, payableDummy } from "./data";
import { MdDeleteOutline } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";

const items = [
  "Claim Summary", "Rules & Questions", "Adjudication Summary"
]

export default function ClaimAnalysis() {
  const [detailsection, setdetailsection] = useState(0);

  return (
    <>
      <div className="w-full">
        <div className="flex flex-row gap-5 items-center justify-start w-[90%] md:w-full">
          {
            items.map((item, index) => (
              <Text
                className={
                  detailsection === index
                    ? "text-purple-600 text-sm underline underline-offset-8 cursor-pointer"
                    : "text-gray-600 text-sm w-auto cursor-pointer"
                }
                size="txtNunitoSemiBold14Gray600"
                onClick={() => setdetailsection(index)}
              >
                {item}
              </Text>
            ))
          }


        </div>
        <div className="mt-5">
          {detailsection === 0 ? (
            <ClaimSummary />
          ) : detailsection === 1 ? (
            <RulesQuestion />
          ) : (
            <Adjudication />
          )}
        </div>
      </div>
    </>
  );
}


////////////////////////////////////// CLAIM SUMMARY


const ClaimSummary = () => {
  const [detail, setDetail] = useState({ ...claimSumaryDetail })
  const [expense, setExpense] = useState({ ...claimSumaryExpense })
  const [detailEdit, setDetailEdit] = useState(true)
  const [injury, setInjury] = useState({ value: claimSumaryDetail.injury, select: false })
  const [place, setPlace] = useState({ value: claimSumaryDetail.placeOfTreatment, select: false })
  const [docSpecialization, setDocSpecialization] = useState({ value: claimSumaryDetail.docSpecilization, select: false })
  const [surgeryDetail, setSurgeryDetail] = useState({ value: claimSumaryDetail.surgeryDetail, select: false })



  const handleDiscard = () => {
    setDetail({ ...claimSumaryDetail })
    setInjury({ value: claimSumaryDetail.injury, select: false })
    setPlace({ ...place, value: claimSumaryDetail.placeOfTreatment })

    setDocSpecialization({ ...docSpecialization, value: claimSumaryDetail.docSpecilization, })
    setSurgeryDetail({ ...surgeryDetail, value: claimSumaryDetail.surgeryDetail, })
    setDetailEdit(false)
  }
  const handleSave = () => {
    setDetail({
      ...detail,
      injury: injury.value,
      placeOfTreatment: place.value,
      docSpecilization: docSpecialization.value,
      surgeryDetail: surgeryDetail.value
    })


    setDetailEdit(false)

  }
  return (
    <>
      <div className="flex flex-col gap-5">
        {/* Starting Paragraph */}
        <div className="flex flex-col blue_gray_50">

          <div>
            <Text
              className="leading-[150.00%] w-full max-w-[1216px] md:max-w-full text-base text-black-900  text-justify"
              size="txtNunitoRegular16"
            >
              <>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam.{" "}
              </>
            </Text>
            <Icon />
          </div>

        </div>

        {/* Details Section */}

        <Card
          size="small"
          className={`${detailEdit ? 'border-purple-300' : 'border-gray-200'}`}
          title={<span className="flex gap-1 items-center py-5"><IoDocumentTextOutline className="text-purple-600" /> Details</span>}
          extra={detailEdit ? <span className="flex gap-2">
            <Button leftIcon={<MdDeleteOutline />} onClick={handleDiscard} size="sm" className="flex h-4/5 gap-1 p-2 rounded-lg text-[11px]" children={'Discard'} color="blue_gray_50" variant="fill"></Button>
            <Button leftIcon={<IoSaveOutline />} onClick={handleSave} size="sm" className="flex h-4/5 gap-1 p-2 rounded-lg text-[11px]" children={'Save'} color="purple_600" variant="fill"></Button>
          </span> : <FaRegEdit onClick={() => setDetailEdit(true)} />}
        >
          <div className="">

            <div className="flex flex-col gap-3 border-b-1 pb-4">
              <div className="SIMPLE-TEXT flex gap-2 items-center">
                <span className={`${detailEdit ? 'text-gray-400' : 'text-gray-900'} font-semibold text-[14px]`}>Event: </span>

                <span className={`${detailEdit ? 'text-gray-400' : 'text-gray-500'}  text-[14px]`}>Event goes here</span>
                <span>
                </span>

              </div>
              <div className="EDIT-ABLE flex gap-2 ">
                <span className={`${detailEdit ? 'text-purple-600' : 'text-gray-900'} font-semibold text-[14px]`}>Injury: </span>

                <span className="text-gray-500  text-[14px] flex gap-2 items-center">
                  {
                    detailEdit ? (<>
                      <input
                        type="text"
                        value={injury.value}
                        onChange={(e) => setInjury({ select: true, value: e.target.value })}
                        class="border-b-2 h-5 pl-0 border-white-A700 border-b-purple-400 focus:border-b-purple-600  focus:border-gray-50 outline-none text-[12px]"
                      />
                      {
                        injury.select ? (<>
                          <FaRegCircleCheck className="text-purple-600 font-bold" onClick={() => setInjury({ ...injury, select: false })} />
                          <RxCrossCircled onClick={() => setInjury({ value: claimSumaryDetail.injury, select: false })} />
                        </>) : (<></>)
                      }
                    </>) : (<span className="text-gray-500  text-[14px]">{detail.injury}</span>
                    )
                  }

                </span>

              </div>
              <div className="SIMPLE-TEXT flex gap-2 items-center">
                <span className={`${detailEdit ? 'text-gray-400' : 'text-gray-900'} font-semibold text-[14px]`}>Body Part: </span>

                <span className={`${detailEdit ? 'text-gray-400' : 'text-gray-500'}  text-[14px]`}>Part 1, Part 2</span>
                <span>
                </span>

              </div>
              <div className="SIMPLE-TEXT flex gap-2 items-center">
                <span className={`${detailEdit ? 'text-gray-400' : 'text-gray-900'} font-semibold text-[14px]`}>Treatment: </span>

                <span className={`${detailEdit ? 'text-gray-400' : 'text-gray-500'}  text-[14px]`}>Treatment Goes Here</span>
                <span>
                </span>

              </div>
              <div className="EDIT-ABLE flex gap-2 ">
                <span className={`${detailEdit ? 'text-purple-600' : 'text-gray-900'} font-semibold text-[14px]`}>Place Of Treatment: </span>

                <span className="text-gray-500  text-[14px] flex gap-2 items-center">
                  {
                    detailEdit ? (<>
                      <input
                        type="text"
                        value={place.value}
                        onChange={(e) => setPlace({ select: true, value: e.target.value })}
                        class="border-b-2 h-5 pl-0 border-white-A700 border-b-purple-400 focus:border-b-purple-600  focus:border-gray-50 outline-none text-[12px]"
                      />
                      {
                        place.select ? (<>
                          <FaRegCircleCheck className="text-purple-600 font-bold" onClick={() => setPlace({ ...place, select: false })} />
                          <RxCrossCircled onClick={() => setPlace({ value: claimSumaryDetail.placeOfTreatment, select: false })} />
                        </>) : (<></>)
                      }
                    </>) : (<span className="text-gray-500  text-[14px]">{detail.placeOfTreatment}</span>
                    )
                  }

                </span>

              </div>
              <div className="SIMPLE-TEXT flex gap-2 items-center">
                <span className={`${detailEdit ? 'text-gray-400' : 'text-gray-900'} font-semibold text-[14px]`}>Hospital Name: </span>

                <span className={`${detailEdit ? 'text-gray-400' : 'text-gray-500'}  text-[14px]`}>Name Goes Here</span>
                <span>
                </span>

              </div>
              <div className="EDIT-ABLE flex gap-2 ">
                <span className={`${detailEdit ? 'text-purple-600' : 'text-gray-900'} font-semibold text-[14px]`}>Doc’s Specialization: </span>

                <span className="text-gray-500  text-[14px] flex gap-2 items-center">
                  {
                    detailEdit ? (<>
                      <input
                        type="text"
                        value={docSpecialization.value}
                        onChange={(e) => setDocSpecialization({ select: true, value: e.target.value })}
                        class="border-b-2 h-5 pl-0 border-white-A700 border-b-purple-400 focus:border-b-purple-600  focus:border-gray-50 outline-none text-[12px]"
                      />
                      {
                        docSpecialization.select ? (<>
                          <FaRegCircleCheck className="text-purple-600 font-bold" onClick={() => setDocSpecialization({ ...docSpecialization, select: false })} />
                          <RxCrossCircled onClick={() => setDocSpecialization({ value: claimSumaryDetail.docSpecilization, select: false })} />
                        </>) : (<></>)
                      }
                    </>) : (<span className="text-gray-500  text-[14px]">{detail.docSpecilization}</span>
                    )
                  }

                </span>

              </div>
              <div className="EDIT-ABLE flex gap-2 ">
                <span className={`${detailEdit ? 'text-purple-600' : 'text-gray-900'} font-semibold text-[14px]`}>Surgery Details: </span>

                <span className="text-gray-500  text-[14px] flex gap-2 items-center">
                  {
                    detailEdit ? (<>
                      <input
                        type="text"
                        value={surgeryDetail.value}
                        onChange={(e) => setSurgeryDetail({ select: true, value: e.target.value })}
                        class="border-b-2 h-5 pl-0 border-white-A700 border-b-purple-400 focus:border-b-purple-600  focus:border-gray-50 outline-none text-[12px]"
                      />
                      {
                        surgeryDetail.select ? (<>
                          <FaRegCircleCheck className="text-purple-600 font-bold" onClick={() => setSurgeryDetail({ ...surgeryDetail, select: false })} />
                          <RxCrossCircled onClick={() => setSurgeryDetail({ value: claimSumaryDetail.surgeryDetail, select: false })} />
                        </>) : (<></>)
                      }
                    </>) : (<span className="text-gray-500  text-[14px]">{detail.surgeryDetail}</span>
                    )
                  }

                </span>

              </div>
            </div>
            <div className="flex flex-col gap-3 border-b-1 pb-4 pt-4">
              <div className="SIMPLE-TEXT flex gap-2 items-center">
                <span className={`text-gray-900 font-semibold text-[14px]`}>Surgery Expenses: </span>
                <span className={`text-purple-600 text-[14px] font-semibold`}>{expense.surgeryExpense}</span>
                <span>
                </span>

              </div>
              <div className="SIMPLE-TEXT flex gap-2 items-center">
                <span className={`text-gray-900 font-semibold text-[14px]`}>Hospital Expenses: </span>
                <span className={`text-purple-600 text-[14px] font-semibold`}>{expense.hospitalExpense}</span>
                <span>
                </span>

              </div>
              <div className="SIMPLE-TEXT flex gap-2 items-center">
                <span className={`text-gray-900 font-semibold text-[14px]`}>Room Expenses: </span>
                <span className={`text-purple-600 text-[14px] font-semibold`}>{expense.roomExpense}</span>
                <span>
                </span>

              </div>
              <div className="SIMPLE-TEXT flex gap-2 items-center">
                <span className={`text-gray-900 font-semibold text-[14px]`}>Other Expenses: </span>
                <span className={`text-purple-600 text-[14px] font-semibold`}>{expense.otherExpense}</span>
                <span>
                </span>

              </div>
              <div className="SIMPLE-TEXT flex gap-2 items-center">
                <span className={`text-gray-900 font-semibold text-[14px]`}>Surgery Expenses: </span>
                <span className={`text-purple-600 text-[14px] font-semibold`}>{expense.surgeryExpense}</span>
                <span>
                </span>

              </div>
            </div>
            <div className="flex flex-col gap-3 pt-4">
              <div className="SIMPLE-TEXT flex gap-2 items-center">
                <span className={`text-purple-600 font-semibold text-[20px]`}>Total Expenses: </span>
                <span className={`text-purple-600 text-[20px] font-semibold`}>{expense.surgeryExpense}</span>
                <span>
                </span>
              </div>
            </div>
          </div>

        </Card>
        {/* Document Submitted */}
        <Card
          size="small"
          className="border-gray-200"
          title={<span className="flex gap-1 items-center"><IoDocumentTextOutline className="text-purple-600" /> Documents Submitted:</span>}
        >
          <div className="flex gap-2 flex-wrap">
            {
              claimDoc.map((doc) => <div className={`flex gap-3 rounded-lg items-center border-2 ${doc.select && 'border-purple-400'} border-dashed w-fit p-2`}>
                <div>
                  {doc.icon}
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px]">{doc.text}</span>
                  <span className="text-[9px] text-gray-500">{doc.size}</span>
                </div>
              </div>)
            }
          </div>
          <Button
            children={'Download Files'}
            className="mt-5"
            color="purple_600"
            variant="fill"
            shape="round"
          />
        </Card>
      </div>
    </>
  );
};

////////////////////////////////////// RULES QUESTION

const RulesQuestion = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        {/* Complexity and Fraud Score */}
        <div className="flex gap-3 w-full">
          <Card title={<span className="flex gap-1 items-center"><IoDocumentTextOutline className="text-purple-600" /> Complexity Score</span>} className="border-gray-200 w-full" >
            <p className="w-full h-40 rounded-xl flex justify-center items-center bg-[#C4C4C4]">Card content</p>

          </Card>
          <Card title={<span className="flex gap-1 items-center"><IoDocumentTextOutline className="text-purple-600" /> Fraud Score</span>} className="border-gray-200 w-full " >
            <p className="w-full h-40 rounded-xl flex justify-center items-center bg-[#C4C4C4]">Fraud Score</p>
          </Card>
        </div>
        {/* General Checkpoints */}
        <div>
          <Card extra={<p className="text-[#7A757C] flex gap-1">Total Score:<span className="text-[#8703CA]">89</span></p>} title={<span className="flex gap-1 items-center"><IoDocumentTextOutline className={"text-purple-600"} />General Checkpoints</span>} className="border-gray-200 w-full " >
            <div className="flex flex-col gap-4">

              <div>
                <p className="font-semibold text-[14px] ">1. Is Patient’s age less that 45 years?</p>
                <p className="flex gap-3 items-center mt-4 font-medium text-[#7A757C]">
                  <span>Selection:</span>
                  <span className="flex gap-2">
                    <Button
                      children={'Yes'}
                      color="purple_600"
                      shape="round"
                      className="text-[12px] px-4 py-1"
                      variant="fill"
                    />
                    <Button
                      children={'No'}
                      color="gray_200"
                      shape="round"
                      className="text-[12px] px-4 py-1"
                      variant="fill"
                    />
                  </span>
                </p>
              </div>
              <div>
                <p className="font-semibold text-[14px] ">2. Does patient suffer from any type of existing cognitive illness/disorder?</p>
                <p className="flex gap-3 items-center mt-4 font-medium text-[#7A757C]">
                  <span>Selection:</span>
                  <span className="flex gap-2">
                    <Button
                      children={'Yes'}
                      color="purple_600"
                      shape="round"
                      className="text-[12px] px-4 py-1"
                      variant="fill"
                    />
                    <Button
                      children={'No'}
                      color="gray_200"
                      shape="round"
                      className="text-[12px] px-4 py-1"
                      variant="fill"
                    />
                  </span>
                </p>
              </div>
              <div>
                <p className="font-semibold text-[14px] ">1. Is Patient’s age less that 45 years?</p>
                <p className="flex gap-3 items-center mt-4 font-medium text-[#7A757C]">
                  <span>Selection:</span>
                  <span className="flex gap-2">
                    <Button
                      children={'Yes'}
                      color="purple_600"
                      shape="round"
                      className="text-[12px] px-4 py-1"
                      variant="fill"
                    />
                    <Button
                      children={'No'}
                      color="gray_200"
                      shape="round"
                      className="text-[12px] px-4 py-1"
                      variant="fill"
                    />
                  </span>
                </p>
              </div>
              <div>
                <p className="font-semibold text-[14px] ">1. Is Patient’s age less that 45 years?</p>
                <p className="flex gap-3 items-center mt-4 font-medium text-[#7A757C]">
                  <span>Selection:</span>
                  <span className="flex gap-2">
                    <Button
                      children={'Yes'}
                      color="purple_600"
                      shape="round"
                      className="text-[12px] px-4 py-1"
                      variant="fill"
                    />
                    <Button
                      children={'No'}
                      color="gray_200"
                      shape="round"
                      className="text-[12px] px-4 py-1"
                      variant="fill"
                    />
                  </span>
                </p>
              </div>
            </div>
          </Card>
        </div>
        {/* Questionnaire */}
        <div>
          <Card extra={<p className="text-[#7A757C] flex gap-1">Total Score:<span className="text-[#8703CA]">89</span></p>} title={<span className="flex gap-1 items-center"><IoDocumentTextOutline className={"text-purple-600"} />Questionnaire</span>} className="border-gray-200 w-full " >
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold text-[14px] ">1. Is the treatment covered?</p>
                <p className="flex gap-3 items-center mt-4 font-medium text-[#7A757C]">
                  <Input placeholder="Enter Your Choice Here" className="border-1 border-gray-300 focus:border-purple-600 rounded-lg hover:border-purple-600" />
                </p>
              </div>
              <div>
                <p className="font-semibold text-[14px] ">1. Are there any excluded surgeries?</p>
                <p className="flex gap-3 items-center mt-4 font-medium text-[#7A757C]">
                  <Input placeholder="Enter Your Choice Here" className="border-1 border-gray-300 focus:border-purple-600 rounded-lg hover:border-purple-600" />
                </p>
              </div>
              <div>
                <p className="font-semibold text-[14px] ">1. Is the room rent covered under policy?</p>
                <p className="flex gap-3 items-center mt-4 font-medium text-[#7A757C]">
                  <Input placeholder="Enter Your Choice Here" className="border-1 border-gray-300 focus:border-purple-600 rounded-lg hover:border-purple-600" />
                </p>
              </div>

            </div>
          </Card>
        </div>
        {/* AI Generated Questionnaire */}
        <div>
          <Card extra={<p className="text-[#7A757C] flex gap-1">Total Score:<span className="text-[#8703CA]">89</span></p>} title={<span className="flex gap-1 items-center"><IoDocumentTextOutline className={"text-purple-600"} />AI Generated Questionnaire</span>} className="border-gray-200 w-full " >
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold text-[14px] ">1. Is the treatment covered?</p>
                <p className="flex gap-3 items-center mt-4 font-medium text-[#7A757C]">
                  <Input placeholder="Enter Your Choice Here" className="border-1 border-gray-300 focus:border-purple-600 rounded-lg hover:border-purple-600" />
                </p>
              </div>
              <div>
                <p className="font-semibold text-[14px] ">1. Are there any excluded surgeries?</p>
                <p className="flex gap-3 items-center mt-4 font-medium text-[#7A757C]">
                  <Input placeholder="Enter Your Choice Here" className="border-1 border-gray-300 focus:border-purple-600 rounded-lg hover:border-purple-600" />
                </p>
              </div>
              <div>
                <p className="font-semibold text-[14px] ">1. Is the room rent covered under policy?</p>
                <p className="flex gap-3 items-center mt-4 font-medium text-[#7A757C]">
                  <Input placeholder="Enter Your Choice Here" className="border-1 border-gray-300 focus:border-purple-600 rounded-lg hover:border-purple-600" />
                </p>
              </div>

            </div>


            <div className="pt-4 mt-4 flex flex-col gap-3 border-t-2">
              <div className={`flex gap-3 rounded-lg items-center border-2 p-3 border-dashed text-[#C8C6C9] font-medium`} >
                <div>
                  <FiPlus />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px]">Suggestion Question 1</span>
                </div>
              </div>
              <div className={`flex gap-3 rounded-lg items-center border-2 p-3 border-dashed text-[#C8C6C9] font-medium border-purple-400`} >
                <div>
                  <FiPlus />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px]">Suggestion Question 2</span>
                </div>
              </div>
              <div className={`flex gap-3 rounded-lg items-center border-2 p-3 border-dashed text-[#C8C6C9] font-medium`} >
                <div>
                  <FiPlus />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[14px]">Suggestion Question 3</span>
                </div>
              </div>
              <div>
                <Button
                  children={"Add To Questionnaire"}
                  color="purple_600"
                  variant="fill"
                  shape="round"
                />
              </div>
            </div>

          </Card>

        </div>


      </div>
    </>
  );
};


////////////////////////////////////// ADJUDICATION

const Adjudication = () => {
  const [payable, setPayable] = useState(payableDummy)
  const [editPayable, setEditPayable] = useState(false)
  const [paid, setPaid] = useState(paidDummy)
  const [editPaid, setEditPaid] = useState(false)
  ////// Payable State:
  const [payableRoom, setPayableRoom] = useState(payableDummy.roomExpense)
  const [payableSurgery, setPayableSurgery] = useState(payableDummy.surgeryExpense)
  const [payableMedicinal, setPayableMedicinal] = useState(payableDummy.medicinalExpense)
  const [payableDocumentation, setPayableDocumentation] = useState(payableDummy.documentationExpense)
  const [payableMiscellaneous, setPayableMiscellaneous] = useState(payableDummy.misellaneousExpense)

  ////// Paidable States
  const [paidRoom, setPaidRoom] = useState(paidDummy.roomExpense)
  const [paidSurgery, setPaidSurgery] = useState(paidDummy.surgeryExpense)
  const [paidMedicinal, setPaidMedicinal] = useState(paidDummy.medicinalExpense)
  const [paidDocumentation, setPaidDocumentation] = useState(paidDummy.documentationExpense)
  const [paidMiscellaneous, setPaidMiscellaneous] = useState(paidDummy.misellaneousExpense)

  ////// Handle Payable Buttons
  const handlePayableDiscard = () => {
    setPayable(payableDummy)
    setPayableRoom(payableDummy.roomExpense)
    setPayableMedicinal(payableDummy.medicinalExpense)
    setPayableDocumentation(payableDummy.documentationExpense)
    setPayableMiscellaneous(payableDummy.misellaneousExpense)
    setPayableSurgery(payableDummy.surgeryExpense)
    setEditPayable(false)
  }
  const handlePayableSave = () => {
    setPayable({ ...payable, roomExpense: payableRoom, medicinalExpense: payableMedicinal, documentationExpense: payableDocumentation, misellaneousExpense: payableMiscellaneous, surgeryExpense: payableSurgery })
    setEditPayable(false)
  }

  ////// Handle Paid Buttons

  const handlePaidDiscard = () => {
    setPayable(paidDummy)
    setPaidRoom(paidDummy.roomExpense)
    setPaidMedicinal(paidDummy.medicinalExpense)
    setPaidDocumentation(paidDummy.documentationExpense)
    setPaidMiscellaneous(paidDummy.misellaneousExpense)
    setPaidSurgery(paidDummy.surgeryExpense)
    setEditPaid(false)
  }

  const handlePaidSave = () => {
    setPaid({ ...paid, roomExpense: paidRoom, medicinalExpense: paidMedicinal, documentationExpense: paidDocumentation, misellaneousExpense: paidMiscellaneous, surgeryExpense: paidSurgery })
    setEditPaid(false)
  }
  return (
    <>
      <div className="w-full h-full">
        <div className="flex flex-col gap-5 w-full h-full">


          {/* Starting Pargagraph */}
          <div className="flex flex-col blue_gray_50">

            <div>
              <Text
                className="leading-[150.00%] w-full max-w-[1216px] md:max-w-full text-base text-black-900  text-justify"
                size="txtNunitoRegular16"
              >
                <>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam.{" "}
                </>
              </Text>
              <Icon />
            </div>

          </div>



          {/* Payable Policy and Claim */}

          <div className={`w-full rounded-xl border-1 border-gray-200 flex`} >
            <div className={`h-full w-full border-r-1 z-10 ${editPayable ? 'border-purple-400 border-1 rounded-xl' : 'border-gray-200'}`}>
              {/* header */}
              <div className="flex justify-between p-3 border-b-1">
                <span className="flex gap-1 items-center"><IoDocumentTextOutline className={"text-purple-600"} />General Checkpoints</span>
                {editPayable ? <span className="flex gap-2">
                  <Button leftIcon={<MdDeleteOutline />} onClick={handlePayableDiscard} size="sm" className="flex h-4/5 gap-1 p-2 rounded-lg text-[11px]" children={'Discard'} color="blue_gray_50" variant="fill"></Button>
                  <Button leftIcon={<IoSaveOutline />} onClick={handlePayableSave} size="sm" className="flex h-4/5 gap-1 p-2 rounded-lg text-[11px]" children={'Save'} color="purple_600" variant="fill"></Button>
                </span> : <FaRegEdit onClick={() => setEditPayable(true)} />}
              </div>
              {/* Mid */}
              <div className={`flex flex-col gap-2 justify-between p-3`}>

                {/* Room Expense */}
                <div className="EDIT-ABLE flex gap-2 ">
                  <span className={`${editPayable ? 'text-purple-600' : 'text-gray-900'} font-semibold text-[14px]`}>Room Expense: </span>

                  <span className="text-gray-500  text-[14px] flex gap-2 items-center">
                    {
                      editPayable ? (<>
                        <input
                          type="text"
                          value={payableRoom.value}
                          onChange={(e) => setPayableRoom({ value: e.target.value, select: true })}
                          class="border-b-2 h-5 pl-0 border-white-A700 border-b-purple-400 focus:border-b-purple-600  focus:border-gray-50 outline-none text-[12px]"
                        />
                        {
                          payableRoom.select ? (<>
                            <FaRegCircleCheck className="text-purple-600 font-bold" onClick={() => setPayableRoom({ ...payableRoom, select: false })} />
                            <RxCrossCircled onClick={() => setPayableRoom(payable.roomExpense)} />
                          </>) : (<></>)
                        }
                      </>) : (<span className="text-gray-500  text-[14px]">{payable.roomExpense.value}</span>
                      )
                    }

                  </span>

                </div>

                {/* Surgery Expense */}
                <div className="EDIT-ABLE flex gap-2 ">
                  <span className={`${editPayable ? 'text-purple-600' : 'text-gray-900'} font-semibold text-[14px]`}>Surgery Expense: </span>

                  <span className="text-gray-500  text-[14px] flex gap-2 items-center">
                    {
                      editPayable ? (<>
                        <input
                          type="text"
                          value={payableSurgery.value}
                          onChange={(e) => setPayableSurgery({ value: e.target.value, select: true })}
                          class="border-b-2 h-5 pl-0 border-white-A700 border-b-purple-400 focus:border-b-purple-600  focus:border-gray-50 outline-none text-[12px]"
                        />
                        {
                          payableSurgery.select ? (<>
                            <FaRegCircleCheck className="text-purple-600 font-bold" onClick={() => setPayableSurgery({ ...payableSurgery, select: false })} />
                            <RxCrossCircled onClick={() => setPayableSurgery(payable.surgeryExpense)} />
                          </>) : (<></>)
                        }
                      </>) : (<span className="text-gray-500  text-[14px]">{payable.surgeryExpense.value}</span>
                      )
                    }

                  </span>

                </div>

                {/* Medicinal Expense */}
                <div className="EDIT-ABLE flex gap-2 ">
                  <span className={`${editPayable ? 'text-purple-600' : 'text-gray-900'} font-semibold text-[14px]`}>Medicinal Expense: </span>

                  <span className="text-gray-500  text-[14px] flex gap-2 items-center">
                    {
                      editPayable ? (<>
                        <input
                          type="text"
                          value={payableMedicinal.value}
                          onChange={(e) => setPayableMedicinal({ value: e.target.value, select: true })}
                          class="border-b-2 h-5 pl-0 border-white-A700 border-b-purple-400 focus:border-b-purple-600  focus:border-gray-50 outline-none text-[12px]"
                        />
                        {
                          payableMedicinal.select ? (<>
                            <FaRegCircleCheck className="text-purple-600 font-bold" onClick={() => setPayableMedicinal({ ...payableMedicinal, select: false })} />
                            <RxCrossCircled onClick={() => setPayableMedicinal(payable.medicinalExpense)} />
                          </>) : (<></>)
                        }
                      </>) : (<span className="text-gray-500  text-[14px]">{payable.medicinalExpense.value}</span>
                      )
                    }

                  </span>

                </div>

                {/* Documentation Expense */}
                <div className="SIMPLE-TEXT flex gap-2 items-center">
                  <span className={`${editPayable ? 'text-gray-400' : 'text-gray-900'} font-semibold text-[14px]`}>Documentation Expense: </span>
                  <span className={`${editPayable ? 'text-gray-400' : 'text-gray-500'}  text-[14px]`}>$56</span>
                  <span>
                  </span>
                </div>

                {/* Miscellaneous Expense */}
                <div className="EDIT-ABLE flex gap-2 ">
                  <span className={`${editPayable ? 'text-purple-600' : 'text-gray-900'} font-semibold text-[14px]`}>Miscellaneous Expense: </span>

                  <span className="text-gray-500  text-[14px] flex gap-2 items-center">
                    {
                      editPayable ? (<>
                        <input
                          type="text"
                          value={payableMiscellaneous.value}
                          onChange={(e) => setPayableMiscellaneous({ value: e.target.value, select: true })}
                          class="border-b-2 h-5 pl-0 border-white-A700 border-b-purple-400 focus:border-b-purple-600  focus:border-gray-50 outline-none text-[12px]"
                        />
                        {
                          payableMiscellaneous.select ? (<>
                            <FaRegCircleCheck className="text-purple-600 font-bold" onClick={() => setPayableMiscellaneous({ ...payableMiscellaneous, select: false })} />
                            <RxCrossCircled onClick={() => setPayableMiscellaneous(payable.misellaneousExpense)} />
                          </>) : (<></>)
                        }
                      </>) : (<span className="text-gray-500  text-[14px]">{payable.misellaneousExpense.value}</span>
                      )
                    }

                  </span>

                </div>

              </div>

              {/* Footer */}
              <div className="flex flex-col gap-3 pt-4 p-4 border-t-1">
                <div className="SIMPLE-TEXT flex gap-2 items-center">
                  <span className={`text-purple-600 font-semibold text-[20px]`}>Total Expenses: </span>
                  <span className={`text-purple-600 text-[20px] font-semibold`}>$2603</span>
                  <span>
                  </span>
                </div>
              </div>
            </div>
            <div className={`h-full w-full border--1 z-10 ${editPaid ? 'border-purple-400 border-1 rounded-xl' : 'border-gray-200'}`}>
              {/* header */}
              <div className="flex justify-between p-3 border-b-1">
                <span className="flex gap-1 items-center"><IoDocumentTextOutline className={"text-purple-600"} />Payable For Claim</span>
                {editPaid ? <span className="flex gap-2">
                  <Button leftIcon={<MdDeleteOutline />} onClick={handlePaidDiscard} size="sm" className="flex h-4/5 gap-1 p-2 rounded-lg text-[11px]" children={'Discard'} color="blue_gray_50" variant="fill"></Button>
                  <Button leftIcon={<IoSaveOutline />} onClick={handlePaidSave} size="sm" className="flex h-4/5 gap-1 p-2 rounded-lg text-[11px]" children={'Save'} color="purple_600" variant="fill"></Button>
                </span> : <FaRegEdit onClick={() => setEditPaid(true)} />}
              </div>
              {/* Mid */}
              <div className={`flex flex-col gap-2 justify-between p-3`}>

                {/* Room Expense */}
                <div className="EDIT-ABLE flex gap-2 ">
                  <span className={`${editPaid ? 'text-purple-600' : 'text-gray-900'} font-semibold text-[14px]`}>Room Expense: </span>

                  <span className="text-gray-500  text-[14px] flex gap-2 items-center">
                    {
                      editPaid ? (<>
                        <input
                          type="text"
                          value={paidRoom.value}
                          onChange={(e) => setPaidRoom({ value: e.target.value, select: true })}
                          class="border-b-2 h-5 pl-0 border-white-A700 border-b-purple-400 focus:border-b-purple-600  focus:border-gray-50 outline-none text-[12px]"
                        />
                        {
                          paidRoom.select ? (<>
                            <FaRegCircleCheck className="text-purple-600 font-bold" onClick={() => setPaidRoom({ ...paidRoom, select: false })} />
                            <RxCrossCircled onClick={() => setPaidRoom(paid.roomExpense)} />
                          </>) : (<></>)
                        }
                      </>) : (<span className="text-gray-500  text-[14px] flex gap-1">{paid.roomExpense.value} /<span className="text-[#C8C6C9]">{payable.roomExpense.value}</span></span>)
                    }

                  </span>

                </div>

                {/* Surgery Expense */}
                <div className="EDIT-ABLE flex gap-2 ">
                  <span className={`${editPaid ? 'text-purple-600' : 'text-gray-900'} font-semibold text-[14px]`}>Surgery Expense: </span>

                  <span className="text-gray-500  text-[14px] flex gap-2 items-center">
                    {
                      editPaid ? (<>
                        <input
                          type="text"
                          value={paidSurgery.value}
                          onChange={(e) => setPaidSurgery({ value: e.target.value, select: true })}
                          class="border-b-2 h-5 pl-0 border-white-A700 border-b-purple-400 focus:border-b-purple-600  focus:border-gray-50 outline-none text-[12px]"
                        />
                        {
                          paidSurgery.select ? (<>
                            <FaRegCircleCheck className="text-purple-600 font-bold" onClick={() => setPaidSurgery({ ...paidSurgery, select: false })} />
                            <RxCrossCircled onClick={() => setPaidSurgery(paid.surgeryExpense)} />
                          </>) : (<></>)
                        }
                      </>) : (<span className="text-gray-500  text-[14px] flex gap-1">{paid.surgeryExpense.value} /<span className="text-[#C8C6C9]">{payable.surgeryExpense.value}</span></span>)
                    }

                  </span>

                </div>

                {/* Medicinal Expense */}
                <div className="EDIT-ABLE flex gap-2 ">
                  <span className={`${editPaid ? 'text-purple-600' : 'text-gray-900'} font-semibold text-[14px]`}>Medicinal Expense: </span>

                  <span className="text-gray-500  text-[14px] flex gap-2 items-center">
                    {
                      editPaid ? (<>
                        <input
                          type="text"
                          value={paidMedicinal.value}
                          onChange={(e) => setPaidMedicinal({ value: e.target.value, select: true })}
                          class="border-b-2 h-5 pl-0 border-white-A700 border-b-purple-400 focus:border-b-purple-600  focus:border-gray-50 outline-none text-[12px]"
                        />
                        {
                          paidMedicinal.select ? (<>
                            <FaRegCircleCheck className="text-purple-600 font-bold" onClick={() => setPaidMedicinal({ ...paidMedicinal, select: false })} />
                            <RxCrossCircled onClick={() => setPaidMedicinal(paid.medicinalExpense)} />
                          </>) : (<></>)
                        }
                      </>) : (<span className="text-gray-500  text-[14px] flex gap-1">{paid.medicinalExpense.value} /<span className="text-[#C8C6C9]">{payable.medicinalExpense.value}</span></span>
                      )
                    }

                  </span>

                </div>

                {/* Documentation Expense */}
                <div className="EDIT-ABLE flex gap-2 ">
                  <span className={`${editPaid ? 'text-purple-600' : 'text-gray-900'} font-semibold text-[14px]`}>Documentation Expense: </span>

                  <span className="text-gray-500  text-[14px] flex gap-2 items-center">
                    {
                      editPaid ? (<>
                        <input
                          type="text"
                          value={paidDocumentation.value}
                          onChange={(e) => setPaidDocumentation({ value: e.target.value, select: true })}
                          class="border-b-2 h-5 pl-0 border-white-A700 border-b-purple-400 focus:border-b-purple-600  focus:border-gray-50 outline-none text-[12px]"
                        />
                        {
                          paidDocumentation.select ? (<>
                            <FaRegCircleCheck className="text-purple-600 font-bold" onClick={() => setPaidDocumentation({ ...paidDocumentation, select: false })} />
                            <RxCrossCircled onClick={() => setPaidDocumentation(paid.documentationExpense)} />
                          </>) : (<></>)
                        }
                      </>) : (<span className="text-gray-500  text-[14px] flex gap-1">{paid.documentationExpense.value} /<span className="text-[#C8C6C9]">{payable.documentationExpense.value}</span></span>)
                    }

                  </span>

                </div>

                {/* Miscellaneous Expense */}
                <div className="EDIT-ABLE flex gap-2 ">
                  <span className={`${editPaid ? 'text-purple-600' : 'text-gray-900'} font-semibold text-[14px]`}>Miscellaneous Expense: </span>

                  <span className="text-gray-500  text-[14px] flex gap-2 items-center">
                    {
                      editPaid ? (<>
                        <input
                          type="text"
                          value={paidMiscellaneous.value}
                          onChange={(e) => setPaidMiscellaneous({ value: e.target.value, select: true })}
                          class="border-b-2 h-5 pl-0 border-white-A700 border-b-purple-400 focus:border-b-purple-600  focus:border-gray-50 outline-none text-[12px]"
                        />
                        {
                          paidMiscellaneous.select ? (<>
                            <FaRegCircleCheck className="text-purple-600 font-bold" onClick={() => setPaidMiscellaneous({ ...paidMiscellaneous, select: false })} />
                            <RxCrossCircled onClick={() => setPaidMiscellaneous(paid.misellaneousExpense)} />
                          </>) : (<></>)
                        }
                      </>) : (<span className="text-gray-500  text-[14px] flex gap-1">{paid.misellaneousExpense.value} /<span className="text-[#C8C6C9]">{payable.misellaneousExpense.value}</span></span>)
                    }

                  </span>

                </div>

              </div>
              {/* Footer */}
              <div className="flex flex-col gap-3 pt-4 p-4 border-t-1">
                <div className="SIMPLE-TEXT flex gap-2 items-center">
                  <span className={`text-purple-600 font-semibold text-[20px]`}>Total Expenses: </span>
                  <span className={`text-purple-600 text-[20px] font-semibold`}>$2603</span>
                  <span>
                  </span>
                </div>
              </div>
            </div>
          </div>



        </div>
        <div className="flex gap-5 mt-3"></div>
      </div>
    </>
  );
};
