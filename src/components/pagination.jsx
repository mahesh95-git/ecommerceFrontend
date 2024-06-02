import React from "react";

function Pagination({ setPage, page, totalPages }) {
  return (
    <div className="pagination-container">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page == 1 ? true : false}
      >
        Pre
      </button>
      <span>
        {page > 9 ? page : "0" + page} To {totalPages > 9 ? totalPages : "0" + totalPages}
      </span>
      <button
        onClick={() => setPage(page + 1)}
        disabled={page == totalPages|| totalPages==0 ? true : false}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
