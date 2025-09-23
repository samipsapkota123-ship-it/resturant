import { Routes,Route } from 'react-router-dom'
import Header from './components/header'
import Bills from './pages/Bills'
import Dashboard from './pages/Dashboard'
import Orderlist from './pages/Orderlist'
import History from './pages/History'
import SeeAll from './pages/SeeAll'
import Appetizer from './pages/Appetizer'
import Maincourse from './pages/Maincourse'
import Desert from './pages/Desert'
import Beverages from './pages/Beverages'


function App() {

  return (
    <>
      <Header/>
   
      <div className='auto-container '>
        <SeeAll/>
        {/* <Dashboard/> 
        <Orderlist/>
        <Bills/>
        <History/> */}
        <Routes>
          <Route path='/Dashboard' Component={Dashboard}/>
          <Route path='/History' Component={History}/>
          <Route path='/Bills' Component={Bills}/>
          <Route path='/Orderlist' Component={Orderlist}/>
          <Route path='/SeeAll' Component={SeeAll}/>
          <Route path='/Appetizer' Component={Appetizer}/>
          <Route path='/Maincourse'Component={Maincourse}/>
          <Route path='/Desert\\' Component={Desert}/>
          <Route path='/Beverages.jsx' Component={Beverages}/>
        </Routes>

      </div>
      
    </>
  )
}

export default App
