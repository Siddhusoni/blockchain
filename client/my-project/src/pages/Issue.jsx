import React, { useState } from "react";
import axios from "axios";

const Issue = () => {
  const [form, setForm] = useState({
    studentName: "",
    course: "",
    university: "",
    certificateHash: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/issue", form);
      alert("Certificate issued successfully!");
    } catch (error) {
      alert("Error issuing certificate");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold text-gray-800">Issue Certificate</h2>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input
          type="text"
          name="studentName"
          placeholder="Student Name"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="university"
          placeholder="University"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="certificateHash"
          placeholder="Certificate Hash"
          className="w-full p-2 border rounded"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Issue Certificate
        </button>
      </form>
    </div>
  );
};

export default Issue;
