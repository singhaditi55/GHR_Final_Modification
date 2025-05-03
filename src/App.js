// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./store";
// import "./App.css";
// import Header from "./components/Header";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Product from "./pages/Product";
// import Contact from "./pages/Contact";
// import Footer from "./components/Footer";
// import ProductCategory from "./pages/ProductCategory";

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <div className="App min-h-screen flex flex-col">
//           <Header />
//           <main className="flex-grow">
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/product" element={<Product />} />
//               <Route path="/product/:categoryId" element={<ProductCategory />} />
//               <Route path="/product/:categoryId/:subcategoryId" element={<ProductCategory />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </Provider>
//   );
// }

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ProductCategory from "./pages/ProductCategory";
import { ThemeProvider } from "./context/ThemeContext"; // Import the ThemeProvider

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider> {/* Wrap everything with ThemeProvider */}
        <Router>
          <div className="App min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/product/:categoryId" element={<ProductCategory />} />
                <Route path="/product/:categoryId/:subcategoryId" element={<ProductCategory />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

