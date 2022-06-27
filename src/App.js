

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './Cart';
import Home from './Home';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="Appp">
    <Provider store={store}>
    <BrowserRouter>
     <h1 style={{color:"red", backgroundColor:"yellowgreen",textAlign:"center"}}>React-Redux </h1>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/cartr' element={<Cart/>}></Route>
   
     </Routes>
     </BrowserRouter>
     </Provider>
    </div>
  );
}

export default App;
