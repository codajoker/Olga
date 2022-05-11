import { NavLink, Outlet } from 'react-router-dom';
import { UserMenu, AuthNav } from 'components/appBar';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function Layout() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header>
      <NavLink
        to="/"
        style={({ isActive }) =>
          isActive ? { color: 'red', fontWeight: 600 } : undefined
        }
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={({ isActive }) =>
            isActive ? { color: 'red', fontWeight: 600 } : undefined
          }
        >
          Contacts
        </NavLink>
      )}

      {isLoggedIn ? <UserMenu /> : <AuthNav />}

      <main>
        <Outlet />
      </main>
    </header>
  );
}
