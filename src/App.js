// import logo from './logo.svg';
import Home from './Component/home';

// import Registration from './Component/signup';
import Signin from './Component/signin';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Payment from './Component/Payment';
import Signup from './Component/signup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>

      <Route path='/' element={<Home />}></Route>
      <Route path='/registration' element={<Signup />} ></Route>
      <Route path='/login' element={<Signin />} ></Route>
      <Route path='/payment' element={<Payment/>} ></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
