import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';

import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage/LandingPage';

function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '',
                    element: <LandingPage />
                },
            ]
        }, 
        {
            path: '*',
            loader: () => {
                return redirect('/')
            }
        }
    ])

    return (
        <RouterProvider router={router} />
    );
}

export default Router;