import { useState } from 'react';

export default function SyncedInputs() {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }
    return (
        <>
            <Input
                label="First input"
                onChange={handleChange}
                isTyped={text}
            />
            <Input
                label="Second input"
                onChange={handleChange}
                isTyped={text}
            />
        </>
    );
}






function Input({ label, onChange, isTyped }) {
    return (
        <label>
            {label}
            {' '}
            <input
                value={isTyped}
                onChange={onChange}
            />
        </label>
    );
}



// uncontrolled component Input became controlled with moving state to its parent
// and passing back props back to child. The idea of exercise is to make both 
// inputs read each other.