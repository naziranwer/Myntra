import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "2px",
};

const imageStyle = {
  height: "25vh",
  width: "104%",
  padding: "0px",
};

const PaymentForm = ({ onClose, onCompletePayment }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [holderName, setHolderName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const checkCardDetails = () => {
    // Your card payment logic here
    if (cardNumber && holderName && expiry && cvv) {
      toast.success("Payment Successful you will be redirected to home page");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  const checkWallet = () => {
    // Your wallet payment logic here
    if (otp && phoneNumber) {
      toast.success("Payment Successful you will be redirected to home page");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <Container style={{ marginTop: "10%" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <FormControl component="fieldset">
              <h5>
                <strong>Select Payment Method</strong>
              </h5>
              <RadioGroup
                row
                aria-label="payment-method"
                name="payment_method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <FormControlLabel
                  value="card"
                  control={<Radio />}
                  label="Card"
                />
                <FormControlLabel
                  value="wallet"
                  control={<Radio />}
                  label="Wallet"
                />
                <FormControlLabel
                  value="netbanking"
                  control={<Radio disabled />}
                  label="Net Banking (Disabled)"
                />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            {paymentMethod === "card" && (
              <form>
                <TextField
                  label="Card Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  inputProps={{ minLength: 16, maxLength: 16 }}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Card Holder's Name"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      onChange={(e) => setHolderName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Expiry"
                      variant="outlined"
                      type="month"
                      fullWidth
                      margin="normal"
                      onChange={(e) => setExpiry(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <TextField
                  label="CVV"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  inputProps={{ minLength: 3, maxLength: 3 }}
                  onChange={(e) => setCvv(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={checkCardDetails}
                  style={{ marginTop: "20px" }}
                >
                  Pay
                </Button>
              </form>
            )}
            {paymentMethod === "wallet" && (
              <form>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  inputProps={{ minLength: 10, maxLength: 10 }}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <TextField
                  label="One Time Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  inputProps={{ min: 1000, max: 9999 }}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={checkWallet}
                  style={{ marginTop: "20px" }}
                >
                  Pay
                </Button>
              </form>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PaymentForm;