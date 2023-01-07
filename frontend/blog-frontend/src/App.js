import {React} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/home'
import Profile from './pages/profile'
import Register from './comps/register';
import Signin from './comps/signin';
import Newpost from './comps/newpost';
import Viewpost from './comps/viewpost';
import { useAuthContext } from './hooks/useAuthContext';


function App() {

  const {user} = useAuthContext()
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/:username' element={user ? <Profile/> : <Navigate to={'/'}/>}/>
              <Route path='/register' element={user ? <Navigate to={'/'}/> : <Register/>}/>
              <Route path='/signin' element={user ? <Navigate to={'/'}/> : <Signin/>}/>
              <Route path='/new' element={user ? <Newpost/> : <Navigate to={'/'}/>}/>
              <Route path='/articles/:slug' element={<Viewpost/>}/>
          </Routes>

      </BrowserRouter>

  );


}

export default App;