[js]: `javascript`

Data is transferred from parent components to child components via props. This data
transfer is undirectional, meaning it flows in only one direction (any changes
will only affect child components (not parent or siblings)).

There are multiple ways how we can use props:

1. add them to parameter of function :

```js
function Button(props) {
const buttonStyle = {
color: props.color,
fontSize: props.fontSize + 'px'
};
```

2. add them directly with parameters we will use :

```js
function Button({ text, color, fontSize }) {
const buttonStyle = {
color: color,
fontSize: fontSize + "px"
};
```

3. add them with parameters and repeated values (avoiding duplicating code):

```js
function Button({ text = "Click Me!", color = "blue", fontSize = 12 }) {
const buttonStyle = {
color: color,
fontSize: fontSize + "px"
};

```

and later we can just declare different values if we want to:

```js
<Button text="Don't Click Me!" color="red" />
<Button fontSize={20} />
```

4. add functions as parameter for props:

```js

function Button({ text = "Click Me!", color = "blue", fontSize = 12, handleClick }) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px"
  };
```

abd later we can call it:

```js
export default function App() {
  const handleButtonClick = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div>
      <Button handleClick={handleButtonClick} />
    </div>
  );
}
```
