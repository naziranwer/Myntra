import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import { DLT, ADD, REMOVE } from "../redux/actions/action";

import {
  Grid,
  Paper,
  Typography,
  Box,
  IconButton,
  Button,
  TextField,
  Modal,
  MenuItem,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from "@mui/icons-material";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartreducer.carts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log("updated cartItems", cartItems);

  const Add = (e) => {
    dispatch(ADD(e));
    console.log("item added to cart");
  };
  const Remove = (e) => {
    dispatch(REMOVE(e));
    console.log("item removed from cart");
  };
  const Delete = (e) => {
    dispatch(DLT(e));
    console.log("item deleted from cart");
  };

  const calculateTotalMRP = () => {
    return cartItems.reduce(
      (total, item) => parseInt(total + item.price * item.qnty),
      0
    );
  };

  // Function to check if free delivery is applicable
  const isFreeDelivery = () => {
    return calculateTotalMRP() >= 500;
  };

  const [openModal, setOpenModal] = useState(false);

  // State for the address and payment type
  const [address, setAddress] = useState("");
  const [paymentType, setPaymentType] = useState("Credit Card");

  const handleCompletePayment = () => {
    toast("Order has been placed successfully!", {
      type: "success",
    });
  };

  const logout = () => {
    localStorage.removeItem("signUp");
    window.location.reload();
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className="cart">
        <Typography variant="h2" sx={{ textAlign: "center" }}>
          My Cart
        </Typography>
        <br />
        {cartItems.length === 0 ? (
          <Typography
            variant="body1"
            sx={{ justifyContent: "center", textAlign: "center" }}
          >
            Your cart is empty. Go to{" "}
            <Button
              onClick={() => navigate("/")}
              style={{ backgroundColor: "#E4135c", color: "white" }}
            >
              HOME
            </Button>
          </Typography>
        ) : (
          <Box sx={{ display: "flex" }}>
            {/* Left Column: Cart Items */}
            <Box sx={{ flex: 1, marginRight: 3, marginLeft: 5 }}>
              <Grid container spacing={2}>
                {cartItems.map((item, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                    sx={{
                      marginBottom: "10px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "150px",
                          height: "200px",
                          objectFit: "cover",
                        }}
                      />
                      <div sx={{ mt: 2 }}>
                        <Typography
                          variant="h6"
                          sx={{ mb: 1, textAlign: "center" }}
                        >
                          {item.title.slice(0, 13)}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ textAlign: "center" }}
                        >
                          Rs: {item.price}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 2,
                          }}
                        >
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<RemoveIcon />}
                            sx={{ minWidth: "20px", minHeight: "20px" }}
                            onClick={() => Remove(item)}
                          >
                            -
                          </Button>
                          <Typography
                            variant="body1"
                            sx={{
                              textAlign: "center",
                              my: 1,
                              marginLeft: "2px",
                              marginRight: "2px",
                            }}
                          >
                            {item.qnty}
                          </Typography>
                          <Button
                            variant="outlined"
                            size="small"
                            startIcon={<AddIcon />}
                            sx={{ minWidth: "20px", minHeight: "20px" }}
                            onClick={() => Add(item)}
                          >
                            +
                          </Button>
                          <IconButton
                            color="error"
                            size="small"
                            sx={{ p: "8px" }}
                            onClick={() => Delete(item)}
                          >
                            <DeleteIcon fontSize="small" />
                          </IconButton>
                        </Box>
                      </div>
                    </Paper>
                  </Grid>
                ))}
                {Array.from({ length: 5 - (cartItems.length % 5) }).map(
                  (_, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      key={`empty-${index}`}
                      sx={{
                        marginBottom: "10px",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div style={{ width: "100%", height: 1 }} />
                    </Grid>
                  )
                )}
              </Grid>
            </Box>
            {/* Right Column: Checkout Box */}
            <Box sx={{ flex: 1, marginLeft: 5, marginRight: 5 }}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6">Checkout Summary</Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Typography variant="body1">Total MRP:</Typography>
                  <Typography variant="body1">
                    Rs: {calculateTotalMRP()}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <Typography variant="body1">Delivery Charges:</Typography>
                  <Typography variant="body1">
                    {isFreeDelivery() ? "Free" : "Rs: 50"}{" "}
                    {/* Adjust the delivery charge value */}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <Typography variant="body1">Total Amount:</Typography>
                  <Typography variant="body1">
                    Rs:{" "}
                    {isFreeDelivery()
                      ? calculateTotalMRP()
                      : calculateTotalMRP() + 50}{" "}
                    {/* Adjust the total amount calculation */}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: "100%", mt: 3 }}
                  onClick={() => setOpenModal(true)}
                  style={{ backgroundColor: "#E4135c" }}
                >
                  Proceed to Checkout
                </Button>
              </Paper>
            </Box>
          </Box>
        )}
      </div>
      <div style={{ marginBottom: "20px" }} />
      {/* Payment Modal */}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            p: 2,
            mt: 10,
            width: 400,
            mx: "auto",
            bgcolor: "background.paper",
          }}
        >
          <Typography variant="h6" id="modal-title" sx={{ mb: 2 }}>
            Checkout Form
          </Typography>
          <TextField
            fullWidth
            label="Address"
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            select
            label="Payment Type"
            variant="outlined"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            sx={{ mb: 2 }}
          >
            <MenuItem value="Credit Card">Credit Card</MenuItem>
            <MenuItem value="Debit Card">Debit Card</MenuItem>
            <MenuItem value="Net Banking">Net Banking</MenuItem>
            <MenuItem value="UPI">UPI</MenuItem>
            <MenuItem value="Cash on Delivery">Cash on Delivery</MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              handleCompletePayment();
              setOpenModal(false);
            }}
          >
            Complete Payment
          </Button>
        </Box>
      </Modal>
      {/* Toast for order confirmation */}
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      <Footer />
    </>
  );
};

export default Cart;
