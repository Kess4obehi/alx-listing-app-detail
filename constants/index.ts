// constants/index.ts

import { PropertyProps, Review, Amenity, Host } from '../interfaces';

export const API_URLS = {
  LISTINGS: '/api/listings',
  USERS: '/api/users',
} as const;

export const APP_CONFIG = {
  SITE_NAME: 'ALX Listing App',
  DESCRIPTION: 'Airbnb clone for property listings',
  VERSION: '1.0.0',
} as const;

export const UI_TEXT = {
  BOOK_NOW: 'Book Now',
  VIEW_DETAILS: 'View Details',
  LOADING: 'Loading...',
  NO_LISTINGS: 'No listings available',
  SHOW_MORE: 'Show more',
  SIGN_UP: 'Sign up',
  SEARCH: 'Search',
} as const;

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA"
    },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400",
    discount: "30"
  },
  {
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA"
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400",
    discount: ""
  },
  {
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA"
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
    discount: "15"
  },
  {
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand"
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6"
    },
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400",
    discount: "20"
  },
  {
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia"
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10"
    },
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400",
    discount: ""
  },
  {
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada"
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
    discount: "10"
  },
  {
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand"
    },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6"
    },
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400",
    discount: "25"
  },
  {
    name: "Urban Loft",
    address: {
      state: "Berlin",
      city: "Berlin",
      country: "Germany"
    },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3"
    },
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
    discount: ""
  },
  {
    name: "Secluded Forest Cabin",
    address: {
      state: "Whistler",
      city: "British Columbia",
      country: "Canada"
    },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7"
    },
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=400",
    discount: "40"
  },
  {
    name: "Cliffside Villa",
    address: {
      state: "Amalfi",
      city: "Salerno",
      country: "Italy"
    },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    price: 6000,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400",
    discount: "50"
  },
  {
    name: "Coastal Escape Villa",
    address: {
      state: "Noosa",
      city: "Queensland",
      country: "Australia"
    },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    price: 3400,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6"
    },
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
    discount: ""
  },
  {
    name: "Historical Villa",
    address: {
      state: "Florence",
      city: "Tuscany",
      country: "Italy"
    },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    price: 2700,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4"
    },
    image: "https://images.unsplash.com/photo-1555854871-d6b0fe259240?w=400",
    discount: "35"
  },
  {
    name: "Downtown Apartment",
    address: {
      state: "Tokyo",
      city: "Tokyo",
      country: "Japan"
    },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    price: 2200,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "2"
    },
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400",
    discount: ""
  },
  {
    name: "Luxury Safari Lodge",
    address: {
      state: "Serengeti",
      city: "Mara",
      country: "Tanzania"
    },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    price: 4500,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8"
    },
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400",
    discount: "20"
  },
  {
    name: "Countryside Cottage",
    address: {
      state: "Cotswolds",
      city: "Gloucestershire",
      country: "UK"
    },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4"
    },
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=400",
    discount: "25"
  },
  {
    name: "Riverfront Mansion",
    address: {
      state: "Paris",
      city: "Île-de-France",
      country: "France"
    },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    price: 5000,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8"
    },
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400",
    discount: "30"
  },
  {
    name: "Ski Chalet",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland"
    },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    price: 3900,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400",
    discount: ""
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles"
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10"
    },
    image: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?w=400",
    discount: "60"
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa"
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5"
    },
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400",
    discount: ""
  }
];

export const FILTER_OPTIONS = [
  "Top Villa",
  "Free Reschedule", 
  "Book Now, Pay later",
  "Self Checkin",
  "Instant Book"
];

export const SORT_OPTIONS = [
  { label: "Highest Price", value: "highest" },
  { label: "Lowest Price", value: "lowest" },
  { label: "Highest Rating", value: "rating" }
];

export const HERO_BACKGROUND = "/assets/hero-background.png";

export const ACCOMMODATION_TYPES = [
  "Rooms", "Mansion", "Countryside", "Villa", "Tropical", "New", 
  "Amazing pool", "Beach house", "Island", "Camping", "Apartment", 
  "House", "Lakefront", "Farm house", "Treehouse", "Cabins", "Castles"
];

