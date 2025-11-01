// components/common/Button.tsx
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  type = 'button',
  disabled = false 
}) => {
  const baseStyles = 'px-4 py-2 rounded font-semibold transition duration-200 focus:outline-none focus:ring-2';
  
  const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300',
    outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50 focus:ring-blue-300'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  );
};

export default Button;