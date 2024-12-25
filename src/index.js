import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './component/Main';
import SideBar from './component/SideBar';
import Login from './component/Login'
import { createBrowserRouter,RouterProvider } from "react-router-dom";


const App=()=>{
  return (
    <div className='flex max-sm:flex-col max-sm:flex-wrap'>
      <SideBar />
      <Main />
    </div>
    
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<Login/>,
   
  },
  {
    path:"dashboard",
    element:<App />
  }
  
]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
