import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import Signup from '../Pages/auth/Signup'
import Signin from '../Pages/auth/Signin'
import Cover from '../Pages/Cover'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import Kids from '../Pages/Kids'
import Detail from '../Pages/Detail'
import Help from '../Pages/Help'
import Search from '../Pages/Search'

function PublicRoutes() {

  let token=localStorage.getItem("token")
  
  return (
    <div>
        <Routes>

            <Route path='/' element={<Cover/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/cover' element={<Cover/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/search' element={<Search/>}/>


        </Routes>
    </div>
  )
}

export default PublicRoutes