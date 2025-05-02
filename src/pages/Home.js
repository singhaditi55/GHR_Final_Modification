import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Stats Section */}
      <div className="bg-white py-12 px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center shadow-lg">
        <div className="p-4">
          <div className="text-3xl">📊</div>
          <h3 className="text-xl font-bold">2,000+</h3>
          <p className="text-gray-600">Products Manufactured</p>
        </div>
        <div className="p-4">
          <div className="text-3xl">🏆</div>
          <h3 className="text-xl font-bold">10+</h3>
          <p className="text-gray-600">Years of Excellence</p>
        </div>
        <div className="p-4">
          <div className="text-3xl">🚚</div>
          <h3 className="text-xl font-bold">A+</h3>
          <p className="text-gray-600">Fast Delivery Assurance</p>
        </div>
        <div className="p-4">
          <div className="text-3xl">✅</div>
          <h3 className="text-xl font-bold">ISO Approved</h3>
          <p className="text-gray-600">Certifications & Awards</p>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">Our Featured Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">TPE Grommet Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">TPE Grommet Components</h3>
              <p className="text-gray-600 mb-4">Advanced thermoplastic elastomer solutions that deliver an ideal balance of flexibility, durability, and resilience.</p>
              <Link to="/product" className="text-[#008080] hover:text-[#006666]">Learn more →</Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Shaded Pole Motor Cover Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Shaded Pole Motor Cover</h3>
              <p className="text-gray-600 mb-4">Precision-engineered zinc castings designed for optimal performance and durability.</p>
              <Link to="/product" className="text-[#008080] hover:text-[#006666]">Learn more →</Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Engineering Plastic Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Engineering Plastic Components</h3>
              <p className="text-gray-600 mb-4">High-quality engineering plastic components made from ABS, PC, PA6, and more.</p>
              <Link to="/product" className="text-[#008080] hover:text-[#006666]">Learn more →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="bg-gray-300 h-80 w-full rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Company Image</span>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">About GHR Industries</h2>
              <p className="text-gray-700 mb-4">
                GHR Industries is a leading manufacturer of high-quality rubber and plastic products, 
                serving various industries with innovative solutions.
              </p>
              <p className="text-gray-700 mb-6">
                With decades of experience, we specialize in manufacturing a wide range of components 
                using advanced technologies like transfer moulding and injection moulding.
              </p>
              <Link to="/about" className="bg-[#008080] hover:bg-[#006666] text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-[#008080] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your requirements and how GHR Industries can provide the perfect solution for your needs.
          </p>
          <Link to="/contact" className="bg-white text-[#008080] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
