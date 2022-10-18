import React from "react";
import { useState } from "react";
function Button(props) {
  let ahamdss = {
    firstname: props.firstname,
    lastname: props.lastname,
  };

  const [value, setValue] = useState(props.lastname);
  return (
    <>
      <button onClick={() => setValue("asem")}>hello</button>

      <h1>
        {props.firstname} {value}
      </h1>
    </>
  );
}

export default Button;
