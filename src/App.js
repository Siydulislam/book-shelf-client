import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Shared/Header/Header';
import Home from './Components/Home/Home/Home';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Footer from './Components/Shared/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
