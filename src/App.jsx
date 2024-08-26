import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'
import Footer from './components/Footer'
import Header from './components/Header'
import History from './pages/History'
import Home from './pages/Home'
import Landing from './pages/Landing'
import { Routes, Route } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/his' element={<History />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
