import React from "react"
import logo from "../../assets/pageLogo.png"
import "./Navbar.css"
import Button from "../../components/CButton/Button"

function Navbar() {

//  const logo = "assets/pageLogo.png"



    return (
        <>
<nav className="transparent " >
  <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 ">
  <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src = {logo}  className=" md:h-12  image" alt="Front" />
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <div className="hide">
    <Button text="+234 818 444 1404" onClick={() => console.log("Clicked")} icon = {true} />
    </div>
      <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-cta">
    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row  md:mt-0 md:border-0 bg-transparent gapSpacing " >
      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white font-extrabold  rounded-sm md:bg-transparent md:text-[#CFCFCF] " aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 px-3 md:p-0  font-light text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 ">About</a>
      </li>

      <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className ="flex items-center justify-between w-full py-2 px-3 font-light text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Services<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
  </svg></button>

  <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44  dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                  </li>
               
                </ul>
    
            </div>

      <li>
        <a href="#" className="block py-2 px-3 md:p-0 text-white rounded-sm font-light hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

        </>
    )
}


export default Navbar