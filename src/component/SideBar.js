import { useState } from "react";
// the side component of the UI.
const SideBar=()=>{
  // state to control the visibility of the menu during the mobile interface.
  const [menu,setMenu]=useState(false);
return (
  <div className="sm:w-1/5 sm:h-screen sm:fixed max-sm:w-full absolute border-2 p-2 bg-white">
    <div className="flex flex-col">
      <div className="flex justify-between items-center">
        <img src="https://mintlify.s3.us-west-1.amazonaws.com/codeantai/logo/light.svg" className="w-44 h-10"></img>
        {menu==false?
        <i className="fa-solid fa-bars sm:hidden bg-white" onClick={()=>setMenu(true)}></i>:<i className="fa-solid bg-white fa-xmark sm:hidden" onClick={()=>setMenu(false)}></i>}
      </div>
      
      <div className={`sm:block ${menu ? "block" : "hidden"}`} >
            <select className="rounded-lg h-8 border-2 m-4">
              <option value="Dhairya">utkarshDhairyaPa</option>
              <option value="Ram">Ram</option>
              <option value="Priya">Priya</option>
            </select>
            <div className="flex w-full flex-wrap flex-col ml-4 leading-8">
                <p className="w-44"><i className="fa-solid fa-house"></i> Repository</p>
                <p className="w-44"><i className="fa-solid fa-code"></i> AI Code Review</p>
                <p className="w-44"><i className="fa-solid fa-cloud"></i> Cloud Security</p>
                <p className="w-44"><i className="fa-solid fa-book"></i> How to use</p>
                <p className="w-44"><i className="fa-solid fa-gear"></i> Settings</p>
              </div>
      
          <div className="flex w-full flex-wrap flex-col sm:mt-52 leading-8 ml-4">
              <p className="w-44"><i className="fa-solid fa-phone"></i> Support</p>
              <p className="w-44"><i className="fa-solid fa-right-from-bracket"></i> Logout</p>
          </div>
      </div>
    </div>
  </div>
)
}
export default SideBar;