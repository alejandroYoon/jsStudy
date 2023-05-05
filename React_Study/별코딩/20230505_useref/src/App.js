import React, { useRef } from "react";

const Ref = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      {/* <input ref={inputRef} type="text" /> */}
      <input ref={inputRef} type="number"/>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};
export default Ref;