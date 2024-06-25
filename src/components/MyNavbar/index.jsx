import React from 'react'
import Logo from "../../assets/logo.svg?react";
import { Navbar} from 'flowbite-react';
import { NavItem } from '../NavItem';

function MyNavbar() {
  const [collapsed,setCollapsed] = React.useState(false);
  const handleNav = () => (
    setCollapsed((state)=>!state)
  )

  const activeStyle = 'underline underline-offset-4 font-semibold text-2xl'
  return (
    <nav className='bg-pink-300  top-0 fixed w-full md:absolute z-10'>
      <Navbar fluid rounded className='bg-pink-300  w-full px-5 font-[Raleway] lg:block rounded-none'>
        <NavItem  className
            to={'/'}
            activeStyle={activeStyle}
            >
              <Logo height="300" className="max-w-[200px] -mt-15 max-h-[100px] fill-white xl:ml-24"/>
        </NavItem>
        <Navbar.Toggle onClick={handleNav}/>
        <Navbar.Collapse className={`-mt-5 ${collapsed ? 'flex':'hidden'}`} 
        onClick={handleNav}>
          <NavItem to={'/'}
              activeStyle={activeStyle}
              >
                Home
          </NavItem>
          <NavItem to={'/menu'}
              activeStyle={activeStyle}
            >
              Menú
          </NavItem>

          <NavItem to={'/about'}
              activeStyle={activeStyle}
            >
              ¿Quiénes somos?
          </NavItem>
          <NavItem to={'/faq'}
            activeStyle={activeStyle}
            >
              FAQ
          </NavItem>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}

export {MyNavbar}