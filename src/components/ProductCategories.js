import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Grid, Card, CardContent, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

// Replace unavailable icons with standard Material UI icons
import WidgetsIcon from "@mui/icons-material/Widgets"; // For Plastic
import SettingsIcon from "@mui/icons-material/Settings"; // For Metal
import WavesIcon from "@mui/icons-material/Waves"; // For Rubber
import TextureIcon from "@mui/icons-material/Texture"; // For TPE

const ProductCategories = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Category data
  const categories = [
    {
      id: "plastic",
      name: "Plastic Components",
      icon: <WidgetsIcon fontSize="large" />,
      color: "#4CAF50",
      bgImage: "linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(76, 175, 80, 0.05) 100%)",
      subcategories: [
        "Non Engineering Plastic",
        "Push Fit Plugs",
        "Tapered Caps & Plugs",
        "Drive Shaft Protection Caps",
        "Non-Threaded End Caps",
        "Quick Fit & Release Caps",
        "Threaded O-Ring Plugs",
        "Engineering Component"
      ]
    },
    {
      id: "metal",
      name: "Metal Components",
      icon: <SettingsIcon fontSize="large" />,
      color: "#2196F3",
      bgImage: "linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(33, 150, 243, 0.05) 100%)",
      subcategories: [
        "ZINC-CASTING Components",
        "ZINC CASING COVER",
        "ACUTATOR & FITTING COMPOENTS",
        "HEAD COVER CAP",
        "SHADED POLE MOTORS",
        "SHEET METAL Components",
        "CASING DEEP DRAW METAL CAP",
        "PRESS TOOL DEEP DRAW CAP",
        "METAL WASHER",
        "METAL CLIP"
      ]
    },
    {
      id: "rubber",
      name: "Rubber Components",
      icon: <WavesIcon fontSize="large" />,
      color: "#FF9800",
      bgImage: "linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 152, 0, 0.05) 100%)",
      subcategories: [
        "O-rings",
        "Bellows",
        "Grommets",
        "Rubber Seals",
        "Rubber to Metal Bonding",
        "Rubber Gasket",
        "Silicone Tapered Plug"
      ]
    },
    {
      id: "tpe",
      name: "TPE Components",
      icon: <TextureIcon fontSize="large" />,
      color: "#9C27B0",
      bgImage: "linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(156, 39, 176, 0.05) 100%)",
      subcategories: [
        "TPE WASHERS",
        "TPE Grommet"
      ]
    }
  ];

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Typography variant="h3" component="h1" gutterBottom className="text-gray-800 font-bold">
            Our Product Categories
          </Typography>
          <Typography variant="subtitle1" className="text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of high-quality industrial components designed for various applications
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {categories.map((category) => (
              <Grid item xs={12} sm={6} md={3} key={category.id}>
                <motion.div variants={itemVariants}>
                  <Card 
                    className="h-full transition-shadow duration-300 hover:shadow-lg"
                    sx={{ 
                      borderRadius: "12px", 
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background: category.bgImage
                    }}
                  >
                    <Box 
                      sx={{ 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center",
                        p: 3,
                        color: category.color
                      }}
                    >
                      {category.icon}
                    </Box>
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography 
                        variant="h5" 
                        component="h2" 
                        gutterBottom 
                        sx={{ 
                          textAlign: "center", 
                          fontWeight: "bold",
                          color: "rgba(0, 0, 0, 0.8)",
                          mb: 3
                        }}
                      >
                        {category.name}
                      </Typography>
                      
                      <List dense>
                        {category.subcategories.slice(0, 5).map((subcat, index) => (
                          <ListItem key={index} sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: "30px", color: category.color }}>
                              <CircleIcon sx={{ fontSize: 8 }} />
                            </ListItemIcon>
                            <ListItemText 
                              primary={subcat} 
                              primaryTypographyProps={{ 
                                variant: "body2",
                                sx: { fontWeight: "medium" }
                              }} 
                            />
                          </ListItem>
                        ))}
                      </List>
                      
                      {category.subcategories.length > 5 && (
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ mt: 1, textAlign: "center", fontStyle: "italic" }}
                        >
                          +{category.subcategories.length - 5} more items
                        </Typography>
                      )}
                    </CardContent>
                    
                    <Box sx={{ p: 2, textAlign: "center" }}>
                      <Link to={`/product/${category.id}`}>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-gradient-to-r from-gray-800 to-black text-white rounded-md hover:from-black hover:to-gray-800 transition-all duration-300"
                        >
                          View All {category.name}
                        </motion.button>
                      </Link>
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCategories;