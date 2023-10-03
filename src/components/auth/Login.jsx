import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  CssBaseline,
  Typography,
  Link,
} from "@mui/material";
import NavBar from "../NavBar";
import { styled } from "@mui/system";
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
  marginBottom: theme.spacing(2),
}));

const StyledRegisterLink = styled(Link)(({ theme }) => ({
  marginTop: theme.spacing(2),
  textAlign: "center",
  display: "block",
}));

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          headers: {
            projectId: "9cwb93cdi4mj",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            appType: "music",
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        // Store user data in localStorage
        localStorage.setItem("user", JSON.stringify(data));
        // Redirect to the music player or other authorized content

        toast.success("Login Successful");
        navigate("/");
      } else {
        // Handle login errors
        console.error("Login failed");
        toast.error("Wrong credentials.");
      }
    } catch (error) {
      console.error("Error during login", error);
      toast.error("Internal server problem. Please try again later.");
      setEmail("");
      setPassword("");
    }
  };

  const handleRegisterationClick = (e) => {
    navigate("/register");
  };

  return (
    <div style={{ backgroundColor: "#ffedf3" }}>
      <NavBar />
      <StyledContainer
        component="main"
        maxWidth="xs"
        style={{ backgroundColor: "#fff", padding: 0 }}
      >
        <CssBaseline />
        <StyledImage
          src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2023/1/25/f5e9a029-33c3-4a92-811b-ef7917fe6d441674670210687-offer-banner-300-600x240-code-_-MYNTRA300.jpg"
          alt="Offer Banner"
        />
        <div style={{ padding: "20px" }}>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <StyledForm noValidate>
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
              onClick={handleLogin}
              style={{ backgroundColor: "#FF3E6C", fontWeight: "bold" }}
            >
              Sign In
            </StyledButton>
            <StyledRegisterLink
              variant="body2"
              onClick={handleRegisterationClick}
              style={{ color: "#FF3E6C", cursor: "pointer" }}
            >
              {"Don't have an account? Sign up"}
            </StyledRegisterLink>
          </StyledForm>
        </div>
      </StyledContainer>
    </div>
  );
};

export default LoginPage;
