import React, { useState } from "react";
import "./ChristmasFrd.css"
import { API_URL } from "../../utils";
import { DotLoader } from "react-spinners"
function ChristmasFrd() {
  const [email, setEmail] = useState("");
  const [friend, setFriend] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState()
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAssignFriend = async () => {
    try {
      setIsLoading(true)
      const response = await fetch("https://christmas-friend-api.vercel.app/assignFriend", {
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
setIsLoading(false)
      } else {
        const data = await response.json();
        setError("");
        setFriend(`Your Christmas Friend: ${data.friend}`);
        console.log(data);
        setIsLoading(false)
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
      <div  className="input-field">
        <input
          type="email"
          value={email}
          placeholder="Company Email"
          onChange={handleEmailChange}
        />
        <button onClick={handleAssignFriend}>Enter</button>
      </div>

      {!friend && isLoading === true ? <div style={{marginTop:"10px"}}> <DotLoader color="#f50505" /></div> : <div style={{marginTop:"15px"}}><h4>{friend}</h4></div>  
        }
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default ChristmasFrd;
