import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';
import Summary from './components/Summary/Summary';
import Featured from './components/Featured/Featured';
import Inventory from './components/Inventory/Inventory';
import Myitems from './components/Myitems/Myitems';
import Manage from './components/Manage/Manage';
import Add from './components/Add/Add';
import About from './components/About/About';
import Update from './components/Update/Update';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/summary" element={<Summary></Summary>}></Route>
        <Route path="/featured" element={<Featured></Featured>}></Route>
        <Route path="/update/:id" element={<Update></Update>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <Myitems></Myitems>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={
          <RequireAuth>
            <Manage></Manage>
          </RequireAuth>
        }></Route>
        <Route path='/add' element={
          <RequireAuth>
            <Add></Add>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
