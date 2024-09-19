import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputData, setInputData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
  });

  const { name, age, gender, phone } = inputData;

  const [error, setError] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
  });

  function inputHandler(e) {
    const { name, value } = e.target;

    if (name === "name") {
      if (value === "") {
        return setError({
          ...error,
          name: "Name is required",
        });
      } else {
        setError({
          ...error,
          name: "",
        });
      }
    } else if (gender === "") {
      if (value === "") {
        return setError({
          ...error,
          age: "",
          gender: "Gender is required",
        });
      } else {
        setError({
          ...error,
          gender: "",
        });
      }
    } else if (name === "age") {
      if (value === "") {
        return setError({
          ...error,
          age: "Age is required",
          name: "",
        });
      } else if (value < 18 || value >= 100) {
        return setError({
          ...error,
          age: "Age is invalid",
          name: "",
        });
      } else {
        setError({
          ...error,
          age: "",
        });
      }
    } else if (name === "phone") {
      if (value === "") {
        return setError({
          ...error,
          gender: "",
          phone: "Phone is required",
        });
      } else if (value.length < 10) {
        return setError({
          ...error,
          gender: "",
          phone: "Phone is invalid.",
        });
      } else {
        setError({
          ...error,
          name: "",
          age: "",
          gender: "",
          phone: "",
        });
      }
    }

    setInputData({ ...inputData, [name]: value });
  }

  function formHandler(e) {
    e.preventDefault();

    alert(`Done, ${JSON.stringify(inputData)}`);
    console.log(inputData);
  }

  const inputStyle = {
    width: "100%",
    padding: "12px 15px",
    display: "block",
  };

  return (
    <>
      <div className="App">
        <form
          onSubmit={formHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            minWidth: "500px",
          }}
        >
          {error.name && (
            <span className="error">{error.name ? error.name : null}</span>
          )}
          <input
            type="text"
            placeholder="Enter a your name"
            name="name"
            value={name}
            onChange={inputHandler}
            style={inputStyle}
          />
          <span className="error">{error.age ? error.age : null}</span>
          <input
            type="number"
            placeholder="Enter a your age"
            name="age"
            defaultValue={age}
            onChange={inputHandler}
            style={inputStyle}
          />
          <span className="error">{error.gender ? error.gender : null}</span>
          <div style={{ display: "flex", justifyContent: "flex-start" }}>
            Male:{" "}
            <input
              type="radio"
              placeholder="Enter a your gender"
              name="gender"
              value="M"
              onChange={inputHandler}
            />
            &nbsp;&nbsp; FeMale:{" "}
            <input
              type="radio"
              placeholder="Enter a your gender"
              name="gender"
              value="F"
              onChange={inputHandler}
            />
          </div>
          <span className="error">{error.phone ? error.phone : null}</span>
          <input
            type="tel"
            placeholder="Enter a your Phone"
            name="phone"
            defaultValue={phone}
            onChange={inputHandler}
            style={inputStyle}
          />
          <button
            type="submit"
            style={{ padding: "10px 15px", maxWidth: "100px" }}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
