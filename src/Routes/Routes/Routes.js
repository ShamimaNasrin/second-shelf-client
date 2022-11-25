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
import DashboardLayout from "../../Layout/DashboardLayout";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import AdminRoute from "../AdminRoute/AdminRoute";


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
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashboard/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },

        ]
    },

    {
        path: '*', element: <div className="m-auto ">
            <img className="w-1/2 m-auto" src={errorImg} alt="error" />
        </div>
    }
])

export default router;