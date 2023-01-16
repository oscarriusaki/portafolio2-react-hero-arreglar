import React, { useContext, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../auth/context/authContext';
import { logout } from '../../store/auth/authSlice';

export const Navbar = () => {
  const [active, setActive] = useState(1);
  // const { logout, user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { status, first_name } = useSelector(state => state.auth)

  const click = (n) => {
    setActive(n)
  }

  const logoutU = () => {
    const u = {
      message_error: 'no logged'
    }
    localStorage.clear();
    dispatch(logout (u));
  }

  return (
    <>
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className='flex items-start'>
          <NavLink onClick={() => click(1)} to='/'             className={`text-white font-bold text-3xl pr-4 `}>Hero App</NavLink>
          <NavLink onClick={() => click(1)} to='/'             className={`text-white px-4 py-2 rounded-md ${active === 1 && 'bg-gray-700 '}`}>Marvel Page</NavLink>
          <NavLink onClick={() => click(2)} to='/dc'           className={`text-white px-4 py-2 rounded-md ${active === 2 && 'bg-gray-700 '}`}>Dc</NavLink>
          <NavLink onClick={() => click(3)} to='/search'       className={`text-white px-4 py-2 rounded-md ${active === 3 && 'bg-gray-700 '}`}>Search</NavLink>
          <NavLink onClick={() => click(4)} to='/registerHero' className={`text-white px-4 py-2 rounded-md ${active === 4 && 'bg-gray-700 '}`}>Register</NavLink>
        </div>
        <div className="flex items-center">
          <Link  className={`px-4 py-2 rounded-md text-white hover:bg-gray-700 ${active === 1 ? 'active' : null}`}>{first_name}</Link>
          <Link to='/login' className={`px-4 py-2 rounded-md text-white hover:bg-gray-700 focus:outline-none border-x border-y border-gray-800  ${active === 1 ? 'active' : null}`} onClick={logoutU}>Logout</Link>
        </div>
      </nav>
    </>
  )
}
