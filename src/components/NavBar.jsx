import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  InputBase,
  useMediaQuery,
  useTheme,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cartreducer.carts);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  console.log("drop down status", isDropdownVisible);

  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const handleProfileIconClick = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const handleProfileMenuClose = () => {
    setIsProfileMenuOpen(false);
  };

  const isLoggedIn = JSON.parse(localStorage.getItem("user"));

  const handleCartClick = () => {
    if (isLoggedIn) {
      navigate("/cart");
    } else {
      toast.error("You must be logged in");
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const handleMenuOpen = (event) => {
    setIsMenuOpen(event.currentTarget);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(null);
  };

  const handleMenuItemClick = (action) => {
    // Perform actions based on the selected menu item
    if (action === "action1") {
      // Replace with your desired action
      localStorage.setItem("user", null);
      toast.success("You are logged Out Successfully");
      console.log("Action 1 clicked");
    } else if (action === "action2") {
      // Replace with your desired action
      navigate("/login");
      console.log("Action 2 clicked");
    }

    // Close the menu
    handleMenuClose();
  };

  const menuItems = [
    "Topwear",
    "T-Shirts",
    "Casual Shirts",
    "Formal Shirts",
    "Sweatshirts",
    "Sweaters",
    "Jackets",
    "Blazers & Coats",
    "Suits",
    "Rain Jackets",
    "Indian & Festive Wear",
    "Kurtas & Kurta Sets",
    "Sherwanis",
    "Nehru Jackets",
    "Dhotis",
    "Bottomwear",
    "Jeans",
    "Casual Trousers",
    "Formal Trousers",
    "Shorts",
    "Track Pants & Joggers",
    "Innerwear & Sleepwear",
    "Briefs & Trunks",
    "Boxers",
    "Vests",
    "Sleepwear & Loungewear",
    "Thermals",
    "Plus Size",
    "Footwear",
    "Casual Shoes",
    "Sports Shoes",
    "Formal Shoes",
    "Sneakers",
    "Sandals & Floaters",
    "Flip Flops",
    "Socks",
    "Personal Care & Grooming",
    "Sunglasses & Frames",
    "Watches",
    "Sports & Active Wear",
    "Sports Shoes",
    "Sports Sandals",

    "Track Pants & Shorts",

    "Jackets & Sweatshirts",
    "Sports Accessories",
    "Swimwear",

    "Smart Wearables",

    "Headphones",
    "Speakers",
    "Fashion Accessories",
    "Wallets",

    "Perfumes & Body Mists",

    "Deodorants",
    "Ties, Cufflinks & Pocket Squares",
    "Accessory Gift Sets",
    "Caps & Hats",
    "Mufflers, Scarves & Gloves",
    "Phone Cases",
    "Rings & Wristwear",

    "Bags & Backpacks",
    "Luggages & Trolleys",
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ backgroundColor: "#ffffff", height: "80px", width: "100%" }}
    >
      <Toolbar
        style={{
          display: "flex",
          alignitems: "center",
          justifycontent: "space-between",
        }}
      >
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon style={{ color: "#36454F" }} />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1, color: "#36454F" }}>
              <img
                src="https://tse3.explicit.bing.net/th?id=OIP.QWUAETWj7eqbEhMAqdNl2gHaFW&pid=Api&P=0&h=180"
                alt="Logo"
                style={{ height: 50, cursor: "pointer", margin: "5px" }}
                onClick={() => navigate("/")}
              />
            </Typography>
            <IconButton color="inherit" onClick={handleCartClick}>
              <ShoppingBagOutlinedIcon
                style={{ color: "#36454F", marginRight: "8px" }}
              />
              {cartItems.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    right: "10px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    padding: "4px",
                    fontSize: "10px",
                  }}
                >
                  {cartItems.length}
                </span>
              )}
            </IconButton>
          </>
        ) : (
          <>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                color: "#36454F",
                marginLeft: "20px",
                marginTop: "14px",
              }}
            >
              <img
                src="https://tse3.explicit.bing.net/th?id=OIP.QWUAETWj7eqbEhMAqdNl2gHaFW&pid=Api&P=0&h=180"
                alt="Logo"
                style={{ height: 50, cursor: "pointer" }}
                onClick={() => navigate("/")}
              />
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              {windowWidth > 1300 && (
                <div
                  style={{ position: "relative" }}
                  // onMouseEnter={handleMouseEnter}
                  // onMouseLeave={handleMouseLeave}
                  // onClick={() => navigate("/filter")}
                >
                  <Button
                    color="inherit"
                    style={{
                      color: "#36454F",
                      // marginLeft: "20px",
                      marginRight: "8px",
                      marginTop: "14px",
                      fontWeight: "bold",
                      padding: "20px 0",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => navigate("/filter")}
                  >
                    Men
                  </Button>
                  <Button
                    color="inherit"
                    style={{
                      color: "#36454F",
                      marginRight: "8px",
                      marginTop: "14px",
                      fontWeight: "bold",
                      padding: "20px 0",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => navigate("/filter")}
                  >
                    Women
                  </Button>
                  <Button
                    color="inherit"
                    style={{
                      color: "#36454F",
                      marginRight: "8px",
                      marginTop: "14px",
                      fontWeight: "bold",
                      padding: "20px 0",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => navigate("/filter")}
                  >
                    Kids
                  </Button>
                  <Button
                    color="inherit"
                    style={{
                      color: "#36454F",
                      marginRight: "12px",
                      marginTop: "14px",
                      fontWeight: "bold",
                      padding: "20px 0",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => navigate("/filter")}
                  >
                    Home & Living
                  </Button>
                  <Button
                    color="inherit"
                    style={{
                      color: "#36454F",
                      marginRight: "8px",
                      marginTop: "14px",
                      fontWeight: "bold",
                      padding: "20px 0",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => navigate("/filter")}
                  >
                    Beauty
                  </Button>
                  <Button
                    color="inherit"
                    style={{
                      color: "#36454F",
                      marginRight: "100px",
                      marginTop: "14px",
                      fontWeight: "bold",
                      padding: "20px 0",
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => navigate("/filter")}
                  >
                    Studio
                    <span
                      style={{
                        position: "absolute",
                        top: "3px",
                        right: "-22px",

                        color: "#EA1E6C",

                        padding: "4px",
                        fontSize: "8px",
                      }}
                    >
                      NEW
                    </span>
                  </Button>
                </div>
              )}

              {/* Add the SearchBar component here */}
              <div style={{ marginRight: "30px", marginTop: "14px" }}>
                <SearchBar />
              </div>
              {/* <CheckSearchBar /> */}

              <div style={{ flexGrow: 1 }} />

              <IconButton
                color="inherit"
                onClick={handleProfileIconClick}
                onMouseEnter={handleProfileIconClick}
              >
                <PersonOutlineOutlinedIcon
                  style={{
                    color: "#36454F",
                    marginRight: "8px",
                    marginLeft: "8px",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "30px",
                    right: "8px",

                    color: "#36454F",

                    padding: "4px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Profile
                </span>
              </IconButton>
              {isProfileMenuOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "80px", // Adjust based on your design
                    right: "2px",
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    zIndex: 1,
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                  onMouseLeave={handleProfileMenuClose}
                >
                  {isLoggedIn ? (
                    <>
                      <h3
                        style={{ color: "black" }}
                      >{`Hello ${isLoggedIn.data.name}`}</h3>
                      <Button
                        color="inherit"
                        style={{
                          color: "#36454F",
                          padding: "5px",
                          fontWeight: "bold",
                        }}
                        onClick={() => {
                          localStorage.setItem("user", null);
                          handleProfileMenuClose();
                        }}
                      >
                        Logout
                      </Button>
                    </>
                  ) : (
                    <Button
                      color="inherit"
                      style={{
                        color: "#36454F",
                        padding: "5px",
                        fontWeight: "bold",
                      }}
                      onClick={() => {
                        navigate("/login");
                        handleProfileMenuClose();
                      }}
                    >
                      Login
                    </Button>
                  )}
                </div>
              )}

              <IconButton color="inherit">
                <FavoriteBorderOutlinedIcon
                  style={{ color: "#36454F", marginRight: "8px" }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "30px",
                    right: "3px",

                    color: "#36454F",

                    padding: "4px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Wishlist
                </span>
              </IconButton>
              <IconButton color="inherit" onClick={handleCartClick}>
                <ShoppingBagOutlinedIcon
                  style={{ color: "#36454F", marginRight: "8px" }}
                />
                {cartItems.length > 0 && (
                  <span
                    style={{
                      position: "absolute",
                      top: "-5px",
                      right: "10px",
                      backgroundColor: "red",
                      color: "white",
                      borderRadius: "50%",
                      padding: "4px",
                      fontSize: "10px",
                    }}
                  >
                    {cartItems.length}
                  </span>
                )}
                <span
                  style={{
                    position: "absolute",
                    top: "30px",
                    right: "14px",
                    color: "#36454F",
                    padding: "4px",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  Bag
                </span>
              </IconButton>
            </div>
          </>
        )}
      </Toolbar>
      <Box>
        {isDropdownVisible && (
          <div
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
            style={{
              position: "absolute",
              top: "8.5%",
              left: "10%",
              width: "80%",
              height: "70%",
              backgroundColor: "white",
              border: "1px solid #ccc",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              zIndex: 1,
              padding: "10px",
              display: "flex",
              flexWrap: "wrap",
              background:
                "linear-gradient(90deg, white 0%, #FDFBFC 0%, #FDFBFC 20%, white 20%, white 40%, #FDFBFC 40%, #FDFBFC 60%, white 60%, white 80%, #FDFBFC 80%, #FDFBFC 100%)",
            }}
          >
            {/* Render menu items */}
            {menuItems.map((item, index) => (
              <div
                key={index}
                style={{
                  // flex: 1,
                  width: "20%", // Adjust based on your preference
                  marginBottom: "1px",
                  padding: "1px",
                  boxSizing: "border-box",

                  color:
                    index < 5 || index % 12 === 0 || index % 6 === 0
                      ? "#DD062F"
                      : "#36454F",
                  // backgroundColor: index % 2 === 0 ? "#F2F2F2" : "white",
                  transition: "font-weight 0.1s",
                }}
                onClick={() => navigate("/filter")}
                onMouseEnter={(e) => {
                  e.target.style.fontWeight = "bold"; // Increase font size on hover
                }}
                onMouseLeave={(e) => {
                  e.target.style.fontWeight = "normal"; // Reset font size when not hovering
                }}
              >
                <div
                  style={{
                    // backgroundColor: "#F2F2F2",
                    borderRadius: "8px",
                    padding: "1px",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="body1"
                    style={{
                      fontSize: index < 5 ? "18px" : "12px",
                      fontWeight: index < 5 ? "bold" : "normal",
                      // color: "#36454F",
                    }}
                  >
                    {item}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        )}
      </Box>
      <Menu
        anchorEl={isMenuOpen}
        open={Boolean(isMenuOpen)}
        onClose={handleMenuClose}
        style={{ top: "4%", left: "0%", padding: "5px" }}
      >
        {isLoggedIn ? (
          <>
            <h3>{`Hello ${isLoggedIn.data.name}`}</h3>
            <MenuItem onClick={() => handleMenuItemClick("action1")}>
              Logout
            </MenuItem>
          </>
        ) : (
          <MenuItem onClick={() => handleMenuItemClick("action2")}>
            Login
          </MenuItem>
        )}
      </Menu>
    </AppBar>
  );
};

export default NavBar;
