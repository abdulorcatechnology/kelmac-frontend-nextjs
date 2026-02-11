import React from "react";

function TableRow({ srNo, rowData, columns }) {
  return (
    <tr className="bg-white even:bg-gray-50 hover:bg-gray-100">
      {/* Serial Number */}
      <td className="px-4 py-2 text-sm text-gray-700 font-medium">{srNo}</td>

      {/* Data Columns */}
      {columns.map((e, ind) => (
        <td key={ind} className="px-4 py-2 text-sm text-gray-700">
          {e.displayField
            ? e.displayField(rowData)
            : rowData[e.key] && rowData[e.key].length > 0
            ? rowData[e.key]
            : "N/A"}
        </td>
      ))}
    </tr>
  );
}

export default TableRow;
