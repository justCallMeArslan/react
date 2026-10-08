import { useState } from 'react';

export default function TrafficLight() {
    const [walk, setWalk] = useState(true);

    function handleClick() {
        // if (walk) {
        //     setWalk(!walk);
        //     alert("Stop is next");
        // } else {
        //     setWalk(true); // or !walk as walk cant be used as it matches walk === false atm
        //     alert("Walk is next");
        // }

        // switch (walk) {
        //     case true:
        //         alert("Stop is next");
        //         setWalk(false);
        //         break;
        //     case false:
        //         alert("Walk is next");
        //         setWalk(true);
        //         break;
        // }

        setWalk(!walk);
        alert(walk ? "Stop is next" : "Walk is next");
    }



    return (
        <>
            <button
                onClick={handleClick}
                className='flashlightBTN'>
                Change to {walk ? 'Stop' : 'Walk'}
            </button>
            <h1 style={{
                color: walk ? 'darkgreen' : 'darkred'
            }}>
                {walk ? 'Walk' : 'Stop'}
            </h1>
        </>
    );
}
