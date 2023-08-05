// // import React from 'react'

// // export const Footer = () => {
// //   return (
// //     <footer className="myntra-footer">
// //       <div className="container">
// //         <div className="row">
// //           <div className="col-md-4">
// //             <h3>Categories</h3>
// //             <ul>
// //               <li><a href="#">Men</a></li>
// //               <li><a href="#">Women</a></li>
// //               <li><a href="#">Kids</a></li>
// //               <li><a href="#">Home & Living</a></li>
// //               <li><a href="#">Discover</a></li>
// //             </ul>
// //           </div>
// //           <div className="col-md-4">
// //             <h3>Popular Brands</h3>
// //             <ul>
// //               <li><a href="#">Nike</a></li>
// //               <li><a href="#">Adidas</a></li>
// //               <li><a href="#">Puma</a></li>
// //               <li><a href="#">Levi's</a></li>
// //               <li><a href="#">Biba</a></li>
// //             </ul>
// //           </div>
// //           <div className="col-md-4">
// //             <h3>Support</h3>
// //             <ul>
// //               <li><a href="#">Contact Us</a></li>
// //               <li><a href="#">FAQs</a></li>
// //               <li><a href="#">Shipping</a></li>
// //               <li><a href="#">Returns</a></li>
// //               <li><a href="#">Track Order</a></li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   )
// // }

// import React from "react";
// import { Grid, Typography, Link } from "@mui/material";

// const Footer = () => {
//   return (
//     <footer>
//       <Grid
//         container
//         spacing={2}
//         sx={{ backgroundColor: "#f0f0f0", padding: "20px 0" }}
//       >
//         <Grid item xs={12} sm={6} md={4}>
//           <Typography variant="h6">ONLINE SHOPPING</Typography>
//           <Link href="#">Men</Link>
//           <br />
//           <Link href="#">Women</Link>
//           <br />
//           <Link href="#">Kids</Link>
//           <br />
//           <Link href="#">Home & Living</Link>
//           <br />
//           <Link href="#">Beauty</Link>
//           <br />
//           <Link href="#">Gift Cards</Link>
//           <br />
//           <Link href="#">Myntra Insider</Link>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <Typography variant="h6">USEFUL LINKS</Typography>
//           <Link href="#">Blog</Link>
//           <br />
//           <Link href="#">Careers</Link>
//           <br />
//           <Link href="#">Site Map</Link>
//           <br />
//           <Link href="#">Corporate Information</Link>
//           <br />
//           <Link href="#">Whitehat</Link>
//         </Grid>

//         <Grid item xs={12} sm={6} md={4}>
//           <Typography variant="h6">CUSTOMER POLICIES</Typography>
//           <Link href="#">Contact Us</Link>
//           <br />
//           <Link href="#">FAQ</Link>
//           <br />
//           <Link href="#">T&C</Link>
//           <br />
//           <Link href="#">Terms Of Use</Link>
//           <br />
//           <Link href="#">Track Orders</Link>
//           <br />
//           <Link href="#">Shipping</Link>
//           <br />
//           <Link href="#">Cancellation</Link>
//           <br />
//           <Link href="#">Returns</Link>
//           <br />
//           <Link href="#">Privacy policy</Link>
//           <br />
//           <Link href="#">Grievance Officer</Link>
//         </Grid>
//       </Grid>

//       <Grid
//         container
//         spacing={2}
//         sx={{
//           backgroundColor: "#d0d0d0",
//           padding: "10px 0",
//           alignItems: "center",
//         }}
//       >
//         <Grid item xs={12} md={8}>
//           <Typography variant="body2">
//             EXPERIENCE MYNTRA APP ON MOBILE
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={4}>
//           <Typography variant="body2" sx={{ textAlign: "center" }}>
//             KEEP IN TOUCH
//           </Typography>
//         </Grid>
//       </Grid>

//       <Grid
//         container
//         spacing={2}
//         sx={{ backgroundColor: "#c0c0c0", padding: "10px 0" }}
//       >
//         <Grid item xs={12}>
//           <Typography variant="body2" sx={{ textAlign: "center" }}>
//             100% ORIGINAL guarantee for all products at myntra.com
//           </Typography>
//           <Typography variant="body2" sx={{ textAlign: "center" }}>
//             Return within 14 days of receiving your order
//           </Typography>
//         </Grid>
//       </Grid>

//       <Grid
//         container
//         spacing={2}
//         sx={{
//           backgroundColor: "#a0a0a0",
//           padding: "10px 0",
//           alignItems: "center",
//         }}
//       >
//         <Grid item xs={12}>
//           <Typography
//             variant="body2"
//             sx={{ alignItems: "center", textAlign: "center" }}
//           >
//             POPULAR SEARCHES: Blouse Designs, Designer Blouses, Bras, Designers
//             Sarees, Punjabi Suits, ...
//           </Typography>
//         </Grid>
//       </Grid>

//       <Grid
//         container
//         spacing={2}
//         sx={{
//           backgroundColor: "#909090",
//           padding: "10px 0",
//           alignItems: "center",
//         }}
//       >
//         <Grid item xs={12} sm={6} md={8}>
//           <Typography
//             variant="body2"
//             sx={{ alignItems: "center", textAlign: "center" }}
//           >
//             In case of any concern, Contact Us
//           </Typography>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Typography variant="body2" sx={{ textAlign: "center" }}>
//             © 2023 www.myntra.com. All rights reserved.
//           </Typography>
//         </Grid>
//       </Grid>
//     </footer>
//   );
// };

// export default Footer;

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
