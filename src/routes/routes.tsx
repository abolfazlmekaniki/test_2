import {createBrowserRouter} from "react-router-dom";
import LoginPage from "../pages/Authentication/LoginPage";
import ConnectDevice from "../pages/ConnectDevice";
import FindingDevice from "../pages/FindingDevice";
import CreatePatient from "../pages/CreatePatient";


const router = createBrowserRouter([
  {
    path: "https://test-two-gilt-98.vercel.app/",
    children:[
        {index:true,element:<LoginPage/>},
        {path:"/login",element:<LoginPage/>},
        {path:"/ConnectedDevice",element:<ConnectDevice/>},
        {path:"/FindingDevice",element:<FindingDevice/>},
        {path:"/CreatePatient",element:<CreatePatient/>}

    ]
  },
]);

export default router