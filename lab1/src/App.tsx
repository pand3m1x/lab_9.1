import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AlertBox from './Components/AlertBox'
import ProductDisplay from './Components/ProductDisplay'
import UserProfileCard from './Components/UserProfileCard'

function App() {


  return (
    <>
      <AlertBox></AlertBox>
      <ProductDisplay></ProductDisplay>
      <UserProfileCard></UserProfileCard>
    </>
  )
}

export default App
