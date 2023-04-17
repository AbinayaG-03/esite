import { useContext, useEffect, useState } from "react";
import { Context } from "../App";
import CartCard from "./CartCard";
import LoggedIn from "./LoggedIn";
import Product from "./Product";

function CartWindow() {
  const { Cart, setCart } = useContext(Context);
  const { TotalPrice, setTotalPrice } = useContext(Context);
  const { currentUser, setCurrentUser } = useContext(Context);
  const { signIn, setSignIn } = useContext(Context);
  // const PriceCalc = (pri, quan) => {
  //   return pri * quan;
  // };
  // useEffect(() => {
  //   let cartCopy = Cart.map((prod) => prod);
  //   cartCopy.forEach((Pr, i) => {
  //     cartCopy[i].subTotal = PriceCalc(Pr.price, counter);
  //     setTotalPrice(
  //       (prevstate) => parseFloat(prevstate) + parseFloat(Cart[i].subTotal)
  //     );
  //   });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const cartWindowContent = () => {
    if (signIn === false) {
      return <h1>Please log in to Add Products </h1>;
    }
    if (
      (currentUser.items === undefined || currentUser.items.length === 0) &
      (signIn === true)
    )
      return <h1>Add Products to Preview</h1>;

    if (currentUser.items !== undefined) {
      if (currentUser.items.length !== 0) {
        return (
          <div className="row">
            {currentUser.items.map((pr) => {
              return <CartCard pr={pr} key={pr.id} />;
            })}
          </div>
        );
      }
    }
  };
  useEffect(() => {
    cartWindowContent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return <>{cartWindowContent()}</>;
}
export default CartWindow;
