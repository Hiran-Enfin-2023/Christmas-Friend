import React, { useState } from 'react'

function ChristmasFrd() {
    const [email, setEmail] = useState('');
    const [friend, setFriend] = useState('');
    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleAssignFriend = async () => {
        try {
            const response = await fetch('http://localhost:5000/assignFriend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.error);
                setFriend('');
            } else {
                const data = await response.json();
                setError('');
                setFriend(data.friend);
                console.log(data);
            }
        } catch (error) {
            console.error('Error assigning friend:', error);
            setError('Something went wrong.');
            setFriend('');
        }
    };

    return (
        <div className="christmas-frd">
            <h1 className='heading'>Christmas Friend</h1>
            <div className="input-field">
                <input type="email" value={email} placeholder='Company Email' onChange={handleEmailChange} />
                <button onClick={handleAssignFriend}>Enter</button>
            </div>

            {friend && <p>Your Christmas Friend: {friend}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    )
}

export default ChristmasFrd