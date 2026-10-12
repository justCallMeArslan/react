import { useState } from 'react';
import { letters } from './data2.js';
import Letter from './Letters4.jsx';

export default function MailClient1() {
    const [selectedId, setSelectedId] = useState(([]));


    const selectedCount = selectedId.length;

    function handleToggle(toggledId) {

        if (selectedId.includes(toggledId)) {
            setSelectedId(selectedId.filter(id => id !== toggledId))
        } else {
            setSelectedId(
                [
                    ...selectedId,
                    toggledId
                ]
            )
        }
    }

    return (
        <>
            <h2>Inbox</h2>
            <ul>
                {letters.map(letter => (
                    <Letter
                        key={letter.id}
                        letter={letter}
                        isSelected={
                            selectedId.includes(letter.id)
                        }
                        onToggle={handleToggle}
                    />
                ))}
                <hr />
                <p>
                    <b>
                        You selected {selectedCount} letters
                    </b>
                </p>
            </ul>
        </>
    );
}



// The main idea is to change the initial state from null or a single ID
// to an array (or Set) of IDs, allowing multiple items to be selected.
// We use includes() to check whether toggledId is already in the array.
// If the ID is already in the array, we remove it using filter(),
// which deselects that item.
// If the ID is not in the array, we create a copy of the array and add
// the ID using spread syntax, which selects that item.
// React then re-renders, and each checkbox's isSelected value is
// recalculated by checking whether its ID exists in the selected IDs.
// This keeps the checkboxes synchronized with the selected IDs state.

