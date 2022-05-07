import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Pages/About/About';
import AddItems from './Pages/AddItems/AddItems';
import Home from './Pages/Home/Home';
import Update from './Pages/Home/Inventorys/Update/Update';
import Login from './Pages/Login/Login';
import ManageInventorys from './Pages/ManageInventorys/ManageInventorys';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
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
        <Route path='/manageInventorys' element={
          <RequireAuth>
            <ManageInventorys />
          </RequireAuth>
        }></Route>
        <Route path='/additems' element={
          <RequireAuth>
            <AddItems />
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems />
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
