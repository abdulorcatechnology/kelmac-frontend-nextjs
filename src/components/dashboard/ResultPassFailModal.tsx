"use client";
import { X, Trophy, TrendingUp, Target, CheckCircle } from "lucide-react";
import { useGetResultPassFailQuery } from "@/store/api/resultsApi";

interface ResultPassFailModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseId: string;
  studentId: string;
  courseName?: string;
  studentName?: string;
}

export default function ResultPassFailModal({
  isOpen,
  onClose,
  courseId,
  studentId,
  courseName,
  studentName,
}: ResultPassFailModalProps) {
  const { data, isLoading, error } = useGetResultPassFailQuery(
    { courseId, studentId },
    { skip: !isOpen },
  );

  if (!isOpen) return null;

  const isPassed = data?.message === "Pass";
  const percentage = data?.result ? parseInt(data.result.replace("%", "")) : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <div className="flex items-center gap-3">
            <div
              className={`p-2 rounded-full ${
                isPassed ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <Trophy
                className={`w-6 h-6 ${
                  isPassed ? "text-green-600" : "text-red-600"
                }`}
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Exam Result</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <p className="text-red-700 font-medium">
                Failed to load exam result
              </p>
              <p className="text-sm text-red-600 mt-2">
                {(error as any)?.data?.message || "Please try again later"}
              </p>
            </div>
          ) : data ? (
            <>
              {/* Student Info */}
              {studentName && (
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600">Learner Name</p>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {studentName}
                  </p>
                </div>
              )}

              {/* Course Info */}
              {courseName && (
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600">Course</p>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {courseName}
                  </p>
                </div>
              )}

              {/* Result Banner */}
              <div
                className={`rounded-2xl p-8 text-center ${
                  isPassed
                    ? "bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200"
                    : "bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200"
                }`}
              >
                <div className="flex justify-center mb-4">
                  <div
                    className={`p-4 rounded-full ${
                      isPassed ? "bg-green-100" : "bg-red-100"
                    }`}
                  >
                    <Trophy
                      className={`w-12 h-12 ${
                        isPassed ? "text-green-600" : "text-red-600"
                      }`}
                    />
                  </div>
                </div>
                <h3
                  className={`text-3xl font-bold mb-2 ${
                    isPassed ? "text-green-900" : "text-red-900"
                  }`}
                >
                  {data.message}
                </h3>
                <p
                  className={`text-sm ${
                    isPassed ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {isPassed
                    ? "Congratulations! You have successfully passed the exam."
                    : "Unfortunately, you did not pass this exam."}
                </p>
              </div>

              {/* Score Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Percentage Score */}
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <p className="text-xs text-blue-700 font-medium">Score</p>
                  </div>
                  <p className="text-3xl font-bold text-blue-900">
                    {data.result}
                  </p>
                </div>

                {/* Student Marks */}
                <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                    <p className="text-xs text-purple-700 font-medium">
                      Your Marks
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-purple-900">
                    {data.studentMarks}
                  </p>
                </div>

                {/* Total Marks */}
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-orange-600" />
                    <p className="text-xs text-orange-700 font-medium">
                      Total Marks
                    </p>
                  </div>
                  <p className="text-3xl font-bold text-orange-900">
                    {data.totalQuestionMarks}
                  </p>
                </div>
              </div>

              {/* Score Breakdown */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-4">
                  Score Breakdown
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Questions Answered
                    </span>
                    <span className="font-medium text-gray-900">
                      {data.studentMarks} / {data.totalQuestionMarks}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Percentage</span>
                    <span className="font-medium text-gray-900">
                      {data.result}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Status</span>
                    <span
                      className={`font-semibold ${
                        isPassed ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {data.message}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isPassed
                          ? "bg-gradient-to-r from-green-500 to-emerald-500"
                          : "bg-gradient-to-r from-red-500 to-orange-500"
                      }`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              {!isPassed && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> You may retake the exam after
                    reviewing the course materials. Contact your Consultant for
                    more information.
                  </p>
                </div>
              )}
            </>
          ) : null}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex justify-end rounded-b-2xl">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
