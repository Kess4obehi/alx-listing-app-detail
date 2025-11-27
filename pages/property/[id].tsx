// pages/property/[id].tsx
import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  
  // Create a slug from property name for comparison
  const createSlug = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  // Find property by matching slugs
  const property = PROPERTYLISTINGSAMPLE.find((item) => 
    createSlug(item.name) === id
  );

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property not found</h1>
          <p className="text-gray-600 mb-4">Trying to find: {id}</p>
          <button 
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return <PropertyDetail property={property} />;
}