// components/property/BookingSection.tsx
import { useState } from 'react';

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const calculateNights = () => {
    if (!checkIn || !checkOut) return 0;
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  };

  const nights = calculateNights();
  const subtotal = price * nights;
  const cleaningFee = 75;
  const serviceFee = Math.round(subtotal * 0.12);
  const total = subtotal + cleaningFee + serviceFee;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg">
      <div className="flex items-baseline space-x-2 mb-4">
        <h3 className="text-2xl font-bold">${price}</h3>
        <span className="text-gray-600">night</span>
      </div>

      {/* Date Pickers */}
      <div className="border border-gray-300 rounded-lg overflow-hidden mb-4">
        <div className="grid grid-cols-2 border-b border-gray-300">
          <div className="p-3 border-r border-gray-300">
            <label className="block text-xs font-semibold text-gray-700 mb-1">CHECK-IN</label>
            <input 
              type="date" 
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full text-sm focus:outline-none"
            />
          </div>
          <div className="p-3">
            <label className="block text-xs font-semibold text-gray-700 mb-1">CHECKOUT</label>
            <input 
              type="date" 
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full text-sm focus:outline-none"
            />
          </div>
        </div>
        
        <div className="p-3">
          <label className="block text-xs font-semibold text-gray-700 mb-1">GUESTS</label>
          <select 
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full text-sm focus:outline-none"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Reserve Button */}
      <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg font-semibold text-lg transition-colors mb-4">
        Reserve now
      </button>

      <p className="text-center text-gray-600 text-sm mb-4">
        You won't be charged yet
      </p>

      {/* Price Breakdown */}
      {nights > 0 && (
        <div className="border-t border-gray-200 pt-4 space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600 underline">
              ${price} × {nights} {nights === 1 ? 'night' : 'nights'}
            </span>
            <span>${subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 underline">Cleaning fee</span>
            <span>${cleaningFee}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 underline">Service fee</span>
            <span>${serviceFee}</span>
          </div>
          <div className="flex justify-between font-semibold border-t border-gray-200 pt-3">
            <span>Total</span>
            <span>${total}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingSection;