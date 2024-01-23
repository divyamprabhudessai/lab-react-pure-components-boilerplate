import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleCounterComponent from "./components/SimpleCounterComponent"
import PureCounterComponent from "./components/PureCounterComponent"

function App() {

  return (
    <>
     <SimpleCounterComponent/>
     <PureCounterComponent/>
    </>
  )
}

export default App
