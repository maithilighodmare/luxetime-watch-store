import React from 'react';
import { Clock, Award, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1495121553079-4c61bcce1894?auto=format&fit=crop&q=80"
            alt="Watchmaker Workshop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
            <p className="text-xl max-w-2xl mx-auto px-4">
              Crafting timeless elegance since 1970
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Timeless Quality',
                description: 'We curate only the finest timepieces, ensuring each watch meets our rigorous standards of excellence.'
              },
              {
                icon: Award,
                title: 'Expert Craftsmanship',
                description: 'Our collection showcases the pinnacle of watchmaking expertise from renowned manufacturers worldwide.'
              },
              {
                icon: Shield,
                title: 'Trust & Reliability',
                description: 'We stand behind every timepiece we sell with authentic certification and comprehensive warranty.'
              }
            ].map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Heritage</h2>
              <p className="text-gray-600 mb-4">
                Founded in 1970, LuxeTime began as a small watch repair shop in New York City. Our founder's passion for horology and commitment to excellence quickly established us as a trusted name in luxury timepieces.
              </p>
              <p className="text-gray-600 mb-4">
                Over five decades, we've grown into a premier destination for watch enthusiasts and collectors, while maintaining our dedication to personalized service and expertise.
              </p>
              <p className="text-gray-600">
                Today, we continue to build on our legacy by offering an expertly curated selection of the world's finest timepieces, backed by our deep knowledge and commitment to customer satisfaction.
              </p>
            </div>
            <div className="relative h-96">
              <img
                src="https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?auto=format&fit=crop&q=80"
                alt="Vintage Watch Workshop"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Robert Chen',
                role: 'Master Watchmaker',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
              },
              {
                name: 'Emily Thompson',
                role: 'Head of Curation',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
              },
              {
                name: 'Michael Roberts',
                role: 'Customer Experience Director',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}