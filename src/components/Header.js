              import React, { useState, useContext } from "react";
              import { Link } from "react-router-dom";
              import logo from "../components/assets/logo.png";
              import { motion, AnimatePresence } from "framer-motion";
              import { 
                AppBar, 
                Toolbar, 
                IconButton, 
                Box,
                List, 
                ListItem, 
                ListItemText, 
                ListItemIcon,
                Divider,
                Dialog,
                Grid,
                Typography,
                Container,
                Card,
                CardContent,
                Tooltip
              } from '@mui/material';
              import MenuIcon from '@mui/icons-material/Menu';
              import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
              import ExpandLessIcon from '@mui/icons-material/ExpandLess';
              import HomeIcon from '@mui/icons-material/Home';
              import InfoIcon from '@mui/icons-material/Info';
              import CategoryIcon from '@mui/icons-material/Category';
              import ContactsIcon from '@mui/icons-material/Contacts';
              import WorkIcon from '@mui/icons-material/Work';
              import CloseIcon from '@mui/icons-material/Close';
              import WidgetsIcon from '@mui/icons-material/Widgets';
              import SettingsIcon from '@mui/icons-material/Settings';
              import WavesIcon from '@mui/icons-material/Waves';
              import TextureIcon from '@mui/icons-material/Texture';
              import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
              import CircleIcon from '@mui/icons-material/Circle';
              import Brightness4Icon from "@mui/icons-material/Brightness4";
              import Brightness7Icon from "@mui/icons-material/Brightness7";
              import { ThemeContext } from "../context/ThemeContext";

              const Header = () => {
                // Add state to track if dropdowns are open
                const [productsOpen, setProductsOpen] = useState(false);
                const [contactOpen, setContactOpen] = useState(false);
                const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
                // Track which product category is expanded
                const [expandedCategory, setExpandedCategory] = useState(null);
  
                // New state for full-screen product menu
                const [fullScreenProductMenu, setFullScreenProductMenu] = useState(false);

                // Toggle dropdown functions
                const toggleProductsDropdown = (e) => {
                  e.stopPropagation();
                  // Instead of toggling the dropdown, open the full-screen menu
                  setFullScreenProductMenu(true);
                  setContactOpen(false); // Close other dropdown
                };

                const toggleContactDropdown = (e) => {
                  e.stopPropagation();
                  setContactOpen(!contactOpen);
                  setProductsOpen(false); // Close other dropdown
                };
  
                // Toggle product category expansion
                const toggleCategory = (category, e) => {
                  e.stopPropagation();
                  setExpandedCategory(expandedCategory === category ? null : category);
                };

                // Close dropdowns when clicking elsewhere
                React.useEffect(() => {
                  const closeDropdowns = () => {
                    setProductsOpen(false);
                    setContactOpen(false);
                    setExpandedCategory(null);
                  };

                  document.addEventListener('click', closeDropdowns);
                  return () => document.removeEventListener('click', closeDropdowns);
                }, []);

                // Prevent clicks inside dropdown from closing it
                const handleDropdownClick = (e) => {
                  e.stopPropagation();
                };

                // Animation variants
                const dropdownVariants = {
                  hidden: { 
                    opacity: 0,
                    y: -5,
                    transition: {
                      duration: 0.2
                    }
                  },
                  visible: { 
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.2
                    }
                  },
                  exit: {
                    opacity: 0,
                    y: -5,
                    transition: {
                      duration: 0.2
                    }
                  }
                };

                const categoryVariants = {
                  hidden: { 
                    height: 0,
                    opacity: 0,
                    transition: {
                      duration: 0.2
                    }
                  },
                  visible: { 
                    height: "auto",
                    opacity: 1,
                    transition: {
                      duration: 0.3
                    }
                  }
                };
  
                // Full screen menu animation variants
                const fullScreenVariants = {
                  hidden: {
                    opacity: 0,
                    scale: 0.95,
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.3,
                      staggerChildren: 0.1
                    }
                  },
                  exit: {
                    opacity: 0,
                    scale: 0.95,
                    transition: {
                      duration: 0.2
                    }
                  }
                };
  
                const itemVariants = {
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.3 }
                  }
                };
  
                // Product categories data with icons
                const productCategories = [
                  {
                    id: "plastic",
                    name: "Plastic Components",
                    icon: <WidgetsIcon fontSize="large" />,
                    color: "#4CAF50",
                    subcategories: [
                      { id: "non-engineering", name: "Non Engineering Plastic" },
                      { id: "push-fit", name: "Push Fit Plugs" },
                      { id: "tapered-caps", name: "Tapered Caps & Plugs" },
                      { id: "drive-shaft", name: "Drive Shaft Protection Caps" },
                      { id: "non-threaded", name: "Non-Threaded End Caps" },
                      { id: "quick-fit", name: "Quick Fit & Release Caps" },
                      { id: "threaded", name: "Threaded O-Ring Plugs" },
                      { id: "engineering", name: "Engineering Component" }
                    ]
                  },
                  {
                    id: "metal",
                    name: "Metal Components",
                    icon: <SettingsIcon fontSize="large" />,
                    color: "#2196F3",
                    subcategories: [
                      { id: "zinc-casting", name: "ZINC-CASTING Components" },
                      { id: "zinc-casing", name: "ZINC CASING COVER" },
                      { id: "actuator", name: "ACUTATOR & FITTING COMPOENTS" },
                      { id: "head-cover", name: "HEAD COVER CAP" },
                      { id: "shaded-pole", name: "SHADED POLE MOTORS" },
                      { id: "sheet-metal", name: "SHEET METAL Components" },
                      { id: "casing-deep", name: "CASING DEEP DRAW METAL CAP" },
                      { id: "press-tool", name: "PRESS TOOL DEEP DRAW CAP" },
                      { id: "washer", name: "METAL WASHER" },
                      { id: "clip", name: "METAL CLIP" }
                    ]
                  },
                  {
                    id: "rubber",
                    name: "Rubber Components",
                    icon: <WavesIcon fontSize="large" />,
                    color: "#FF9800",
                    subcategories: [
                      { id: "o-rings", name: "O-rings" },
                      { id: "bellows", name: "Bellows" },
                      { id: "grommets", name: "Grommets" },
                      { id: "seals", name: "Rubber Seals" },
                      { id: "bonding", name: "Rubber to Metal Bonding" },
                      { id: "gasket", name: "Rubber Gasket" },
                      { id: "silicone", name: "Silicone Tapered Plug" }
                    ]
                  },
                  {
                    id: "tpe",
                    name: "TPE Components",
                    icon: <TextureIcon fontSize="large" />,
                    color: "#9C27B0",
                    subcategories: [
                      { id: "washers", name: "TPE WASHERS" },
                      { id: "grommet", name: "TPE Grommet" }
                    ]
                  }
                ];

                return (
                  <header>
                    {/* Top Contact Bar */}
                    <div
                      className="text-white text-sm px-4 py-2 flex justify-between items-center"
                      style={{ backgroundColor: "#008080" }}
                    >
                      <div className="flex gap-4 items-center">
                        <motion.a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <i className="fab fa-linkedin"></i>
                        </motion.a>
                        <motion.a
                          href="https://instagram.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <i className="fab fa-instagram"></i>
                        </motion.a>
                      </div>
                      <div className="flex gap-6 items-center text-sm">
                        <span>
                          <i className="far fa-envelope mr-2"></i> gopighrindustries@gmail.com
                        </span>
                        <span>
                          <i className="fas fa-phone-alt mr-2"></i> +91 9003217075
                        </span>
                      </div>
                    </div>

                    {/* Main Navigation */}
                    <div className="bg-gradient-to-r from-gray-800 to-black text-white">
                      <div className="container mx-auto px-4 py-3">
                        <div className="flex justify-between items-center">
                          {/* Logo and Company Name */}
                          <motion.div 
                            className="flex items-center space-x-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                          >
                            <img src={logo} alt="GHR Industries Logo" className="h-10 w-10" />
                            <Link to="/" className="text-xl font-bold">
                              GHR Industries
                            </Link>
                          </motion.div>

                          {/* Desktop Navigation */}
                          <nav className="hidden md:flex space-x-8">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Link to="/" className="hover:text-teal-400 font-medium flex items-center">
                                <HomeIcon className="mr-1" fontSize="small" /> Home
                              </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Link to="/about" className="hover:text-teal-400 font-medium flex items-center">
                                <InfoIcon className="mr-1" fontSize="small" /> About
                              </Link>
                            </motion.div>
              
                            {/* Products Button - Opens Full Screen Menu */}
                            <div className="relative">
                              <motion.button 
                                className="font-medium hover:text-teal-400 flex items-center"
                                onClick={toggleProductsDropdown}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <CategoryIcon className="mr-1" fontSize="small" /> Products
                              </motion.button>
                            </div>
              
                            {/* Contact Dropdown */}
                            <div className="relative" onClick={handleDropdownClick}>
                              <motion.button 
                                className="font-medium hover:text-teal-400 flex items-center"
                                onClick={toggleContactDropdown}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ContactsIcon className="mr-1" fontSize="small" /> Contact
                              </motion.button>
                              <AnimatePresence>
                                {contactOpen && (
                                  <motion.div 
                                    className="absolute z-10 bg-white text-black mt-2 py-2 rounded shadow-lg w-40"
                                    variants={dropdownVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                  >
                                    <Link
                                      to="/contact"
                                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                                    >
                                      Contact Us
                                    </Link>
                                    <Link
                                      to="/careers"
                                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                                    >
                                      Careers
                                    </Link>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </nav>

                          {/* Mobile Menu Toggle */}
                          <div className="md:hidden">
                            <motion.button 
                              className="text-gray-200 hover:text-white focus:outline-none"
                              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                              whileTap={{ scale: 0.9 }}
                            >
                              <MenuIcon />
                            </motion.button>
                          </div>
                        </div>
          
                        {/* Mobile Menu */}
                        <AnimatePresence>
                          {mobileMenuOpen && (
                            <motion.div 
                              className="md:hidden py-3 space-y-2"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <Link to="/" className="block py-2 hover:text-teal-400">
                                <motion.div 
                                  className="flex items-center"
                                  whileHover={{ x: 5 }}
                                  transition={{ type: "spring", stiffness: 400 }}
                                >
                                  <HomeIcon className="mr-2" fontSize="small" />
                                  Home
                                </motion.div>
                              </Link>
                              <Link to="/about" className="block py-2 hover:text-teal-400">
                                <motion.div 
                                  className="flex items-center"
                                  whileHover={{ x: 5 }}
                                  transition={{ type: "spring", stiffness: 400 }}
                                >
                                  <InfoIcon className="mr-2" fontSize="small" />
                                  About
                                </motion.div>
                              </Link>
                
                              {/* Mobile Products Menu */}
                              <div className="py-2">
                                <motion.button 
                                  className="flex items-center justify-between w-full hover:text-teal-400"
                                  onClick={() => setFullScreenProductMenu(true)}
                                  whileHover={{ x: 5 }}
                                  transition={{ type: "spring", stiffness: 400 }}
                                >
                                  <div className="flex items-center">
                                    <CategoryIcon className="mr-2" fontSize="small" />
                                    Products
                                  </div>
                                  <ArrowForwardIcon fontSize="small" />
                                </motion.button>
                              </div>
                
                              {/* Mobile Contact Menu */}
                                            {/* Mobile Contact Menu */}
                                            <div className="py-2">
                                <motion.button 
                                  className="flex items-center justify-between w-full hover:text-teal-400"
                                  onClick={() => setExpandedCategory(expandedCategory === 'mobile-contact' ? null : 'mobile-contact')}
                                  whileHover={{ x: 5 }}
                                  transition={{ type: "spring", stiffness: 400 }}
                                >
                                  <div className="flex items-center">
                                    <ContactsIcon className="mr-2" fontSize="small" />
                                    Contact
                                  </div>
                                  {expandedCategory === 'mobile-contact' ? 
                                    <ExpandLessIcon fontSize="small" /> : 
                                    <ExpandMoreIcon fontSize="small" />
                                  }
                                </motion.button>
                  
                                <AnimatePresence>
                                  {expandedCategory === 'mobile-contact' && (
                                    <motion.div 
                                      className="pl-4 mt-2 space-y-1"
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      <Link to="/contact" className="block py-1 hover:text-teal-400">
                                        <motion.div whileHover={{ x: 5 }}>
                                          Contact Us
                                        </motion.div>
                                      </Link>
                                      <Link to="/careers" className="block py-1 hover:text-teal-400">
                                        <motion.div whileHover={{ x: 5 }}>
                                          <WorkIcon className="mr-2" fontSize="small" />
                                          Careers
                                        </motion.div>
                                      </Link>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Full Screen Product Menu */}
                    <Dialog 
                      fullScreen 
                      open={fullScreenProductMenu} 
                      onClose={() => setFullScreenProductMenu(false)}
                      TransitionComponent={motion.div}
                    >
                      <AppBar position="static" sx={{ backgroundColor: "#1a1a1a" }}>
                        <Toolbar>
                          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <div className="flex items-center">
                              <img src={logo} alt="GHR Industries Logo" className="h-8 w-8 mr-2" />
                              GHR Industries Products
                            </div>
                          </Typography>
                          <IconButton
                            edge="end"
                            color="inherit"
                            onClick={() => setFullScreenProductMenu(false)}
                            aria-label="close"
                          >
                            <CloseIcon />
                          </IconButton>
                        </Toolbar>
                      </AppBar>
        
                      <Box sx={{ backgroundColor: "#f5f5f5", minHeight: "100%" }}>
                        <Container maxWidth="lg" sx={{ py: 4 }}>
                          {/* All Products Link */}
                          <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Link 
                              to="/product" 
                              className="inline-block mb-6 bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition-colors"
                              onClick={() => setFullScreenProductMenu(false)}
                            >
                              <div className="flex items-center">
                                <CategoryIcon className="mr-2" />
                                View All Products
                              </div>
                            </Link>
                          </motion.div>
            
                          {/* Product Categories Grid */}
                          <motion.div
                            variants={fullScreenVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <Grid container spacing={3}>
                              {productCategories.map((category) => (
                                <Grid item xs={12} sm={6} md={3} key={category.id}>
                                  <motion.div variants={itemVariants}>
                                    <Card 
                                      sx={{ 
                                        height: '100%', 
                                        display: 'flex', 
                                        flexDirection: 'column',
                                        borderTop: `4px solid ${category.color}`,
                                        transition: 'transform 0.2s, box-shadow 0.2s',
                                        '&:hover': {
                                          transform: 'translateY(-5px)',
                                          boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        }
                                      }}
                                    >
                                      <CardContent sx={{ flexGrow: 1 }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: category.color }}>
                                          {category.icon}
                                          <Typography variant="h6" component="h3" sx={{ ml: 1, fontWeight: 'bold' }}>
                                            {category.name}
                                          </Typography>
                                        </Box>
                          
                                        <Divider sx={{ my: 2 }} />
                          
                                        <List dense disablePadding>
                                          {category.subcategories.map((subcat) => (
                                            <ListItem 
                                              key={subcat.id} 
                                              disablePadding 
                                              sx={{ mb: 1 }}
                                              component={Link}
                                              to={`/product/${category.id}/${subcat.id}`}
                                              onClick={() => setFullScreenProductMenu(false)}
                                            >
                                              <ListItemIcon sx={{ minWidth: '30px' }}>
                                                <CircleIcon sx={{ fontSize: 8, color: category.color }} />
                                              </ListItemIcon>
                                              <ListItemText 
                                                primary={subcat.name} 
                                                primaryTypographyProps={{ 
                                                  variant: 'body2',
                                                  sx: { 
                                                    '&:hover': { color: category.color },
                                                    transition: 'color 0.2s'
                                                  } 
                                                }} 
                                              />
                                            </ListItem>
                                          ))}
                                        </List>
                          
                                        <Box sx={{ mt: 2 }}>
                                          <Link 
                                            to={`/product/${category.id}`}
                                            onClick={() => setFullScreenProductMenu(false)}
                                            className="text-sm font-medium flex items-center hover:underline"
                                            style={{ color: category.color }}
                                          >
                                            View all {category.name}
                                            <ArrowForwardIcon fontSize="small" sx={{ ml: 0.5 }} />
                                          </Link>
                                        </Box>
                                      </CardContent>
                                    </Card>
                                  </motion.div>
                                </Grid>
                              ))}
                            </Grid>
                          </motion.div>
                        </Container>
                      </Box>
                    </Dialog>
                  </header>
                );
              };

              export default Header;
