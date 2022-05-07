import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <div>
     <Header></Header>
     <h1>Hello</h1>
     <Routes>
     <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
     </Routes>
     <Footer></Footer>
     <ToastContainer/>
    </div>
  );
}

export default App;
