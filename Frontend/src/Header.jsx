import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Flashcard Learning</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-200">About</Link></li>
            <li><Link to="/study" className="hover:text-blue-200">Study</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
