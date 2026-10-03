import { useState } from "react";


export default function Form() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastNime] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastNime(e.target.value);
    }

    function handleReset() {
        setFirstName('')
        setLastNime('');
    }

    return (
        <form onSubmit={e => e.preventDefault()}>
            <input
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1>Hi, {firstName} {lastName}!</h1>
            <button onClick={handleReset}>Reset</button>
        </form>
    );
}
