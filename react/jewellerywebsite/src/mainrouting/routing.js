import { createBrowserRouter } from "react-router-dom";
import MainIndexComp from "../components/MainIndexComp";
import HomeMainComp from "../components/home/HomeMainComp";
import AboutusMainComp from "../components/about/AboutusMainComp";
import ProductMainComp from "../components/product/ProductMainComp";

import PageNotFoundComp from "../components/PageNotFoundComp";
import ContactusMainComp from "../components/contactus/ContactusMainComp";
import ProductCategoryComp from "../components/product/ProductCategoryComp";
import ProductMaterialComp from "../components/product/ProductMaterialComp";

 
const routing = createBrowserRouter([
    { path: "index", element: <MainIndexComp />, children:[
        {path : "home", element:<HomeMainComp/>},
        {path : "about", element:<AboutusMainComp/>},
        {path : "products", element:<ProductMainComp/>},
        {path : "category", element:<ProductCategoryComp/>},
        {path : "material/:material", element:<ProductMaterialComp/>},
        {path : "contact", element:<ContactusMainComp/>}
    ] },

    { path: "*", element:<PageNotFoundComp/>}



]);


export default routing;