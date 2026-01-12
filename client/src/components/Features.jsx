import React from "react";
import { FaUtensils, FaTruck, FaHeart } from "react-icons/fa";

const features = [
  { 
    Icon: FaUtensils, 
    title: "Delicious Meals", 
    desc: "Top chef crafted dishes made with premium ingredients" 
  },
  { 
    Icon: FaTruck, 
    title: "Fast Delivery", 
    desc: "Hot & fresh at your door in 30 minutes or less" 
  },
  { 
    Icon: FaHeart, 
    title: "Happy Customers", 
    desc: "Rated 4.8+ stars by thousands of satisfied foodies" 
  }
];

const Features = () => (
  <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">Why Choose Us</h2>
        <p className="text-lg text-gray-600">Experience food delivery done right</p>
      </div>
      <div className="grid sm:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <div 
            key={f.title} 
            className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300">
              <f.Icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-900">{f.title}</h3>
            <p className="text-gray-600 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;