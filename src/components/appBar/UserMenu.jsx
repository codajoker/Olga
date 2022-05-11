import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from 'redux/auth/auth-selectors';

import defaultAvatar from 'components/appBar/default-avatar.png';
import { logout } from 'redux/auth/auth-operations';

export function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  return (
    <div>
      <img src={defaultAvatar} alt="" width="32" />
      <span>Well come, {name}</span>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
