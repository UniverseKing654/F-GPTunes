import { createBrowserRouter, RouterProvider, redirect } from 'react-router-dom';

import Layout from './pages/Layout';
import LandingPage from './pages/LandingPage/LandingPage';
import RecommendationPage from './pages/RecommendationPage/RecommendationPage';

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
                {
                    path: 'recommendation',
                    element: <RecommendationPage />
                }
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