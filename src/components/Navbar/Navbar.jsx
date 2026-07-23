import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import Navlink from '../Navlink/Navlink';
import ProfileDropdown from '../ProfileDropdown/ProfileDropdown';
import {
  Drawer,
  DrawerHeader,
  DrawerItems
} from "flowbite-react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);

  return (
    <header className='sticky top-0 z-50 h-20 bg-bg-primary shadow-md'>
      <div className='container'>
        <nav className='grid grid-cols-[1fr_auto_10fr] md:grid-cols-[1fr_3fr_1fr] h-full gap-4'>
          {/*Logo*/}
          <div className='logo order-2 md:order-1 flex justify-start items-center'>
            <Link to='/' className='font-semibold text-lg xxs:text-xl md:text-2xl text-primary tracking-[-0.6px]
            hover:text-secondary transition-all duration-100 ease-in-out'>
              Flavorly
            </Link>
          </div>

          {/*navlinks +/ sidebar */}
          <div className="list h-full row justify-start md:justify-center order-1 md:order-2">
            {/*Sidebar button*/}
            <button onClick={() => setIsOpen(true)} className='md:hidden'>
              <i className="fa-solid fa-bars text-primary text-md xxs:text-lg"></i>
            </button>

            {/*Sidebar Logic*/}
            <Drawer open={isOpen} onClose={handleClose} className='bg-bg-primary! w-full! xxs:w-70!'>
              {/*SideBar Header*/}
              <DrawerHeader title="Flavourly" titleIcon={() => <></>} 
              className='[&>h5]:text-primary! [&>h5]:font-semibol! [&>h5]:text-xl!
              [&>button]:w-12! [&>button]:h-12! [&>button]:text-primary-foreground [&>button]:hover:bg-transparent! [&>button]:hover:text-primary'/>
              
              {/*SideBar Data*/}
              <DrawerItems>
                <div className='pt-2'>
                    <Navlink mobile />
                </div>
              </DrawerItems>
            </Drawer>

            {/*Navbar Links*/}
            <div className='hidden md:block text-center'>
              <Navlink />
            </div>
          </div>

          {/* Profile & Icons */}
          <div className="row justify-end gap-4 lg:gap-6 order-3 h-full">
            {/*Moon Button */}
            <button className='h-full center'>
              <i className="fa-regular fa-moon navbar-icon"></i>
            </button>

            {/*Bell Button */}
            <button className='h-full center'>
              <i className="fa-regular fa-bell navbar-icon"></i>
            </button>

            {/* Avatar dropdown */}
            <div className="flex">
              <ProfileDropdown />
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
