import React, { useState } from "react";
import "./ChristmasFrd.css"
import { API_URL } from "../../utils";
function ChristmasFrd() {
  const [email, setEmail] = useState("");
  const [friend, setFriend] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAssignFriend = async () => {
    try {
       
      const response = await fetch("https://no65cxoxe6ecgz7nq4h55gdjgm0ustqq.lambda-url.ap-south-1.on.aws/assignFriend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        // console.log(response);
        const errorData = await response.json();
        console.log(errorData);
        setError(errorData.error);
        setFriend("");
        
      } else {
        const data = await response.json();
        setError("");
        setFriend(data.friend);
        console.log(data);
      }
    } catch (error) {
      console.error("Error assigning friend:", error);
      setError("Something went wrong.");
      setFriend("");
    }
  };

  return (
    <div className="christmas-frd">
      <div className="title-box">
        <h2>Christmas Friend</h2>
      </div>
      <div className="input-field">
        <input
          type="email"
          value={email}
          placeholder="Company Email"
          onChange={handleEmailChange}
        />
        <button onClick={handleAssignFriend}>Enter</button>
      </div>

      {friend && <p>Your Christmas Friend: {friend}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default ChristmasFrd;
