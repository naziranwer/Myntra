import React, { useEffect, useRef, useState } from "react";
import Home from "./Home";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Cart from "./Cart";

function SignInSignupWithLocalStorage() {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const [showHome, setShowHome] = useState(false);
  const [show, setShow] = useState(false);
  const localSignUp = localStorage.getItem("signUp");
  const localEmail = localStorage.getItem("email");
  const localPassword = localStorage.getItem("password");
  const localName = localStorage.getItem("name");

  useEffect(() => {
    if (localSignUp) {
      setShowHome(true);
    }
    if (localEmail) {
      setShow(true);
    }
  });

  const handleClick = () => {
    if (name.current.value && email.current.value && password.current.value) {
      localStorage.setItem("name", name.current.value);
      localStorage.setItem("email", email.current.value);
      localStorage.setItem("password", password.current.value);
      localStorage.setItem("signUp", email.current.value);
      alert("Account created successfully!!");
      window.location.reload();
    }
  };

  const handleSignIn = () => {
    if (
      email.current.value === localEmail &&
      password.current.value === localPassword
    ) {
      localStorage.setItem("signUp", email.current.value);
      window.location.reload();
    } else {
      alert("Please Enter valid Credential");
    }
  };

  return (
    <div>
      {showHome ? (
        <Cart />
      ) : show ? (
        <div className="container">
          <h1>Hello {localName}</h1>
          <div className="input_space">
            <TextField placeholder="Email" type="text" inputRef={email} />
          </div>
          <div className="input_space">
            <TextField
              placeholder="Password"
              type="password"
              inputRef={password}
            />
          </div>
          <Button variant="contained" color="primary" onClick={handleSignIn}>
            Sign In
          </Button>
        </div>
      ) : (
        <div className="container">
          <div className="input_space">
            <TextField placeholder="Name" type="text" inputRef={name} />
          </div>
          <div className="input_space">
            <TextField placeholder="Email" type="text" inputRef={email} />
          </div>
          <div className="input_space">
            <TextField
              placeholder="Password"
              type="password"
              inputRef={password}
            />
          </div>
          <Button variant="contained" color="primary" onClick={handleClick}>
            Sign Up
          </Button>
        </div>
      )}
    </div>
  );
}

export default SignInSignupWithLocalStorage;
