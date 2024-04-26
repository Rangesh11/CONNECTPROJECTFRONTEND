import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { userid_context } from '../home_component/Home';
import untitled from './Untitled.jpeg';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const { _userid, _setprofile } = useContext(userid_context);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="relative w-screen pl-14 gap-3 flex flex-col">
      <div style={{ backgroundColor: 'rgba(58,60,77,255)', boxShadow: 'rgb(24 144 255 / 35%) 0px 2px 7px' }} className="flex flex-row h-16 items-center justify-between w-11/12 p-3 rounded-xl sticky top-0 z-50 bg-blue">
        <button onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white lucide lucide-square-menu hidden max-lg:block">
            <rect width="18" height="18" x="3" y="3" rx="2"/>
            <path d="M7 8h10"/>
            <path d="M7 12h10"/>
            <path d="M7 16h10"/>
          </svg>
        </button>
        {/* <div className="text-white text-4xl font-bold">Connect</div> */}
        <img src={untitled} className='h-16 w-80' alt="Untitled" />

        <div className="flex flex-row gap-7 justify-center items-center">
          <Link to="/notification">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white size-9 lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
          </Link>
          <Link to="/profile" className="max-first:hidden" onClick={() => _setprofile(_userid)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white size-9  lucide lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg></Link>
        </div>
      </div>
      <div style={{ backgroundColor: 'rgba(58,60,77,255)', boxShadow: 'rgb(24 144 255 / 35%) 0px 2px 7px' }} className={`absolute h-40 w-52 bg-blue flex flex-col gap-2 ${showMenu ? 'block' : 'hidden'} lg:hidden rounded-lg z-10 top-16`}>
        <Link className="text-white pl-3" to="/home">Home</Link>
        <Link className="text-white pl-3" to="/post">Post</Link>
        <Link className="text-white pl-3" to="/Add_friend">Add Friend</Link>
        <Link className="text-white pl-3" to="/addgroup">Add Group</Link>
        <Link className="text-white pl-3" to="/Creategroup">Create Group</Link>
      </div>
    </div>
  );
}
