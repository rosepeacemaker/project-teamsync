import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router'

const DashboardLayout = () => {

  let { mode } = useSelector((store) => store.theme);

  useEffect(()=>{
if(mode === "light"){
  document.body.classList.add("light");

}else{
  document.body.classList.remove("light");
}
  },[mode])


  return (
    <div className='text-white h-screen grid grid-cols-[1fr_7fr]'>
        <h1 className='bg-blue-950'>This is For navbar</h1>
        <div>
          <div>
            <h1>
              this is top nav
            </h1>
          <Outlet />
          </div>
        </div>
    </div>
  )
}


export default DashboardLayout