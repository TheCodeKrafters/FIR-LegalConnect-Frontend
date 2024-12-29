import { Link } from "react-router-dom";

function Navbar() {
    return (
      <>
        <nav className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-900 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <a
              href="{{ url_for('chatbot') }}"
              className="text-white font-bold text-xl hover:scale-125 transition-transform"
            >
              FIR-LegalConnect
            </a>
            <div>
              <ul className="flex space-x-6">
                <li>
                  <Link to= "/"
                    className="text-white hover:scale-125 transition-transform px-3 py-2 rounded-lg hover:bg-white/20"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <a
                    href="{{ url_for('helpline') }}"
                    className="text-white hover:scale-125 transition-transform px-3 py-2 rounded-lg hover:bg-white/20"
                  >
                    Helpline
                  </a>
                </li>
                <li>
                  <a
                    href="{{ url_for('help') }}"
                    className="text-white hover:scale-125 transition-transform px-3 py-2 rounded-lg hover:bg-white/20"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <Link to= "/register"
                    className="text-white hover:scale-125 transition-transform px-3 py-2 rounded-lg hover:bg-white/20"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to= "/login"
                    className="text-white hover:scale-125 transition-transform px-3 py-2 rounded-lg hover:bg-white/20"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
  