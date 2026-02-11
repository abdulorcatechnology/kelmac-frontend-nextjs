import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function TablePagination({
  page,
  pageSize,
  onPageChange,
  totalPages,
  totalEntries,
}) {
  // const totalPages = Math.ceil(totalEntries / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const generatePageNumbers = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else if (page <= 2) {
      return [1, 2, 3, "dots", totalPages];
    } else if (page >= totalPages - 1) {
      return [1, "dots", totalPages - 2, totalPages - 1, totalPages];
    } else {
      return [1, "dots", page - 1, page, page + 1, "dots", totalPages];
    }
  };

  const pageNumbers = generatePageNumbers();

  return (
    <>
      {/* <div className="w-100 d-flex align-items-center justify-content-between mt-4">

      <div
        className="dataTables_info"
        id="dataTableBuilder_info"
        role="status"
        aria-live="polite"
      >
        Showing {Math.min((page - 1) * pageSize + 1, totalEntries)} to{" "}
        {Math.min(page * pageSize, totalEntries)} of {totalEntries} entries
      </div>
      
      <div className="d-flex align-items-center justify-content-center gap-2">
        <span
          className={`paginate_button previous ${page === 1 ? "disabled" : ""}`}
          onClick={() => handlePageChange(page - 1)}
        >
          <FaAngleLeft size={18} />
        </span>
        {pageNumbers.map((item, index) =>
          item === "dots" ? (
            <span key={index} className="ellipsis">
              ...
            </span>
          ) : (
            <span
              key={index}
              className={`paginate_button ${page === item ? "current" : ""}`}
              tabIndex={0}
              onClick={() => handlePageChange(item)}
            >
              {item}
            </span>
          )
        )}
        <span
          className={`paginate_button next ${
            page === totalPages ? "disabled" : ""
          }`}
          onClick={() => handlePageChange(page + 1)}
        >
          <FaAngleRight size={18} />
        </span>
      </div>

    </div> */}

      <div className="flex flex-col sm:flex-row items-center justify-between mt-4 w-full">
        {/* Showing entries info */}
        <div className="text-gray-700 text-sm mb-2 sm:mb-0">
          Showing {Math.min((page - 1) * pageSize + 1, totalEntries)} to{" "}
          {Math.min(page * pageSize, totalEntries)} of {totalEntries} entries
        </div>

        {/* Pagination */}
        <ul className="inline-flex items-center space-x-1">
          {/* Previous */}
          <li>
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className={`px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition-colors ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Previous
            </button>
          </li>

          {/* Page Numbers */}
          {pageNumbers.map((item, index) =>
            item === "dots" ? (
              <li key={index} className="px-2 text-gray-500 select-none">
                ...
              </li>
            ) : (
              <li key={index}>
                <button
                  onClick={() => handlePageChange(item)}
                  className={`px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition-colors ${
                    page === item
                      ? "bg-blue-500 text-white border-blue-500"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              </li>
            )
          )}

          {/* Next */}
          <li>
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              className={`px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-200 transition-colors ${
                page === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default TablePagination;
