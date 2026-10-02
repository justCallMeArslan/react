State is not somethiong exclusive to React, becuase by state we understand
current condition and components's memory, which it keeps as saved condition.

In React we operate useState - a React built-in function that returns the current
state value and a function for updating that state.

const [state, setState] = useState(initialValue) ,

where state is what we want to have as a current value and setState we use to
change it and initialValue is the default/starting value.

React reconciliation algorithm

The process of rerendering generates a new virtual DOM (Document Object Model)
tree. The virtual DOM is a lightweight representation of the actual DOM that
React uses to keep track of the current state of the UI. React then compares
the new virtual DOM tree to the previous one and calculates the minimal set
of changes needed to update the actual DOM. This is the reconciliation algorithm.

Hooks
Hooks are functions that let you use React features. All hooks are recognizable
by the use prefix. For example, useState is a hook.

Hooks have rules that we need to abide by:

- Hooks can only be called from the top level of a functional component.
- Hooks can’t be called from inside loops or conditions, or other nested functions.
