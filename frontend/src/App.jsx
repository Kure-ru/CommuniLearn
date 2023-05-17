import { Outlet } from 'react-router-dom'
import Nav from "./components/Nav"
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
   <Nav/>
   <ToastContainer/>
   <Outlet/>
   <Footer/>
   </>
  )
}

export default App