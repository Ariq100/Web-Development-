import logo from '../../../assets/logo.png';
import Coin from '../../../assets/Coin.png'

const Navbar = () => {
    return (
        <div>
          <div className="navbar px-40 py-10">
            <div className="navbar-start">
              <img src={logo} alt='logo'></img>
            </div>
            <div className="navbar-end gap-4">
              <ul className='flex inline-flex gap-4 text-gray-600'>
                <li><a className='btn border-none bg-white text-gray-600 shadow-none hover:shadow-none'>Home</a></li>
                <li><a className='btn border-none bg-white text-gray-600 shadow-none hover:shadow-none'>Fixture</a></li>
                <li><a className='btn border-none bg-white text-gray-600 shadow-none hover:shadow-none'>Teams</a></li>
                <li><a className='btn border-none bg-white text-gray-600 shadow-none hover:shadow-none'>Schedule</a></li>
              </ul>
              <a className="btn align-center"> Coin <img src={Coin} alt="Coin" className='w-7 h-7'></img> </a>
            </div>
            </div>
        </div>
    );
};

export default Navbar;