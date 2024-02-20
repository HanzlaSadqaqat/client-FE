import { Card } from "antd";
import { Button } from "../../../components";
import React, { useEffect, useState } from "react";
import { LuRefreshCcw } from "react-icons/lu";
import { MdContentCopy } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";

export default function Summary(prop) {
  const [caseInfo, setCaseInfo] = useState({});
  const [customerDetail, setCustomerDetail] = useState({});
  const [decision, setDecision] = useState({});
  const [smartSmz, setSmartSmz] = useState({});
  useEffect(() => {
    console.log(prop);
    setCaseInfo(prop.data.case_info);
    setCustomerDetail(prop.data.customer_detail);
    setDecision(prop.data.decision);
    setSmartSmz(prop.data.smart_summarization);
  }, []);
  return (
    <div className="w-full pt-5 ">
      <div className="flex gap-2 w-full">
        <Card type="inner" title="Case Info" style={{ width: "300px" }}>
          <div className="flex flex-col gap-2 text-[12px]">
            <div className="flex gap-2 items-center">
              <span className="font-semibold">Case ID:</span>
              <span className="text-gray-500">{caseInfo.case_id}</span>{" "}
              <span className="text-[#8703CA]">
                <MdContentCopy />
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="font-semibold">Created By:</span>
              <span className="text-gray-500">{caseInfo.created_by}</span>{" "}
            </div>
            <div className="flex gap-2 items-center">
              <span className="font-semibold">Created On:</span>
              <span className="text-gray-500">{caseInfo.created_on}</span>{" "}
            </div>
            <div className="flex gap-2 items-center">
              <span className="font-semibold">Last Edit:</span>
              <span className="text-gray-500">{caseInfo.last_edit}</span>{" "}
            </div>
          </div>
        </Card>
        <Card type="inner" title="Case Info" style={{ width: "55%" }}>
          <div className="flex flex-col gap-2 text-[12px]">
            <div className="flex gap-2 items-center ">
              <span className="font-semibold">Client Name:</span>
              <span className="text-gray-500">
                {customerDetail.client_name}
              </span>{" "}
              <span>
                <RiEdit2Line />
              </span>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold">Address:</span>
              <span className="text-gray-500">
                {customerDetail.address}
              </span>{" "}
              <span>
                <RiEdit2Line />
              </span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="font-semibold">L.O.B:</span>
              <span className="text-gray-500">{customerDetail.l_o_b}</span>{" "}
            </div>
          </div>
        </Card>

        <Card type="inner" title="Decision" style={{ width: "360px" }}>
          <div className="text-[12px] ">
            <span className="text-gray-500">{decision.text}</span>
            <div className="flex gap-2 mt-4">
              <Button
                children={"No"}
                variant="fill"
                color="gray_200"
                shape="round"
              />
              <Button
                children={"Sure"}
                variant="fill"
                color="purple_600"
                shape="round"
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="flex ">
        <Card
          type="inner"
          title="Decision"
          style={{ width: "360px" }}
          extra={<LuRefreshCcw />}
        >
          <div className="text-[12px] ">
            <span className="text-gray-500">{decision.text}</span>
          </div>
        </Card>
      </div>
    </div>
  );
}
