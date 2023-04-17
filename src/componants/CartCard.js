import React, { useContext, useEffect, useState } from "react";
import { Context } from "../App";

function CartCard({ pr }) {
  const { currentUser, setCurrentUser } = useContext(Context);
  const { usersList, setUsersList } = useContext(Context);

  const [counter, setCounter] = useState(1);

  let usersListNew = JSON.parse(localStorage.getItem("usersList"));
  let currentUserNew = JSON.parse(localStorage.getItem("currentUser"));

  const removeItemFromLocalStorage = () => {
    let i;

    let newItems = currentUserNew.items;
    newItems.forEach((it, indx) => {
      if (it.id === pr.id) {
        i = indx;
      }
    });

    newItems.splice(i, 1);
    setCurrentUser((currentUser.items = newItems));

    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")));
  };

  const buyItem = () => {
    const currentUserFinder = (user) => {
      return user.UserName === currentUserNew.UserName;
    };
    const userFinder = usersListNew.find(currentUserFinder);
    let i;
    if (userFinder !== undefined) {
      usersListNew.forEach((user, index) => {
        if (user.UserName === userFinder.UserName) {
          i = index;
          let items = currentUserNew.items;
          let idx;
          items.forEach((item, indx) => {
            if (item.id === pr.id) {
              idx = indx;
              items[idx].Quantity = counter;
              // purchasedItems.push(items[idx]);
              // console.log(purchasedItems);
              usersListNew[i] = {};
              if (currentUserNew.purchasedItems === undefined) {
                currentUserNew.purchasedItems = [items[idx]];
                setCurrentUser(currentUserNew);
              }
              if (currentUserNew.purchasedItems) {
                const finder = (item) => {
                  return item.id === pr.id;
                };
                const itemFinder = currentUserNew.purchasedItems.find(finder);
                if (itemFinder === undefined) {
                  currentUserNew.purchasedItems.push(items[idx]);
                  setCurrentUser(currentUserNew);
                }
              }
              usersListNew[i] = currentUserNew;

              setUsersList(usersListNew);
            }
          });
        }
      });
    }
  };
  const itemPurchased = () => {
    const itemFinder = (item) => {
      return item.id === pr.id;
    };

    const finder = currentUser.purchasedItems?.find(itemFinder);
    if (finder !== undefined) return false;
    else {
      return true;
    }
  };
  // setUsersList((UsersListNew) => [...UsersListNew, currentUserNew]);

  useEffect(() => {
    localStorage.setItem("usersList", JSON.stringify(usersList));
    console.log(usersList);
  }, [usersList]);

  useEffect(() => {
    const currentUserFinder = (user) => {
      return user.UserName === currentUser.UserName;
    };
    const userFinder = usersList.find(currentUserFinder);
    let i;
    if (userFinder !== undefined) {
      usersList.forEach((user, index) => {
        if (user.UserName === userFinder.UserName) {
          i = index;

          usersListNew[i] = {};

          usersListNew[i] = currentUser;

          setUsersList(usersListNew);
        }
      });
    }
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  return (
    <>
      <div className="col-3 card " key={pr.id} style={{ height: "600px" }}>
        <img
          src={pr.image}
          className="card-img-top "
          style={{ height: "300px" }}
          alt=""
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title mh-20 ">{pr.title}</h5>
          <p>Price Per Unit : {pr.price} $</p>
          <p>Quantity : {counter} </p>
          <p>Total Price : {pr.price * counter}$</p>
        </div>
        <div className="row  text-center   mt-auto ">
          {counter < 10 ? (
            <button
              className="btn btn-info  col-md-4 "
              onClick={() => setCounter((counter) => counter + 1)}
            >
              +
            </button>
          ) : (
            <button className="btn btn-info col-md-4 ">+</button>
          )}
          <p className="col-md-4 "> {counter}</p>
          {counter > 0 ? (
            <button
              className="btn btn-info  col-md-4 "
              onClick={() => setCounter((counter) => counter - 1)}
            >
              -
            </button>
          ) : (
            <button className="btn btn-info col-md-4">-</button>
          )}
          <button
            className="btn btn-warning mt-auto"
            onClick={() => {
              removeItemFromLocalStorage();
            }}
          >
            Remove
          </button>
          <button
            className="btn btn-info mt-auto "
            onClick={() => {
              buyItem();
            }}
          >
            {itemPurchased() ? "Buy!" : "Purchased!"}
          </button>
        </div>
      </div>
    </>
  );
}

export default CartCard;
