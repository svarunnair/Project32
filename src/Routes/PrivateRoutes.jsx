import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Welcome from '../Pages/Welcome'
import Cover from '../Pages/Cover'
import Women from '../Pages/auth/Women'
import Kids from '../Pages/auth/Kids'
import Detail from '../Pages/Detail'
import Men from '../Pages/Men'

function PrivateRoutes() {

  let token=localStorage.getItem('token')
  return (
    <div>

<Routes>
            <Route path='/' element={token&&<Cover/>}/>
            <Route path='/cover' element={token&&<Cover/>}/>
            <Route path='/women' element={token&&<Women/>}/>
            <Route path='/kids' element={token&&<Kids/>}/>
            <Route path='/men' element={token&&<Men/>}/>
            <Route path='/detail/:id' element={token&&<Detail/>}/>


</Routes>

    </div>
  )
}

export default PrivateRoutes