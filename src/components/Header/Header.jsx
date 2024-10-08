
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4  border-b-2 max-w-6xl mx-auto mt-'>
            <h1 className='font-bold text-4xl text-fuchsia-950 text bg-gray-300'>Knowledge Cafe</h1>
            <img src={profile} />
        </header>
    );
};

export default Header;