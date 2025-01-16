import Logo from "./assets/logomark.png"
import { CiSearch } from "react-icons/ci";
import { CiGrid41 } from "react-icons/ci";
import { RiMoonClearLine } from "react-icons/ri";
import { IoIosMenu } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";
import { updateViewState } from "../store/viewSlice";
import { updateMenuState } from "../store/menuSlice";
import { IoListOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { useEffect, useState } from "react";




export default function Layout({children}:{children:any}){
    const [darkMode , setDarkMode] = useState(false)
    const view = useSelector((state:any) => state.viewState.view)

    useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }, [darkMode]);
    
    const dispatch = useDispatch()
    return (
        <div className="w-full">
            
            {/* Nav */}
            <div className="flex justify-between py-[12px] items-center">
                {/* left  */}
                <div className="flex items-center gap-[24px] dark:text-white">
                <div className="text-[24px] cursor-pointer" onClick={() => dispatch(updateMenuState())}>
                    <IoIosMenu/>
                </div>
                    <div className="flex gap-1 font-bold text-primary">
                    <div className="w-[32px] h-[32px]">
                        <img src={Logo} alt="" className="w-[32px] h-[32px]" />
                    </div>
                    <h1 className="font-Sen text-[24px]">DoIt</h1>
                    </div>
                </div>
                {/* right */}
                <div className="flex items-center text-[24px] gap-[24px] dark:text-white">
                    <div >
                       <CiSearch/>
                    </div>
                    {
                        view ?  <div className="cursor-pointer" onClick={()=>dispatch(updateViewState())}>
                        <CiGrid41/>
                     </div> :  <div className="cursor-pointer" onClick={()=>dispatch(updateViewState())}>
                       <IoListOutline/>
                    </div>
                    }
                   
                    <div className="cursor-pointer" onClick={()=> setDarkMode(!darkMode)}>
                        {
                            darkMode ? <IoSunnyOutline/>: <RiMoonClearLine/>
                        }
                       
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}
