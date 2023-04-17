import { Carousel } from "bootstrap";
import { React, useContext, useEffect, useState } from "react";
import { Context } from "../App";
// import CartWindow from "./CartWindow";
function CartCal(props) {
  const { prod } = props;

  const { Cart, setCart } = useContext(Context);
  const { currentUser, setCurrentUser } = useContext(Context);
  const [itemNotFound, setItemNotFound] = useState(false);
  const { signIn, setSignIn } = useContext(Context);
  const { usersList, setUsersList } = useContext(Context);
  const addinProducts = () => {
    setCart([...Cart, prod]);
  };
  let usersListNew = JSON.parse(localStorage.getItem("usersList"));
  let currentUserNew = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    setCurrentUser((currentUser) => ({ ...currentUser, items: Cart }));
    // const currentUserFinder = (user) => {
    //   return user.UserName === currentUserNew.UserName;
    // };
    // const userFinder = UsersListNew?.find(currentUserFinder);
    // let i;
    // if (userFinder !== undefined) {
    //   UsersListNew.forEach((user, index) => {
    //     if (user.UserName === userFinder.UserName) {
    //       i = index;
    //     }
    //     UsersListNew[i] = {};
    //     UsersListNew[i] = currentUser;
    //     setUsersList(UsersListNew);
    //     localStorage.setItem("UsersList", JSON.stringify(UsersList));
    //   });
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Cart]);
  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
    if (currentUser.items) setCart(currentUser.items);
    // if (CurrentUserSaved.items !== undefined) setCart(CurrentUserSaved.items);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const finder = (item) => {
      return item.id === prod.id;
    };
    const itemFinder = currentUser?.items?.find(finder);
    if (itemFinder === undefined) {
      setItemNotFound(true);

      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
    if (itemFinder !== undefined) setItemNotFound(false);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    if (currentUserNew?.UserName) {
      const currentUserFinder = (user) => {
        return user.UserName === currentUserNew.UserName;
      };
      const userFinder = usersListNew?.find(currentUserFinder);
      let i;
      if (userFinder !== undefined) {
        usersListNew.forEach((user, index) => {
          if (user.UserName === userFinder.UserName) {
            i = index;
          }
          usersListNew[i] = {};
          usersListNew[i] = currentUser;
          setUsersList(usersListNew);
          localStorage.setItem("usersList", JSON.stringify(usersList));
        });
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  useEffect(() => {
    localStorage.setItem("usersList", JSON.stringify(usersList));
  }, [usersList]);
  return (
    <>
      {itemNotFound ? (
        <div className=" row mt-auto ">
          <button
            className="btn btn-info mt-auto w-100"
            disabled={!signIn}
            onClick={() => {
              setCart([...Cart, prod]);
            }}
          >
            Add to cart
          </button>
        </div>
      ) : (
        <div className=" row mt-auto ">
          <button className="btn btn-info mt-auto w-100">Added</button>
        </div>
      )}
    </>
  );
}
export default CartCal;
