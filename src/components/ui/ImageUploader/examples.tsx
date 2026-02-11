/**
 * ImageUploader Component - Usage Examples
 *
 * This file contains various examples of how to use the ImageUploader component
 */

import React, { useState } from "react";
import ImageUploader from "@/components/ui/ImageUploader";
import axios from "axios";

// ==========================================
// Example 1: Basic Usage
// ==========================================
export function BasicImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleFileRemove = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Upload Image</h2>
      <ImageUploader
        onFileSelect={handleFileSelect}
        onFileRemove={handleFileRemove}
        preview={preview}
      />
    </div>
  );
}

// ==========================================
// Example 2: With Server Upload
// ==========================================
export function ImageUploaderWithServer() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string>("");
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = async (selectedFile: File) => {
    setFile(selectedFile);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);

    // Upload to server
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);

      const apiUrl =
        process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api/v1";
      const response = await axios.post(`${apiUrl}/files/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setUploadedUrl(response.data.url);
      console.log("File uploaded:", response.data.url);
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileRemove = () => {
    setFile(null);
    setPreview(null);
    setUploadedUrl("");
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Upload to Server</h2>
      <ImageUploader
        onFileSelect={handleFileSelect}
        onFileRemove={handleFileRemove}
        preview={preview}
        disabled={isUploading}
      />
      {isUploading && (
        <p className="mt-2 text-sm text-blue-600">Uploading...</p>
      )}
      {uploadedUrl && (
        <p className="mt-2 text-sm text-green-600">Uploaded: {uploadedUrl}</p>
      )}
    </div>
  );
}

// ==========================================
// Example 3: In a Form
// ==========================================
export function ImageUploaderInForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleFileRemove = () => {
    setFile(null);
    setPreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload an image");
      return;
    }

    // Create form data
    const submitData = new FormData();
    submitData.append("title", formData.title);
    submitData.append("description", formData.description);
    submitData.append("image", file);

    try {
      const response = await axios.post("/api/submit", submitData);
      console.log("Form submitted:", response.data);
    } catch (error) {
      console.error("Submission failed:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            className="w-full border rounded-lg p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full border rounded-lg p-2"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image*</label>
          <ImageUploader
            onFileSelect={handleFileSelect}
            onFileRemove={handleFileRemove}
            preview={preview}
            label="Upload Post Image"
            helperText="PNG, JPG (Recommended: 1200x800px)"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Submit Post
        </button>
      </form>
    </div>
  );
}

// ==========================================
// Example 4: Custom Styling & Props
// ==========================================
export function CustomImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleFileRemove = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Profile Picture</h2>
      <ImageUploader
        onFileSelect={handleFileSelect}
        onFileRemove={handleFileRemove}
        preview={preview}
        label="Upload Profile Picture"
        helperText="PNG, JPG, GIF (Square images work best)"
        maxSize={10}
        accept="image/png,image/jpeg,image/gif"
        className="custom-uploader"
      />
    </div>
  );
}

// ==========================================
// Example 5: Multiple Uploaders
// ==========================================
export function MultipleImageUploaders() {
  const [logo, setLogo] = useState<{
    file: File | null;
    preview: string | null;
  }>({
    file: null,
    preview: null,
  });

  const [banner, setBanner] = useState<{
    file: File | null;
    preview: string | null;
  }>({
    file: null,
    preview: null,
  });

  const handleLogoSelect = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setLogo({ file, preview: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  const handleBannerSelect = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setBanner({ file, preview: reader.result as string });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">Company Branding</h2>

      <div>
        <h3 className="text-lg font-semibold mb-2">Logo</h3>
        <ImageUploader
          onFileSelect={handleLogoSelect}
          onFileRemove={() => setLogo({ file: null, preview: null })}
          preview={logo.preview}
          label="Upload Logo"
          helperText="PNG (Transparent background recommended)"
          maxSize={2}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Banner</h3>
        <ImageUploader
          onFileSelect={handleBannerSelect}
          onFileRemove={() => setBanner({ file: null, preview: null })}
          preview={banner.preview}
          label="Upload Banner"
          helperText="JPG, PNG (Recommended: 1920x400px)"
          maxSize={5}
        />
      </div>
    </div>
  );
}
