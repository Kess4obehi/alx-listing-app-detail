// constants/index.ts
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
} as const;