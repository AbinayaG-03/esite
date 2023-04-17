import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../App";
import LoggedIn from "./LoggedIn";

function LogIn(props) {
  // const [emailOrUser, setEmailOrUser] = useState("");
  const { signIn, setSignIn } = useContext(Context);
  // const [userOrEmailWarning, setUserOrEmailWarning] = useState(false);
  // const [showWarinig, setShowWarning] = useState(false);
  // const [password, setPassword] = useState("");
  // const [truePassword, setTruePassword] = useState(
  //   JSON.parse(localStorage.getItem("LogedIn"))
  // );

  // const { UsersList, setUsersList } = useContext(Context);
  const navigate = useNavigate();
  const toSignUp = () => {
    navigate("/signup");
  };
  // const handleChange = (e) => {
  //   if (e.target.name === "UserOrEmailInput") {
  //     setEmailOrUser(e.target.value);
  //   }
  //   if (e.target.name === "Password") {
  //     setPassword(e.target.value);
  //   }
  // };
  // const handleSubmit = () => {
  //   // eslint-disable-next-line no-lone-blocks

  //   if (truePassword === true) {
  //     setLogedIn(true);
  //     setShowPasswordWarning(false);
  //   }
  //   if (truePassword === false) {
  //     setLogedIn(false);
  //     setShowPasswordWarning(true);
  //   }
  // };

  // const UsersList = JSON.parse(localStorage.getItem("UsersList"));

  // useEffect(() => {
  //   localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
  // }, [currentUser]);
  // useEffect(() => {
  //   const loggedInSaved = JSON.parse(localStorage.getItem("LogedIn"));
  //   if (loggedInSaved !== false || null) {
  //     setLogedIn(loggedInSaved);
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  useEffect(() => {
    localStorage.setItem("signIn", JSON.stringify(signIn));
  }, [signIn]);
  // useEffect(() => {
  //   const EmailorUserCheck = (users) => {
  //     return users.UserName === emailOrUser || users.Email === emailOrUser;
  //   };
  //   const checker = UsersList?.find(EmailorUserCheck);
  //   if (checker !== undefined) {
  //     if (checker.Password === password) {
  //       setTruePassword(true);
  //       setCurrentUser(checker);
  //     } else {
  //       setTruePassword(false);
  //       setCurrentUser("");
  //     }
  //   } else {
  //     setUserOrEmailWarning(true);
  //   }
  //   if (checker !== undefined || emailOrUser === "") {
  //     setUserOrEmailWarning(false);
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [emailOrUser, password]);
  // useEffect(() => {}, [truePassword]);

  return (
    <>
      {!signIn ? (
        <section className="vh-100 bg-#eee">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black borderRadius: 25px">
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                          Login In
                        </p>

                        <form
                          className="mx-1 mx-md-4 grid"
                          id="form"
                          onSubmit={props.onSubmit}
                        >
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0 grid">
                              <label className="form-label row">
                                User Name
                              </label>
                              <input
                                type="text"
                                id="Email_Or_UserName"
                                name="Email_Or_UserName"
                                className="form-control row"
                                onChange={props.handleChange}
                              />
                              {props.errors?.Email_Or_UserName ? (
                                <div style={{ color: "red" }}>
                                  {props.errors.Email_Or_UserName}
                                </div>
                              ) : null}
                            </div>
                          </div>

                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0 grid">
                              <label className="form-label row">Password</label>

                              <input
                                type="password"
                                id="passWord"
                                className="form-control row"
                                name="passWord"
                                onChange={props.handleChange}
                              />
                              {props.errors.passWord ? (
                                <div style={{ color: "red" }}>
                                  {props.errors?.passWord}
                                </div>
                              ) : null}
                            </div>
                          </div>

                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            {console.log(props.errors)}
                            <button
                              type="submit"
                              className="btn btn-primary btn-lg"
                            >
                              Sign In
                            </button>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="button"
                              className="btn btn-primary btn-lg"
                              onClick={toSignUp}
                            >
                              Sign Up{" "}
                            </button>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <LoggedIn />
      )}
    </>
  );
}

export default LogIn;
