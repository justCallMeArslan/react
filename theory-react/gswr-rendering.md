Rendering frequently requires to render sorted list, so for that case we can easily use
if statements or conditional rendering (for guarding e.g), map for sorting and && if we check multiple.

- In React, you control branching logic with JavaScript.
- You can return a JSX expression conditionally with an if statement.
- You can conditionally save some JSX to a variable and then include it inside
  other JSX by using the curly braces.
- In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
- In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
- The shortcuts are common, but you don’t have to use them if you prefer plain if.
- How to move data out of components and into data structures like arrays and
  objects.
- How to generate sets of similar components with JavaScript’s map().
- How to create arrays of filtered items with JavaScript’s filter().
- Why and how to set key on each component in a collection so React can keep
  track of each of theь even if their position or data changes.
