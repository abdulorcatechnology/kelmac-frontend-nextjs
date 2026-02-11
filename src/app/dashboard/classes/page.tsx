"use client";
import React, { useState } from "react";

import Link from "next/link";

import { FaEye, FaEdit, FaTrash, FaPlus } from "react-icons/fa";

import { SiGoogleclassroom } from "react-icons/si";
import { useGetAllClassSchedulesQuery } from "@/store/api/courseApi";
import DynamicTable from "@/components/table/DynamicTable";

function ClassSchedule() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data, isLoading, error } = useGetAllClassSchedulesQuery();

  const schedules = (data as any)?.data || data || [];
  const totalEntries = schedules.length;
  const totalPages = Math.ceil(totalEntries / pageSize);

  const indexOfLastItem = page * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentData = schedules.slice(indexOfFirstItem, indexOfLastItem);

  console.log(currentData, "currentData");
  let allTimeBlocks: any[] = [];

  for (const item of currentData) {
    if (item?.course?.sessions) {
      for (const session of item.course.sessions) {
        if (session?.timeBlocks && Array.isArray(session.timeBlocks)) {
          allTimeBlocks = [...allTimeBlocks, ...session.timeBlocks];
        }
      }
    }
  }

  console.log(allTimeBlocks, "allTimeBlocks");

  const columns = [
    {
      key: "StartDate",
      label: "Start Date",
      render: (item: any) => (
        <div className="font-semibold text-gray-900 capitalize">
          {item?.startDate || "—"}
        </div>
      ),
    },
    {
      key: "EndDate",
      label: "End Date",
      render: (item: any) => (
        <div className="text-primary-600 font-medium">
          {item?.endDate || "—"}
        </div>
      ),
    },
    {
      key: "Start Time",
      label: "Start Time",
      render: (item: any) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          {item?.startTime || "—"}
        </span>
      ),
    },
    {
      key: "End Time",
      label: "End Time",
      render: (item: any) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-100 text-sky-800">
          {item?.endTime || "—"}
        </span>
      ),
    },
    {
      key: "duration",
      label: "Duration",
      render: (item: any) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-500 text-white">
          {item?.duration || "4:00"} hr
        </span>
      ),
    },

    {
      key: "googleMeetLink",
      label: "Meet Link",
      render: (item: any) => (
        <Link
          href={"https://meet.google.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 hover:text-primary-700 font-medium text-sm  hover:underline cursor-pointer"
        >
          Join Meeting
        </Link>
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
        <DynamicTable
          data={allTimeBlocks}
          columns={columns}
          loading={isLoading}
          pageTitle="Session Class Schedule"
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
          onAdd={() => {}}
          addButtonLabel="Add Schedule"
        />
      </div>
    </div>
  );
}

export default ClassSchedule;
