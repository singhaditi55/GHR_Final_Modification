import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Typography, Container, Breadcrumbs, Grid, Box, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import ProductCategories from "../components/ProductCategories";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EngineeringIcon from "@mui/icons-material/Engineering";
import VerifiedIcon from "@mui/icons-material/Verified";
import FactoryIcon from "@mui/icons-material/Factory";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

// Import the ThemeContext from Home.js
import { ThemeContext } from "./Home";

// Import background image (using the same as in Home.js for consistency)
import productBg from "../components/assets/bg.png";

// Styled components for 3D card effects (similar to Home.js)
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

const Product = () => {
  // Access theme context
  const { darkMode } = useContext(ThemeContext);

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

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        transition: "background-color 0.3s ease, color 0.3s ease",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${productBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: { xs: "40vh", sm: "50vh" },
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
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
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
              Our Products
            </Typography>
            
            <Breadcrumbs 
              aria-label="breadcrumb" 
              sx={{ 
                color: "#e0e0e0",
                mb: 3,
                "& .MuiBreadcrumbs-separator": {
                  color: "#e0e0e0",
                },
              }}
            >
              <Link 
                to="/" 
                className="flex items-center hover:text-teal-400"
                style={{ 
                  display: "flex", 
                  alignItems: "center", 
                  color: "#e0e0e0", 
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => e.currentTarget.style.color = darkMode ? "#56CCF2" : "#008080"}
                onMouseOut={(e) => e.currentTarget.style.color = "#e0e0e0"}
              >
                <HomeIcon fontSize="small" sx={{ mr: 0.5 }} />
                Home
              </Link>
              <Typography 
                color="inherit" 
                sx={{ 
                  display: "flex", 
                  alignItems: "center",
                  color: "#ffffff",
                }}
              >
                <CategoryIcon fontSize="small" sx={{ mr: 0.5 }} />
                Products
              </Typography>
            </Breadcrumbs>
            
            <Typography 
              variant="subtitle1" 
              sx={{
                maxWidth: "800px",
                mb: 5,
                color: "#e0e0e0",
                lineHeight: 1.6,
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
              }}
            >
              Explore our comprehensive range of high-quality components designed for various industrial applications.
              From plastic to metal, rubber to TPE, we offer solutions that meet the highest standards.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Product Categories Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
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
              Product Categories
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: darkMode ? "#e0e0e0" : "#555555",
                maxWidth: "800px",
                mx: "auto",
                textAlign: "center",
                mb: 6,
                fontSize: "1.1rem",
              }}
            >
              Browse our extensive range of products categorized by material and application to find the perfect solution for your needs.
            </Typography>
          </motion.div>
          
          {/* Enhanced ProductCategories component with animations */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
          >
            <ProductCategories darkMode={darkMode} />
          </motion.div>
        </Container>
      </Box>

      {/* Additional Product Information Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: darkMode ? "#121212" : "#ffffff",
          transition: "background-color 0.3s ease",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4, height: "100%" }}>
                  <Box sx={{ textAlign: "center", mb: 3 }}>
                    <VerifiedIcon
                      sx={{
                        fontSize: 60,
                        color: darkMode ? "#6FCF97" : "#4CAF50",
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                      }}
                    />
                  </Box>
                  <Typography 
                    variant="h4" 
                    component="h2" 
                    gutterBottom 
                    sx={{
                      fontWeight: "bold", 
                      color: darkMode ? "#ffffff" : "#333333",
                      mb: 2,
                      textAlign: "center",
                    }}
                  >
                    Quality Assurance
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      textAlign: "center",
                      lineHeight: 1.7,
                    }}
                  >
                    At GHR Industries, we maintain strict quality control processes to ensure that all our products meet the highest standards of durability, performance, and reliability. Each component undergoes rigorous testing before delivery.
                  </Typography>
                  <Box sx={{ textAlign: "center", mt: 4 }}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        component={Link}
                        to="/contact"
                        variant="outlined"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          borderColor: darkMode ? "#6FCF97" : "#4CAF50",
                          color: darkMode ? "#6FCF97" : "#4CAF50",
                          "&:hover": {
                            borderColor: darkMode ? "#4CAF50" : "#2E7D32",
                            backgroundColor: "rgba(76, 175, 80, 0.1)",
                          },
                        }}
                      >
                        Learn About Our Quality Process
                      </Button>
                    </motion.div>
                  </Box>
                </StyledCard3D>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4, height: "100%" }}>
                  <Box sx={{ textAlign: "center", mb: 3 }}>
                    <EngineeringIcon
                      sx={{
                        fontSize: 60,
                        color: darkMode ? "#56CCF2" : "#2196F3",
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                      }}
                    />
                  </Box>
                  <Typography 
                    variant="h4" 
                    component="h2" 
                    gutterBottom 
                    sx={{
                      fontWeight: "bold", 
                      color: darkMode ? "#ffffff" : "#333333",
                      mb: 2,
                      textAlign: "center",
                    }}
                  >
                    Custom Solutions
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      textAlign: "center",
                      lineHeight: 1.7,
                    }}
                  >
                    Need something specific? We offer custom manufacturing services to meet your unique requirements. Our team of experts will work closely with you to design and produce components that perfectly fit your application needs.
                  </Typography>
                  <Box sx={{ textAlign: "center", mt: 4 }}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        component={Link}
                        to="/contact"
                        variant="outlined"
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          borderColor: darkMode ? "#56CCF2" : "#2196F3",
                          color: darkMode ? "#56CCF2" : "#2196F3",
                          "&:hover": {
                            borderColor: darkMode ? "#2196F3" : "#1565C0",
                            backgroundColor: "rgba(33, 150, 243, 0.1)",
                          },
                        }}
                      >
                        Request Custom Solution
                      </Button>
                    </motion.div>
                  </Box>
                </StyledCard3D>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Manufacturing Process Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
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
              Our Manufacturing Process
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: darkMode ? "#e0e0e0" : "#555555",
                maxWidth: "800px",
                mx: "auto",
                textAlign: "center",
                mb: 6,
                fontSize: "1.1rem",
              }}
            >
              We employ advanced manufacturing techniques and state-of-the-art equipment to ensure precision, consistency, and quality in every product we create.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Process Step 1 */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 3, height: "100%" }}>
                  <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: "bold",
                        color: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                        fontSize: "4rem",
                        position: "absolute",
                        top: 10,
                        right: 20,
                      }}
                    >
                      01
                    </Typography>
                    <PrecisionManufacturingIcon
                      sx={{
                        fontSize: 50,
                        color: darkMode ? "#56CCF2" : "#2196F3",
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                        mb: 2,
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
                    Design & Engineering
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      textAlign: "center",
                    }}
                  >
                    Our expert engineers work with clients to design components that meet specific requirements and performance standards.
                  </Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* Process Step 2 */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 3, height: "100%" }}>
                  <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: "bold",
                        color: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                        fontSize: "4rem",
                        position: "absolute",
                        top: 10,
                        right: 20,
                      }}
                    >
                      02
                    </Typography>
                    <FactoryIcon
                      sx={{
                        fontSize: 50,
                        color: darkMode ? "#F2C94C" : "#FFC107",
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                        mb: 2,
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
                    Material Selection
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      textAlign: "center",
                    }}
                  >
                    We carefully select the optimal materials based on application requirements, environmental conditions, and performance needs.
                  </Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* Process Step 3 */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 3, height: "100%" }}>
                  <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: "bold",
                        color: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                        fontSize: "4rem",
                        position: "absolute",
                        top: 10,
                        right: 20,
                      }}
                    >
                      03
                    </Typography>
                    <EngineeringIcon
                      sx={{
                        fontSize: 50,
                        color: darkMode ? "#BB6BD9" : "#9C27B0",
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                        mb: 2,
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
                    Precision Manufacturing
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      textAlign: "center",
                    }}
                  >
                    Using advanced molding techniques and equipment, we produce components with tight tolerances and consistent quality.
                  </Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* Process Step 4 */}
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 3, height: "100%" }}>
                  <Box sx={{ textAlign: "center", mb: 2 }}>
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: "bold",
                        color: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)",
                        fontSize: "4rem",
                        position: "absolute",
                        top: 10,
                        right: 20,
                      }}
                    >
                      04
                    </Typography>
                    <VerifiedIcon
                      sx={{
                        fontSize: 50,
                        color: darkMode ? "#6FCF97" : "#4CAF50",
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))",
                        mb: 2,
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
                    Quality Testing
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      textAlign: "center",
                    }}
                  >
                    Every product undergoes comprehensive testing to verify performance, durability, and compliance with specifications.
                  </Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Industry Applications Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
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
              Industry Applications
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: darkMode ? "#e0e0e0" : "#555555",
                maxWidth: "800px",
                mx: "auto",
                textAlign: "center",
                mb: 6,
                fontSize: "1.1rem",
              }}
            >
              Our products serve a wide range of industries with specialized solutions designed for specific applications and environments.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Industry 1: Automotive */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4, height: "100%" }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: darkMode ? "#56CCF2" : "#2196F3",
                      mb: 2,
                    }}
                  >
                    Automotive
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      mb: 2,
                    }}
                  >
                    Our components are used in various automotive applications, including sealing systems, vibration dampening, fluid handling, and more. We provide solutions that withstand extreme temperatures, chemicals, and mechanical stress.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: darkMode ? "#56CCF2" : "#2196F3",
                      fontWeight: "bold",
                    }}
                  >
                    Key Products:
                  </Typography>
                  <ul style={{ color: darkMode ? "#e0e0e0" : "#555555", paddingLeft: "20px" }}>
                    <li>Engine gaskets and seals</li>
                    <li>Vibration isolators</li>
                    <li>Fluid transfer components</li>
                    <li>Weather sealing systems</li>
                  </ul>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* Industry 2: Industrial */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4, height: "100%" }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: darkMode ? "#F2C94C" : "#FFC107",
                      mb: 2,
                    }}
                  >
                    Industrial
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      mb: 2,
                    }}
                  >
                    We provide robust components for industrial machinery and equipment that operate in demanding environments. Our products offer reliability, longevity, and performance in critical applications.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: darkMode ? "#F2C94C" : "#FFC107",
                      fontWeight: "bold",
                    }}
                  >
                    Key Products:
                  </Typography>
                  <ul style={{ color: darkMode ? "#e0e0e0" : "#555555", paddingLeft: "20px" }}>
                    <li>Hydraulic and pneumatic seals</li>
                    <li>Conveyor components</li>
                    <li>Protective bellows and boots</li>
                    <li>Vibration isolation mounts</li>
                  </ul>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* Industry 3: Medical */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4, height: "100%" }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: darkMode ? "#6FCF97" : "#4CAF50",
                      mb: 2,
                    }}
                  >
                    Medical
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      mb: 2,
                    }}
                  >
                    Our medical-grade components meet stringent regulatory requirements and are manufactured in clean environments. We provide solutions for medical devices, equipment, and diagnostic tools.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: darkMode ? "#6FCF97" : "#4CAF50",
                      fontWeight: "bold",
                    }}
                  >
                    Key Products:
                  </Typography>
                  <ul style={{ color: darkMode ? "#e0e0e0" : "#555555", paddingLeft: "20px" }}>
                    <li>Seals for medical equipment</li>
                    <li>Fluid delivery components</li>
                    <li>Gaskets and O-rings</li>
                    <li>Custom molded parts for devices</li>
                  </ul>
                </StyledCard3D>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Material Technology Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
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
              Material Technology
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: darkMode ? "#e0e0e0" : "#555555",
                maxWidth: "800px",
                mx: "auto",
                textAlign: "center",
                mb: 6,
                fontSize: "1.1rem",
              }}
            >
              We work with a wide range of materials to provide the optimal solution for each application, balancing performance, durability, and cost-effectiveness.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Material 1: Rubber */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: darkMode ? "#ffffff" : "#333333",
                      mb: 2,
                    }}
                  >
                    Rubber Compounds
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                    }}
                  >
                    We formulate and process various rubber compounds to meet specific application requirements:
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            color: darkMode ? "#56CCF2" : "#2196F3",
                            mb: 1,
                          }}
                        >
                          Natural Rubber (NR)
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: darkMode ? "#e0e0e0" : "#555555",
                          }}
                        >
                          Excellent elasticity and tear resistance, ideal for dynamic applications.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            color: darkMode ? "#F2C94C" : "#FFC107",
                            mb: 1,
                          }}
                        >
                          EPDM
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: darkMode ? "#e0e0e0" : "#555555",
                          }}
                        >
                          Outstanding weather, ozone, and UV resistance for outdoor applications.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            color: darkMode ? "#6FCF97" : "#4CAF50",
                            mb: 1,
                          }}
                        >
                          Silicone
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: darkMode ? "#e0e0e0" : "#555555",
                          }}
                        >
                          Extreme temperature resistance and biocompatibility for medical applications.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            color: darkMode ? "#BB6BD9" : "#9C27B0",
                            mb: 1,
                          }}
                        >
                          Nitrile (NBR)
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: darkMode ? "#e0e0e0" : "#555555",
                          }}
                        >
                          Superior oil and fuel resistance for automotive and industrial applications.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* Material 2: Plastics & TPE */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4 }}>
                  <Typography
                    variant="h4"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: darkMode ? "#ffffff" : "#333333",
                      mb: 2,
                    }}
                  >
                    Plastics & TPE
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                    }}
                  >
                    Our engineering plastics and thermoplastic elastomers offer versatile solutions:
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            color: darkMode ? "#56CCF2" : "#2196F3",
                            mb: 1,
                          }}
                        >
                          Thermoplastic Elastomers (TPE)
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: darkMode ? "#e0e0e0" : "#555555",
                          }}
                        >
                          Combining the properties of rubber with the processability of plastics.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            color: darkMode ? "#F2C94C" : "#FFC107",
                            mb: 1,
                          }}
                        >
                          Polyamide (Nylon)
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: darkMode ? "#e0e0e0" : "#555555",
                          }}
                        >
                          High mechanical strength and excellent wear resistance for mechanical parts.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            color: darkMode ? "#6FCF97" : "#4CAF50",
                            mb: 1,
                          }}
                        >
                          Polypropylene (PP)
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: darkMode ? "#e0e0e0" : "#555555",
                          }}
                        >
                          Chemical resistance and durability for a wide range of applications.
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Box sx={{ mb: 2 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontWeight: "bold",
                            color: darkMode ? "#BB6BD9" : "#9C27B0",
                            mb: 1,
                          }}
                        >
                          Polyethylene (PE)
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: darkMode ? "#e0e0e0" : "#555555",
                          }}
                        >
                          Versatile material with good chemical resistance and electrical insulation properties.
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </StyledCard3D>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: darkMode ? "#121212" : "#ffffff",
          transition: "background-color 0.3s ease",
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: { xs: 4, md: 6 }, textAlign: "center" }}>
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
                Need a Custom Solution?
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: darkMode ? "#e0e0e0" : "#555555",
                  mb: 4,
                  maxWidth: "800px",
                  mx: "auto",
                }}
              >
                Our engineering team can design and manufacture components tailored to your specific requirements. Contact us today to discuss your project needs.
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "center", gap: 3, flexWrap: "wrap" }}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    component={Link}
                    to="/contact"
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
                    Request a Quote
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: darkMode ? "#BB6BD9" : "#008080",
                      color: darkMode ? "#BB6BD9" : "#008080",
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      "&:hover": {
                        borderColor: darkMode ? "#9C27B0" : "#006666",
                        backgroundColor: "rgba(0, 128, 128, 0.1)",
                      },
                    }}
                  >
                    Contact Our Team
                  </Button>
                </motion.div>
              </Box>
            </StyledCard3D>
          </motion.div>
        </Container>
      </Box>
    </Box>
  );
};

export default Product;