import { useState } from "react";
import React from "react";

export default function UploadArchive() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      alert("No file selected!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // Append file to FormData

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("File upload failed");
      }

      alert("File Uploaded Successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Upload failed!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Upload a File</h2>
        <form onSubmit={handleUpload} className="flex flex-col gap-4">
          <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition">
            <div className="flex flex-col items-center text-gray-600">
              <svg className="w-10 h-10 text-blue-500 mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V10a4 4 0 118 0v6m-5 4h6a2 2 0 002-2V8a2 2 0 00-2-2h-1m-6 0H9a2 2 0 00-2 2v10a2 2 0 002 2h1"></path>
              </svg>
              <span className="text-sm">Click to upload or drag a file</span>
            </div>
            <input
              type="file"
              name="file"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          </label>

          {file && <p className="text-center text-gray-700 font-medium">Selected: {file.name}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition shadow-md"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}
