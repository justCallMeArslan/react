Managing and structuring state effectively is by far the most crucial parts of
building applications, cause if not done correctly its great source of potential
bugs and headaches.

- state should not be mutated, should be treated as immutable (setX is only way)
- state updates are asynchronous, that means the update will be applied by React
  in the next component render.

```jsx
function Person() {
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


// exercise on that part is completed in React dev exercises.
```

When React re-renders a component:

1. React calls your function again.
2. Your function returns a new JSX snapshot.
3. React then updates the screen to match the snapshot your function returned.

- The state stored in React may have changed by the time the alert runs, but it was
  scheduled using a snapshot of the state at the time the user interacted with it!
  So we need to keep in mind that snapshot getting rendered on next re-rerender, even
  if it set by asynchronous setInterval or similar.

- Setting state requests a new render.
- React stores state outside of your component, as if on a shelf.
- When you call useState, React gives you a snapshot of the state for that render.
- Variables and event handlers don’t “survive” re-renders. Every render has its
  own event handlers.
- Every render (and functions inside it) will always “see” the snapshot of the
  state that React gave to that render.
- You can mentally substitute state in event handlers, similarly to how you
  think about the rendered JSX.
- Event handlers created in the past have the state values from the render in
  which they were created.
