import React, { useState } from "react";
import axios from "axios";

interface Student {
    name: string;
    email: string;
    course: string;
}

const Register: React.FC = () => {

    const apiUrl = import.meta.env.VITE_API_URL;

    /// Handle form submission and API call to add student
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${apiUrl}/students/register/`,student); // Correct URL!!!
            console.log("Student added:", response.data);
            setStudent({ name: "", email: "", course: "" });
        } catch (error) {
            console.error("Error adding student:", error);
            alert("Error adding student. Please check the console for details.");
        }
    };

    /// Student details state
    const [student, setStudent] = useState<Student>({
        name: "",
        email: "",
        course: "",
    });

    /// Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setStudent({ ...student, [e.target.name]: value });
    };


    return (
        <div className="flex flex-col justify-center items-center mt-5 ">

            <h1 className="text-2xl font-bold">Add Student</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-xl p-5 bg-gray-100 rounded-lg mt-2">
                {/* ... input fields ... */}
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={student.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={student.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    value={student.course}
                    onChange={handleChange}
                    required
                />

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Add Student
                </button>
            </form>

        </div>
    )
}

export default Register