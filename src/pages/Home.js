 import React, { useState, useEffect, useContext } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  import { Link } from "react-router-dom";
  import RecyclingIcon from '@mui/icons-material/Recycling';
  import {
    Box,
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    Button,
    useMediaQuery,
    useTheme,
    IconButton,
    Paper,
    Switch,
    FormControlLabel,
    Tooltip,
  } from "@mui/material";
  import { styled } from "@mui/material/styles";
  import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
  import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
  import SpeedIcon from "@mui/icons-material/Speed";
  import VerifiedIcon from "@mui/icons-material/Verified";
  import InventoryIcon from "@mui/icons-material/Inventory";
  import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
  import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
  import Brightness4Icon from "@mui/icons-material/Brightness4";
  import Brightness7Icon from "@mui/icons-material/Brightness7";
  import CheckCircleIcon from "@mui/icons-material/CheckCircle";
  import LocalShippingIcon from "@mui/icons-material/LocalShipping";
  import LightbulbIcon from "@mui/icons-material/Lightbulb";
  import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
  import SecurityIcon from "@mui/icons-material/Security";
  import NatureIcon from '@mui/icons-material/Nature';
  import ParkIcon from "@mui/icons-material/Park";
  import { ThemeContext } from "../context/ThemeContext";


  // Import a background image
  import heroBg from "../components/assets/bg.png";

  // Import company images for carousel
  import companyImage1 from "../components/assets/company1.jpg";
  import companyImage2 from "../components/assets/company2.jpg";
  import companyImage4 from "../components/assets/company4.jpg";

  // Styled components for 3D card effects
  const StyledCard3D = styled(Paper)(({ theme, darkMode }) => ({
    position: "relative",
    transition: "all 0.3s ease",
    transformStyle: "preserve-3d",
    backgroundColor: darkMode
      ? theme.palette.grey[900]
      : theme.palette.background.paper,
    color: darkMode ? theme.palette.common.white : theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius * 2,
    overflow: "hidden",
    boxShadow: darkMode
      ? "0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)"
      : "0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)",
    "&:hover": {
      transform: "translateY(-10px) rotateX(5deg) rotateY(5deg)",
      boxShadow: darkMode
        ? "0 20px 40px rgba(0, 0, 0, 0.6), 0 10px 20px rgba(0, 0, 0, 0.4)"
        : "0 20px 40px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)",
    },
  }));

  // Styled components for product cards with 3D effect
  const ProductCard3D = styled(Paper)(({ theme, darkMode }) => ({
    position: "relative",
    height: "100%",
    transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    transformStyle: "preserve-3d",
    backgroundColor: darkMode
      ? theme.palette.grey[900]
      : theme.palette.background.paper,
    color: darkMode ? theme.palette.common.white : theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius * 2,
    overflow: "hidden",
    boxShadow: darkMode
      ? "0 10px 30px rgba(0, 0, 0, 0.5)"
      : "0 10px 30px rgba(0, 0, 0, 0.1)",
    "&:hover": {
      transform: "scale(1.05) rotateY(10deg)",
      boxShadow: darkMode
        ? "0 20px 40px rgba(0, 0, 0, 0.6), 0 10px 20px rgba(0, 0, 0, 0.4)"
        : "0 20px 40px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)",
      "& .product-image": {
        transform: "scale(1.2)",
      },
    },
  }));

  const Home = () => {
    // For responsive design
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    // Access theme context
    const { darkMode, toggleDarkMode } = useContext(ThemeContext);

    // State for carousel
    const [currentSlide, setCurrentSlide] = useState(0);
    const companyImages = [
      companyImage4,
      companyImage2,
      companyImage1,
    ];

    // Auto-advance carousel
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) =>
          prev === companyImages.length - 1 ? 0 : prev + 1
        );
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }, [companyImages.length]);

    // Functions to control carousel
    const nextSlide = () => {
      setCurrentSlide((prev) =>
        prev === companyImages.length - 1 ? 0 : prev + 1
      );
    };

    const prevSlide = () => {
      setCurrentSlide((prev) =>
        prev === 0 ? companyImages.length - 1 : prev - 1
      );
    };

    // Animation variants for Framer Motion
    const fadeInUp = {
      hidden: { opacity: 0, y: 60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      },
    };

    const staggerContainer = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
        },
      },
    };

    // Debug logging
    useEffect(() => {
      console.log("Current slide:", currentSlide);
      console.log("Images array:", companyImages);
    }, [currentSlide, companyImages]);

    return (
      <Box
        sx={{
          backgroundColor: darkMode ? "#121212" : "#ffffff",
          color: darkMode ? "#ffffff" : "#000000",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        {/* Dark Mode Toggle */}
        <Box
          sx={{
            position: "fixed",
            top: 20,
            right: 20,
            zIndex: 1000,
            backgroundColor: darkMode
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)",
            borderRadius: "50%",
            padding: "8px",
          }}
        >
          <Tooltip
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <IconButton onClick={toggleDarkMode} color="inherit">
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Tooltip>
        </Box>

        {/* Hero Section with Welcome Message and Stats */}
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: { xs: "calc(100vh - 56px)", sm: "100vh" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            color: "white",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: darkMode
                ? "rgba(0, 0, 0, 0.8)"
                : "rgba(0, 0, 0, 0.7)",
              backgroundImage: darkMode
                ? "linear-gradient(45deg, rgba(30, 30, 30, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%)"
                : "linear-gradient(45deg, rgba(50, 50, 50, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%)",
              zIndex: 1,
            },
          }}
        >
          <Container
            maxWidth="lg"
            sx={{ position: "relative", zIndex: 2, px: { xs: 2, sm: 3, md: 4 } }}
          >
            {/* Welcome Text */}
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3.75rem" },
                  textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                  background: darkMode
                    ? "linear-gradient(45deg, #f5f5f5 30%, #e0e0e0 90%)"
                    : "linear-gradient(45deg, #f5f5f5 30%, #e0e0e0 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 3,
                }}
              >
                Welcome to GHR Industries (1st)
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  maxWidth: "800px",
                  mb: 5,
                  color: "#e0e0e0",
                  lineHeight: 1.6,
                  fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                }}
              >
                Leading manufacturer and exporter of high-quality rubber, plastic
                & TPE components, engineered with precision and innovation.
              </Typography>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  component={Link}
                  to="/product"
                  variant="contained"
                  size={isMobile ? "medium" : "large"}
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    backgroundColor: "#008080",
                    px: { xs: 3, md: 4 },
                    py: { xs: 1, md: 1.5 },
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: "#006666",
                    },
                  }}
                >
                  Explore Our Products
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Cards */}
            <Box sx={{ mt: { xs: 6, md: 10 } }}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
              >
                <Grid container spacing={{ xs: 2, md: 3 }}>
                  {/* Card 1 */}
                  <Grid item xs={6} sm={6} md={3}>
                    <motion.div variants={fadeInUp}>
                      <StyledCard3D darkMode={darkMode} elevation={6}>
                        <CardContent
                          sx={{ textAlign: "center", py: { xs: 2, md: 3 } }}
                        >
                          <InventoryIcon
                            sx={{
                              fontSize: { xs: 30, md: 50 },
                              color: darkMode ? "#6FCF97" : "#4CAF50",
                              mb: 2,
                              filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                            }}
                          />
                          <Typography
                            variant="h3"
                            component="div"
                            sx={{
                              fontWeight: "bold",
                              color: darkMode ? "#ffffff" : "white",
                              fontSize: { xs: "1.5rem", md: "3rem" },
                            }}
                          >
                            2,000+
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: darkMode ? "#e0e0e0" : "#e0e0e0",
                              fontSize: { xs: "0.875rem", md: "1rem" },
                            }}
                          >
                            Products Manufactured
                          </Typography>
                        </CardContent>
                      </StyledCard3D>
                    </motion.div>
                  </Grid>

                  {/* Card 2 */}
                  <Grid item xs={6} sm={6} md={3}>
                    <motion.div variants={fadeInUp}>
                      <StyledCard3D darkMode={darkMode} elevation={6}>
                        <CardContent
                          sx={{ textAlign: "center", py: { xs: 2, md: 3 } }}
                        >
                          <EmojiEventsIcon
                            sx={{
                              fontSize: { xs: 30, md: 50 },
                              color: darkMode ? "#F2C94C" : "#FFC107",
                              mb: 2,
                              filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                            }}
                          />
                          <Typography
                            variant="h3"
                            component="div"
                            sx={{
                              fontWeight: "bold",
                              color: darkMode ? "#ffffff" : "white",
                              fontSize: { xs: "1.5rem", md: "3rem" },
                            }}
                          >
                            10+
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: darkMode ? "#e0e0e0" : "#e0e0e0",
                              fontSize: { xs: "0.875rem", md: "1rem" },
                            }}
                          >

  Years of Excellence
                          </Typography>
                        </CardContent>
                      </StyledCard3D>
                    </motion.div>
                  </Grid>

                  {/* Card 3 */}
                  <Grid item xs={6} sm={6} md={3}>
                    <motion.div variants={fadeInUp}>
                      <StyledCard3D darkMode={darkMode} elevation={6}>
                        <CardContent
                          sx={{ textAlign: "center", py: { xs: 2, md: 3 } }}
                        >
                          <SpeedIcon
                            sx={{
                              fontSize: { xs: 30, md: 50 },
                              color: darkMode ? "#56CCF2" : "#2196F3",
                              mb: 2,
                              filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                            }}
                          />
                          <Typography
                            variant="h3"
                            component="div"
                            sx={{
                              fontWeight: "bold",
                              color: darkMode ? "#ffffff" : "white",
                              fontSize: { xs: "1.5rem", md: "3rem" },
                            }}
                          >
                            A+
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: darkMode ? "#e0e0e0" : "#e0e0e0",
                              fontSize: { xs: "0.875rem", md: "1rem" },
                            }}
                          >
                            Fast Delivery Assurance
                          </Typography>
                        </CardContent>
                      </StyledCard3D>
                    </motion.div>
                  </Grid>

                  {/* Card 4 */}
                  <Grid item xs={6} sm={6} md={3}>
                    <motion.div variants={fadeInUp}>
                      <StyledCard3D darkMode={darkMode} elevation={6}>
                        <CardContent
                          sx={{ textAlign: "center", py: { xs: 2, md: 3 } }}
                        >
                          <VerifiedIcon
                            sx={{
                              fontSize: { xs: 30, md: 50 },
                              color: darkMode ? "#BB6BD9" : "#9C27B0",
                              mb: 2,
                              filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                            }}
                          />
                          <Typography
                            variant="h3"
                            component="div"
                            sx={{
                              fontWeight: "bold",
                              color: darkMode ? "#ffffff" : "white",
                              fontSize: { xs: "1.5rem", md: "3rem" },
                            }}
                          >
                            ISO
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: darkMode ? "#e0e0e0" : "#e0e0e0",
                              fontSize: { xs: "0.875rem", md: "1rem" },
                            }}
                          >
                            Approved Certifications
                          </Typography>
                        </CardContent>
                      </StyledCard3D>
                    </motion.div>
                  </Grid>
                </Grid>
              </motion.div>
            </Box>
          </Container>
        </Box>

        {/* About Us Section */}
        <Box
          sx={{
            py: { xs: 6, md: 12 },
            backgroundColor: darkMode ? "#1E1E1E" : "#f5f7fa",
            transition: "background-color 0.3s ease",
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                {/* Carousel for company images */}
                <Box
                  sx={{
                    position: "relative",
                    height: "400px",
                    width: "100%",
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: darkMode
                      ? "0 20px 40px rgba(0, 0, 0, 0.4)"
                      : "0 20px 40px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {/* Images */}
                  {companyImages.map((image, index) => (
                    <Box
                      key={index}
                      component={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: index === currentSlide ? 1 : 0,
                        scale: index === currentSlide ? 1 : 1.1,
                        transition: { duration: 0.7, ease: "easeInOut" }
                      }}
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        zIndex: index === currentSlide ? 1 : 0,
                      }}
                    />
                  ))}

                  {/* Navigation arrows */}
                  <IconButton
                    onClick={prevSlide}
                    sx={{
                      position: "absolute",
                      left: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      zIndex: 2,
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                      },
                    }}
                  >
                    <ArrowBackIosIcon fontSize="small" />
                  </IconButton>
                  <IconButton
                    onClick={nextSlide}
                    sx={{
                      position: "absolute",
                      right: "16px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      zIndex: 2,
                      "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                      },
                    }}
                  >
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>

                  {/* Dots indicator */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "16px",
                      left: 0,
                      right: 0,
                      display: "flex",
                      justifyContent: "center",
                      gap: "8px",
                      zIndex: 2,
                    }}
                  >
                    {companyImages.map((_, index) => (
                      <Box
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        sx={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          backgroundColor:
                            index === currentSlide
                              ? "white"
                              : "rgba(255, 255, 255, 0.5)",
                          cursor: "pointer",
                          transition: "background-color 0.3s ease",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: darkMode ? "#ffffff" : "#333333",
                      mb: 2,
                    }}
                  >
                    About GHR Industries
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "medium",
                      color: darkMode ? "#BB6BD9" : "#008080",
                      mb: 3,
                    }}
                  >
                    Excellence in Rubber, Plastic & Metal Manufacturing
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      mb: 2,
                    }}
                  >
                    Established in Chennai, GHR Industries is a premier
                    manufacturer and global exporter of high-precision rubber
                    molded components. With decades of expertise, we cater to
                    various industries.
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      mb: 2,
                    }}
                  >
                    Equipped with cutting-edge technology and a commitment to
                    quality, innovation, and sustainability, we deliver
                    world-class products that exceed industry standards. Our
                    expert engineers and advanced R&D ensure we remain at the
                    forefront of custom rubber solutions for critical applications
                    worldwide.
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      mb: 4,
                    }}
                  >
                    With a strong commitment to customer satisfaction, precision
                    engineering, and global compliance, GHR Industries continues
                    to shape the future of rubber molding excellence.
                  </Typography>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      component={Link}
                      to="/about"
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: darkMode ? "#BB6BD9" : "#008080",
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        "&:hover": {
                          backgroundColor: darkMode ? "#9C27B0" : "#006666",
                        },
                      }}
                    >
                      Learn More About Us
                    </Button>
                  </motion.div>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* Our Products Section */}
        <Box
          sx={{
            py: { xs: 6, md: 12 },
            backgroundColor: darkMode ? "#121212" : "#ffffff",
            transition: "background-color 0.3s ease",
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: darkMode ? "#ffffff" : "#333333",
                  mb: 2,
                  textAlign: "center",
                }}
              >
                OUR PRODUCTS
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: darkMode ? "#56CCF2" : "#008080",
                  mb: 2,
                  maxWidth: "800px",
                  mx: "auto",
                  textAlign: "center",
                }}
              >
                High-Performance Rubber & Plastic Solutions
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: darkMode ? "#e0e0e0" : "#555555",
                  maxWidth: "800px",
                  mx: "auto",
                  textAlign: "center",
                  mb: 6,
                }}
              >
                GHR Industries specializes in manufacturing high-quality
                rubber-molded components that cater to diverse industries,
                ensuring durability, precision, and reliability.
              </Typography>
            </motion.div>

            <Grid container spacing={3}>
              {/* Product Card 1: O-Rings */}
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProductCard3D darkMode={darkMode} elevation={6}>
                    <Box
                      sx={{
                        height: "200px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        className="product-image"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${heroBg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transition: "transform 0.5s ease-out",
                          cursor: "zoom-in",
                          "&:hover": {
                            transform: "scale(1.2)",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          padding: "20px 16px 8px",
                          color: "white",
                        }}
                      >
                        <Typography variant="h6" component="h3" fontWeight="bold">
                          O-Rings
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          color: darkMode ? "#e0e0e0" : "#555555",
                          mb: 2,
                        }}
                      >
                        Precision-engineered rubber O-rings designed for perfect
                        sealing in various industrial applications.
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: darkMode
                              ? "rgba(0, 128, 128, 0.2)"
                              : "rgba(0, 128, 128, 0.1)",
                            color: darkMode ? "#56CCF2" : "#008080",
                            px: 2,
                            py: 0.5,
                            borderRadius: "16px",
                            fontSize: "0.875rem",
                          }}
                        >
                          Rubber
                        </Box>
                        <Button
                          component={Link}
                          to="/product"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            color: darkMode ? "#56CCF2" : "#008080",
                            "&:hover": {
                              backgroundColor: darkMode
                                ? "rgba(86, 204, 242, 0.1)"
                                : "rgba(0, 128, 128, 0.1)",
                            },
                          }}
                        >
                          Learn more
                        </Button>
                      </Box>
                    </Box>
                  </ProductCard3D>
                </motion.div>
              </Grid>

              {/* Product Card 2: Bellows */}
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <ProductCard3D darkMode={darkMode} elevation={6}>
                    <Box
                      sx={{
                        height: "200px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        className="product-image"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${heroBg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transition: "transform 0.5s ease-out",
                          cursor: "zoom-in",
                          "&:hover": {
                            transform: "scale(1.2)",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          padding: "20px 16px 8px",
                          color: "white",
                        }}
                      >
                        <Typography variant="h6" component="h3" fontWeight="bold">
                          Bellows
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          color: darkMode ? "#e0e0e0" : "#555555",
                          mb: 2,
                        }}
                      >
                        Flexible rubber bellows that provide excellent protection
                        against dust, moisture, and vibration.
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: darkMode
                              ? "rgba(0, 128, 128, 0.2)"
                              : "rgba(0, 128, 128, 0.1)",
                            color: darkMode ? "#56CCF2" : "#008080",
                            px: 2,
                            py: 0.5,
                            borderRadius: "16px",
                            fontSize: "0.875rem",
                          }}
                        >
                          Rubber
                        </Box>
                        <Button
                          component={Link}
                          to="/product"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            color: darkMode ? "#56CCF2" : "#008080",
                            "&:hover": {
                              backgroundColor: darkMode
                                ? "rgba(86, 204, 242, 0.1)"
                                : "rgba(0, 128, 128, 0.1)",
                            },
                          }}
                        >
                          Learn more
                        </Button>
                      </Box>
                    </Box>
                  </ProductCard3D>
                </motion.div>
              </Grid>

              {/* Product Card 3: Grommets */}
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <ProductCard3D darkMode={darkMode} elevation={6}>
                    <Box
                      sx={{
                        height: "200px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        className="product-image"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${heroBg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transition: "transform 0.5s ease-out",
                          cursor: "zoom-in",
                          "&:hover": {
                            transform: "scale(1.2)",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          padding: "20px 16px 8px",
                          color: "white",
                        }}
                      >
                        <Typography variant="h6" component="h3" fontWeight="bold">
                          Grommets
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          color: darkMode ? "#e0e0e0" : "#555555",
                          mb: 2,
                        }}
                      >
                        Protective rubber grommets that shield cables and wires
                        from sharp edges and prevent damage.
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: darkMode
                              ? "rgba(0, 128, 128, 0.2)"
                              : "rgba(0, 128, 128, 0.1)",
                            color: darkMode ? "#56CCF2" : "#008080",
                            px: 2,
                            py: 0.5,
                            borderRadius: "16px",
                            fontSize: "0.875rem",
                          }}
                        >
                          Rubber
                        </Box>
                        <Button
                          component={Link}
                          to="/product"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            color: darkMode ? "#56CCF2" : "#008080",
                            "&:hover": {
                              backgroundColor: darkMode
                                ? "rgba(86, 204, 242, 0.1)"
                                : "rgba(0, 128, 128, 0.1)",
                            },
                          }}
                        >
                          Learn more
                        </Button>
                      </Box>
                    </Box>
                  </ProductCard3D>
                </motion.div>
              </Grid>

              {/* Product Card 4: Seals */}
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <ProductCard3D darkMode={darkMode} elevation={6}>
                    <Box
                      sx={{
                        height: "200px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        className="product-image"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${heroBg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transition: "transform 0.5s ease-out",
                          cursor: "zoom-in",
                          "&:hover": {
                            transform: "scale(1.2)",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          padding: "20px 16px 8px",
                          color: "white",
                        }}
                      >
                        <Typography variant="h6" component="h3" fontWeight="bold">
                          Rubber Seals
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          color: darkMode ? "#e0e0e0" : "#555555",
                          mb: 2,
                        }}
                      >
                        High-performance rubber seals designed for perfect sealing in challenging environments.
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: darkMode
                              ? "rgba(0, 128, 128, 0.2)"
                              : "rgba(0, 128, 128, 0.1)",
                            color: darkMode ? "#56CCF2" : "#008080",
                            px: 2,
                            py: 0.5,
                            borderRadius: "16px",
                            fontSize: "0.875rem",
                          }}
                        >
                          Rubber
                        </Box>
                        <Button
                          component={Link}
                          to="/product"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            color: darkMode ? "#56CCF2" : "#008080",
                            "&:hover": {
                              backgroundColor: darkMode
                                ? "rgba(86, 204, 242, 0.1)"
                                : "rgba(0, 128, 128, 0.1)",
                            },
                          }}
                        >
                          Learn more
                        </Button>
                      </Box>
                    </Box>
                  </ProductCard3D>
                </motion.div>
              </Grid>

              {/* Product Card 5: Metal Components */}
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ProductCard3D darkMode={darkMode} elevation={6}>
                    <Box
                      sx={{
                        height: "200px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        className="product-image"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${heroBg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transition: "transform 0.5s ease-out",
                          cursor: "zoom-in",
                          "&:hover": {
                            transform: "scale(1.2)",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          padding: "20px 16px 8px",
                          color: "white",
                        }}
                      >
                        <Typography variant="h6" component="h3" fontWeight="bold">
                          Metal Components
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          color: darkMode ? "#e0e0e0" : "#555555",
                          mb: 2,
                        }}
                      >
                        Precision-engineered metal components for various industrial applications and requirements.
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: darkMode
                              ? "rgba(0, 128, 128, 0.2)"
                              : "rgba(0, 128, 128, 0.1)",
                            color: darkMode ? "#56CCF2" : "#008080",
                            px: 2,
                            py: 0.5,
                            borderRadius: "16px",
                            fontSize: "0.875rem",
                          }}
                        >
                          Metal
                        </Box>
                        <Button
                          component={Link}
                          to="/product"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            color: darkMode ? "#56CCF2" : "#008080",
                            "&:hover": {
                              backgroundColor: darkMode
                                ? "rgba(86, 204, 242, 0.1)"
                                : "rgba(0, 128, 128, 0.1)",
                            },
                          }}
                        >
                          Learn more
                        </Button>
                      </Box>
                    </Box>
                  </ProductCard3D>
                </motion.div>
              </Grid>

              {/* Product Card 6: TPE Components */}
              <Grid item xs={12} sm={6} md={4} lg={2}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <ProductCard3D darkMode={darkMode} elevation={6}>
                    <Box
                      sx={{
                        height: "200px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        className="product-image"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${heroBg})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                          transition: "transform 0.5s ease-out",
                          cursor: "zoom-in",
                          "&:hover": {
                            transform: "scale(1.2)",
                          },
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                          padding: "20px 16px 8px",
                          color: "white",
                        }}
                      >
                        <Typography variant="h6" component="h3" fontWeight="bold">
                          TPE Components
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ p: 3 }}>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          color: darkMode ? "#e0e0e0" : "#555555",
                          mb: 2,
                        }}
                      >
                        Thermoplastic elastomer components offering flexibility, durability, and excellent chemical resistance.
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: darkMode
                              ? "rgba(0, 128, 128, 0.2)"
                              : "rgba(0, 128, 128, 0.1)",
                            color: darkMode ? "#56CCF2" : "#008080",
                            px: 2,
                            py: 0.5,
                            borderRadius: "16px",
                            fontSize: "0.875rem",
                          }}
                        >
                          TPE
                        </Box>
                        <Button
                          component={Link}
                          to="/product"
                          endIcon={<ArrowForwardIcon />}
                          sx={{
                            color: darkMode ? "#56CCF2" : "#008080",
                            "&:hover": {
                              backgroundColor: darkMode
                                ? "rgba(86, 204, 242, 0.1)"
                                : "rgba(0, 128, 128, 0.1)",
                            },
                          }}
                        >
                          Learn more
                        </Button>
                      </Box>
                    </Box>
                  </ProductCard3D>
                </motion.div>
              </Grid>
            </Grid>

            <Box sx={{ textAlign: "center", mt: 6 }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  component={Link}
                  to="/product"
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: darkMode ? "#56CCF2" : "#008080",
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    "&:hover": {
                      backgroundColor: darkMode ? "#2196F3" : "#006666",
                    },
                  }}
                >
                  View All Products
                </Button>
              </motion.div>
            </Box>
          </Container>
        </Box>

        {/* Our Promise to You Section */}
        <Box
          sx={{
            py: { xs: 6, md: 12 },
            backgroundColor: darkMode ? "#1E1E1E" : "#f5f7fa",
            transition: "background-color 0.3s ease",
          }}
        >
          <Container maxWidth="lg">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  color: darkMode ? "#ffffff" : "#333333",
                  mb: 2,
                  textAlign: "center",
                }}
              >
                Our Promise to You
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: darkMode ? "#e0e0e0" : "#555555",
                  maxWidth: "800px",
                  mx: "auto",
                  textAlign: "center",
                  mb: 6,
                }}
              >
                At GHR Industries, we stand by our commitment to excellence,
                sustainability, and innovation. Our values drive us to deliver
                unparalleled service and industry-leading manufacturing solutions.
              </Typography>
            </motion.div>

            <Grid container spacing={3}>
              {/* Promise Card 1: Quality Assurance */}
              <Grid item xs={12} sm={6} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4 }}>
                    <Box sx={{ textAlign: "center", mb: 3 }}>
                      <CheckCircleIcon
                        sx={{
                          fontSize: 60,
                          color: darkMode ? "#6FCF97" : "#4CAF50",
                          filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        color: darkMode ? "#ffffff" : "#333333",
                        mb: 2,
                      }}
                    >
                      Quality Assurance
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: "center",
                        color: darkMode ? "#e0e0e0" : "#555555",
                      }}
                    >
                      We adhere to international quality standards, ensuring
                      precision and excellence in every product we manufacture.
                    </Typography>
                  </StyledCard3D>
                </motion.div>
              </Grid>

              {/* Promise Card 2: Timely Delivery */}
              <Grid item xs={12} sm={6} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4 }}>
                    <Box sx={{ textAlign: "center", mb: 3 }}>
                      <LocalShippingIcon
                        sx={{
                          fontSize: 60,
                          color: darkMode ? "#F2C94C" : "#FFC107",
                          filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: "bold",
                        textAlign: "center",
                        color: darkMode ? "#ffffff" : "#333333",
                        mb: 2,
                      }}
                    >
                      Timely Delivery
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        textAlign: "center",
                        color: darkMode ? "#e0e0e0" : "#555555",
                      }}
                    >
                      Our optimized supply chain management guarantees on-time
                      delivery, reducing downtime for our clients.
                    </Typography>
                  </StyledCard3D>
                </motion.div>
              </Grid>

              {/* Promise Card 3: Innovative Solutions */}
              <Grid item xs={12} sm={6} md={4}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4 }}>
                    <Box sx={{ textAlign: "center", mb: 3 }}>
                      <LightbulbIcon
                        sx={{
                          fontSize: 60,
                          color: darkMode ? "#56CCF2" : "#2196F3",
                          filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                        }}
                      />
                    </Box>
                    <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: darkMode ? "#ffffff" : "#333333",
                      mb: 2,
                    }}
                  >
                    Environmental Sustainability
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      color: darkMode ? "#e0e0e0" : "#555555",
                    }}
                  >
                     We are committed to eco-friendly manufacturing processes and sustainable material sourcing to minimize our environmental footprint.
</Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* Promise Card 5: Customer Satisfaction */}
            <Grid item xs={12} sm={6} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4 }}>
                  <Box sx={{ textAlign: "center", mb: 3 }}>
                    <SentimentSatisfiedAltIcon
                      sx={{
                        fontSize: 60,
                        color: darkMode ? "#BB6BD9" : "#9C27B0",
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      textAlign: "center",
                      color: darkMode ? "#ffffff" : "#333333",
                      mb: 2,
                    }}
                  >
                    Customer Satisfaction
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: "center",
                      color: darkMode ? "#e0e0e0" : "#555555",
                    }}
                  >
                    Your satisfaction is our priority. We provide exceptional support and service throughout your journey with us.
                  </Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: darkMode ? "#BB6BD9" : "#008080",
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: darkMode ? "#9C27B0" : "#006666",
                  },
                }}
              >
                Get in Touch
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
