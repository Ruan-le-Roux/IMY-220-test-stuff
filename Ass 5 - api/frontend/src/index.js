import React from "react"
import { createRoot } from 'react-dom/client';

import StarWars from './components/StarWars';


const domNode = document.getElementById('root');

const root = createRoot(domNode);
root.render(<StarWars />);

// import ReactDom from "react-dom/client";

// const root = createRoot(domNode);

// root.render(<App/>);

// class Greeting extends React.Component
// {
//     render()
//     {
//         return(
//             <div>
//                 <h1>Some heading for fun here work</h1>

//             </div>

//         );
//     }
// }