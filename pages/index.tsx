// pages/index.tsx
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  const sampleListing = {
    image: "/assets/image 1.png",
    title: "Beautiful Apartment",
    description: "Luxurious apartment in the heart of the city with amazing views.",
    price: 120,
    rating: 4.8
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          ALX Listing App
        </h1>
        
        <div className="flex justify-center mb-8">
          <Button variant="primary" onClick={() => alert('Button clicked!')}>
            Explore Listings
          </Button>
        </div>

        <div className="flex justify-center">
          <Card {...sampleListing} />
        </div>
      </div>
    </div>
  );
}