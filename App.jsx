import React from 'react'
import { BrowserRouter } from 'react-router'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path = {Home} Element={home}/>
        <Route path = {cart} Element ={cart}/>
      </Routes>
    </div>
  )
}

export default App
