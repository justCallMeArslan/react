import { useState } from "react";

export default function Person() {
    const [person, setPerson] = useState({ name: "John", age: 100 });

    const handleIncreaseAge = () => {
        setPerson({ ...person, age: person.age + 1 }); // adds +1 to default value
        setPerson({ ...person, age: person.age + 1 }); // adds +1 to default value
        // so return will be 101

        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 })); // adds +1 to default
        setPerson((prevPerson) => ({ ...prevPerson, age: prevPerson.age + 1 })); // adds +1 to prevPerson value due to its used with fallback, so return will be 102
    };

    return (
        <>
            <h1>{person.name}</h1>
            <h2>{person.age}</h2>
            <button onClick={handleIncreaseAge}>Increase age</button>
        </>
    );
}