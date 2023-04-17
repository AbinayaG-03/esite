import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";

function Navbar(props) {
  const { currentUser, setCurrentUser } = useContext(Context);
  const { signIn, setSignIn } = useContext(Context);

  useEffect(() => {
    const currentUserSaved = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUserSaved !== null) {
      setCurrentUser(currentUserSaved);
    }
    const loggedInSaved = JSON.parse(localStorage.getItem("signIn"));
    if (loggedInSaved !== null) {
      setSignIn(loggedInSaved);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-light  ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                {signIn === false || null ? (
                  <Link className="nav-link" to="/login">
                    login
                  </Link>
                ) : (
                  <Link className="nav-link" to="/login">
                    {currentUser?.name}
                  </Link>
                )}
              </li>

              {/* {logedIn === null && (
                <li className="nav-item">
                  <Link className="nav-link" to="/SignUp">
                    Sign Up
                  </Link>
                </li>
              )} */}
              <li className="nav-item">
                <Link
                  to="/cart"
                  className=" btn rounded-circle border-primary "
                  variant="outline-primary"
                  style={{
                    width: "3rem",
                    height: "3rem",
                    position: "relative",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-cart "
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                  {(currentUser?.items?.length > 0) & (signIn === true) ? (
                    <div className="rounded-circle bg-danger flex-d justify-content-center align-items-end">
                      {currentUser.items.length}
                    </div>
                  ) : null}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
