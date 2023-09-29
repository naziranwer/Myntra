import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  CssBaseline,
  Typography,
  Link,
} from "@mui/material";
import { styled } from "@mui/system";
import NavBar from "../NavBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 0,
}));

const StyledForm = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(2),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  objectFit: "cover",
  display: "block", // Add this to ensure it behaves as a block-level element
  marginLeft: "auto", // Center the image horizontally
  marginRight: "auto",
  marginBottom: theme.spacing(2),
}));

const StyledRegisterLink = styled(Link)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: "center",
  display: "block",
}));

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Registeration completed");
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/signup",
        {
          method: "POST",
          headers: {
            projectId: "9cwb93cdi4mj",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            appType: "music",
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Store user data in localStorage
        // localStorage.setItem("user", data);
        // Redirect to the login page
        toast.success("Registered Successfully. Now Please Login");
        // window.location.href = '/login';
      } else {
        // Handle registration errors
        console.error("Registration failed");
        toast.error("Already Registered.Please Login");
      }
    } catch (error) {
      console.error("Error during registration", error);
    }
  };

  const handleLoginClick = (e) => {
    navigate("/login");

    console.log("login from register called");
  };

  return (
    <div style={{ backgroundColor: "#ffedf3" }}>
      <NavBar />
      <StyledContainer
        component="main"
        maxWidth="xs"
        style={{ backgroundColor: "#fff" }}
      >
        <CssBaseline />
        <StyledImage
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
          alt="Offer Banner"
        />
        <div>
          {/* <Typography component="h1" variant="h5">
            Signup
          </Typography> */}
          <StyledForm noValidate>
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="User Name"
              name="username"
              autoComplete="email"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledButton
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleRegister}
            >
              Sign Up
            </StyledButton>
            <StyledRegisterLink variant="body2" onClick={handleLoginClick}>
              {"Already have an account? Login"}
            </StyledRegisterLink>
          </StyledForm>
        </div>
      </StyledContainer>
    </div>
  );
};

export default Register;
