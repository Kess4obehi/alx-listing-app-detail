// interfaces/index.ts
export interface CardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}

export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface SortOption {
  label: string;
  value: string;
}