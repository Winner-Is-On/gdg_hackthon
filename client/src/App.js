
import './App.css';
import Dashboard from './components/Dashboard';


import Navbar from './components/Navbar';
import NestedRoutes from './components/NestedRoutes';
import {
  Routes,
  Route
} from 'react-router-dom'

import UserLogin from './components/Userlogin';
import MessCard from './components/MessCard';
import Sinup from './components/Sinup';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<NestedRoutes></NestedRoutes>}>
          <Route index element={Navbar}/>
          <Route path="/login" element={<UserLogin></UserLogin>}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/mess" element={<MessCard></MessCard>}></Route>
          <Route path="/sinup" element={<Sinup></Sinup>}></Route>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
