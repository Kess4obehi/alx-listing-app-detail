// pages/index.tsx
import { useState } from 'react';
import { PROPERTYLISTINGSAMPLE, FILTER_OPTIONS, HERO_BACKGROUND, UI_TEXT } from '@/constants';
import { PropertyProps } from '@/interfaces';
import Pill from '@/components/common/Pill';

const Home = () => {
  const [filters, setFilters] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('highest');

  const toggleFilter = (filter: string) => {
    setFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  // Filter properties based on selected filters
  const filteredProperties = PROPERTYLISTINGSAMPLE.filter(property => {
    if (filters.length === 0) return true;
    return filters.some(filter => 
      property.category.some(cat => 
        cat.toLowerCase().includes(filter.toLowerCase())
      )
    );
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === 'highest') return b.price - a.price;
    if (sortBy === 'lowest') return a.price - b.price;
    return b.rating - a.rating;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="bg-cover bg-center py-30 text-white mx-10 rounded-2xl"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${HERO_BACKGROUND})`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 flex flex-col">
            <span>Find your favorite</span>
            <span>place here!</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </section>

      {/* Filters and Sort Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <span className="font-semibold text-lg whitespace-nowrap">All</span>
              <div className="flex gap-3 flex-wrap">
                {FILTER_OPTIONS.map((filter) => (
                  <Pill
                    key={filter}
                    label={filter}
                    isActive={filters.includes(filter)}
                    onClick={() => toggleFilter(filter)}
                  />
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-medium">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              >
                <option value="highest">Highest Price</option>
                <option value="lowest">Lowest Price</option>
                <option value="rating">Highest Rating</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="container mx-auto px-4 py-12">
        {sortedProperties.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-500 text-xl">{UI_TEXT.NO_LISTINGS}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedProperties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
            </div>
            
            {/* Show More Button */}
            <div className="text-center mt-16">
              <button className="bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 font-semibold text-lg transition-colors shadow-md hover:shadow-lg">
                Show more
              </button>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

// Property Card Component
const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="h-48 bg-gray-200 relative">
        {/* Property Image */}
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400';
          }}
        />
        
        {/* Discount Badge */}
        {property.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {property.discount}% OFF
          </div>
        )}
      </div>
      
      <div className="p-4">
        {/* Property Categories - Horizontal below image */}
        <div className="flex flex-wrap gap-1 mb-3">
          {property.category.slice(0, 3).map((cat, index) => (
            <span 
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Property Name, Address and Rating - Side by side */}
        <div className="flex justify-between items-start mb-3">
          <div className="flex-1">
            <h3 className="font-bold text-sm mb-1 line-clamp-1">{property.name}</h3>
            <p className="text-gray-600 text-xs">
              {property.address.city}, {property.address.country}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
            <span className="text-yellow-400">★</span>
            <span>{property.rating}</span>
          </div>
        </div>

        {/* Price and Offers - Side by side */}
        <div className="flex justify-between items-center">
          {/* Offers in white rectangle with curved edges on right */}
          <div className="bg-white border border-gray-200 rounded-2xl px-2 py-1">
            <div className="flex items-center gap-2 text-gray-600 text-xs">
              <span className="flex items-center gap-1">
                <img src="/assets/bed 1.png" alt="Bed" className="w-3 h-3" />
                <span>{property.offers.bed}</span>
              </span>
              <span className="flex items-center gap-1">
                <img src="/assets/bathtub 1.png" alt="Shower" className="w-3 h-3" />
                <span>{property.offers.shower}</span>
              </span>
              <span className="flex items-center gap-1">
                <img src="/assets/people 1.png" alt="Occupants" className="w-3 h-3" />
                <span>{property.offers.occupants}</span>
              </span>
            </div>
          </div>
          {/* Price on left */}
          <div className="flex items-baseline gap-1">
            <span className="text-base font-bold text-gray-900">${formatPrice(property.price)}</span>
            <span className="text-gray-600 text-xs">/n</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;