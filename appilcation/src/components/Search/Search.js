import React from "react";

export function Search(props) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <label htmlFor="search">Search by Name</label>
      <input
        className="flex-grow-1 ml-3"
        type="text"
        value={props.searchTerm}
        onChange={props.onFilterChange}
      />
    </div>
  );
}
