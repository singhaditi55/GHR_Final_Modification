import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Company</h2>
        <p className="mb-4">
          GHR Industries is a leading manufacturer of high-quality rubber and plastic products, 
          serving various industries with innovative solutions.
        </p>
        
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold mb-3">Vision Statement</h3>
          <p className="italic mb-4">
            "To be a leading force in the rubber and plastic industry by pioneering sustainable 
            manufacturing practices that protect the environment, empower innovation, and drive 
            long-term profitability—creating a cleaner, greener future for generations to come."
          </p>
          
          <h3 className="text-xl font-semibold mb-3">Mission Statement</h3>
          <p className="italic">
            "Our mission is to manufacture high-quality rubber and plastic products through 
            eco-conscious processes, leveraging advanced technology and responsible resource 
            management. We are committed to reducing environmental impact, maximising operational 
            efficiency, and creating value for our customers and communities—while remaining 
            proudly independent and future-focused."
          </p>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
        <p>
          With decades of experience in the industry, we specialize in manufacturing a wide range 
          of rubber and plastic components using advanced technologies like transfer moulding and 
          injection moulding. Our products are developed by GHR Industries with a focus on quality, 
          durability, and performance.
        </p>
      </section>
    </div>
  );
};

export default About;
