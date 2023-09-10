'use client'

import { adminNavOptions, navOptions } from "@/utils";
import { func } from "joi";
import { Fragment } from "react";


const isAuthuser = true;
const user = {
    role: "admin"
}
const isadminView = false;

function Navitems() {
    return (
        <div className="items-center justify-between w-full md:flex md:w-auto" id="nav-items">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">
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
    return (
        <nav className="bg-white w-full z-20 top-0 left-0 border-b border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center cursor-pointer">
                    <span className="self-center text-2xl font-semibold whitespace-normal">Z-Commerce
                    </span>
                </div>
                <div className="flex md:order-2 gap-2">
                    {
                        !isadminView && isAuthuser ?
                            <Fragment>
                                <button>Account</button>
                                <button>Cart</button>
                            </Fragment> : null
                    }
                    {
                        user?.role === "admin" ?
                            !isadminView ? <button>Admin Panel</button> : <button>Client Pagel</button>
                            : null
                    }
                    {
                        isAuthuser ?
                            <button>Logout</button> : <button>Login</button>
                    }
                </div>
                <Navitems/>
                <button 
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:text-gray-700 hover:bg-gray-100 focus:outline-none w-6 h-6 focus:bg-gray-100 focus:text-gray-700 md:hidden "
                aria-controls="navbar-sticky"
                aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <img src="/public/menu.png"></img>
                    
                </button>
            </div>
        </nav>
    )
}