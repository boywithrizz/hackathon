import { useState } from "react";

export default function UploadArchive() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = async () => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    } else {
      alert("No file selected!");
      return;
    }
    
    await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    });

    alert("File Uploaded!");
  };

  return (
    <div className="p-4 ">
      <input type="file" className="border h-12 cursor-pointer" onChange={(e) => {
        if (e.target.files && e.target.files.length > 0) {
          setFile(e.target.files[0]);
        }
      }} />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 my-4 mx-2 rounded hover:bg-blue-700 cursor:pointer" >
        Upload
      </button>
    </div>
  );
}
