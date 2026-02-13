"use client";

import { useRegisterInterpreterMutation } from "@/store/api/authApi";
import { useCreateBookingMutation } from "@/store/api/courseApi";
import { Course } from "@/types/course";
import React, { forwardRef, useImperativeHandle, useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-hot-toast";

interface LearnerFormRef {
  submitForm: () => void;
}

interface LearnerFormProps {}

interface RegisterFormState {
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  emailAddress: string;
  phoneNumber: string;
  country: string;
  industry: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  company?: string;
  jobTitle?: string;
  emailAddress?: string;
  phoneNumber?: string;
  country?: string;
  industry?: string;
  password?: string;
  confirmPassword?: string;
  general?: string;
}

const LearnerForm = forwardRef<LearnerFormRef, LearnerFormProps>(
  (props, ref) => {
    const [formData, setFormData] = useState<RegisterFormState>({
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      company: "",
      jobTitle: "",
      emailAddress: "",
      phoneNumber: "",
      country: "",
      industry: "",
      email: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const router = useRouter();

    const [registerInterpreter, { isLoading }] =
      useRegisterInterpreterMutation();

    // Validation helper functions
    const validateEmail = (email: string): boolean => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    const validatePassword = (password: string): string | null => {
      if (password.length < 8) {
        return "Password must be at least 8 characters long";
      }
      if (!/(?=.*[a-z])/.test(password)) {
        return "Password must contain at least one lowercase letter";
      }
      if (!/(?=.*[A-Z])/.test(password)) {
        return "Password must contain at least one uppercase letter";
      }
      if (!/(?=.*\d)/.test(password)) {
        return "Password must contain at least one number";
      }
      return null;
    };

    const validatePhoneNumber = (phone: string): boolean => {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      return phoneRegex.test(phone.replace(/\s+/g, ""));
    };

    const validateForm = (): FormErrors => {
      const newErrors: FormErrors = {};

      // Required field validation
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required";
      } else if (formData.firstName.trim().length < 2) {
        newErrors.firstName = "First name must be at least 2 characters";
      }

      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required";
      } else if (formData.lastName.trim().length < 2) {
        newErrors.lastName = "Last name must be at least 2 characters";
      }

      if (!formData.password) {
        newErrors.password = "Password is required";
      } else {
        const passwordError = validatePassword(formData.password);
        if (passwordError) {
          newErrors.password = passwordError;
        }
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      if (!formData.company.trim()) {
        newErrors.company = "Company name is required";
      }

      if (!formData.jobTitle.trim()) {
        newErrors.jobTitle = "Job title is required";
      }

      if (!formData.emailAddress.trim()) {
        newErrors.emailAddress = "Email address is required";
      } else if (!validateEmail(formData.emailAddress)) {
        newErrors.emailAddress = "Please enter a valid email address";
      }

      if (!formData.phoneNumber.trim()) {
        newErrors.phoneNumber = "Phone number is required";
      } else if (!validatePhoneNumber(formData.phoneNumber)) {
        newErrors.phoneNumber = "Please enter a valid phone number";
      }

      if (!formData.country) {
        newErrors.country = "Please select a country";
      }

      if (!formData.industry) {
        newErrors.industry = "Please select an industry";
      }

      return newErrors;
    };

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      // Clear specific field error when user starts typing
      if (errors[name as keyof FormErrors]) {
        setErrors((prev) => ({
          ...prev,
          [name]: undefined,
        }));
      }

      // Clear general error
      if (errors.general) {
        setErrors((prev) => ({
          ...prev,
          general: undefined,
        }));
      }
    };

    const handleSubmit = async (e?: React.FormEvent) => {
      if (e) e.preventDefault();

      // Clear previous errors
      setErrors({});

      // Validate form
      const validationErrors = validateForm();
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        toast.error("Please fix the errors below");
        return;
      }

      setIsSubmitting(true);

      try {
        const registrationData = {
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          password: formData.password,
          company: formData.company.trim(),
          jobTitle: formData.jobTitle.trim(),
          email: formData.emailAddress.trim(),
          emailAddress: formData.emailAddress.trim(),
          phoneNumber: formData.phoneNumber.trim(),
          country: formData.country,
          industry: formData.industry,
          role: { id: 2 },
          status: { id: 1 },
        };

        const registrationResponse =
          await registerInterpreter(registrationData).unwrap();

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
          company: "",
          jobTitle: "",
          emailAddress: "",
          phoneNumber: "",
          country: "",
          industry: "",
          email: "",
        });
        router.push("/registration/payment");
      } catch (error: any) {
        console.error("Registration error:", error);

        // Handle different types of errors
        if (error?.data?.message) {
          setErrors({ general: error.data.message });
          toast.error(error.data.message);
        } else if (error?.data?.errors) {
          const serverErrors: FormErrors = {};
          Object.entries(error.data.errors).forEach(([field, messages]) => {
            if (Array.isArray(messages)) {
              serverErrors[field as keyof FormErrors] = messages[0];
            } else {
              serverErrors[field as keyof FormErrors] = messages as string;
            }
          });
          setErrors(serverErrors);
          toast.error("Please fix the errors below");
        } else if (error?.status === 409) {
          setErrors({
            emailAddress: "An account with this email already exists",
          });
          toast.error("An account with this email already exists");
        } else if (error?.status === 400) {
          setErrors({
            general:
              "Invalid registration data. Please check your information.",
          });
          toast.error(
            "Invalid registration data. Please check your information.",
          );
        } else if (error?.status === 500) {
          setErrors({ general: "Server error. Please try again later." });
          toast.error("Server error. Please try again later.");
        } else if (error?.message?.includes("Network")) {
          setErrors({
            general:
              "Network error. Please check your connection and try again.",
          });
          toast.error(
            "Network error. Please check your connection and try again.",
          );
        } else {
          setErrors({ general: "Registration failed. Please try again." });
          toast.error("Registration failed. Please try again.");
        }
      } finally {
        setIsSubmitting(false);
      }
    };

    // Expose the submit function to parent components
    useImperativeHandle(ref, () => ({
      submitForm: () => handleSubmit(),
    }));

    return (
      <div>
        {/* General Error Message */}
        {errors.general && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-800 text-sm">{errors.general}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name + Last Name */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Full Name*
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className={`w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-1 outline-none transition ${
                  errors.firstName
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-200 focus:border-secondary focus:ring-secondary"
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className={`w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-1 outline-none transition ${
                  errors.lastName
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-200 focus:border-secondary focus:ring-secondary"
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Password*
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-1 outline-none transition ${
                  errors.password
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-200 focus:border-secondary focus:ring-secondary"
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Confirm Password*
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className={`w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-1 outline-none transition ${
                  errors.confirmPassword
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-200 focus:border-secondary focus:ring-secondary"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>

          {/* Company + Job Title */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Company Name*
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter your company name"
                className={`w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-1 outline-none transition ${
                  errors.company
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-200 focus:border-secondary focus:ring-secondary"
                }`}
              />
              {errors.company && (
                <p className="text-red-500 text-xs mt-1">{errors.company}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Job Title*
              </label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Enter your job title"
                className={`w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-1 outline-none transition ${
                  errors.jobTitle
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-200 focus:border-secondary focus:ring-secondary"
                }`}
              />
              {errors.jobTitle && (
                <p className="text-red-500 text-xs mt-1">{errors.jobTitle}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Email Address*
            </label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              placeholder="Enter your email address"
              className={`w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-1 outline-none transition ${
                errors.emailAddress
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-200 focus:border-secondary focus:ring-secondary"
              }`}
            />
            {errors.emailAddress && (
              <p className="text-red-500 text-xs mt-1">{errors.emailAddress}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Phone Number*
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className={`w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-1 outline-none transition ${
                errors.phoneNumber
                  ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                  : "border-gray-200 focus:border-secondary focus:ring-secondary"
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Country + Industry */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Country*
              </label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-1 outline-none transition ${
                  errors.country
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-200 focus:border-secondary focus:ring-secondary"
                }`}
              >
                <option value="">Select country</option>
                <option value="Pakistan">Pakistan</option>
                <option value="United States">United States</option>
              </select>
              {errors.country && (
                <p className="text-red-500 text-xs mt-1">{errors.country}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1">
                Industry*
              </label>
              <select
                name="industry"
                value={formData.industry}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg bg-gray-50 focus:bg-white focus:ring-1 outline-none transition ${
                  errors.industry
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-200 focus:border-secondary focus:ring-secondary"
                }`}
              >
                <option value="">Select industry</option>
                <option value="Technology">Technology</option>
                <option value="Education">Education</option>
              </select>
              {errors.industry && (
                <p className="text-red-500 text-xs mt-1">{errors.industry}</p>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  },
);

LearnerForm.displayName = "LearnerForm";

export default LearnerForm;
export type { LearnerFormRef };
