import Carousel from "./componants/Carousel";
import Navbar from "./componants/Navbar";
import ProductsList from "./componants/ProductsList";
import { Routes, Route } from "react-router-dom";
import React from "react";
import ProductDetails from "./componants/ProductDetails";
import { useState } from "react";
import CartWindow from "./componants/CartWindow";
import SignUpForm from "./componants/SignUpFormik";
import LoginForm from "./componants/LoginFormik";
export const Context = React.createContext();

function App() {
  const [AllProd, setAllProd] = useState([]);
  const [counter, setCounter] = useState(1);
  const [TotalPrice, setTotalPrice] = useState(0);
  const [User, setUser] = useState([]);
  // eslint-disable-next-line no-use-before-define
  const [usersList, setUsersList] = useState(
    JSON.parse(localStorage.getItem("usersList")) === null || undefined
      ? []
      : JSON.parse(localStorage.getItem("usersList"))
  );

  const [signIn, setSignIn] = useState(false);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser")) === null || undefined
      ? []
      : JSON.parse(localStorage.getItem("currentUser"))
  );
  const [Cart, setCart] = useState(currentUser?.items ? currentUser.items : []);
 
  return (
    <Context.Provider
      value={{
        Cart: Cart,
        setCart: setCart,
        AllProd: AllProd,
        setAllProd: setAllProd,
        counter: counter,
        setCounter: setCounter,
        TotalPrice: TotalPrice,
        setTotalPrice: setTotalPrice,
        User: User,
        setUser: setUser,
        usersList: usersList,
        setUsersList: setUsersList,
        signIn: signIn,
        setSignIn: setSignIn,
        currentUser: currentUser,
        setCurrentUser: setCurrentUser,
      }}
    >
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="cart" element={<CartWindow />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="login" element={<LoginForm />} />

          <Route
            path="/"
            element={
              <>
                <Carousel />
                <ProductsList />
              </>
            }
          />
        </Routes>
      </div>
    </Context.Provider>
  );
}
export default App;
