// components/layout/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between mb-8">
          {/* ALX Description - Left side */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <h2 className="text-2xl font-bold mb-4">ALX</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              
                ALX is a platform where travelers can discover and book unique, comfortable, and 
                affordable lodging options worldwide. From cozy city apartments and tranquil 
                countryside retreats to exotic beachside villas. ALX connects you with the 
                perfect place to stay for any trip.
              
            </p>
          </div>

          {/* Horizontal Columns - Pushed to the right */}
          <div className="lg:w-2/3 flex justify-end">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl">
              {/* Explore */}
              <div>
                <h3 className="font-semibold text-lg mb-4 pb-2">Explore</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Apartments in Dubai</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Hotels in New York</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Villa in Spain</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Mountains in Indonesia</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold text-lg mb-4 pb-2">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Customers</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Brand</a></li>
                </ul>
              </div>

              {/* Help */}
              <div>
                <h3 className="font-semibold text-lg mb-4 pb-2">Help</h3>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cancel booking</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Refunds Process</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            {/* Cancellation Policy - Left side */}
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                Some hotel requires you to cancel more than 24 hours before check-in.{" "}
                <a href="#" className="text-blue-400 hover:text-blue-300 underline">
                  Details here
                </a>
              </p>
            </div>

            {/* Additional Links - Right side */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Policy service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>
              <a href="#" className="hover:text-white transition-colors">Partners</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;