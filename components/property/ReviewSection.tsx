// components/property/ReviewSection.tsx
import { Review } from '@/interfaces';

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-lg ${
              star <= Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div>
      {/* Rating and total reviews */}
      <div className="flex items-center space-x-2 mb-8">
        <span className="text-2xl">⭐</span>
        <span className="text-xl font-semibold">4.76</span>
        <span className="text-gray-600">•</span>
        <span className="text-gray-700 font-semibold">(345 reviews)</span>
      </div>

      {/* Reviews grid - 2 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            {/* User info with circular picture */}
            <div className="flex items-start space-x-4 mb-4">
              <img 
                src={review.avatar} 
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <p className="text-gray-500 text-sm">{review.year}</p>
              </div>
            </div>

            {/* Trip info */}
            <div className="flex items-center space-x-1 mb-4">
              <span className="text-gray-600 text-sm">4 months</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-600 text-sm">Family trip</span>
            </div>

            {/* Star rating */}
            <div className="flex items-center space-x-2 mb-4">
              {renderStars(review.rating)}
              <span className="text-gray-700 font-semibold text-sm">{review.rating}</span>
            </div>

            {/* Review comment */}
            <p className="text-gray-700 leading-relaxed text-sm">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;