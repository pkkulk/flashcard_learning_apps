export default function Footer(){
    return(
        <footer className="bg-gray-800 text-white py-6 w-full relative bottom-0 mt-32">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">&copy; 2025 Flashcard Learning App. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            {/* <Link to="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</Link>
          */}</div> 
        </div>
      </footer>
    )
}