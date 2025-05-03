  import React, { useState, useContext } from 'react';
  import { motion } from 'framer-motion';
  import { Link } from 'react-router-dom';
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
  } from '@mui/material';
  import { styled } from '@mui/material/styles';
  import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import PhoneIcon from '@mui/icons-material/Phone';
  import EmailIcon from '@mui/icons-material/Email';
  import AccessTimeIcon from '@mui/icons-material/AccessTime';
  import LinkedInIcon from '@mui/icons-material/LinkedIn';
  import InstagramIcon from '@mui/icons-material/Instagram';
  import SendIcon from '@mui/icons-material/Send';

  // Import the ThemeContext from Home.js
  import { ThemeContext } from './Home';

  // Import background image
  import contactBg from '../components/assets/bg.png';

  // Styled components for 3D card effects (similar to Home.js and About.js)
  const StyledCard3D = styled(Paper)(({ theme, darkMode }) => ({
    position: 'relative',
    transition: 'all 0.3s ease',
    transformStyle: 'preserve-3d',
    backgroundColor: darkMode
      ? theme.palette.grey[900]
      : theme.palette.background.paper,
    color: darkMode ? theme.palette.common.white : theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius * 2,
    overflow: 'hidden',
    boxShadow: darkMode
      ? '0 15px 35px rgba(0, 0, 0, 0.5), 0 5px 15px rgba(0, 0, 0, 0.3)'
      : '0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)',
    '&:hover': {
      transform: 'translateY(-10px) rotateX(5deg) rotateY(5deg)',
      boxShadow: darkMode
        ? '0 20px 40px rgba(0, 0, 0, 0.6), 0 10px 20px rgba(0, 0, 0, 0.4)'
        : '0 20px 40px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1)',
    },
  }));

  // Styled TextField component
  const StyledTextField = styled(TextField)(({ theme, darkMode }) => ({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: darkMode ? 'rgba(255, 255, 255, 0.23)' : 'rgba(0, 0, 0, 0.23)',
      },
      '&:hover fieldset': {
        borderColor: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
      },
      '&.Mui-focused fieldset': {
        borderColor: darkMode ? '#56CCF2' : '#008080',
      },
    },
    '& .MuiInputLabel-root': {
      color: darkMode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.6)',
      '&.Mui-focused': {
        color: darkMode ? '#56CCF2' : '#008080',
      },
    },
    '& .MuiInputBase-input': {
      color: darkMode ? '#ffffff' : '#000000',
    },
  }));

  const Contact = () => {
    // Access theme context
    const { darkMode } = useContext(ThemeContext);

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
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
      console.log('Form submitted:', formData);
    
      // Show success message
      setIsSubmitted(true);
    
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
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
          type: 'spring',
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
          backgroundColor: darkMode ? '#121212' : '#ffffff',
          color: darkMode ? '#ffffff' : '#000000',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            position: 'relative',
            backgroundImage: `url(${contactBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: { xs: '40vh', sm: '50vh' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: 'white',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: darkMode
                ? 'rgba(0, 0, 0, 0.8)'
                : 'rgba(0, 0, 0, 0.7)',
              backgroundImage: darkMode
                ? 'linear-gradient(45deg, rgba(30, 30, 30, 0.9) 0%, rgba(0, 0, 0, 0.9) 100%)'
                : 'linear-gradient(45deg, rgba(50, 50, 50, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%)',
              zIndex: 1,
            },
          }}
        >
          <Container
            maxWidth="lg"
            sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 3, md: 4 } }}
          >
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.75rem' },
                  textShadow: '0 2px 4px rgba(0,0,0,0.5)',
                  background: darkMode
                    ? 'linear-gradient(45deg, #f5f5f5 30%, #e0e0e0 90%)'
                    : 'linear-gradient(45deg, #f5f5f5 30%, #e0e0e0 90%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3,
                }}
              >
                Contact Us
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  maxWidth: '800px',
                  mb: 5,
                  color: '#e0e0e0',
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                }}
              >
                Have questions about our products or services? We're here to help and answer any questions you might have.
              </Typography>
            </motion.div>
          </Container>
        </Box>

        {/* Contact Form and Information Section */}
        <Box
          sx={{
            py: { xs: 6, md: 12 },
            backgroundColor: darkMode ? '#1E1E1E' : '#f5f7fa',
            transition: 'background-color 0.3s ease',
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
                  fontWeight: 'bold',
                  color: darkMode ? '#ffffff' : '#333333',
                  mb: 2,
                  textAlign: 'center',
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: darkMode ? '#e0e0e0' : '#555555',
                  maxWidth: '800px',
                  mx: 'auto',
                  textAlign: 'center',
                  mb: 6,
                  fontSize: '1.1rem',
                }}
              >
                We value your feedback and inquiries. Use the form below to reach out to us or contact us directly using our information.
              </Typography>
            </motion.div>

            <Grid container spacing={6}>
              {/* Contact Information - LEFT SIDE */}
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        color: darkMode ? '#BB6BD9' : '#9C27B0',
                        mb: 4,
                      }}
                    >
                      Contact Information
                    </Typography>

                    <Box sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                        <Box
                          sx={{
                            backgroundColor: darkMode ? 'rgba(187, 107, 217, 0.2)' : 'rgba(156, 39, 176, 0.1)',
                            borderRadius: '50%',
                            p: 1.5,
                            mr: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <LocationOnIcon sx={{ color: darkMode ? '#BB6BD9' : '#9C27B0' }} />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 'bold',
                              color: darkMode ? '#ffffff' : '#333333',
                              mb: 1,
                            }}
                          >
                            Address
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: darkMode ? '#e0e0e0' : '#555555',
                              lineHeight: 1.6,
                            }}
                          >
                            GHR Industries<br />
                            123 Manufacturing Way<br />
                            Industrial District<br />
                            City, State 12345
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                        <Box
                          sx={{
                            backgroundColor: darkMode ? 'rgba(86, 204, 242, 0.2)' : 'rgba(33, 150, 243, 0.1)',
                            borderRadius: '50%',
                            p: 1.5,
                            mr: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <PhoneIcon sx={{ color: darkMode ? '#56CCF2' : '#2196F3' }} />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 'bold',
                              color: darkMode ? '#ffffff' : '#333333',
                              mb: 1,
                            }}
                          >
                            Phone
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: darkMode ? '#e0e0e0' : '#555555',
                              lineHeight: 1.6,
                            }}
                          >
                            Main Office: <Link 
                              href="tel:+919003217075" 
                              style={{ 
                                color: darkMode ? '#56CCF2' : '#2196F3',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease',
                              }}
                            >
                              +91 9003217075
                            </Link><br />
                            Customer Support: <Link 
                              href="tel:+919003217075" 
                              style={{ 
                                color: darkMode ? '#56CCF2' : '#2196F3',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease',
                              }}
                            >
                              +91 9003217075
                            </Link>
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                        <Box
                          sx={{
                            backgroundColor: darkMode ? 'rgba(111, 207, 151, 0.2)' : 'rgba(76, 175, 80, 0.1)',
                            borderRadius: '50%',
                            p: 1.5,
                            mr: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <EmailIcon sx={{ color: darkMode ? '#6FCF97' : '#4CAF50' }} />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 'bold',
                              color: darkMode ? '#ffffff' : '#333333',
                              mb: 1,
                            }}
                          >
                            Email
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: darkMode ? '#e0e0e0' : '#555555',
                              lineHeight: 1.6,
                            }}
                          >
                            General Inquiries: <Link 
                              href="mailto:gopighrindustries@gmail.com" 
                              style={{ 
                                color: darkMode ? '#6FCF97' : '#4CAF50',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease',
                              }}
                            >
                              gopighrindustries@gmail.com
                            </Link><br />
                            Sales: <Link 
                              href="mailto:gopighrindustries@gmail.com" 
                              style={{ 
                                color: darkMode ? '#6FCF97' : '#4CAF50',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease',
                              }}
                            >
                              gopighrindustries@gmail.com
                            </Link><br />
                            Support: <Link 
                              href="mailto:gopighrindustries@gmail.com" 
                              style={{ 
                                color: darkMode ? '#6FCF97' : '#4CAF50',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease',
                              }}
                            >
                              gopighrindustries@gmail.com
                            </Link>
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            backgroundColor: darkMode ? 'rgba(242, 201, 76, 0.2)' : 'rgba(255, 193, 7, 0.1)',
                            borderRadius: '50%',
                            p: 1.5,
                            mr: 2,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <AccessTimeIcon sx={{ color: darkMode ? '#F2C94C' : '#FFC107' }} />
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 'bold',
                              color: darkMode ? '#ffffff' : '#333333',
                              mb: 1,
                            }}
                          >
                            Business Hours
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: darkMode ? '#e0e0e0' : '#555555',
                              lineHeight: 1.6,
                            }}
                          >
                            Monday - Friday: 8:00 AM - 5:00 PM<br />
                            Saturday & Sunday: Closed
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{ mt: 5 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: darkMode ? '#ffffff' : '#333333',
                          mb: 2,
                        }}
                      >
                        Connect With Us
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2 }}>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <IconButton
                            component="a"
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              backgroundColor: darkMode ? 'rgba(86, 204, 242, 0.2)' : 'rgba(33, 150, 243, 0.1)',
                              color: darkMode ? '#56CCF2' : '#2196F3',
                              '&:hover': {
                                backgroundColor: darkMode ? '#56CCF2' : '#2196F3',
                                color: '#ffffff',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          >
                            <LinkedInIcon />
                          </IconButton>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                          <IconButton
                            component="a"
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              backgroundColor: darkMode ? 'rgba(187, 107, 217, 0.2)' : 'rgba(156, 39, 176, 0.1)',
                              color: darkMode ? '#BB6BD9' : '#9C27B0',
                              '&:hover': {
                                backgroundColor: darkMode ? '#BB6BD9' : '#9C27B0',
                                color: '#ffffff',
                              },
                              transition: 'all 0.3s ease',
                            }}
                          >
                            <InstagramIcon />
                          </IconButton>
                        </motion.div>
                      </Box>
                    </Box>
                  </StyledCard3D>
                </motion.div>
              </Grid>
            
              {/* Contact Form */}
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4 }}>
                    <Typography
                      variant="h4"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        color: darkMode ? '#56CCF2' : '#008080',
                        mb: 3,
                      }}
                    >
                      Send Us a Message
                    </Typography>

                    {isSubmitted && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Alert 
                          severity="success" 
                          sx={{ 
                            mb: 4,
                            backgroundColor: darkMode ? 'rgba(76, 175, 80, 0.2)' : 'rgba(76, 175, 80, 0.1)',
                            color: darkMode ? '#6FCF97' : '#4CAF50',
                            '& .MuiAlert-icon': {
                              color: darkMode ? '#6FCF97' : '#4CAF50',
                            },
                          }}
                        >
                          <Typography variant="body1" fontWeight="medium">Thank you for your message!</Typography>
                          <Typography variant="body2">We will get back to you as soon as possible.</Typography>
                        </Alert>
                      </motion.div>
                    )}

                    {formError && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Alert 
                          severity="error" 
                          sx={{ 
                            mb: 4,
                            backgroundColor: darkMode ? 'rgba(244, 67, 54, 0.2)' : 'rgba(244, 67, 54, 0.1)',
                            color: darkMode ? '#f44336' : '#d32f2f',
                            '& .MuiAlert-icon': {
                              color: darkMode ? '#f44336' : '#d32f2f',
                            },
                          }}
                        >
                          <Typography variant="body1" fontWeight="medium">Please fill in all required fields.</Typography>
                        </Alert>
                      </motion.div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <StyledTextField
                            fullWidth
                            label="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            darkMode={darkMode}
                            placeholder="John Doe"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <StyledTextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            variant="outlined"
                            darkMode={darkMode}
                            placeholder="john@example.com"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <StyledTextField
                            fullWidth
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            variant="outlined"
                            darkMode={darkMode}
                            placeholder="Product Inquiry"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <StyledTextField
                            fullWidth
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            multiline
                            rows={5}
                            variant="outlined"
                            darkMode={darkMode}
                            placeholder="Please provide details about your inquiry..."
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Button
                              type="submit"
                              variant="contained"
                              fullWidth
                              size="large"
                              endIcon={<SendIcon />}
                              sx={{
                                backgroundColor: darkMode ? '#56CCF2' : '#008080',
                                py: 1.5,
                                borderRadius: 2,
                                '&:hover': {
                                  backgroundColor: darkMode ? '#2196F3' : '#006666',
                                },
                              }}
                            >
                              Send Message
                            </Button>
                          </motion.div>
                        </Grid>
                      </Grid>
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
            backgroundColor: darkMode ? '#121212' : '#ffffff',
            transition: 'background-color 0.3s ease',
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
                  fontWeight: 'bold',
                  color: darkMode ? '#ffffff' : '#333333',
                  mb: 2,
                  textAlign: 'center',
                }}
              >
                Our Location
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: darkMode ? '#e0e0e0' : '#555555',
                  maxWidth: '800px',
                  mx: 'auto',
                  textAlign: 'center',
                  mb: 6,
                  fontSize: '1.1rem',
                }}
              >
                Visit our facility to see our manufacturing capabilities firsthand and meet our team of experts.
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
                    height: '500px',
                    width: '100%',
                    backgroundColor: darkMode ? '#1E1E1E' : '#f5f7fa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                    overflow: 'hidden',
                  }}
                >
                  {/* Replace this with an actual Google Maps embed */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: darkMode ? '#e0e0e0' : '#555555',
                    }}
                  >
                  </Typography>
                  
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d YOUR_COORDINATES!2d YOUR_LONGITUDE!3d YOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zYOUR_COORDINATES!5e0!3m2!1sen!2sin!4v YOUR_API_KEY" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
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
            backgroundColor: darkMode ? '#1A1A1A' : '#e6f7f7',
            transition: 'background-color 0.3s ease',
          }}
        >
          <Container maxWidth="md">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: { xs: 4, md: 6 }, textAlign: 'center' }}>
                <Typography
                  variant="h3"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    color: darkMode ? '#ffffff' : '#333333',
                    mb: 2,
                  }}
                >
                  Ready to Discuss Your Project?
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: darkMode ? '#e0e0e0' : '#555555',
                    mb: 4,
                    maxWidth: '800px',
                    mx: 'auto',
                  }}
                >
                  Our team of experts is ready to help you find the perfect rubber and plastic solutions for your specific needs. Let's start a conversation today.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      component={Link}
                      to="/product"
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: darkMode ? '#56CCF2' : '#008080',
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        '&:hover': {
                          backgroundColor: darkMode ? '#2196F3' : '#006666',
                        },
                      }}
                    >
                      Explore Products
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      component="a"
                      href="tel:+919003217075"
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: darkMode ? '#BB6BD9' : '#008080',
                        color: darkMode ? '#BB6BD9' : '#008080',
                        px: 4,
                        py: 1.5,
                        borderRadius: 2,
                        '&:hover': {
                          borderColor: darkMode ? '#9C27B0' : '#006666',
                          backgroundColor: 'rgba(0, 128, 128, 0.1)',
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
            backgroundColor: darkMode ? '#1E1E1E' : '#f5f7fa',
            transition: 'background-color 0.3s ease',
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
                  fontWeight: 'bold',
                  color: darkMode ? '#ffffff' : '#333333',
                  mb: 2,
                  textAlign: 'center',
                }}
              >
                Frequently Asked Questions
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: darkMode ? '#e0e0e0' : '#555555',
                  maxWidth: '800px',
                  mx: 'auto',
                  textAlign: 'center',
                  mb: 6,
                  fontSize: '1.1rem',
                }}
              >
                Find answers to common questions about our products, services, and ordering process.
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
                  <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        color: darkMode ? '#56CCF2' : '#008080',
                        mb: 2,
                      }}
                    >
                      What industries do you serve?
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: darkMode ? '#e0e0e0' : '#555555',
                      }}
                    >
                      We serve a wide range of industries including automotive, industrial manufacturing, medical, electronics, aerospace, and consumer goods. Our versatile manufacturing capabilities allow us to create components for virtually any application.
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
                  <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        color: darkMode ? '#F2C94C' : '#FFC107',
                        mb: 2,
                      }}
                    >
                      Do you offer custom manufacturing?
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: darkMode ? '#e0e0e0' : '#555555',
                      }}
                    >
                      Yes, we specialize in custom manufacturing solutions. Our engineering team works closely with clients to design and produce components that meet specific requirements, from material selection to precise dimensions and performance characteristics.
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
                  <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        color: darkMode ? '#6FCF97' : '#4CAF50',
                        mb: 2,
                      }}
                    >
                      What is your minimum order quantity?
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: darkMode ? '#e0e0e0' : '#555555',
                      }}
                    >
                      Our minimum order quantities vary depending on the product type, complexity, and manufacturing process. We strive to be flexible and accommodate both small batch production and high-volume orders. Please contact us with your specific requirements for a quote.
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
                  <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        color: darkMode ? '#BB6BD9' : '#9C27B0',
                        mb: 2,
                      }}
                    >
                      What is your typical lead time?
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: darkMode ? '#e0e0e0' : '#555555',
                      }}
                    >
                      Lead times depend on product complexity, order volume, and current production schedule. For standard products, we typically deliver within 2-4 weeks. Custom projects may require additional time for design and tooling. We always work to provide realistic timelines and meet agreed-upon deadlines.
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