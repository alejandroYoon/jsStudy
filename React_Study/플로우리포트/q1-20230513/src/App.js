import react, { useState } from "react";

const Q1 = () => {

  const [value, setValue] = useState("");

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h1>문제1</h1>
        <h2>문제1-1.</h2>
        <input
          type="text"
          placeholder={value}
          style={{ textAlign: "center" }}
        />
        {/* <S.Message> 올바르게 입력하셨습니다 </S.Message> */}
        <span> 올바르게 입력하셨습니다 </span>
      </div>
  );
}
export default Q1;