import React, { useState } from 'react';

const Product = () => {
  const [activeCategory, setActiveCategory] = useState('plastic');
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);

  const categories = [
    {
      id: 'plastic',
      name: 'Plastic Components',
      subcategories: [
        {
          id: 'non-engineering',
          name: 'Non Engineering Plastic',
          products: [
            { id: 'push-fit', name: 'Push Fit Plugs' },
            { id: 'tapered-caps', name: 'Tapered Caps & Plugs' },
            { id: 'drive-shaft', name: 'Drive Shaft Protection Caps' },
            { id: 'non-threaded', name: 'Non-Threaded End Caps' },
            { id: 'quick-fit', name: 'Quick Fit & Release Caps' },
            { id: 'threaded-oring', name: 'Threaded O-Ring Plugs' }
          ]
        },
        {
          id: 'engineering',
          name: 'Engineering Component',
          products: [
            {
              id: 'engineering-plastic',
              name: 'Engineering Plastic Components',
              description: 'High-quality engineering plastic components made from various materials.',
              materials: ['ABS', 'ABS+PC', 'PA6', 'PA66', 'PA6 GF', 'PA66 GF', 'PA46', 'PC', 'PVC', 'POM', 'PMMA', 'PBT', 'PP']
            }
          ]
        }
      ]
    },
    {
      id: 'metal',
      name: 'Metal Components',
      subcategories: [
        {
          id: 'zinc-casting',
          name: 'ZINC-CASTING Components',
          products: [
            { id: 'zinc-casing-cover', name: 'ZINC CASING COVER' },
            { id: 'actuator-fitting', name: 'ACUTATOR & FITTING COMPOENTS' },
            { id: 'head-cover-cap', name: 'HEAD COVER CAP' },
            { 
              id: 'shaded-pole-motor-cover', 
              name: 'SHADED POLE MOTORS',
              description: 'Our Shaded Pole Motor Covers are precision-engineered zinc castings designed for optimal performance and durability.'
            }
          ]
        },
        {
          id: 'sheet-metal',
          name: 'SHEET METAL Components',
          products: [
            { id: 'casing-deep-draw', name: 'CASING DEEP DRAW METAL CAP' },
            { id: 'press-tool', name: 'PRESS TOOL DEEP DRAW CAP' },
            { id: 'metal-washer', name: 'METAL WASHER' },
            { id: 'metal-clip', name: 'METAL CLIP' }
          ]
        }
      ]
    },
    {
      id: 'rubber',
      name: 'Rubber Components',
      subcategories: [
        {
          id: 'rubber-products',
          name: 'Rubber Products',
          products: [
            { id: 'o-rings', name: 'O-rings' },
            { id: 'bellows', name: 'Bellows' },
            { id: 'grommets', name: 'Grommets' },
            { id: 'rubber-seals', name: 'Rubber Seals' },
            { id: 'rubber-metal-bonding', name: 'Rubber to Metal Bonding' },
            { id: 'rubber-gasket', name: 'Rubber Gasket' },
            { 
              id: 'silicone-plugs', 
              name: 'Silicone Tapered Plug',
              description: 'Silicone Plugs are specifically designed to withstand high temperatures...',
              process: 'Transfer moulding'
            }
          ]
        }
      ]
    },
    {
      id: 'tpe',
      name: 'TPE Components',
      subcategories: [
        {
          id: 'tpe-products',
          name: 'TPE Products',
          products: [
            { id: 'tpe-washers', name: 'TPE WASHERS' },
            { 
              id: 'tpe-grommet', 
              name: 'TPE Grommet',
              description: 'TPE Grommet Components are advanced thermoplastic elastomer solutions that deliver an ideal balance of flexibility, durability, and resilience...',
              rating: 'F'
            }
          ]
        }
      ]
    }
  ];

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSubcategory(null);
    setActiveProduct(null);
  };

  const handleSubcategoryClick = (subcategoryId) => {
    setActiveSubcategory(subcategoryId);
    setActiveProduct(null);
  };

  const handleProductClick = (productId) => {
    setActiveProduct(productId);
  };

  const getProductDetails = () => {
    if (!activeProduct) return null;
    
    // Find the active category
    const category = categories.find(cat => cat.id === activeCategory);
    if (!category) return null;
    
    // Find the active subcategory
    const subcategory = category.subcategories.find(sub => sub.id === activeSubcategory);
    if (!subcategory) return null;
    
    // Find the active product
    const product = subcategory.products.find(prod => prod.id === activeProduct);
    if (!product) return null;
    
    return product;
  };

  const renderProductDetails = () => {
    const product = getProductDetails();
    if (!product) return null;

    if (product.id === 'engineering-plastic') {
      return (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <h4 className="font-medium mb-2">Available Materials:</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {product.materials.map((material, index) => (
              <div key={index} className="bg-gray-100 p-3 rounded">
                {material}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
            <div className="bg-gray-200 h-48 w-full rounded-lg flex items-center justify-center">
              <span className="text-gray-500">{product.name} Image</span>
            </div>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">{product.description || 'Detailed product information coming soon.'}</p>
            {product.rating && (
              <p><span className="font-medium">Rating:</span> {product.rating}</p>
            )}
            {product.process && (
              <p><span className="font-medium">Process:</span> {product.process}</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>
      
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/4 mb-6 md:mb-0 md:pr-6">
          <div className="bg-gray-50 p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Product Categories</h2>
            <ul className="space-y-2">
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    onClick={() => handleCategoryClick(category.id)}
                    className={`w-full text-left px-3 py-2 rounded font-medium ${activeCategory === category.id ? 'bg-[#008080] text-white' : 'hover:bg-gray-200'}`}
                  >
                    {category.name}
                  </button>
                  
                  {activeCategory === category.id && (
                    <ul className="ml-4 mt-2 space-y-1 border-l-2 border-gray-200 pl-2">
                      {category.subcategories.map(subcategory => (
                        <li key={subcategory.id}>
                          <button
                            onClick={() => handleSubcategoryClick(subcategory.id)}
                            className={`w-full text-left px-3 py-1 rounded ${activeSubcategory === subcategory.id ? 'bg-[#e6f7f7] text-[#008080] font-medium' : 'hover:bg-gray-100'}`}
                          >
                            {subcategory.name}
                          </button>
                          
                          {activeSubcategory === subcategory.id && (
                            <ul className="ml-4 mt-1 space-y-1">
                              {subcategory.products.map(product => (
                                <li key={product.id}>
                                  <button
                                    onClick={() => handleProductClick(product.id)}
                                    className={`w-full text-left px-3 py-1 text-sm rounded ${activeProduct === product.id ? 'bg-gray-100 font-medium text-[#008080]' : 'hover:bg-gray-50 text-gray-700'}`}
                                  >
                                    {product.name}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="md:w-3/4">
          {activeProduct ? (
            renderProductDetails()
          ) : activeSubcategory ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Select a Product</h2>
              <p className="text-gray-600 mb-4">
                Please select a specific product from the {categories.find(c => c.id === activeCategory)?.subcategories.find(s => s.id === activeSubcategory)?.name} category to view detailed information.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                {categories.find(c => c.id === activeCategory)?.subcategories.find(s => s.id === activeSubcategory)?.products.map(product => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="bg-gray-50 p-4 rounded-lg hover:bg-[#e6f7f7] hover:shadow-md transition-all text-center"
                  >
                    <div className="h-24 bg-gray-200 mb-3 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Image</span>
                    </div>
                    <h3 className="font-medium">{product.name}</h3>
                  </button>
                ))}
              </div>
            </div>
          ) : activeCategory ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">{categories.find(c => c.id === activeCategory)?.name}</h2>
              <p className="text-gray-600 mb-6">
                Please select a subcategory from the menu to explore our range of {categories.find(c => c.id === activeCategory)?.name.toLowerCase()}.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {categories.find(c => c.id === activeCategory)?.subcategories.map(subcategory => (
                  <button
                    key={subcategory.id}
                    onClick={() => handleSubcategoryClick(subcategory.id)}
                    className="bg-gray-50 p-5 rounded-lg hover:bg-[#e6f7f7] hover:shadow-md transition-all text-left"
                  >
                    <h3 className="font-medium text-lg mb-2">{subcategory.name}</h3>
                    <p className="text-gray-600 text-sm">{subcategory.products.length} products available</p>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Our Product Range</h2>
              <p className="text-gray-600 mb-6">
                GHR Industries offers a comprehensive range of high-quality components across multiple categories. 
                Please select a category from the menu to explore our products.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryClick(category.id)}
                    className="bg-gray-50 p-5 rounded-lg hover:bg-[#e6f7f7] hover:shadow-md transition-all text-center"
                  >
                    <h3 className="font-medium">{category.name}</h3>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;