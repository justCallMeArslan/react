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

Choosing the State Structure (from react.dev) as part of assignment.

Few principles that can guide you to make better choices:

- Group related state. If you always update two or more state variables at the same time, consider merging them into a single state variable.

const [x, setX] = useState(0);
const [y, setY] = useState(0);

or

const [position, setPosition] = useState({ x: 0, y: 0 });

both can be used , but if both variables update together , second is the way to go

- Avoid contradictions in state. When the state is structured in a way that several pieces of state may contradict and “disagree” with each other, you leave room for mistakes. Try to avoid this.
- Avoid redundant state. If you can calculate some information from the component’s props or its existing state variables during rendering, you should not put that information into that component’s state.
- Avoid duplication in state. When the same data is duplicated between multiple state variables, or within nested objects, it is difficult to keep them in sync. Reduce duplication when you can.
- Avoid deeply nested state. Deeply hierarchical state is not very convenient to update. When possible, prefer to structure state in a flat way.

- If two state variables always update together, consider merging them into one.
- Choose your state variables carefully to avoid creating “impossible” states.
- Structure your state in a way that reduces the chances that you’ll make a mistake
  updating it.
- Avoid redundant and duplicate state so that you don’t need to keep it in sync.
- Don’t put props into state unless you specifically want to prevent updates.
- For UI patterns like selection, keep ID or index in state instead of the object
  itself.
- If updating deeply nested state is complicated, try flattening i
