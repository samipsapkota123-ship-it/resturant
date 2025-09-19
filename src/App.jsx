import { Routes,Route } from 'react-router-dom'
import Header from './components/header'
import Bills from './pages/Bills'
import Dashboard from './pages/Dashboard'
import Orderlist from './pages/Orderlist'
import History from './pages/History'


function App() {

  return (
    <>
      <Header/>
      <div className='auto-container'>
        {/* <Dashboard/>
        <Orderlist/>
        <Bills/>
        <History/> */}
        <Routes>
          <Route path='/Dashboard' Component={Dashboard}/>
          <Route path='/History' Component={History}/>
          <Route path='/Bills' Component={Bills}/>
          <Route path='/Orderlist' Component={Orderlist}/>
        </Routes>

      </div>
    </>
  )
}

export default App
