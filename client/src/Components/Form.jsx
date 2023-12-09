import React, { useState } from 'react'
import "../App.css"
function Form() {
    
    const [email, setEmail] = useState('');
    const [friend, setFriend] = useState('');
    const [error, setError] = useState('');
    const [newEmployeeName, setNewEmployeeName] = useState('');
    const [newEmployeeEmail, setNewEmployeeEmail] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleAssignFriend = async () => {
      // ... (existing code)
    };
  
    const handleNewEmployeeNameChange = (e) => {
      setNewEmployeeName(e.target.value);
    };
  
    const handleNewEmployeeEmailChange = (e) => {
      setNewEmployeeEmail(e.target.value);
    };
  
    const handleAddEmployee = async () => {
      try {
        const response = await fetch('http://localhost:5000/addEmployee', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: newEmployeeName, email: newEmployeeEmail }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.error);
        } else {
          const data = await response.json();
          setError('');
          alert(data.message); 
          setNewEmployeeEmail("");
          setNewEmployeeName("")

          // You can handle success messages better
        }
      } catch (error) {
        console.error('Error adding employee:', error);
        setError('Something went wrong.');
      }
    };
  return (
    <div className="App">
      {/* ... (existing code) */}
      <h2>Add Employee</h2>
      <label>
        Name:
        <input type="text" value={newEmployeeName} onChange={handleNewEmployeeNameChange} />
      </label>
      <label>
        Email:
        <input type="email" value={newEmployeeEmail} onChange={handleNewEmployeeEmailChange} />
      </label>
      <button onClick={handleAddEmployee}>Add Employee</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

export default Form