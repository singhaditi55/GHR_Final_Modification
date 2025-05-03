



// import React, { useState, useContext } from "react";
// import { motion } from "framer-motion";
// import { ThemeContext } from "../context/ThemeContext";

// import { Link } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Button,
//   Paper,
//   TextField,
//   Alert,
//   IconButton,
//   Divider,
// } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PhoneIcon from "@mui/icons-material/Phone";
// import EmailIcon from "@mui/icons-material/Email";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import SendIcon from "@mui/icons-material/Send";

// // Import the ThemeContext from Home.js
// import { ThemeContext } from "./Home";

// // Import background image
// import contactBg from "../components/assets/bg.png";


import React, { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Paper,
  TextField,
  Alert,
  IconButton,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SendIcon from "@mui/icons-material/Send";

// Update this import to use the ThemeContext from the context folder
import { ThemeContext } from "../context/ThemeContext";

// Import background image
import contactBg from "../components/assets/bg.png";

// Rest of your Contact component code remains unchanged
// ...


// Styled components for 3D card effects (similar to Home.js and About.js)
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

// Styled TextField component
const StyledTextField = styled(TextField)(({ theme, darkMode }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: darkMode
        ? "rgba(255, 255, 255, 0.23)"
        : "rgba(0, 0, 0, 0.23)",
    },
    "&:hover fieldset": {
      borderColor: darkMode ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: darkMode ? "#56CCF2" : "#008080",
    },
  },
  "& .MuiInputLabel-root": {
    color: darkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)",
    "&.Mui-focused": {
      color: darkMode ? "#56CCF2" : "#008080",
    },
  },
  "& .MuiInputBase-input": {
    color: darkMode ? "#ffffff" : "#000000",
  },
}));

