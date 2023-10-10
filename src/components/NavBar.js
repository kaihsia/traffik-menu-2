import Logo from './Icons/Logo';
import Glass from './Icons/Glass';
import Hamburger from './Icons/Hamburger';
import './Navbar.css';
import Cart from './Icons/Cart';

const categories = ["Food & Drink", "Essentials", "Apperal", "Home", "Garden", "Baby", "Pets", "Accessories", "etc"];

function NavBar({toggleMenu}) {
  return (
    <div className="border-bottom">
      <div className="p-4 md:pt-[20px] md:px-[40px] pb-[10px] mx-auto bg-white md:w-1360">
        <div className="flex flex-col justify-between gap-5 md:space-x-8 md:pb-[16px] md:flex-row">
          <div className="self-start mr-4 md:self-center md:mb-0 md:mr-4">
            <Logo />
          </div>
          <div className="relative rounded-[106px] flex-grow md:mr-4">
              <div className="absolute inset-y-0 flex items-center pointer-events-none left-2">
                  <span className="text-gray-400">
                    <Glass />
                  </span>
              </div>
              <input
                  type="text"
                  className="py-2.5 px-3 pl-10 md:h-[50px] bg-[#F2F2F2] focus:outline-none focus:ring-1 focus:ring-indigo-500 block w-full text-gray-700 rounded-[106px] text-[14px] md:faded-text"
                  placeholder="Search America’s Marketplace!"
              />
          </div>
          <div className="hidden md:block ml-[40px]">
            <div className="flex items-center space-x-5">
              <div className="w-6 h-6">
                <Cart />
              </div>
              <button style={{color: "white"}} className="px-[20px] py-2 text-white bg-airship rounded-[100px] focus:outline-none hover:bg-blue-500">
                Log in or Join
              </button>
            </div>
          </div>
        </div>


        
        <div className="flex items-center">
            <div className="flex-shrink-0 md:space-y-3" onClick={toggleMenu}>
                <a href="www.google.com" className="text-gray-600 hover:text-gray-900 all-item mr-4 bg-[#F2F2F2] px-3 py-[5px] rounded-md flex items-center medium-text">
                    <span>
                      <Hamburger />
                    </span>
                    <span className='medium-bold'>
                      All
                    </span>
                </a>
            </div>

            <div className="pt-4 overflow-x-auto md:pt-0 md:space-y-1 no-scrollbar">
                <nav className="flex md:gap-x-[18px] whitespace-nowrap">
                    {
                      categories.map(category => (
                        <div className="p-[10px]">
                          <a href="www.google.com" key={category} className={`text-gray-600 hover:text-gray-900 medium medium-bold}`}>{category}</a> 
                        </div>
                      ))
                    }
                    {/* Add more items as needed */}
                </nav>
            </div>
        </div>

      </div>
    </div>
  );
}

export default NavBar;
