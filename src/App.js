import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import AddItems from './Pages/AddItems/AddItems';
import Home from './Pages/Home/Home';
import Update from './Pages/Home/Inventorys/Update/Update';
import Login from './Pages/Login/Login';
import ManageInventorys from './Pages/ManageInventorys/ManageInventorys';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Header from './Pages/Shared/Header/Header';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/home/:id' element={
          <RequireAuth>
            <Update></Update>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/about' element={
          <RequireAuth>
            <About />
          </RequireAuth>
        }></Route>
        <Route path='/manageInventorys' element={ <ManageInventorys /> }></Route>
        <Route path='/additems' element={ <AddItems/> }></Route>
      </Routes>

    </div>
  );
}

export default App;
