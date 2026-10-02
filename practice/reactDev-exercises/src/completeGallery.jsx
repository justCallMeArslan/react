import { useState } from 'react';
import { sculptureList } from './data1.jsx';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const [disabledNext, setDisabledNext] = useState(false);
    const [disabledPrev, setDisabledPrev] = useState(false);

    function handleNextClick() {

        if (index < sculptureList.length - 1) {
            const nextIndex = index + 1;
            setIndex(nextIndex)
            setDisabledPrev(false)
            if (nextIndex === sculptureList.length - 1) {
                setDisabledNext(true);
            }
        }
    }

    function handlePrevClick() {

        if (index > 0) {
            const prevIndex = index - 1;
            setIndex(prevIndex);
            setDisabledNext(false);
            if (prevIndex === 0) {
                setDisabledPrev(true);
            }
        }
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];


    return (
        <>
            <button onClick={handlePrevClick} disabled={disabledPrev}>
                Prev
            </button>
            <button onClick={handleNextClick} disabled={disabledNext}>
                Next
            </button>
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    );
}
