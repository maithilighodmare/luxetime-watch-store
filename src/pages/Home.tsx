import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[80vh]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?auto=format&fit=crop&q=80"
            alt="Luxury Watch"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Timeless Elegance<br />on Your Wrist
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Discover our exclusive collection of luxury timepieces that combine precision engineering with sophisticated design.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Luxury Watches',
              image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80',
              description: 'Timeless classics from prestigious brands'
            },
            {
              title: 'Smart Watches',
              image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&q=80',
              description: 'The perfect blend of style and technology'
            },
            {
              title: 'Casual Watches',
              image: 'https://images.unsplash.com/photo-1533139502658-0198f920d8e8?auto=format&fit=crop&q=80',
              description: 'Everyday elegance for any occasion'
            }
          ].map((category, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-200 mb-4">{category.description}</p>
                <Link
                  to="/shop"
                  className="text-white hover:text-gray-200 inline-flex items-center"
                >
                  Explore Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                role: 'Watch Enthusiast',
                content: 'The quality and craftsmanship of my new watch exceeded all expectations. Excellent service!'
              },
              {
                name: 'Sarah Johnson',
                role: 'Business Executive',
                content: 'Found the perfect luxury timepiece for my needs. The team was incredibly helpful throughout.'
              },
              {
                name: 'Michael Brown',
                role: 'Collector',
                content: 'A fantastic selection of watches and impeccable customer service. Highly recommended!'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}