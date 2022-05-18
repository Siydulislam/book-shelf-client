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
import ManageStocks from './Components/ManageStocks/ManageStocks';
import ManageInventories from './Components/ManageInventories/ManageInventories';
import AddItems from './Components/AddItems/AddItems';
import Login from './Components/Auth/Login/Login';
import Signup from './Components/Auth/Signup/Signup';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route path='/home' element={<Home></Home>}></Route> */}
        <Route path="/items" element={<Items></Items>}></Route>
        <Route path="/authors" element={<Authors></Authors>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        {/* <Route path="/contact" element={<Contact></Contact>}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/manage-stocks/:manageStocksId" element={<ManageStocks></ManageStocks>}></Route>
        <Route path="/manage-inventories" element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path="/add-items" element={<AddItems></AddItems>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
