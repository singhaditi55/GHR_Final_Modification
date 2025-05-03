import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VerifiedIcon from '@mui/icons-material/Verified';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HistoryIcon from '@mui/icons-material/History';
import GroupsIcon from '@mui/icons-material/Groups';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FactoryIcon from '@mui/icons-material/Factory';
import RecyclingIcon from '@mui/icons-material/Recycling';
import PsychologyIcon from '@mui/icons-material/Psychology';

// Import the ThemeContext from Home.js
import { ThemeContext } from './Home';

// Import background image
import aboutBg from '../components/assets/bg.png';

// Styled components for 3D card effects (similar to Home.js)
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

const About = () => {
  // Access theme context
  const { darkMode } = useContext(ThemeContext);

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
          backgroundImage: `url(${aboutBg})`,
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
              About GHR Industries
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
              Pioneering excellence in rubber and plastic manufacturing with a commitment to quality, innovation, and sustainability.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Company Overview Section */}
      <Box
        sx={{
          py: { xs: 6, md: 12 },
          backgroundColor: darkMode ? '#1E1E1E' : '#f5f7fa',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
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
                  }}
                >
                  Our Company
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: darkMode ? '#e0e0e0' : '#555555',
                    mb: 3,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                  }}
                >
                  GHR Industries is a leading manufacturer of high-quality rubber and plastic products, 
                  serving various industries with innovative solutions. With state-of-the-art facilities 
                  and a team of experienced professionals, we have established ourselves as a trusted 
                  partner for businesses seeking reliable and durable components.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: darkMode ? '#e0e0e0' : '#555555',
                    mb: 3,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                  }}
                >
                  Our commitment to excellence drives us to continuously improve our processes, 
                  invest in cutting-edge technology, and develop sustainable manufacturing practices 
                  that minimize environmental impact while maximizing product performance.
                </Typography>
              </motion.div>
            </Grid>
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
                      textAlign: 'center',
                    }}
                  >
                    Vision & Mission
                  </Typography>
                  
                  <Box sx={{ mb: 4 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: darkMode ? '#ffffff' : '#333333',
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <PsychologyIcon sx={{ mr: 1, color: darkMode ? '#BB6BD9' : '#9C27B0' }} />
                      Vision Statement
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: darkMode ? '#e0e0e0' : '#555555',
                        fontStyle: 'italic',
                        pl: 4,
                        borderLeft: darkMode ? '3px solid #BB6BD9' : '3px solid #9C27B0',
                        py: 1,
                      }}
                    >
                      "To be a leading force in the rubber and plastic industry by pioneering sustainable 
                      manufacturing practices that protect the environment, empower innovation, and drive 
                      long-term profitability—creating a cleaner, greener future for generations to come."
                    </Typography>
                  </Box>
                  
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: darkMode ? '#ffffff' : '#333333',
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <FactoryIcon sx={{ mr: 1, color: darkMode ? '#6FCF97' : '#4CAF50' }} />
                      Mission Statement
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: darkMode ? '#e0e0e0' : '#555555',
                        fontStyle: 'italic',
                        pl: 4,
                        borderLeft: darkMode ? '3px solid #6FCF97' : '3px solid #4CAF50',
                        py: 1,
                      }}
                    >
                      "Our mission is to manufacture high-quality rubber and plastic products through 
                      eco-conscious processes, leveraging advanced technology and responsible resource 
                      management. We are committed to reducing environmental impact, maximising operational 
                      efficiency, and creating value for our customers and communities—while remaining 
                      proudly independent and future-focused."
                    </Typography>
                  </Box>
                </StyledCard3D>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Values Section */}
      <Box
        sx={{
          py: { xs: 6, md: 12 },
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
              Our Core Values
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
              At GHR Industries, our values guide every decision we make and shape our approach to business, 
              innovation, and relationships with our stakeholders.
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {/* Value 1: Quality */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4, height: '100%' }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <VerifiedIcon
                      sx={{
                        fontSize: 60,
                        color: darkMode ? '#6FCF97' : '#4CAF50',
                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: darkMode ? '#ffffff' : '#333333',
                      mb: 2,
                    }}
                  >
                    Quality Excellence
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'center',
                      color: darkMode ? '#e0e0e0' : '#555555',
                    }}
                  >
                    We are committed to delivering products of the highest quality, exceeding industry standards
                    and meeting the specific needs of our customers. Quality is not just a goal—it's our standard.
                  </Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* Value 2: Innovation */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4, height: '100%' }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <PsychologyIcon
                      sx={{
                        fontSize: 60,
                        color: darkMode ? '#56CCF2' : '#2196F3',
                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: darkMode ? '#ffffff' : '#333333',
                      mb: 2,
                    }}
                  >
                    Continuous Innovation
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'center',
                      color: darkMode ? '#e0e0e0' : '#555555',
                    }}
                  >
                    We embrace innovation in our processes, products, and solutions. Our R&D team constantly
                    explores new technologies and methodologies to stay ahead of industry trends.
                  </Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* Value 3: Sustainability */}
            <Grid item xs={12} sm={6} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4, height: '100%' }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <RecyclingIcon
                      sx={{
                        fontSize: 60,
                        color: darkMode ? '#F2C94C' : '#FFC107',
                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: darkMode ? '#ffffff' : '#333333',
                      mb: 2,
                    }}
                  >
                    Environmental Responsibility
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'center',
                      color: darkMode ? '#e0e0e0' : '#555555',
                    }}
                  >
                    We are dedicated to sustainable practices that minimize our environmental footprint
                    through responsible resource management and eco-friendly manufacturing processes.
                  </Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* Value 4: Customer Focus */}
            <Grid item xs={12} sm={6} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4, height: '100%' }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <GroupsIcon
                      sx={{
                        fontSize: 60,
                        color: darkMode ? '#BB6BD9' : '#9C27B0',
                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: darkMode ? '#ffffff' : '#333333',
                      mb: 2,
                    }}
                  >
                    Customer Partnership
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'center',
                      color: darkMode ? '#e0e0e0' : '#555555',
                    }}
                  >
                    We view our customers as partners in success. We listen to their needs, provide tailored solutions,
                    and build long-term relationships based on trust, reliability, and mutual growth.
                  </Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>

            {/* Value 5: Integrity */}
            <Grid item xs={12} sm={6} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <StyledCard3D darkMode={darkMode} elevation={6} sx={{ p: 4, height: '100%' }}>
                  <Box sx={{ textAlign: 'center', mb: 3 }}>
                    <EmojiEventsIcon
                      sx={{
                        fontSize: 60,
                        color: darkMode ? '#F2C94C' : '#FFC107',
                        filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.2))',
                      }}
                    />
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: darkMode ? '#ffffff' : '#333333',
                      mb: 2,
                    }}
                  >
                    Integrity & Ethics
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textAlign: 'center',
                      color: darkMode ? '#e0e0e0' : '#555555',
                    }}
                  >
                    We conduct our business with the highest standards of integrity and ethics. Transparency,
                    honesty, and fairness are the foundations of our relationships with customers, employees,
                    suppliers, and the communities we serve.
                  </Typography>
                </StyledCard3D>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Expertise Section */}
      <Box
        sx={{
          py: { xs: 6, md: 12 },
          backgroundColor: darkMode ? '#1E1E1E' : '#f5f7fa',
          transition: 'background-color 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
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
                      color: darkMode ? '#56CCF2' : '#008080',
                      mb: 3,
                    }}
                  >
                    Our Expertise
                  </Typography>
                  
                  <List>
                    <ListItem sx={{ pb: 2 }}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: darkMode ? '#6FCF97' : '#4CAF50' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Typography variant="h6" sx={{ color: darkMode ? '#ffffff' : '#333333' }}>
                            Advanced Manufacturing
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" sx={{ color: darkMode ? '#e0e0e0' : '#555555', mt: 1 }}>
                            Utilizing transfer moulding, injection moulding, and other advanced technologies
                            to create precision components.
                          </Typography>
                        }
                      />
                    </ListItem>
                    
                    <ListItem sx={{ pb: 2 }}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: darkMode ? '#6FCF97' : '#4CAF50' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Typography variant="h6" sx={{ color: darkMode ? '#ffffff' : '#333333' }}>
                            Material Science
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" sx={{ color: darkMode ? '#e0e0e0' : '#555555', mt: 1 }}>
                            Expert knowledge in various rubber compounds, plastics, and TPE materials
                            to meet specific application requirements.
                          </Typography>
                        }
                      />
                    </ListItem>
                    
                    <ListItem sx={{ pb: 2 }}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: darkMode ? '#6FCF97' : '#4CAF50' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Typography variant="h6" sx={{ color: darkMode ? '#ffffff' : '#333333' }}>
                            Quality Control
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" sx={{ color: darkMode ? '#e0e0e0' : '#555555', mt: 1 }}>
                            Rigorous testing and inspection processes to ensure every product meets
                            our high standards and industry specifications.
                          </Typography>
                        }
                      />
                    </ListItem>
                    
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: darkMode ? '#6FCF97' : '#4CAF50' }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                          <Typography variant="h6" sx={{ color: darkMode ? '#ffffff' : '#333333' }}>
                            Custom Solutions
                          </Typography>
                        }
                        secondary={
                          <Typography variant="body2" sx={{ color: darkMode ? '#e0e0e0' : '#555555', mt: 1 }}>
                            Tailored design and manufacturing services to meet unique customer requirements
                            and solve complex engineering challenges.
                          </Typography>
                        }
                      />
                    </ListItem>
                  </List>
                </StyledCard3D>
              </motion.div>
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
                    fontWeight: 'bold',
                    color: darkMode ? '#ffffff' : '#333333',
                    mb: 2,
                  }}
                >
                  Industry Experience
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: darkMode ? '#e0e0e0' : '#555555',
                    mb: 3,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                  }}
                >
                  With decades of experience in the industry, we specialize in manufacturing a wide range 
                  of rubber and plastic components using advanced technologies. Our products are developed 
                  with a focus on quality, durability, and performance.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: darkMode ? '#e0e0e0' : '#555555',
                    mb: 3,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                  }}
                >
                  Our team of engineers and technicians brings extensive knowledge and expertise to every project,
                  ensuring that we deliver solutions that not only meet but exceed our customers' expectations.
                  We continuously invest in training and development to stay at the forefront of industry advancements.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    color: darkMode ? '#e0e0e0' : '#555555',
                    mb: 4,
                    fontSize: '1.1rem',
                    lineHeight: 1.7,
                  }}
                >
                  Our products serve critical applications across automotive, aerospace, medical, industrial,
                  and consumer sectors, demonstrating our versatility and comprehensive understanding of diverse
                  industry requirements.
                </Typography>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    component={Link}
                    to="/contact"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForwardIcon />}
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
                    Contact Our Experts
                  </Button>
                </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* History Timeline Section */}
      <Box
        sx={{
          py: { xs: 6, md: 12 },
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
              Our Journey
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
              From our humble beginnings to becoming an industry leader, our journey reflects our commitment to excellence and innovation.
            </Typography>
          </motion.div>

          <Box sx={{ position: 'relative' }}>
            {/* Timeline line */}
            <Box
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '4px',
                height: '100%',
                backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                zIndex: 0,
                display: { xs: 'none', md: 'block' },
              }}
            />

            {/* Timeline events */}
            <Grid container spacing={4}>
              {/* Event 1 */}
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sx={{ textAlign: { md: 'right' } }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 'bold',
                          color: darkMode ? '#56CCF2' : '#008080',
                          mb: 1,
                        }}
                      >
                        2010
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: darkMode ? '#ffffff' : '#333333',
                          mb: 2,
                        }}
                      >
                        Company Founded
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          backgroundColor: darkMode ? '#56CCF2' : '#008080',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          zIndex: 1,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        }}
                      >
                        <HistoryIcon sx={{ color: 'white', fontSize: 30 }} />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: darkMode ? '#e0e0e0' : '#555555',
                          mb: 3,
                        }}
                      >
                        GHR Industries was established with a vision to revolutionize the rubber manufacturing industry through quality and innovation. Starting with a small team of dedicated professionals, we began our journey to excellence.
                      </Typography>
                    </Grid>
                  </Grid>
                </motion.div>
              </Grid>

              {/* Event 2 */}
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sx={{ textAlign: { md: 'right' } }}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: darkMode ? '#e0e0e0' : '#555555',
                          mb: 3,
                          display: { xs: 'block', md: 'none' },
                        }}
                      >
                        We expanded our operations by investing in advanced manufacturing equipment and technologies, significantly increasing our production capacity and capabilities.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          backgroundColor: darkMode ? '#F2C94C' : '#FFC107',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          zIndex: 1,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        }}
                      >
                        <EngineeringIcon sx={{ color: 'white', fontSize: 30 }} />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 'bold',
                          color: darkMode ? '#F2C94C' : '#FFC107',
                          mb: 1,
                        }}
                      >
                        2014
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: darkMode ? '#ffffff' : '#333333',
                          mb: 2,
                        }}
                      >
                        Facility Expansion
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: darkMode ? '#e0e0e0' : '#555555',
                          mb: 3,
                          display: { xs: 'none', md: 'block' },
                        }}
                      >
                        We expanded our operations by investing in advanced manufacturing equipment and technologies, significantly increasing our production capacity and capabilities.
                      </Typography>
                    </Grid>
                  </Grid>
                </motion.div>
              </Grid>

              {/* Event 3 */}
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sx={{ textAlign: { md: 'right' } }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 'bold',
                          color: darkMode ? '#6FCF97' : '#4CAF50',
                          mb: 1,
                        }}
                      >
                        2017
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: darkMode ? '#ffffff' : '#333333',
                          mb: 2,
                        }}
                      >
                        ISO Certification
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: darkMode ? '#e0e0e0' : '#555555',
                          mb: 3,
                          display: { xs: 'none', md: 'block' },
                        }}
                      >
                        A major milestone in our journey was achieving ISO certification, validating our commitment to quality management systems and international standards of excellence.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          backgroundColor: darkMode ? '#6FCF97' : '#4CAF50',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          zIndex: 1,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        }}
                      >
                        <VerifiedIcon sx={{ color: 'white', fontSize: 30 }} />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: darkMode ? '#e0e0e0' : '#555555',
                          mb: 3,
                          display: { xs: 'block', md: 'none' },
                        }}
                      >
                        A major milestone in our journey was achieving ISO certification, validating our commitment to quality management systems and international standards of excellence.
                      </Typography>
                    </Grid>
                  </Grid>
                </motion.div>
              </Grid>

              {/* Event 4 */}
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sx={{ textAlign: { md: 'right' } }}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: darkMode ? '#e0e0e0' : '#555555',
                          mb: 3,
                          display: { xs: 'block', md: 'none' },
                        }}
                      >
                        We launched our sustainable manufacturing initiative, implementing eco-friendly processes and materials to reduce our environmental footprint while maintaining product quality.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          backgroundColor: darkMode ? '#BB6BD9' : '#9C27B0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          zIndex: 1,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        }}
                      >
                        <RecyclingIcon sx={{ color: 'white', fontSize: 30 }} />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 'bold',
                          color: darkMode ? '#BB6BD9' : '#9C27B0',
                          mb: 1,
                        }}
                      >
                        2020
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: darkMode ? '#ffffff' : '#333333',
                          mb: 2,
                        }}
                      >
                        Sustainability Initiative
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: darkMode ? '#e0e0e0' : '#555555',
                          mb: 3,
                          display: { xs: 'none', md: 'block' },
                        }}
                      >
                        We launched our sustainable manufacturing initiative, implementing eco-friendly processes and materials to reduce our environmental footprint while maintaining product quality.
                      </Typography>
                    </Grid>
                  </Grid>
                </motion.div>
              </Grid>

              {/* Event 5 */}
              <Grid item xs={12}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={5} sx={{ textAlign: { md: 'right' } }}>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 'bold',
                          color: darkMode ? '#56CCF2' : '#2196F3',
                          mb: 1,
                        }}
                      >
                        Today
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 'bold',
                          color: darkMode ? '#ffffff' : '#333333',
                          mb: 2,
                        }}
                      >
                        Global Expansion
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: darkMode ? '#e0e0e0' : '#555555',
                          mb: 3,
                          display: { xs: 'none', md: 'block' },
                        }}
                      >
                        Today, GHR Industries continues to grow globally, serving customers across continents with our high-quality rubber and plastic components while maintaining our commitment to excellence and sustainability.
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          backgroundColor: darkMode ? '#56CCF2' : '#2196F3',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          position: 'relative',
                          zIndex: 1,
                          boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                        }}
                      >
                        <EmojiEventsIcon sx={{ color: 'white', fontSize: 30 }} />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={5}>
                      <Typography
                        variant="body1"
                        sx={{
                          color: darkMode ? '#e0e0e0' : '#555555',
                          mb: 3,
                          display: { xs: 'block', md: 'none' },
                        }}
                      >
                        Today, GHR Industries continues to grow globally, serving customers across continents with our high-quality rubber and plastic components while maintaining our commitment to excellence and sustainability.
                      </Typography>
                    </Grid>
                  </Grid>
                </motion.div>
              </Grid>
            </Grid>
          </Box>
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
                Partner With Us
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
                Experience the GHR difference. Let's collaborate to create innovative rubber and plastic solutions that meet your specific needs and exceed your expectations.
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
                    component={Link}
                    to="/contact"
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
                    Contact Us
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

export default About;