"use client";
import React, { useState } from "react";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

import { SiGoogleclassroom } from "react-icons/si";
import { useGetAllClassSchedulesQuery } from "@/store/api/courseApi";
import DynamicTable from "@/components/table/DynamicTable";

function ClassSchedule() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data, isLoading, error } = useGetAllClassSchedulesQuery();

  const schedules = (data as any)?.data || data || [];
  const totalEntries = schedules.length;
  const totalPages = Math.ceil(totalEntries / pageSize);

  const indexOfLastItem = page * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentData = schedules.slice(indexOfFirstItem, indexOfLastItem);

  const columns = [
    {
      key: "course",
      label: "Course",
      render: (item: any) => (
        <div className="font-semibold text-gray-900 capitalize">
          {item?.course?.title || "—"}
        </div>
      ),
    },
    {
      key: "instructor",
      label: "Consultant",
      render: (item: any) => (
        <div className="text-primary-600 font-medium">
          {item?.instructor?.firstName
            ? `${item.instructor.firstName} ${item.instructor.lastName}`
            : "—"}
        </div>
      ),
    },
    {
      key: "date",
      label: "Date",
      render: (item: any) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          {item?.date || "—"}
        </span>
      ),
    },
    {
      key: "time",
      label: "Time",
      render: (item: any) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800">
          {item?.time || "—"}
        </span>
      ),
    },
    {
      key: "duration",
      label: "Duration",
      render: (item: any) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-500 text-white">
          {item?.duration || 0} min
        </span>
      ),
    },

    {
      key: "status",
      label: "Status",
      render: (item: any) => {
        let bgColor = "bg-gray-500";
        if (item?.status === "scheduled") bgColor = "bg-green-500";
        else if (item?.status === "cancelled") bgColor = "bg-red-500";
        else if (item?.status === "completed") bgColor = "bg-blue-500";

        return (
          <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor} text-white`}
          >
            {item?.status?.charAt(0).toUpperCase() + item?.status?.slice(1) ||
              "—"}
          </span>
        );
      },
    },
    {
      key: "actions",
      label: "Actions",
      render: (item: any) => (
        <div className="flex items-center gap-3">
          <button
            title="View"
            className="text-primary-600 hover:text-primary-700"
          >
            <FaEye className="text-lg" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div
      className="page-wrapper"
      style={{
        minHeight: 730,
        marginLeft: "30px",
        marginTop: "30px",
        marginRight: "30px",
        width: "100%",
      }}
    >
      <div className="content container-fluid">
        {/* Title and Add Button Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Class Schedule</h1>
          <Link
            href="/dashboard/class-schedule/create"
            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <FaPlus className="text-sm" />
            <span>Add Schedule</span>
          </Link>
        </div>

        <DynamicTable
          data={currentData}
          columns={columns}
          loading={isLoading}
          error={error ? "Failed to load schedules" : null}
          pagination={{
            total: totalEntries,
            currentPage: page,
            totalPages: totalPages,
            pageSize: pageSize,
            onPageChange: setPage,
            onPageSizeChange: setPageSize,
            pageSizeOptions: [5, 10, 20, 50],
          }}
        />
      </div>
    </div>
  );
}

export default ClassSchedule;
