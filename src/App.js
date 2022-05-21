import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Footer from './Components/Shared/Footer/Footer';
import Items from './Components/Home/Items/Items';
import Authors from './Components/Home/Authors/Authors';
// import Contact from './Components/Home/Contact/Contact';
import Reviews from './Components/Home/Reviews/Reviews';
import Inventory from './Components/Inventory/Inventory';
import ManageInventories from './Components/ManageInventories/ManageInventories';
import AddItems from './Components/AddItems/AddItems';
import Login from './Components/Auth/Login/Login';
import Signup from './Components/Auth/Signup/Signup';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import MyItems from './Components/MyItems/MyItems';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';

function App() {
  return (
    <>
      <ToastContainer />
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/items" element={<Items></Items>}></Route>
        <Route path="/authors" element={<Authors></Authors>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        {/* <Route path="/contact" element={<Contact></Contact>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/inventory/:InventoryId" element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path="/manage-inventories" element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path="/add-items" element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path="/myItems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
