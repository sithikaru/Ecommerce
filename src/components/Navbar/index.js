'use client'

import { Globalcontext } from "@/context";
import { adminNavOptions, navOptions} from "@/utils";
import { func } from "joi";
import { Fragment, useContext } from "react";
import CommonModal from "../CommonModal";


const isAuthuser = true;
const user = {
    role: "admin"
}
const isadminView = false;

function Navitems({isModalView=false}) {
    return (
        <div className={`items-center justify-between w-full md:flex md:w-auto ${isModalView ? "": "hidden"}`} id="nav-items">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-gray-100 rounded-lg md:flex-row md:space-x-3 md:mt-0 md:border-0 bg-white">
                {
                    isadminView ? adminNavOptions.map((item =>
                        <li key={item.id} className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p0">
                            {item.label}
                        </li>
                    )) : navOptions.map((item =>
                        <li key={item.id} className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p0">
                            {item.label}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default function Navbar() {
    const {showNavModal, setshowNavModal} = useContext(Globalcontext)
    return (
        <>
        <nav className="bg-white w-full r-0 z-20 top-0 left-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center cursor-pointer">
                    <span className={`self-center text-2xl font-semibold whitespace-normal`}>Z-Commerce
                    </span>
                </div>
                <div className="flex md:order-2 gap-2">
                <button 
                    data-collapse-toggle="navbar-sticky"
                    type="button"
                    className="inline-flex r-0 items-center p-2 text-sm text-gray-500 rounded-lg hover:opacity-70 hover:bg-gray-100 focus:outline-none w-10 h-10 focus:bg-gray-100 focus:text-gray-700 md:hidden "
                    aria-controls="navbar-sticky"
                    aria-expanded="false"
                    onClick={()=>setshowNavModal(!showNavModal)}
                >
                    <span className="sr-only">Open main menu</span>
                    <img src="/menu.png"></img>

                </button>
                    {
                        !isadminView && isAuthuser ?
                            <Fragment>
                                <button className="mt-1.5 online-black bg-black px-5 py-3 tex-xs font-medium uppercase traking-wide text-white">Account</button>
                                <button className="mt-1.5 online-black bg-black px-5 py-3 tex-xs font-medium uppercase traking-wide text-white">Cart</button>
                            </Fragment> : null
                    }
                    {
                        user?.role === "admin" && isAuthuser?
                            !isadminView ? <button className="mt-1.5 online-black bg-black px-5 py-3 tex-xs font-medium uppercase traking-wide text-white">Admin View</button> : <button className="mt-1.5 online-black bg-black px-5 py-3 tex-xs font-medium uppercase traking-wide text-white">Client View</button>
                            : null
                    }
                    {
                        isAuthuser ?
                            <button className="mt-1.5 online-black bg-black px-5 py-3 tex-xs font-medium uppercase traking-wide text-white">Logout</button> : <button className="mt-1.5 online-black bg-black px-5 py-3 tex-xs font-medium uppercase traking-wide text-white">Login</button>
                    }
                    
                </div>
                
                <Navitems/>
                
            </div>
        </nav>
        <CommonModal show={showNavModal} setShow={setshowNavModal} showModalTitle={false} mainContent={<Navitems isModalView={true}/>}/>
        </>
    )
}