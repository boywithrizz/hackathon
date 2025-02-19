<<<<<<< HEAD

import './App.css'
=======
>>>>>>> refs/remotes/origin/main
import React, { useState } from "react";
import axios from "axios";

interface Student {
  name: string;
  age: number;
  major: string;
}

const App: React.FC = () => {
  const [student, setStudent] = useState<Student>({
    name: "",
    age: 0,
    major: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/students",
        student
      ); // Correct URL!!!
      console.log("Student added:", response.data);
      setStudent({ name: "", age: 0, major: "" });
    } catch (error) {
      console.error("Error adding student:", error);
      // Optionally display the error to the user:
      alert("Error adding student. Please check the console for details.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.name === "age" ? parseInt(e.target.value) || 0 : e.target.value; // Handle age conversion and NaN
    setStudent({ ...student, [e.target.name]: value });
  };

  return (
    <div>
      
      <h1>Add Student</h1>
      <form onSubmit={handleSubmit}>
        {/* ... input fields ... */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={student.age}
          onChange={handleChange}
        />
        <input
          type="text"
          name="major"
          placeholder="Major"
          value={student.major}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Student
        </button>
      </form>
      
    </div>
  );
};

export default App;
