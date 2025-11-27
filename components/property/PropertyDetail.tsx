// components/property/PropertyDetail.tsx
import { useState } from 'react';
import { PropertyProps } from '@/interfaces';
import BookingSection from './BookingSection';
import ReviewSection from './ReviewSection';
import { SAMPLE_AMENITIES, SAMPLE_REVIEWS, SAMPLE_HOST, PROPERTY_DESCRIPTIONS } from '@/constants';

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState('offers');
  
  const description = PROPERTY_DESCRIPTIONS[property.name as keyof typeof PROPERTY_DESCRIPTIONS] || 
    "Beautiful property with excellent amenities and stunning views.";

  const availableAmenities = SAMPLE_AMENITIES.filter(amenity => amenity.available);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Property Header */}
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{property.name}</h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2">
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">★</span>
            <span className="font-semibold">{property.rating}</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-600 underline">25 reviews</span>
          </div>
          
          {/* Location and Profile with close spacing */}
          <div className="flex items-center space-x-3 mt-2 sm:mt-0">
            {/* Location */}
            <div className="flex items-center space-x-1">
              <img src="/assets/Map Point.png" alt="Location" className="w-3 h-3" />
              <span className="text-gray-600 text-sm">
                {property.address.city}, {property.address.country}
              </span>
            </div>
            
            <span className="text-gray-400">•</span>
            
            {/* Profile */}
            <div className="flex items-center space-x-1">
              <img src="/assets/profile.png" alt="profile" className="w-3 h-3" />
              <span className="text-gray-600 text-sm">Mainstream</span>
            </div>
          </div>
        </div>
         {/* Right side - Save and Share buttons */}
        <div className="flex justify-end space-x-2 mt-4 sm:mt-0">
          {/* Save Button */}
          <button className="bg-white rounded-lg px-4 py-2 flex items-center space-x-2 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <img src="/assets/Heart.png" alt="Save" className="w-4 h-4" />
            <span className="text-sm font-medium text-gray-700">Save</span>
          </button>
          
          {/* Share Button */}
          <button className="bg-white rounded-lg px-4 py-2 flex items-center space-x-2 shadow-md hover:shadow-lg transition-shadow border border-gray-200">
            <img src="/assets/share.png" alt="Share" className="w-4 h-4" />
            <span className="text-sm font-medium text-gray-700">Share</span>
          </button>
        </div>
      </div>

      {/* Updated Image Grid - 3 pictures beside main picture */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2 mb-8 rounded-2xl overflow-hidden">
        {/* Main Image - Left Side */}
        <div className="lg:col-span-2">
          <img 
            src={property.image} 
            alt={property.name}
            className="w-full h-full min-h-[400px] object-cover rounded-l-2xl"
          />
        </div>

        {/* Right Side Images Grid */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-2">
          {/* Top Long Picture - covers width of 2 images below */}
          <div className="col-span-2">
            <img 
              src="/assets/T4.png" 
              alt="Property view"
              className="w-full h-48 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600';
              }}
            />
          </div>
          
          {/* Bottom Two Pictures */}
          <div className="col-span-1">
            <img 
              src="/assets/T3.png" 
              alt="Property interior"
              className="w-full h-48 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400';
              }}
            />
          </div>
          <div className="col-span-1">
            <img 
              src="/assets/T2.png" 
              alt="Property amenities"
              className="w-full h-48 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400';
              }}
            />
          </div>
        </div>
      </div>
            {/* Offers directly below main image */}
            <div className="flex items-center gap-4">
              {/* Bed button */}
              <div className="bg-white border border-gray-200 rounded-xl px-2 py-1 flex items-center gap-2 shadow-sm">
                <img src="/assets/bed 1.png" alt="Bed" className="w-5 h-5" />
                <div>
                  <div className="text-gray-600 text-sm font-medium">{property.offers.bed} beds</div>
                </div>
              </div>
              
              {/* Shower button */}
              <div className="bg-white border border-gray-200 rounded-xl px-2 py-1 flex items-center gap-2 shadow-sm">
                <img src="/assets/bathtub 1.png" alt="Shower" className="w-5 h-5" />
                <div>
                  <div className="text-gray-600 text-sm font-medium">{property.offers.shower} baths</div>
                </div>
              </div>
              
              {/* Occupants button */}
              <div className="bg-white border border-gray-200 rounded-xl px-2 py-1 flex items-center gap-2 shadow-sm">
                <img src="/assets/people 1.png" alt="Occupants" className="w-5 h-5" />
                <div>
                  <div className="text-gray-600 text-sm font-medium">{property.offers.occupants} guests</div>
                </div>
              </div>
            </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Property Details */}
        <div className="lg:col-span-2">
          {/* Tabs Navigation */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-8">
              {[
                { id: 'description', label: 'Description' },
                { id: 'offers', label: 'What we offer' },
                { id: 'reviews', label: 'Reviews' },
                { id: 'host', label: 'About host' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="mb-8">
            {activeTab === 'description' && (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Content */}
                <div className="lg:col-span-3">
                  <h2 className="text-2xl font-semibold mb-6">Description</h2>
                  <div className="space-y-6">
                    <p className="text-gray-700 leading-relaxed">
                      Feel like exploring the Dominican? Start the day with a hike on one of Playa Moron's many trails. Weave your way around the gated community to find secluded sandy coves for swimming and paddleboarding. When you're ready to chill with friends, the beach house pool awaits. Spend the night entertaining in the outdoor lounge, sipping drinks in the hot tub, and gazing out over incredible ocean views.
                    </p>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">The space</h3>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>BEDROOM & BATHROOM</strong><br/>
                        • Bedroom 1 - Primary: King size bed, Ensuite bathroom with stand-alone rain shower, Dual vanity, Walk-in closet, Television, Sofa, Deck, Balcony, Ocean view
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Publish Date */}
                <div className="lg:col-span-1">
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">Publish July 01, 2024</p>
                  </div>
                </div>
                {/* Read more button at the bottom */}
                <div className="mt-8">
                  <button className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center space-x-1">
                    <span>Read more</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'offers' && (
              <div>
                {/* Header with publish date on same line */}
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-semibold">What we offer</h2>
                  <p className="text-gray-500 text-sm">Publish July 01, 2024</p>
                </div>
                {/* Add the paragraph here */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  Each home is fully equipped to meet your needs, with ample space and privacy.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableAmenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {/* Amenity icon with checkmark */}
                      <div className="relative">
                        <img 
                          src={amenity.icon} 
                          alt={amenity.name}
                          className="w-6 h-6"
                          onError={(e) => {
                            // Fallback if icon doesn't exist
                            (e.target as HTMLImageElement).src = '/assets/default-icon.png';
                          }}
                        />
                        {amenity.available && (
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <span className="text-gray-700">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'reviews' && (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Content */}
                <div className="lg:col-span-3">
                  <ReviewSection reviews={SAMPLE_REVIEWS} />
                </div>
                
                {/* Right Side - Publish Date */}
                <div className="lg:col-span-1">
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">Publish July 01, 2024</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'host' && (
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Content */}
                <div className="lg:col-span-3">
                  <div>
                    <h2 className="text-2xl font-semibold mb-6">About host</h2>
                    <div className="flex items-center space-x-4 mb-6">
                      <img 
                        src={SAMPLE_HOST.avatar} 
                        alt={SAMPLE_HOST.name}
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">Hosted by {SAMPLE_HOST.name}</h3>
                        <p className="text-gray-600">Joined in {SAMPLE_HOST.joinedDate}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">Response rate:</span>
                        <span>{SAMPLE_HOST.responseRate}%</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold">Response time:</span>
                        <span>{SAMPLE_HOST.responseTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Side - Publish Date */}
                <div className="lg:col-span-1">
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">Publish July 01, 2024</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Booking Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;