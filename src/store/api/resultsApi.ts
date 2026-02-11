import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "./api";

interface ResultPassFailResponse {
  message: string;
  result: string;
  totalQuestionMarks: number;
  studentMarks: number;
}

export const resultsApi = createApi({
  reducerPath: "resultsApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["ResultPassFail"],
  endpoints: (builder) => ({
    getResultPassFail: builder.query<
      ResultPassFailResponse,
      { courseId: string; studentId: string }
    >({
      query: ({ courseId, studentId }) =>
        `/student-item-grades/course/${courseId}/result-pass-fail/${studentId}`,
      providesTags: (result, error, { courseId, studentId }) => [
        { type: "ResultPassFail", id: `${courseId}-${studentId}` },
      ],
    }),
  }),
});

export const { useGetResultPassFailQuery, useLazyGetResultPassFailQuery } =
  resultsApi;
