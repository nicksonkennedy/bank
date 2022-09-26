import './App.css';
import 'antd/dist/antd.css'; 
import{BrowserRouter,Routes,Route } from 'react-router-dom'

import Home from './components/Home';

import Login from './components/Functional/Login';
import Register from './components/Functional/Register';
import NotFoundPage from './components/TemporalPages/NotFoundPage';
import Dashboard from './components/Admin/Dashboard';



function App() {
 
  return (
   
    <div >
            <BrowserRouter>
    
    
     <Routes>
     <Route path='/' element={ <Home />}/>
     <Route path='/login' element={ <Login />}/>
     <Route path='/register' element={ <Register />}/>
     <Route path='/dashboard' element={ <Dashboard />}/>

     <Route path='*' element={<NotFoundPage />}/> 
     </Routes>

 

    
   </BrowserRouter>
    </div>
   
  );
}

export default App;
