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

import AdminRoute from "../AdminRoute/AdminRoute";
import MyOrders from "../../Pages/Dashboard/BuyerPages/MyOrders";
import MyProducts from "../../Pages/Dashboard/SellerPages/MyProducts";
import AllSellers from "../../Pages/Dashboard/AdminPages/AllSellers";
import AllBuyers from "../../Pages/Dashboard/AdminPages/AllBuyers";
import ReportedItems from "../../Pages/Dashboard/AdminPages/ReportedItems";
import DashboardDefault from "../../Pages/Dashboard/DashboardDefault";
import AddProduct from "../../Pages/Dashboard/SellerPages/AddProduct";
import MyBuyers from "../../Pages/Dashboard/SellerPages/MyBuyers";
import SellerRoute from "../SellerRoute/SellerRoute";
import Payment from "../../Pages/Dashboard/Payment/Payment";


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
                loader: ({ params }) => fetch(`http://localhost:5000/bookscatgory/${params.catName}`)

            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [

            {
                path: '/dashboard',
                element: <DashboardDefault></DashboardDefault>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/mybuyers',
                element: <SellerRoute><MyBuyers></MyBuyers></SellerRoute>
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
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params}) => fetch(`http://localhost:5000/bookeditems/${params.id}`)
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