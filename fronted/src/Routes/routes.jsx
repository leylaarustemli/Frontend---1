import SiteRoot from "../Pages/site/SiteRoot";
import AdminRoot from "../Pages/admin/AdminRoot";
import Home from "../Pages/site/Home/Home";
import Basket from "../Pages/site/Basket/Basket";
import Detail from "../Pages/site/Detail/Detail";
const ROUTES=[
    {
path:"/",
element:<SiteRoot/>,
children:[
    {
        path:"",
        element:<Home/>
    },{
        path:"/basket",
        element:<Basket/>
    },
    {
        path:"/detail",
        element:<Detail/>
    }
   
]
},{
    path:"/admin",
    element:<AdminRoot/>,
    children:[
        {

        }
        
    ]
}
]



export default  ROUTES