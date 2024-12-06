// eslint-disable-next-line no-unused-vars
import {createBrowserRouter} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Covid from './pages/Covid';
import Programming from './pages/Programming';
import Home from './pages/Home.jsx';
import Save from './pages/Save.jsx';
import Search from './pages/Search.jsx';


const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout />,
        children : [
            {
                path : "",
                element : <Home />
            },
            {
                path : "/Programming",
                element : <Programming />
            },
            {
                path : "/Covid",
                element : <Covid />
            },
            {
                path : "/Saved",
                element : <Save />
            },
            {
                path : "/Search/:keyword",
                element : <Search />
            }
        ]
    }
])

export default router;