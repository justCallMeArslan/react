export default function FeedbackForm1() {
    function handleClick() {
        const userName = prompt('What is your name?');
        alert(`Hello, ${userName}!`);
    }

    return (
        <button 
        onClick={handleClick}
        className="greetBTN">
            Greet
        </button>
    );
}
