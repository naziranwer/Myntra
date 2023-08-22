import React from "react";
import { AppBar, Toolbar, Typography, Box, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CartNavbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#ffffff", height: "70px" }}
    >
      <Container>
        <Toolbar
          style={{
            display: "flex",
            alignitems: "center",
            justifycontent: "space-between",
            gap: "between",
          }}
        >
          <Box flexGrow={1} textAlign="left">
            <img
              src="https://tse3.explicit.bing.net/th?id=OIP.QWUAETWj7eqbEhMAqdNl2gHaFW&pid=Api&P=0&h=180"
              alt="Logo"
              height="40"
              style={{ height: 50, cursor: "pointer", margin: "5px" }}
              onClick={() => navigate("/")}
            />
          </Box>

          <Box
            flexGrow={2}
            sx={{
              marginLeft: "200px",
              color: "#535766",
            }}
          >
            <Typography
              variant="h8"
              textAlign="center"
              style={{
                fontWeight: "bold",
                fontSize: "12px",
                letterSpacing: "1px",
              }}
            >
              <span
                style={{
                  marginRight: "8px",
                  color: "#20BD99",
                  borderBottom: "2px solid #20BD99",
                }}
              >
                BAG
              </span>
              ----------
              <span style={{ margin: "0 8px" }}>ADDRESS</span>
              ----------
              <span style={{ marginLeft: "8px" }}>PAYMENT</span>
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="flex-end"
            justifyContent="flex-end"
            flexDirection="row"
            color="black"
          >
            <img
              src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
              class="secureIcon"
              width="26"
              height="28"
              style={{ marginBottom: "2px", marginRight: "5px" }}
            />
            <Typography
              variant="h8"
              style={{
                fontWeight: "bold",
                fontSize: "12px",
                marginRight: "5px",
                letterSpacing: "1px",
                color: "#535766",
              }}
            >
              1 0 0 % SECURE
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default CartNavbar;
