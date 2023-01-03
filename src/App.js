import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AddProduct from './Components/AddProduct';
import Address from './Components/Address';
import Checkout from './Components/Checkout';
import Home from './Components/Home';
import Login from './Components/Login';
import Payment from './Components/Payment';
import Signup from './Components/Signup';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import styled from 'styled-components';
import Orders from './Components/Orders';
import NotFoundPage from './Components/NotFoundPage';
import Success from './Components/Success';

const promise = loadStripe(
  "pk_test_51MHt1ASFBIyqZbMVubG9U6cCgy5todkprlXzX4PyRqrkV1BOjpp5H6S9rYplYLCIDxEu9K81U2a4MRTUqNVbez8S00l5KWQN3q"
);
const App = () => {

  return (
    <BrowserRouter>
   
   <Container>
   <Routes>
   <Route path='/' element={<Home/>} />
   
   <Route path='/login' element={<Login/>} />
   <Route path='/signup' element={<Signup/>} />
   <Route path='/checkout' element={<Checkout/>} />
   <Route path='/address' element={<Address/>} />
   <Route path='/payment' element={ 
     <Elements stripe={promise}>
   <Payment />
 </Elements>} />
   <Route path='/addproduct' element={<AddProduct/>} />
   <Route path='/orders' element={<Orders/>} />
   <Route path="/success" element={<Success/>} />
   <Route path='*' element={<NotFoundPage/>} />
   </Routes>
   </Container>
  

    </BrowserRouter>
  )
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default App