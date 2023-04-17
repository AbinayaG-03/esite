import userEvent from "@testing-library/user-event";
import { useContext, useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { Context } from "../App";
import { useNavigate } from "react-router-dom";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function SignUp(props) {
  // const { UsersList, setUsersList } = useContext(Context);

  // const { User, setUser } = useContext(Context);
  const [RegBtnActive, setRegBtnActive] = useState(false);
  // const [EmailWarn, setEmailWarn] = useState(false);
  // const [PasswordWarn, setPasswordWarn] = useState(false);
  // const [passRepeatWarn, setPassRepeatWarn] = useState(false);
  // const [repeatedPass, setRepeatedPass] = useState("");
  // const [Password, setPassword] = useState("");
  // const [Email, setEmail] = useState("");
  // const [UserName, setUserName] = useState("");
  // const [Name, setName] = useState("");
  // const [userNameWarn, setUserNameWarn] = useState(false);
  // const { logedIn, setLogedIn } = useState(Context);
  // const [existEmailWarning, setExistEmailWarning] = useState(false);
  // const navigate = useNavigate();
  // const toLogIn = () => {
  //   navigate("/login");
  // };
  // const handleEmailChange = (e) => {
  //   !neweml_chk.test(e.target.value) ? setEmailWarn(true) : setEmailWarn(false);
  //   setEmail(e.target.value);
  //   setUser({ ...User, Email });
  // };
  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  //   setUser({ ...User, Name });
  //   console.log(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  //   !new_pass_ok.test(e.target.value)
  //     ? setPasswordWarn(true)
  //     : setPasswordWarn(false);
  //   console.log(e.target.value);
  //   setPassword(e.target.value);
  //   setUser({ ...User, Password });
  // };
  // const handlePassRepeatChange = (e) => {
  //   e.target.value !== Password
  //     ? setPassRepeatWarn(true)
  //     : setPassRepeatWarn(false);
  //   setRepeatedPass(e.target.value);
  // };
  // const handleUserNameChange = (e) => {
  //   setUserName(e.target.value);
  //   setUser({ ...User, UserName });
  // };

  // const handleRegister = () => {
  //   if (
  //     (passRepeatWarn === false) &
  //     (EmailWarn === false) &
  //     (PasswordWarn === false) &
  //     (EmailWarn === false) &
  //     (Email.length > 0) &
  //     (Password.length > 0) &
  //     (repeatedPass.length > 0)
  //   ) {
  //     if (UsersList === []) {
  //       setUsersList([User]);
  //       // toLogIn()
  //     } else {
  //       setUsersList((prevState) => [...prevState, User]);
  //       // toLogIn();
  //     }
  //   }
  // };
  // const neweml_chk =
  //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // const upper_case_chk = /(?=.*?[A-Z])/;
  // const lower_case_chk = /(?=.*?[a-z])/;
  // const one_num_chk = /(?=.*?[0-9])/;
  // const one_special_char = /(?=.*?[#?!@$%^&*-])/;
  // const new_pass_ok =
  //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  // // useEffect(() => {
  // //   setUsersList({ ...UsersList, User });
  //   // eslint-disable-next-line
  // }, [User]);
  // useEffect(() => {
  //   console.log(props);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const handleChange = (e) => {
  //   if (e.target.name === "Email") {
  //     const emailFinder = UsersList.forEach((user, i) => {
  //       return user.Email;

  //       // eslint-disable-next-line eqeqeq
  //     });
  //     console.log(emailFinder);

  //     !neweml_chk.test(e.target.value)
  //       ? setEmailWarn(true)
  //       : setEmailWarn(false);
  //     setEmail(e.target.value);
  //   } else if (e.target.name === "Password") {
  //     !new_pass_ok.test(e.target.value)
  //       ? setPasswordWarn(true)
  //       : setPasswordWarn(false);
  //     setPassword(e.target.value);
  //   } else if (e.target.name === "Name") {
  //     setName(e.target.value);
  //   } else if (e.target.name === "repeatedPass") {
  //     e.target.value !== Password
  //       ? setPassRepeatWarn(true)
  //       : setPassRepeatWarn(false);
  //     setRepeatedPass(e.target.value);
  //   } else if (e.target.name === "UserName") {
  //     setUserName(e.target.value);
  //   }
  // };
  // useEffect(() => {
  //   setUser({ ...User, Email });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [Email]);
  // useEffect(() => {
  //   setUser({ ...User, Password });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [Password]);
  // useEffect(() => {
  //   setUser({ ...User, Name });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [Name]);
  // useEffect(() => {
  //   const UserNameFinder = [UsersList].find(finder);
  //   function finder(user) {
  //     return user?.UserName === UserName;
  //   }
  //   if (UserNameFinder === undefined) {
  //     setUser({ ...User, UserName });

  //     setUserNameWarn(false);
  //   } else {
  //     setUserNameWarn(true);
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [UserName]);
  // useEffect(() => {
  //   localStorage.setItem("UsersList", JSON.stringify(UsersList));
  //   console.log(UsersList);
  //   // eslint-disable-next-line
  // }, [UsersList]);

  // useEffect(() => {
  //   const UsersListSaved = JSON.parse(localStorage.getItem("UsersList"));
  //   if (UsersListSaved !== null) {
  //     setUsersList(UsersListSaved);
  //   }
  //   // eslint-disable-next-line
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("UsersList", JSON.stringify(UsersList));
  //   setEmail("");
  //   setPassword("");
  //   setRepeatedPass("");
  //   setName("");
  //   setUser("");
  //   console.log(UsersList);
  //   // toLogIn();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [UsersList]);

  return (
    <>
      <section className="vh-100 bg-#eee">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black borderRadius: 25px">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form
                        className="mx-1 mx-md-4 grid"
                        id="form"
                        onSubmit={props.onSubmit}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              id="name"
                              type="text"
                              name="name"
                              className="form-control row"
                              onChange={props.handleChange}
                            />
                            <label className="form-label row">Your Name</label>
                            {props.errors.name ? (
                              <div style={{ color: "red" }}>
                                {props.errors.name}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0 grid">
                            <input
                              type="text"
                              name="userName"
                              className="form-control row"
                              onChange={props.handleChange}
                            />
                            <label className="form-label row">User Name</label>

                            {props.errors.userName ? (
                              <div style={{ color: "red" }}>
                                {props.errors.userName}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4  ">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw  "></i>
                          <div className="form-outline flex-fill mb-0   ">
                            <input
                              type="Email"
                              id="email"
                              name="email"
                              onChange={props.handleChange}
                              className="form-control row "
                            />
                            <label className="form-label  ">Your Email</label>
                            {props.errors.email ? (
                              <div style={{ color: "red" }}>
                                {props.errors.email}
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0 grid">
                            <input
                              type="password"
                              onChange={props.handleChange}
                              className="form-control row"
                              name="passWord"
                            />
                            <label className="form-label row">Password</label>
                            {props.errors.passWord ? (
                              <div style={{ color: "red" }}>
                                {props.errors.passWord}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0 grid">
                            <input
                              type="Password"
                              className="form-control row"
                              name="passWordRepeat"
                              onChange={props.handleChange}
                            />
                            <label className="form-label row">
                              Repeat your Password
                            </label>

                            {props.errors.passWordRepeat ? (
                              <div style={{ color: "red" }}>
                                {props.errors.passWordRepeat}
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            name="box"
                            onChange={() => {
                              setRegBtnActive(!RegBtnActive);
                            }}
                          />
                          <label className="form-check-label">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        {console.log(props.errors)}
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            // disabled={!RegBtnActive}
                            // onClick={handleRegister}
                          >
                            Submit
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
    </>
  );
}
export default SignUp;