// New constants for property detail page
export const SAMPLE_REVIEWS: Review[] = [
  {
    id: "1",
    name: "Kerry",
    year: "3 years on alx",
    avatar: "/assets/M1.png",
    rating: 4.8,
    comment: "I simply don’t have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
    date: "2024-01-15"
  },
  {
    id: "2",
    name: "Pooja",
    year: "1 years on alx",
    avatar: "/assets/M2.png",
    rating: 4.9,
    comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures, ",
    date: "2024-01-10"
  },
  {
    id: "3",
    name: "Cindy & Ben",
    year: "1 years on alx",
    avatar: "/assets/M3.png",
    rating: 4.7,
    comment: "I simply don’t have the words to describe how incredibly beautiful the villa and its surroundings are. This is a wonderful remote spot that is simply breathtaking",
    date: "2024-01-05"
  },
  {
    id: "4",
    name: "Marnie",
    year: "5 years on alx",
    avatar: "/assets/M4.png",
    rating: 4.6,
    comment: "We stayed at this home for a family vacation of 7 adults (including 3 couples, 1 baby) and had a fantastic stay. The house was BEAUTIFUL and honestly better than shown in pictures, ",
    date: "2023-12-20"
  }
];

export const SAMPLE_AMENITIES: Amenity[] = [
  { name: "Mountain view", available: true, icon: "/assets/mountain.png" },
  { name: "Chef", available: true, icon: "/assets/chef.png" },
  { name: "Cleaning available during stay", available: true, icon: "/assets/broom.png" },
  { name: "Pool - infinity", available: true, icon: "/assets/pool.png" },
  { name: "Kitchen", available: true, icon: "/assets/pan.png" },
  { name: "Shared beach access", available: true, icon: "/assets/sunrise.png" },
  { name: "Butler", available: true, icon: "/assets/bell.png" },
  { name: "Bartender", available: true, icon: "/assets/shaker.png" },
  { name: "Hot tub", available: true, icon: "/assets/hot-tub.png" },
  { name: "Wifi", available: true, icon: "/assets/wifi.png" },
  { name: "Fireplace", available: false, icon: "/assets/barn 1.png" },
  { name: "Beach Access", available: false, icon: "/assets/pool.png" }
];

export const SAMPLE_HOST: Host = {
  name: "Alex Rodriguez",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
  joinedDate: "2018",
  responseRate: 98,
  responseTime: "within an hour"
};

export const PROPERTY_DESCRIPTIONS: Record<string, string> = {
  "Villa Ocean Breeze": "Luxurious beachfront villa with stunning ocean views and modern amenities. Perfect for families and groups looking for a premium vacation experience.",
  "Mountain Escape Chalet": "Cozy mountain retreat with panoramic views and rustic charm. Ideal for nature lovers and adventure seekers.",
  "Cozy Desert Retreat": "Beautiful desert oasis with modern comforts and stunning landscape views. Perfect for a peaceful getaway.",
  "City Lights Penthouse": "Luxurious penthouse in the heart of the city with breathtaking skyline views and premium amenities.",
  "Riverside Cabin": "Charming cabin by the river offering tranquility and natural beauty with all modern conveniences.",
  "Modern Beachfront Villa": "Contemporary villa right on the beach with private access and stunning ocean views.",
  "Lakeside Chalet": "Beautiful chalet overlooking a serene lake, perfect for fishing, swimming, and relaxation.",
  "Tropical Garden Villa": "Lush tropical villa surrounded by beautiful gardens with private pool and outdoor living spaces.",
  "Urban Loft": "Stylish urban loft in the city center with industrial chic design and modern amenities.",
  "Secluded Forest Cabin": "Private cabin deep in the forest offering complete seclusion and connection with nature.",
  "Cliffside Villa": "Dramatic villa perched on a cliff with panoramic ocean views and infinity pool.",
  "Coastal Escape Villa": "Beautiful coastal villa with direct beach access and stunning sunset views.",
  "Historical Villa": "Charming historical villa with traditional architecture and modern comforts.",
  "Downtown Apartment": "Modern apartment in the downtown area with easy access to shops, restaurants, and entertainment.",
  "Luxury Safari Lodge": "Exclusive safari lodge offering luxury accommodations and wildlife viewing opportunities.",
  "Countryside Cottage": "Quaint countryside cottage with traditional charm and peaceful surroundings.",
  "Riverfront Mansion": "Grand mansion on the riverfront with extensive gardens and luxury amenities.",
  "Ski Chalet": "Cozy ski chalet with mountain views and easy access to ski slopes.",
  "Island Paradise Villa": "Private island villa with white sand beaches and crystal clear waters.",
  "Clifftop Retreat": "Modern retreat on the clifftop with stunning coastal views and contemporary design."
};