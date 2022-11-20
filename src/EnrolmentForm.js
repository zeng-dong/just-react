import { useState } from 'react';
import './App.css';

function EnrolmentForm() {
    const [firstName, setFirstName] = useState('m');
    const [lastName, setLastName] = useState('z');
    const [welcomeMessage, setWelcomeMessage] = useState('');

    const handleSubmit = (event) => {
        setWelcomeMessage(`Welcome ${firstName} ${lastName}`);
        event.preventDefault();
    };

    return (
        <div>
            <form className="enrolForm" onSubmit={handleSubmit}>
                <h1>Student Details</h1>
                <label>First name:</label>
                <input
                    type="text"
                    name="fname"
                    onBlur={(event) => setFirstName(event.target.value)}
                />
                <br />
                <label>Last name:</label>
                <input
                    type="text"
                    name="lname"
                    onBlur={(event) => setLastName(event.target.value)}
                />
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>

            <label id="studentMsg" className="message">
                {welcomeMessage}
            </label>
        </div>
    );
}
export default EnrolmentForm;