const Contact = () => {
  // Access theme context
  const { darkMode } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    password: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError(true);
      setTimeout(() => {
        setFormError(false);
      }, 5000);
      return;
    }

    // Here you would typically handle the form submission, like sending to an API
    console.log("Form submitted:", formData);

    // Show success message
    setIsSubmitted(true);

    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        password: "",
      });
      setIsSubmitted(false);
    }, 5000);
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

  return (
    <Box
      sx={{
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${contactBg})`,
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
              Contact Us
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
              Have questions about our products or services? We're here to help
              and answer any questions you might have.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Get in Touch Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, md: 4 } }}>
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
              align="center"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: darkMode ? "#ffffff" : "#333333",
                mb: 1,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  background: darkMode ? "#56CCF2" : "#008080",
                  borderRadius: "2px",
                },
              }}
            >
              Get in Touch
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: darkMode ? "#e0e0e0" : "#555555",
                maxWidth: "800px",
                mx: "auto",
                mb: 6,
                fontSize: "1.1rem",
                mt: 3,
              }}
            >
              We're always ready to discuss your requirements and help you find the perfect solution.
              Reach out to us through any of the channels below.
            </Typography>
          </motion.div>

          <Grid
            container
            spacing={6}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {/* Contact Information */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <StyledCard3D
                  darkMode={darkMode}
                  elevation={6}
                  sx={{ p: 4, height: "100%", width: "100%", maxWidth: "500px" }}
                >
                  <Typography
                    variant="h4"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: darkMode ? "#BB6BD9" : "#9C27B0",
                      mb: 4,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -10,
                        left: 0,
                        width: "60px",
                        height: "3px",
                        background: darkMode ? "#BB6BD9" : "#9C27B0",
                        borderRadius: "2px",
                      },
                    }}
                  >
                    Contact Information
                  </Typography>

                  {/* Contact details */}
                  <Box sx={{ mb: 4, mt: 4 }}>
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Box 
                        sx={{ 
                          mr: 2, 
                          backgroundColor: darkMode ? "rgba(187, 107, 217, 0.2)" : "rgba(156, 39, 176, 0.1)",
                          borderRadius: "50%",
                          p: 1,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <PhoneIcon sx={{ color: darkMode ? "#BB6BD9" : "#9C27B0" }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: darkMode ? "#e0e0e0" : "#666666", mb: 0.5 }}>
                          Phone
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                          +1 234 567 890
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Box 
                        sx={{ 
                          mr: 2, 
                          backgroundColor: darkMode ? "rgba(86, 204, 242, 0.2)" : "rgba(0, 128, 128, 0.1)",
                          borderRadius: "50%",
                          p: 1,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <EmailIcon sx={{ color: darkMode ? "#56CCF2" : "#008080" }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: darkMode ? "#e0e0e0" : "#666666", mb: 0.5 }}>
                          Email
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                          contact@example.com
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Box 
                        sx={{ 
                          mr: 2, 
                          backgroundColor: darkMode ? "rgba(242, 201, 76, 0.2)" : "rgba(255, 193, 7, 0.1)",
                          borderRadius: "50%",
                          p: 1,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <LocationOnIcon sx={{ color: darkMode ? "#F2C94C" : "#FFC107" }} />
                      </Box>
                      <Box>
                      <Typography variant="subtitle2" sx={{ color: darkMode ? "#e0e0e0" : "#666666", mb: 0.5 }}>
                          Address
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                          123 Main Street, City, Country
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                      <Box 
                        sx={{ 
                          mr: 2, 
                          backgroundColor: darkMode ? "rgba(111, 207, 151, 0.2)" : "rgba(76, 175, 80, 0.1)",
                          borderRadius: "50%",
                          p: 1,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <AccessTimeIcon sx={{ color: darkMode ? "#6FCF97" : "#4CAF50" }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ color: darkMode ? "#e0e0e0" : "#666666", mb: 0.5 }}>
                          Working Hours
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: "medium" }}>
                          Mon-Fri: 9:00 AM - 6:00 PM
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Social Media Links */}
                  <Box sx={{ mt: 5 }}>
                    <Divider sx={{ mb: 3, borderColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }} />
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: darkMode ? "#ffffff" : "#333333",
                        mb: 2,
                      }}
                    >
                      Connect With Us
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <IconButton 
                        href="https://www.linkedin.com" 
                        target="_blank"
                        sx={{ 
                          backgroundColor: darkMode ? "rgba(0, 119, 181, 0.1)" : "rgba(0, 119, 181, 0.05)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: darkMode ? "rgba(0, 119, 181, 0.2)" : "rgba(0, 119, 181, 0.1)",
                            transform: "translateY(-3px)"
                          }
                        }}
                      >
                        <LinkedInIcon
                          sx={{ color: darkMode ? "#ffffff" : "#0077B5" }}
                        />
                      </IconButton>
                      <IconButton 
                        href="https://www.instagram.com" 
                        target="_blank"
                        sx={{ 
                          backgroundColor: darkMode ? "rgba(228, 64, 95, 0.1)" : "rgba(228, 64, 95, 0.05)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: darkMode ? "rgba(228, 64, 95, 0.2)" : "rgba(228, 64, 95, 0.1)",
                            transform: "translateY(-3px)"
                          }
                        }}
                      >
                        <InstagramIcon
                          sx={{ color: darkMode ? "#ffffff" : "#E4405F" }}
                        />
                      </IconButton>
                      <IconButton 
                        href="https://www.facebook.com" 
                        target="_blank"
                        sx={{ 
                          backgroundColor: darkMode ? "rgba(66, 103, 178, 0.1)" : "rgba(66, 103, 178, 0.05)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: darkMode ? "rgba(66, 103, 178, 0.2)" : "rgba(66, 103, 178, 0.1)",
                            transform: "translateY(-3px)"
                          }
                        }}
                      >
                        <FacebookIcon
                          sx={{ color: darkMode ? "#ffffff" : "#4267B2" }}
                        />
                      </IconButton>
                      <IconButton 
                        href="https://www.github.com" 
                        target="_blank"
                        sx={{ 
                          backgroundColor: darkMode ? "rgba(51, 51, 51, 0.1)" : "rgba(51, 51, 51, 0.05)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: darkMode ? "rgba(51, 51, 51, 0.2)" : "rgba(51, 51, 51, 0.1)",
                            transform: "translateY(-3px)"
                          }
                        }}
                      >
                        <GitHubIcon
                          sx={{ color: darkMode ? "#ffffff" : "#333333" }}
                        />
                      </IconButton>
                      <IconButton 
                        href="https://wa.me/1234567890" 
                        target="_blank"
                        sx={{ 
                          backgroundColor: darkMode ? "rgba(37, 211, 102, 0.1)" : "rgba(37, 211, 102, 0.05)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            backgroundColor: darkMode ? "rgba(37, 211, 102, 0.2)" : "rgba(37, 211, 102, 0.1)",
                            transform: "translateY(-3px)"
                          }
                        }}
                      >
                        <WhatsAppIcon
                          sx={{ color: darkMode ? "#ffffff" : "#25D366" }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* Send Us a Message */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <StyledCard3D
                  darkMode={darkMode}
                  elevation={6}
                  sx={{ p: 4, height: "100%", width: "100%", maxWidth: "500px" }}
                >
                  <Typography
                    variant="h4"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: darkMode ? "#56CCF2" : "#008080",
                      mb: 4,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: -10,
                        left: 0,
                        width: "60px",
                        height: "3px",
                        background: darkMode ? "#56CCF2" : "#008080",
                        borderRadius: "2px",
                      },
                    }}
                  >
                    Send Us a Message
                  </Typography>

                  {/* Success and Error Alerts */}
                  {isSubmitted && (
                    <Alert 
                      severity="success" 
                      sx={{ mb: 3, mt: 2 }}
                      onClose={() => setIsSubmitted(false)}
                    >
                      Your message has been sent successfully! We'll get back to you soon.
                    </Alert>
                  )}
                  
                  {formError && (
                    <Alert 
                      severity="error" 
                      sx={{ mb: 3, mt: 2 }}
                      onClose={() => setFormError(false)}
                    >
                      Please fill in all required fields.
                    </Alert>
                  )}

                  {/* Contact Form */}
                  <form onSubmit={handleSubmit}>
                    <StyledTextField
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      sx={{ mb: 3, mt: 2 }}
                      placeholder="Enter your full name"
                      required
                      darkMode={darkMode}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                    <StyledTextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      sx={{ mb: 3 }}
                      placeholder="Enter your email address"
                      required
                      darkMode={darkMode}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                    <StyledTextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      sx={{ mb: 3 }}
                      placeholder="What is this regarding?"
                      darkMode={darkMode}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                    <StyledTextField
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      sx={{ mb: 3 }}
                      placeholder="How can we help you?"
                      required
                      darkMode={darkMode}
                      InputProps={{
                        sx: { borderRadius: 2 }
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<SendIcon />}
                      sx={{
                        backgroundColor: darkMode ? "#56CCF2" : "#008080",
                        borderRadius: 2,
                        py: 1.5,
                        px: 3,
                        "&:hover": {
                          backgroundColor: darkMode ? "#2196F3" : "#006666",
                          transform: "translateY(-3px)",
                          boxShadow: darkMode 
                            ? "0 8px 15px rgba(33, 150, 243, 0.3)" 
                            : "0 8px 15px rgba(0, 102, 102, 0.3)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Send Message
                    </Button>
                  </form>
                </StyledCard3D>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: darkMode ? "#121212" : "#f8f9fa",
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
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  background: darkMode ? "#F2C94C" : "#FFC107",
                  borderRadius: "2px",
                },
              }}
            >
              Our Location
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
                mt: 3,
              }}
            >
              Visit our facility to see our manufacturing capabilities firsthand
              and meet our team of experts.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <StyledCard3D darkMode={darkMode} elevation={6}>
              <Box
                sx={{
                  height: "500px",
                  width: "100%",
                  backgroundColor: darkMode ? "#1E1E1E" : "#f5f7fa",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9948383360164!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Box>
            </StyledCard3D>
          </motion.div>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: darkMode ? "#1A1A1A" : "#e6f7f7",
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
                       <StyledCard3D
              darkMode={darkMode}
              elevation={6}
              sx={{ p: { xs: 4, md: 6 }, textAlign: "center" }}
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
                Ready to Discuss Your Project?
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
                Our team of experts is ready to help you find the perfect rubber
                and plastic solutions for your specific needs. Let's start a
                conversation today.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 3,
                  flexWrap: "wrap",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
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
                        boxShadow: darkMode 
                          ? "0 8px 15px rgba(33, 150, 243, 0.3)" 
                          : "0 8px 15px rgba(0, 102, 102, 0.3)",
                      },
                    }}
                  >
                    Explore Products
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component="a"
                    href="tel:+919003217075"
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
                        boxShadow: darkMode 
                          ? "0 8px 15px rgba(156, 39, 176, 0.2)" 
                          : "0 8px 15px rgba(0, 102, 102, 0.2)",
                      },
                    }}
                  >
                    Call Us Now
                  </Button>
                </motion.div>
              </Box>
            </StyledCard3D>
          </motion.div>
        </Container>
      </Box>

      {/* FAQ Section */}
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
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "80px",
                  height: "4px",
                  background: darkMode ? "#6FCF97" : "#4CAF50",
                  borderRadius: "2px",
                },
              }}
            >
              Frequently Asked Questions
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
                mt: 3,
              }}
            >
              Find answers to common questions about our products, services, and
              ordering process.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* FAQ Item 1 */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <StyledCard3D 
                  darkMode={darkMode} 
                  elevation={6} 
                  sx={{ 
                    p: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: darkMode
                        ? "0 20px 40px rgba(0, 0, 0, 0.6), 0 10px 20px rgba(0, 0, 0, 0.4)"
                        : "0 20px 40px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)",
                    }
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: darkMode ? "#56CCF2" : "#008080",
                      mb: 2,
                    }}
                  >
                    What industries do you serve?
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      lineHeight: 1.7,
                    }}
                  >
                    We serve a wide range of industries including automotive,
                    industrial manufacturing, medical, electronics, aerospace,
                    and consumer goods. Our versatile manufacturing capabilities
                    allow us to create components for virtually any application.
                  </Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* FAQ Item 2 */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <StyledCard3D 
                  darkMode={darkMode} 
                  elevation={6} 
                  sx={{ 
                    p: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: darkMode
                        ? "0 20px 40px rgba(0, 0, 0, 0.6), 0 10px 20px rgba(0, 0, 0, 0.4)"
                        : "0 20px 40px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)",
                    }
                  }}
                >
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
                    Do you offer custom manufacturing?
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      lineHeight: 1.7,
                    }}
                  >
                    Yes, we specialize in custom manufacturing solutions. Our
                    engineering team works closely with clients to design and
                    produce components that meet specific requirements, from
                    material selection to precise dimensions and performance
                    characteristics.
                  </Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* FAQ Item 3 */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <StyledCard3D 
                  darkMode={darkMode} 
                  elevation={6} 
                  sx={{ 
                    p: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: darkMode
                        ? "0 20px 40px rgba(0, 0, 0, 0.6), 0 10px 20px rgba(0, 0, 0, 0.4)"
                        : "0 20px 40px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)",
                    }
                  }}
                >
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
                    What is your minimum order quantity?
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      lineHeight: 1.7,
                    }}
                  >
                    Our minimum order quantities vary depending on the product
                    type, complexity, and manufacturing process. We strive to be
                    flexible and accommodate both small batch production and
                    high-volume orders. Please contact us with your specific
                    requirements for a quote.
                  </Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* FAQ Item 4 */}
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <StyledCard3D 
                  darkMode={darkMode} 
                  elevation={6} 
                  sx={{ 
                    p: 3,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-10px)",
                      boxShadow: darkMode
                        ? "0 20px 40px rgba(0, 0, 0, 0.6), 0 10px 20px rgba(0, 0, 0, 0.4)"
                        : "0 20px 40px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)",
                    }
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      color: darkMode ? "#BB6BD9" : "#9C27B0",
                      mb: 2,
                    }}
                  >
                    What is your typical lead time?
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? "#e0e0e0" : "#555555",
                      lineHeight: 1.7,
                    }}
                  >
                    Lead times depend on product complexity, order volume, and
                    current production schedule. For standard products, we
                    typically deliver within 2-4 weeks. Custom projects may
                    require additional time for design and tooling. We always
                    work to provide realistic timelines and meet agreed-upon
                    deadlines.
                  </Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
