import { createBrowserRouter } from "react-router-dom"
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import SubscriptionPolicy from './pages/SubscriptionPolicy'

const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout />, 
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:'about',
                element:<About />
            },
            {
                path:'notFound',
                element:<NotFound />
            },
            {
                path:'subscriptionPolicy',
                element:<SubscriptionPolicy />
            }
        ]
    }
]);

export default router;