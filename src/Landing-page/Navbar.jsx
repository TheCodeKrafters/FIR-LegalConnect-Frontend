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
                  <a
                    href="{{ url_for('landing_page') }}"
                    className="text-white hover:scale-125 transition-transform px-3 py-2 rounded-lg hover:bg-white/20"
                  >
                    Home
                  </a>
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
                  <a
                    href="{{ url_for('signup') }}"
                    className="text-white hover:scale-125 transition-transform px-3 py-2 rounded-lg hover:bg-white/20"
                  >
                    Sign Up
                  </a>
                </li>
                <li>
                  <a
                    href="{{ url_for('signin') }}"
                    className="text-white hover:scale-125 transition-transform px-3 py-2 rounded-lg hover:bg-white/20"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
  