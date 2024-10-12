import {createBrowserRouter} from "react-router-dom";
import LoginPage from "../pages/Authentication/LoginPage";
import ConnectDevice from "../pages/ConnectDevice";
import FindingDevice from "../pages/FindingDevice";


const router = createBrowserRouter([
  {
    path: "/",
    children:[
        {index:true,element:<LoginPage/>},
        {path:"/login",element:<LoginPage/>},
        {path:"/ConnectedDevice",element:<ConnectDevice/>},
        {path:"/FindingDevice",element:<FindingDevice/>}

    ]
  },
]);

export default router