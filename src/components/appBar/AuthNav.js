import { NavLink } from 'react-router-dom';

export function AuthNav() {
  return (
    <>
      <NavLink
        to="/register"
        style={({ isActive }) =>
          isActive ? { color: 'red', fontWeight: 600 } : undefined
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) =>
          isActive ? { color: 'red', fontWeight: 600 } : undefined
        }
      >
        Login
      </NavLink>
    </>
  );
}
