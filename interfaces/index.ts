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

export interface Listing {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
}