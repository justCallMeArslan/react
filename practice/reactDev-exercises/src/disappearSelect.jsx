import { useState } from 'react';
import { initialLetters } from './data.js';
import Letter from './Letter.jsx';

export default function MailClient() {
    const [letters, setLetters] = useState(initialLetters);
    const [highlightedId, setHighlightedId] = useState(false);

    function handleHover(letterId) {
        setHighlightedId(letterId);
    }

    function handleStar(starredId) {
        setLetters(letters.map(letter => {
            if (letter.id === starredId) {
                return {
                    ...letter,
                    isStarred: !letter.isStarred,
                };
            } else {
                return letter;
            }
        }));
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isHighlighted={
                            letter.id === highlightedId
                        }
                        onHover={handleHover}
                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </>
    );
}




// The solution is to keep track of the information needed to identify
// each object (the Letter in general, but its ID in this particular case),
// so React can correctly evaluate the highlighting condition.
// The initial problem was that clicking Star/Unstar created a new object
// using the spread operator (...letter). Although the ID stayed the same,
// highlightedLetter still referred to the original object, not the newly created one.
// As a result, the comparison `letter === highlightedLetter` became false.
// The highlight returned when I hovered over the <li> again, because
// onPointerMove updated the highlighted state to reference the new object.
// The problem is resolved by storing and comparing the letter's ID instead.
// The ID is copied unchanged when the object is shallow-copied, so the
// condition `letter.id === highlightedId` remains true after the object
// is replaced. React re-renders after the state update and evaluates the condition again.
// Since the IDs still match, isHighlighted remains true and the background stays highlighted.
