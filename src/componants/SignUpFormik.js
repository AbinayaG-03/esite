import { useFormik } from "formik";
import * as Yup from "yup";
import SignUp from "./SignUp";

function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      userName: "",
      email: "",
      passWord: "",
      passWordRepeat: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      userName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),

      passWord: Yup.string()
        .required("Required")
        .matches(
          /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
      passWordRepeat: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("passWord"), null], "Passwords must match"),
    }),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    console.log(formik.errors);
    // if (formik.errors.length === 0) {
    const usersList = JSON.parse(localStorage.getItem("usersList"));
    if (usersList) {
      console.log(formik.values);
      const userNameFinder = (user) => {
        return (
          user.userName === formik.values.userName ||
          user.email === formik.values.email
        );
      };
      const usersListCopy = usersList.map((user) => user);
      const finder = usersListCopy.find(userNameFinder);
      if (finder === undefined) {
        delete formik.values.passWordRepeat;
        usersList.push(formik.values);
        localStorage.setItem("usersList", JSON.stringify(usersList));
      } else {
        formik.setFieldError("email", "user name or email already used");
      }
    } else {
      delete formik.values.passWordRepeat;
      const usersList = [formik.values];
      localStorage.setItem("usersList", JSON.stringify(usersList));
      // }
    }
  };
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
      <SignUp
        values={formik.values}
        errors={formik.errors}
        onSubmit={onSubmit}
        handleChange={formik.handleChange}
        touched={formik.touched}
      />
    </>
  );
}
export default SignUpForm;
