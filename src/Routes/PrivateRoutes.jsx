import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Welcome from '../Pages/Welcome'
import Cover from '../Pages/Cover'
import Women from '../Pages/Women'
import Kids from '../Pages/Kids'
import Detail from '../Pages/Detail'
import Men from '../Pages/Men'
import Cart from '../Pages/Cart'
import Billing from '../Pages/Billing'
import Address from '../Pages/Address'
import Signup from '../Pages/auth/Signup'
import Help from '../Pages/Help'
import Signin from '../Pages/auth/Signin'
import Beauty from '../Pages/Beauty'
import Search from '../Pages/Search'

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
            <Route path='/cart' element={token&&<Cart/>}/>
            <Route path='/billing' element={token&&<Billing/>}/>
            <Route path='/address' element={token&&<Address/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/help' element={<Help/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/beauty' element={<Beauty/>}/>
            <Route path='/search' element={<Search/>}/>

</Routes>

    </div>
  )
}

export default PrivateRoutes