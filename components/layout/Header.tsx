// components/layout/Header.tsx
const Header = () => {
  const accommodationTypes = [
    {   
      name: "Rooms",
      image: "/assets/living-room 1.svg",
      alt: "Rooms accommodation"
    },
    {  
      name: "Mansion",
      image: "/assets/vector.png",
      alt: "Mansion accommodation"
    },
    {  
      name: "Countryside",
      image: "/assets/farm 1.png",
      alt: "Countryside accommodation"
    },
    {  
      name: "Villa",
      image: "/assets/villa 1.png",
      alt: "Villa accommodation"
    },
    { 
      name: "Tropical",
      image: "/assets/palm-tree 1.png",
      alt: "Tropical accommodation"
    },
    { 
      name: "New",
      image: "/assets/key-chain 1.png",
      alt: "New accommodation"
    },
    { 
      name: "Amazing pool",
      image: "/assets/swimming-pool 1.png",
      alt: "Amazing pool accommodation"
    },
    { 
      name: "Beach house",
      image: "/assets/vacations 1.png",
      alt: "Beach house accommodation"
    },
    { 
      name: "Island",
      image: "/assets/island (1) 1.png",
      alt: "Island accommodation"
    },
    { 
      name: "Camping",
      image: "/assets/tent 1.png",
      alt: "Camping accommodation"
    },
    { 
      name: "Apartment",
      image: "/assets/apartment 1.png",
      alt: "Apartment accommodation"
    },
    { 
      name: "House",
      image: "/assets/home 1.png",
      alt: "House accommodation"
    },
    { 
      name: "Lakefront",
      image: "/assets/cottage 1.png",
      alt: "Lakefront accommodation"
    },
    { 
      name: "Farm house",
      image: "/assets/barn 1.png",
      alt: "Farm house accommodation"
    },
    { 
      name: "Treehouse",
      image: "/assets/treehouse (1) 1.png",
      alt: "Treehouse accommodation"
    },
    { 
      name: "Cabins",
      image: "/assets/cabin 1.png",
      alt: "Cabins accommodation"
    },
    { 
      name: "Castles",
      image: "/assets/castle-tower 1.png",
      alt: "Castles accommodation"
    }
  ];

  return (
    <header className="bg-white">
      {/* Top Banner */}
      <div className="bg-green-600 text-white py-2 text-sm">
        <div className="flex items-center justify-center gap-2">
          <img 
            src="/assets/Case Minimalistic.svg" 
            alt="Copyright" 
            className="h-4 w-4" 
          />
          <span>Overseas trip? Get the latest information on travel guides</span>
          <a href="#" className="bg-black text-white font-semibold px-3 py-1 rounded-lg hover:bg-gray-800 transition-colors">
            More Info
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        {/* Top Row - Logo, Search, Auth */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <img 
              src="/assets/vector (1).png" 
              alt="ALK Logo" 
            className="h-8 w-auto"
          />
          {/* Search Bar - Hidden on mobile, shown on tablet and up */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="flex border border-gray-300 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-shadow w-full">
              <div className="flex-1 flex divide-x">
                <div className="flex-1 px-3 py-1">
                  <span className="text-sm font-semibold block">Location</span>
                  <input 
                    type="text" 
                    placeholder="Search destinations"
                    className="w-full text-sm outline-none placeholder-gray-500 bg-transparent"
                  />
                </div>
                <div className="px-3 py-1">
                  <span className="text-sm font-semibold block">Check in</span>
                  <input 
                    type="text" 
                    placeholder="Add dates"
                    className="w-full text-sm outline-none placeholder-gray-500 bg-transparent"
                  />
                </div>
                <div className="px-3 py-1">
                  <span className="text-sm font-semibold block">Check out</span>
                  <input 
                    type="text" 
                    placeholder="Add dates"
                    className="w-full text-sm outline-none placeholder-gray-500 bg-transparent"
                  />
                </div>
                <div className="px-3 py-1">
                  <span className="text-sm font-semibold block">People</span>
                  <input 
                    type="text" 
                    placeholder="Add guests"
                    className="w-full text-sm outline-none placeholder-gray-500 bg-transparent"
                  />
                </div>
              </div>
              <button className="bg-red-500 text-white p-3 hover:bg-red-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            {/* Sign in and Sign up buttons - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="text-sm font-semibold hover:bg-gray-100 px-4 py-2 rounded-full transition-colors">
                Sign in
              </button>
              <button className="text-sm font-semibold bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded-full transition-colors">
                Sign up
              </button>
            </div>
            
            {/* Profile logo - Hidden on desktop, shown on tablet and mobile */}
            <button className="lg:hidden flex items-center gap-2 text-sm border border-gray-300 rounded-full px-3 py-2 hover:shadow-md transition-shadow">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className="w-8 h-8 bg-gray-500 rounded-full p-1" fill="white" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </button>

            {/* Mobile search button - Only shown on mobile */}
            <button className="md:hidden bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Accommodation Types Scrollable Row - Hidden on mobile */}
        <div className="pb-4 hidden md:block">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide py-2">
            {accommodationTypes.map((type) => (
              <button
                key={type.name}
                className="flex flex-col items-center gap-1 flex-shrink-0 text-gray-600 hover:text-black transition-colors group min-w-[60px]"
              >
                {/* Rectangular borderless image frame */}
                <div className="w-5 h-5 overflow-hidden group-hover:scale-105 transition-transform duration-200">
                  <img 
                    src={type.image} 
                    alt={type.alt}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      (e.target as HTMLImageElement).src = '/assets/default.png';
                    }}
                  />
                </div>
                <span className="text-xs font-medium text-center max-w-[80px] break-words leading-tight">
                  {type.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;