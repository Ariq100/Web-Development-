import './home.css';
import Banner from '../../../assets/banner-main.png';

const Home = () => {
    return (
        <>
            <div className='flex justify-center p-0 m-0 mb-10'>
                <div className="home flex justify-center items-center gap-10 text-center w-5/6 rounded-3xl p-0 m-0">
                    <img src={Banner} alt="Banner" className='w-1/7 h-1/4'></img>
                    <h1 className='text-white font-bold text-5xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className='text-gray-500 font-medium text-3xl'>Beyond Boundaries Beyond Limits</p>
                    <div className='border-2 border-[#E7FE29] rounded-2xl p-2'>
                        <button className='btn font-bold text-lg bg-[#E7FE29] rounded-2xl border-0 shadow-none'>Claim Free Credit</button>
                    </div>
                </div>
            </div>
            
            <div className='flex inline-flex justify-between w-full px-40'>
                <div>
                    <p className='font-bold text-3xl'>Available Players</p>
                </div>
                <div  className='navbar-end flex inline-flex'>
                    <button className='btn border-2 border-gray-200 rounded-lg py-2 px-7 font-bold text-lg border-r-0 rounded-r-none'>Available</button>
                    <button className='btn border-2 border-gray-200 rounded-lg py-2 px-7 font-bold text-lg border-l-0 rounded-l-none'>Selected</button>
                </div>
            </div>
        </>
    );
};

export default Home;