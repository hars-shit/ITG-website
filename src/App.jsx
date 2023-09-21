
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainHeader from './layout/Header/MainHeader'
import Home from './pages/Home'
import AllNews from './components/news/AllNews'
import AllEvents from './components/events/AllEvents'
import Footer from './layout/Footer/Footer'

function App() {


  return (
   <>
   <MainHeader />
   <Routes>
   <Route path='/' element={<Home />} />
   <Route path='/news' element={<AllNews />} />
   <Route path='/events' element={<AllEvents />} />
   {/* <Home /> */}
   </Routes>
   <Footer />
  
   </>
  )
}

export default App
