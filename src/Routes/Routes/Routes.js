import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import errorImg from "../../images/error-img.png";
import Category from "../../Pages/Category/Category";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/aboutt',
                element: <About></About>
            },
            {
                path: '/category/:catName',
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                // loader: ({params}) => fetch(`/${params.catName}`)
            }
        ]
    },

    {
        path: '*', element: <div className="m-auto ">
            <img className="w-1/2 m-auto" src={errorImg} alt="error" />
        </div>
    }
])

export default router;