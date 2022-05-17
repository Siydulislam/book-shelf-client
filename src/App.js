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
        <Route path="/manage-stocks/:manageStocksId" element={<ManageStocks></ManageStocks>}></Route>
        <Route path="/manage-inventories" element={<ManageInventories></ManageInventories>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
