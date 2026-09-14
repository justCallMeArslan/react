import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greetings from './Greetings'
import AskAge, { cube, foo, graph } from './Graph.jsx';


// naemd functions cant be used as JSX part, its basic JS and should be used separately

graph.options = {
  color: "red",
  thickness: "3px"
};

graph.draw();
console.log(cube(5));
console.log(foo);




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greetings />
    <AskAge />
  </StrictMode>,
)
