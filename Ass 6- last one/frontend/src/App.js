import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    }
]);

class App extends React.Component
{
    render()
    {
        return(
            <RouterProvider router={router}/>
        );
    }
}

export default App;
