export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10 px-12 mt-16">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-red-600">AnimeVerse</h2>
            <p className="text-gray-400 mt-2">Your ultimate anime streaming guide.</p>
          </div>
  
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-red-500 transition">Home</a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition">Browse</a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition">About</a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition">Contact</a>
          </div>
  
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-red-500 transition">
              <i className="fab fa-facebook text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition">
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-red-500 transition">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6 text-sm">&copy; 2025 AnimeVerse. All rights reserved.</div>
      </footer>
    );
  }