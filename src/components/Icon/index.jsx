import React, { useState } from "react";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const Icon = ({ innerclass, ...restProps }) => {
  const [like, setlike] = useState(false);
  const [dislike, setdislike] = useState(false);

  return (
    <div className={innerclass}>
      {!like ? (
        <BiLike
          className="inline my-0 mr-2"
          style={{ display: "inline" }}
          onClick={() => {
            setlike(true);
            setdislike(false);
          }}
        />
      ) : (
        <BiSolidLike
          className="inline my-0 mr-2"
          style={{ color: "blue", display: "inline" }}
          onClick={() => {
            setlike(false);
            setdislike(false);
          }}
        />
      )}

      {!dislike ? (
        <BiDislike
          style={{ display: "inline" }}
          className="inline my-0 mr-2"
          onClick={() => {
            setlike(false);
            setdislike(true);
          }}
        />
      ) : (
        <BiSolidDislike
          className="inline my-0 mr-2"
          style={{ color: "blue", display: "inline" }}
          onClick={() => {
            setlike(false);
            setdislike(false);
          }}
        />
      )}
    </div>
  );
};

export { Icon };
