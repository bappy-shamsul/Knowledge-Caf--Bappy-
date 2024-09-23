
import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border-b-2'>
            <h1 className='font-bold text-4xl text-fuchsia-950 text bg-gray-300'>Knowledge Cafe</h1>
            <img src={profile} />
        </div>
    );
};

export default Header;