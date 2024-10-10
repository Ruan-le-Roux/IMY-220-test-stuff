import React from "react"
import { createRoot } from 'react-dom/client';
import App from './App';


// import ReactDom from "react-dom/client";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App/>);