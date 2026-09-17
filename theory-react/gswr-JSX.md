JSX - syntax extension for JS that lets us to write HTML-like markup inside a JS file.

Essentially we can say that JSX is syntactic sugar to createElement function of React.
Example:

```javascript
createElement:

import { createElement } from 'react';

function Greeting({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello ',
    createElement('i', null, name),
    '. Welcome!'
  );
}

export default function App() {
  return createElement(
    Greeting,
    { name: 'Taylor' }
  );
}


JSX:

function Greeting({ name }) {
  return (
    <h1 className="greeting">
      Hello <i>{name}</i>. Welcome!
    </h1>
  );
}

export default function App() {
  return <Greeting name="Taylor" />;
}

```

Why do we use JSX?

Because JSX gives us a clean, easier to read way to describe what React component
should render whhile still having access to JS.

Rules of JSX:

1. Return a single root

_correct_ (wrapped in <></>):

return (
<>
element 1
element 2
</>
);

<></>. - called a Fragment

_incorrect_ (multiple elements getting returned without wrapper):

return (
element 1
element 2
);

2. All tags should be closed.

In HTML many tags are self-closing and self-wrapping, but in JSX they must be
closed:

HTML - <input>, <link> , <img>
JSX - <input />, <link />, <img />

3. camelCase most things

JSX turns into JS and attributes of elements becomes keys of JS objects, so we
cant use dashes(kebab case) or reserved words such as class:

class -> className,
stroke-width -> strokeWidth



Converting HTML to JSX

Basically done following rules above and rules for curly bracers.

{const} or {objectName.key}, if CSS used it will be presented as double curly bracers.
