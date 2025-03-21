import React, { useState } from "react";
import axios from "axios";

const Verify = () => {
  const [certId, setCertId] = useState("");
  const [certData, setCertData] = useState(null);

  const handleVerify = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/verify/${certId}`);
      setCertData(response.data);
    } catch (error) {
      alert("Certificate not found!");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-2xl font-semibold text-gray-800">Verify Certificate</h2>
      <input
        type="text"
        placeholder="Enter Certificate ID"
        className="w-full p-2 border rounded mt-4"
        onChange={(e) => setCertId(e.target.value)}
      />
      <button
        onClick={handleVerify}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Verify
      </button>

      {certData && (
        <div className="mt-6 p-4 bg-gray-100 rounded">
          <h3 className="text-lg font-bold">Student: {certData.studentName}</h3>
          <p>University: {certData.university}</p>
          <p>Course: {certData.course}</p>
          <p>Issued on: {new Date(certData.issueDate * 1000).toLocaleDateString()}</p>
        </div>
      )}
    </div>
  );
};

export default Verify;
