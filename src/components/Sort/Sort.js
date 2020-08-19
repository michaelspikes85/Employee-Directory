import React from "react";

export function Sort(props) {
  return (
    <>
      <button
        onClick={() => props.callback("asc")}
        className="btn btn-sm btn-light p-0 mx-3"
      >
        <span>&#8593;</span>
      </button>
      <button
        onClick={() => props.callback("desc")}
        className="btn btn-sm btn-light p-0"
      >
        <span>&#8595;</span>
      </button>
    </>
  );
}
