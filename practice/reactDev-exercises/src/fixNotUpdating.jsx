import { useState, useEffect } from "react";


// export default function Clock(props) {
//     return (
//         <h1 style={{ color: props.color }}>
//             {props.time}
//         </h1>
//     );
// }

export default function Clock() {

    const palette = [{
        id: 0,
        color: "blue"
    },
    {
        id: 1,
        color: "red"
    },
    {
        id: 2,
        color: "purple"
    }
    ]

    const [color, setColor] = useState(palette[0].color);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString())
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>

            <label htmlFor="clock-color">
                Choose the color of your clock:{" "}
            </label>

            <select
                className="clock-color"
                value={color}
                onChange={(e) => setColor(e.target.value)}>
                {palette.map((item) => (
                    <option key={item.id} value={item.color}>
                        {item.color}
                    </option>
                ))}
            </select>

            <h1 style={{ color: color }}>
                {currentTime}
            </h1>

        </div>
    )
}