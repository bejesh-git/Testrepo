import { createBrowserRouter } from "react-router-dom";
import ToggleImgComp from "../task/ToggleImgComp";
import MultipleImgComp from "../task/MultipleImgComp";
import EmpDetails from "../task/EmpDetails";
import App from "../App";
import MyStateComp from "../component/MyStateComp";
import PageNotFoundComp from "../Layout/PageNotFoundComp";
import FunctionCom from "../component/FunctionCom";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
import UseStateHooks from "../Hooks/UseStateHooks";
import LoginComp from "../Layout/LoginComp"
import MainDashBoard from "../Layout/MainDashBoard";
import MyFavColorComp from "../component/MyFavColorComp";
import FormValComp from "../component/FormValComp";
import FormValidationComp from "../task/FormValidationComp";
import ProductDashComp from "../CRUD/ProductDashComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductEditComp from "../CRUD/ProductEditComp";
import ProtectedRouting from "./ProtectedRouting";

import LoggoutComp from "./LoggoutComp"
import MyCaurosalComp from "../component/MyCaurosalComp";
import DataListComp from "../reduxCode/DataListComp";


const routing = createBrowserRouter([

    { path: "", element: <LoginComp /> },
    { path: "loggin", element: <LoginComp /> },
    {
        // path: "dashboard", element: <MainDashBoard />, children: [
        path: "dashboard", element: <ProtectedRouting Component={MainDashBoard}/>, children: [

            // default Routing
            { path: "", element: <App /> },
            
            { path: "favcolor", element: <MyFavColorComp newColor="red"/> },
            { path: "formval", element: <FormValComp /> },
            { path: "formassign", element: <FormValidationComp /> },
            
            { path: "product", element: <ProductDashComp />},
            { path: "addproduct", element: <ProductAddComp /> },
            { path: "editproduct/:id", element: <ProductEditComp /> },
            { path: "loggout", element: <LoggoutComp /> },
            { path: "caurosal", element: <MyCaurosalComp /> },
                
            

            // Naming Routing
            { path: "task/1", element: <ToggleImgComp /> },
            { path: "task/2", element: <MultipleImgComp /> },
            { path: "task/3", element: <EmpDetails /> },
            { path: "datalist", element: <DataListComp /> },


            // Child Routing
            {
                path: "reacthooks", element: <ReactHooksComp />, children: [
                    { path: "useeffect", element: <UseEffectHooksComp /> },
                    { path: "usestate", element: <UseStateHooks /> }
                ]
            },




            // Parameters Routing
            { path: "function/:id", element: <FunctionCom /> },
        ]
    },



    //wild-card routing
    { path: "*", element: <PageNotFoundComp /> },


])

export default routing;