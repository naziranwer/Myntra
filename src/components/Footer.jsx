import React from "react";
import { Grid, Typography, Link } from "@mui/material";
import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer>
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#f0f0f0",
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">ONLINE SHOPPING</Typography>
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Men
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Women
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Kids
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Home & Living
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Beauty
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Gift Cards
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Myntra Insider
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">USEFUL LINKS</Typography>
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Blog
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Careers
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Site Map
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Corporate Information
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Whitehat
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">CUSTOMER POLICIES</Typography>
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Contact Us
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            FAQ
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            T&C
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Terms Of Use
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Track Orders
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Shipping
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Cancellation
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Returns
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Privacy policy
          </Link>
          <br />
          <Link href="#" sx={{ textDecoration: "none", color: "inherit" }}>
            Grievance Officer
          </Link>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#d0d0d0",
          padding: "10px 0",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Grid item xs={12} md={8}>
          <Typography variant="body2">
            EXPERIENCE MYNTRA APP ON MOBILE
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            KEEP IN TOUCH
          </Typography>
          <div
            sx={{ display: "flex", justifyContent: "center", marginTop: "8px" }}
          >
            <Link
              href="#"
              sx={{
                display: "inline-block",
                margin: "0 8px",
                color: "inherit",
              }}
            >
              <Facebook fontSize="small" />
            </Link>
            <Link
              href="#"
              sx={{
                display: "inline-block",
                margin: "0 8px",
                color: "inherit",
              }}
            >
              <Twitter fontSize="small" />
            </Link>
            <Link
              href="#"
              sx={{
                display: "inline-block",
                margin: "0 8px",
                color: "inherit",
              }}
            >
              <Instagram fontSize="small" />
            </Link>
            <Link
              href="#"
              sx={{
                display: "inline-block",
                margin: "0 8px",
                color: "inherit",
              }}
            >
              <YouTube fontSize="small" />
            </Link>
          </div>
        </Grid>
      </Grid>

      {/* ... previous JSX code ... */}

      {/* Center align the last section */}
      <Grid
        container
        spacing={2}
        sx={{
          backgroundColor: "#909090",
          padding: "10px 0",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={8}>
          <Typography
            variant="body2"
            sx={{ alignItems: "center", textAlign: "center" }}
          >
            In case of any concern, Contact Us
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="body2" sx={{ textAlign: "center" }}>
            © 2023 www.myntra.com. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
