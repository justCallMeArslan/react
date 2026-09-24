function cube(x) {
    return x * x * x
}

const foo = Math.PI * Math.SQRT2;

const graph = {
    options: {
        color: "blue",
        thickness: "2px"
    },
    draw() {
        console.log("From graph draw func");

    }
};


function AskAge() {
    return <h1> How old are you, habibi?</h1>
}

export default AskAge
// eslint-disable-next-line react-refresh/only-export-components
export { cube, foo, graph }

// export used in this example is valid, but violates React Fast refresh conventional
// use, thats why we have notification in log. To fix that JSX part and JS part 
// should be separated into different files and exported from there.