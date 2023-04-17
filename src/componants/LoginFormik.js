import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useContext, useEffect } from "react";
import LogIn from "./LogIn";
import { Context } from "../App";

function LoginForm() {
  const { currentUser, setCurrentUser } = useContext(Context);
  const { signIn, setSignIn } = useContext(Context);
  const formik = useFormik({
    initialValues: {
      Email_Or_UserName: "",
      passWord: "",
    },
    validationSchema: Yup.object({
      Email_Or_UserName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),

      passWord: Yup.string().required("Required"),
    }),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log(formik.values);

    const usersList = JSON.parse(localStorage.getItem("usersList"));
    console.log(usersList);
    if (usersList) {
      const userFinder = (user) => {
        return (
          user.userName === formik.values.Email_Or_UserName ||
          user.email === formik.values.Email_Or_UserName
        );
      };
      let foundUser = usersList.find(userFinder);
      if (!foundUser)
        formik.setFieldError("Email_Or_UserName", "User Not Found");
      else {
        if (formik.values.passWord !== foundUser.passWord)
          formik.setFieldError("passWord", "Password is incorrect");
        else {
          setCurrentUser(foundUser);
        }
      }
    }
  };

  useEffect(() => {
    if (currentUser.name) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      localStorage.setItem("signIn", JSON.stringify(signIn));
      setSignIn(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);
  //  else  {
  //   const usersList = [formik.values];
  //   localStorage.setItem("usersList", JSON.stringify(usersList));
  //   console.log(usersList);
  // }
  // if (UsersList) {
  //   UsersList.push(formik.values);
  //   localStorage.setItem("UsersList", JSON.stringify(UsersList));
  // } else {
  //   const UsersList = [formik.values];
  //   localStorage.setItem("UsersList", JSON.stringify(UsersList));
  // }

  return (
    <>
      <LogIn
        values={formik.values}
        errors={formik.errors}
        onSubmit={onSubmit}
        handleChange={formik.handleChange}
        touched={formik.touched}
      />
    </>
  );
}
export default LoginForm;
