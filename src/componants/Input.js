function Input() {
  let state = {
    firstname: "ahmad",
    lastname: "hijjawi",
  };
  return (
    <>
      <label>
        {state.firstname} {state.lastname}
      </label>
      <input
        placeholder="type here"
        onChange={() => {
          console.log("hello");
          state.lastname = "asem";
          console.log(state.lastname);
          <label>
            {state.firstname} {state.lastname}
          </label>;
        }}
      />
    </>
  );
}

export default Input;
