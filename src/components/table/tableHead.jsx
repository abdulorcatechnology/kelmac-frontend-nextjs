import React from "react";

function TableHead({ pageSize, setPageSize, setPage }) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between mb-4">
        {/* Show entries */}
        <div className="flex items-center space-x-2 w-full sm:w-auto mb-2 sm:mb-0">
          <label className="text-gray-700 text-sm flex items-center gap-2">
            Show
            <select
              name="dataTableBuilder_length"
              aria-controls="dataTableBuilder"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setPage(1);
              }}
            >
              {[10, 25, 50, 100].map((current, i) => (
                <option value={current} key={i}>
                  {current}
                </option>
              ))}
            </select>
            entries
          </label>
        </div>

        {/* Empty space / placeholder for middle */}
        <div className="flex-1"></div>

        {/* Search box (optional, commented) */}
        <div className="w-full sm:w-auto">
          {/* Uncomment below if you want search input */}
          {/*
    <label className="flex items-center border border-gray-300 rounded-md px-2 gap-2 w-full sm:w-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
      </svg>
      <input
        type="search"
        className="p-2 border-0 w-full focus:outline-none"
        placeholder="Search"
        aria-controls="dataTableBuilder"
      />
    </label>
    */}
        </div>
      </div>
    </>
  );
}

export default TableHead;
