import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Container, 
  Typography, 
  Breadcrumbs, 
  Grid, 
  Card, 
  CardContent, 
  Box,
  Divider
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// Placeholder image - replace with actual product images
const placeholderImage = "https://via.placeholder.com/300x200";

const ProductCategory = () => {
  const { categoryId, subcategoryId } = useParams();
  
  // This would typically come from an API or Redux store
  // For now, we'll use static data
  const categoryMapping = {
    "plastic": {
      name: "Plastic Components",
      color: "#4CAF50",
      description: "High-quality plastic components designed for various industrial applications. Our plastic components are durable, lightweight, and cost-effective.",
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
    "metal": {
      name: "Metal Components",
      color: "#2196F3",
      description: "Precision-engineered metal components for demanding applications. Our metal components offer superior strength, durability, and reliability.",
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
    "rubber": {
      name: "Rubber Components",
      color: "#FF9800",
      description: "Flexible and durable rubber components for sealing and protection applications. Our rubber components provide excellent resistance to wear, temperature, and chemicals.",
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
    "tpe": {
      name: "TPE Components",
      color: "#9C27B0",
      description: "Thermoplastic elastomer components combining the benefits of rubber and plastic. Our TPE components offer excellent flexibility, resilience, and recyclability.",
      subcategories: [
        { id: "washers", name: "TPE WASHERS" },
        { id: "grommet", name: "TPE Grommet" }
      ]
    }
  };

  const category = categoryMapping[categoryId] || null;

  if (!category) {
    return (
      <Container className="py-12">
        <Typography variant="h4">Category not found</Typography>
        <Link to="/product" className="text-blue-600 hover:underline flex items-center mt-4">
          <ArrowBackIcon fontSize="small" className="mr-1" /> Back to Products
        </Link>
      </Container>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="py-16 text-white"
        style={{ 
          background: `linear-gradient(to right, ${category.color}, ${category.color}CC)` 
        }}
      >
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h3" component="h1" gutterBottom className="font-bold">
              {category.name}
            </Typography>
            
            <Breadcrumbs aria-label="breadcrumb" className="text-gray-100">
              <Link to="/" className="flex items-center hover:text-white">
                <HomeIcon fontSize="small" sx={{ mr: 0.5 }} />
                Home
              </Link>
              <Link to="/product" className="flex items-center hover:text-white">
                <CategoryIcon fontSize="small" sx={{ mr: 0.5 }} />
                Products
              </Link>
              <Typography color="inherit" className="flex items-center">
                {category.name}
              </Typography>
            </Breadcrumbs>
            
            <Typography variant="subtitle1" className="mt-4 max-w-2xl">
              {category.description}
            </Typography>
          </motion.div>
        </Container>
      </div>

      {/* Subcategories Section */}
      <div className="py-12">
        <Container>
          <Typography variant="h4" component="h2" gutterBottom className="font-bold text-gray-800 mb-8">
            {category.name} Categories
          </Typography>
          
          <Grid container spacing={4}>
            {category.subcategories.map((subcat) => (
              <Grid item xs={12} sm={6} md={4} key={subcat.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
                    <Box 
                      sx={{ 
                        height: 140, 
                        backgroundColor: `${category.color}22`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img 
                        src={placeholderImage} 
                        alt={subcat.name}
                        style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                      />
                    </Box>
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div" className="font-medium">
                        {subcat.name}
                      </Typography>
                      <Divider sx={{ my: 1 }} />
                      <Link 
                        to={`/product/${categoryId}/${subcat.id}`}
                        className="text-blue-600 hover:underline text-sm font-medium"
                      >
                        View Products →
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
      
      {/* Contact Section */}
      <div className="py-12 bg-gray-100">
        <Container>
          <Box className="text-center">
            <Typography variant="h5" gutterBottom className="font-bold text-gray-800">
              Need Custom {category.name}?
            </Typography>
            <Typography variant="body1" className="mb-6 text-gray-600">
              Contact our team for custom solutions tailored to your specific requirements.
            </Typography>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-gray-800 to-black text-white rounded-md hover:from-black hover:to-gray-800 transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </Link>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default ProductCategory;
