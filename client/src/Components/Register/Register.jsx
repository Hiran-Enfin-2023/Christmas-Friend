import React, { useState } from "react";
import "../../App.css";

function Register() {
  const [error, setError] = useState("");
  const [newEmployeeName, setNewEmployeeName] = useState("");
  const [newEmployeeEmail, setNewEmployeeEmail] = useState("");




  const handleNewEmployeeNameChange = (e) => {
    setNewEmployeeName(e.target.value);
  };

  const handleNewEmployeeEmailChange = (e) => {
    setNewEmployeeEmail(e.target.value);
  };

  const handleAddEmployee = async () => {
    try {
      const response = await fetch("https://christmas-friend-api.vercel.app/addEmployee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newEmployeeName,
          email: newEmployeeEmail,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error);
      } else {
        const data = await response.json();
        setError("");
        alert(data.message);
      
        setNewEmployeeEmail("");
        setNewEmployeeName("");

        // You can handle success messages better
      }
    } catch (error) {
      console.error("Error adding employee:", error);
      setError("Something went wrong.");
    }
  };
  return (
    <div style={{
          width: "100%",
          display:"flex",
          justifyContent:"center",
          padding: "20px",
          height:"100vh"
        }}>
      <div
        style={{
          maxWidth: "400px",
          margin: "auto",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
        className="App"
      >
        {/* ... (existing code) */}
        <h2>Add Employee</h2>
        <label
          style={{
            display: "block",
            marginBottom: "5px",
            fontSize: "16px",
            color: "#333",
          }}
        >
          Name:
          <input
            type="text"
            value={newEmployeeName}
            onChange={handleNewEmployeeNameChange}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          />
        </label>
        <label
          style={{
            display: "block",
            marginBottom: "5px",
            fontSize: "16px",
            color: "#333",
          }}
        >
          Email:
          <input
            type="email"
            value={newEmployeeEmail}
            onChange={handleNewEmployeeEmailChange}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              boxSizing: "border-box",
            }}
          />
        </label>
        <button
          onClick={handleAddEmployee}
          style={{
            backgroundColor: "#1280ef",
            color: "white",
            padding: "10px 15px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add +
        </button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

export default Register;
