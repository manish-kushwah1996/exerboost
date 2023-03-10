// import logo from './logo.svg';
import Home from './Component/home';

// import Registration from './Component/signup';
import Signin from './Component/signin';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Payment from './Component/Payment';
import Signup from './Component/signup';
import AddProduct from './Component/AddProduct';
import Dashboard from './Component/Dasboard';
import ProductList from './Component/ProductList';
import Users from './Component/UserList';
import EditProduct from './Component/EditProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home />}></Route>
      <Route path='/registration' element={<Signup />} ></Route>
      <Route path='/login' element={<Signin />} ></Route>
      <Route path='/payment' element={<Payment/>} ></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/addProduct' element={<AddProduct/>} ></Route>
      <Route path='/editProduct' element={<EditProduct />} ></Route>
      <Route path='/productList' element={<ProductList/>} ></Route>
      <Route path='/userslist' element={<Users></Users>} ></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
