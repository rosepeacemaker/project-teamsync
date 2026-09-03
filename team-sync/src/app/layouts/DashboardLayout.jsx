import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router'
import AsideNav from '../../features/dashboard/ui/components/AsideNav';
import TopNav from '../../features/dashboard/ui/components/topNav'; 

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
        
          <div className='bg-blue-950 h-16 flex flex-col gap-5 p-4'>
            <AsideNav />
          </div>
            <div className='bg-blue-950 flex flex-col gap-5 p-4'>
              <TopNav />
          <Outlet />
          
        </div>
    </div>
  )
}


export default DashboardLayout