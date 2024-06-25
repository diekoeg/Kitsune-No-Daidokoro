import {useRoutes, BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'

// Pages
import { Home } from '../Home'
import { Menu } from '../Menu'
import { Faq } from '../FAQ'
import { About } from '../About'

// Components
import { MyNavbar } from '../../components/MyNavbar'
import { FooterComp } from '../../components/FooterComp'

import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home />},
    {path: '/menu', element: <Menu />},
    {path: '/faq', element: <Faq />},
    {path: '/about', element: <About />},
    {path: '/*', element: <Home />}
    
  ])

  return routes
}
  

function App() {
  
  return (
    <BrowserRouter>
      <AppRoutes/>
      <MyNavbar />
      <FooterComp />
    </BrowserRouter>
  )
}

export default App
