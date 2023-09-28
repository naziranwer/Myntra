import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
  Container,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Add as AddIcon,
  Remove as RemoveIcon,
} from "@mui/icons-material";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartNavbar from "./CartNavbar";

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
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCompletePayment = () => {
    toast("Order has been placed successfully!", {
      type: "success",
    });
    setOrderPlaced(true);
  };

  useEffect(() => {
    if (orderPlaced) {
      const delay = 3000;
      const timeout = setTimeout(() => {
        navigate("/");
      }, delay);
    }
  }, [orderPlaced, navigate]);
  return (
    <>
      <CartNavbar />
      <br />
      <br />
      <div className="cart">
        {/* <Typography variant="h2" sx={{ textAlign: "center" }}>
          My Cart
        </Typography> */}
        {cartItems.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "80%", // This will make the div take the full viewport height
              margin: "80px 0",
            }}
          >
            <img
              src="https://constant.myntassets.com/checkout/assets/img/empty-bag.png"
              alt="image"
              style={{ height: "200px" }}
            />

            <Typography
              variant="body1"
              sx={{ justifyContent: "center", textAlign: "center" }}
            >
              <h3 style={{ color: "#424553", marginTop: "10px" }}>
                Hey,it feels so light!
              </h3>
              <p style={{ color: "lightgrey", marginTop: "10px" }}>
                There is nothing in your bag.Let's add some items.
              </p>
              <Button
                variant="outlined"
                onClick={() => navigate("/")}
                style={{
                  backgroundColor: "E4135c",
                  border: " 1px solid rgb(255, 63, 108)",
                  color: "rgb(255, 63, 108)",
                  borderRadius: "1px",
                  height: "50px",
                  fontWeight: "bold",
                }}
              >
                ADD ITEMS FROM WISHLIST
              </Button>
            </Typography>
          </div>
        ) : (
          <Container sx={{ display: "flex" }}>
            {/* Left Column: Cart Items */}
            <Box sx={{ flex: 1, marginRight: 3, marginLeft: 1 }}>
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
              </Grid>
            </Box>
            {/* Right Column: Checkout Box */}
            <Box sx={{ flex: 1, marginLeft: 5, marginRight: 5 }}>
              <Paper elevation={0} sx={{ p: 2 }}>
                <Typography variant="h6">
                  PRICE DETAILS ({cartItems.length} item)
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  <Typography variant="body1">Total MRP</Typography>
                  <Typography variant="body1">
                    {`\u20B9`} {calculateTotalMRP()}
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
                  <Typography variant="body1">Delivery Charges</Typography>
                  <Typography variant="body1" style={{ color: "#03a685" }}>
                    {isFreeDelivery() ? "Free" : "\u20B9 50"}{" "}
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
                  <Typography variant="body1">Coupon Discount</Typography>
                  <Typography variant="body1" style={{ color: "#ff3f6c" }}>
                    Apply Coupon
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
                  <Typography variant="body1">
                    Convenience Fee{" "}
                    <span
                      style={{
                        marginLeft: "5px",
                        fontWeight: "bold",
                        color: "rgb(255, 63, 108)",
                      }}
                    >
                      Know More
                    </span>
                  </Typography>
                  <Typography variant="body1">
                    {" "}
                    <del>&#8377;{`\u20B9`}30</del>{" "}
                    <span style={{ color: "#03a685" }}>FREE</span>
                  </Typography>
                </Box>
                <br />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <Typography variant="h4">Total Amount</Typography>
                  <Typography variant="h4">
                    {`\u20B9`}
                    {isFreeDelivery()
                      ? calculateTotalMRP()
                      : calculateTotalMRP() + 50}{" "}
                    {/* Adjust the total amount calculation */}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "100%",
                    mt: 3,
                    height: "50px",
                    backgroundColor: "rgb(255, 63, 108)",
                  }}
                  onClick={() => setOpenModal(true)}
                >
                  <span style={{ fontWeight: "bold", fontSize: "20px" }}>
                    Place Order
                  </span>
                </Button>
              </Paper>
            </Box>
          </Container>
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
          <br />
          <br />
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
          <br />
          {/* <br /> */}
          {paymentType === "Credit Card" || paymentType === "Debit Card" ? (
            <>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <br />
              <br />
              <TextField
                fullWidth
                type="password"
                label="PIN"
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </>
          ) : null}
          <br />
          {paymentType === "Net Banking" || paymentType === "UPI" ? (
            <>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <br />
              <br />
              <TextField
                fullWidth
                label={paymentType === "Net Banking" ? "Bank ID" : "UPI ID"}
                variant="outlined"
                sx={{ mb: 2 }}
              />
            </>
          ) : null}
          <br />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }} // Add some margin at the top
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
      {/* <ToastContainer position="top-center" autoClose={3000} /> */}
      <Footer />
    </>
  );
};

export default Cart;
