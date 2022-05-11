import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authOperations from '../redux/auth/auth-operations';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function hanleChange({ target: { name, value } }) {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <h1>Registration page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name{' '}
          <input type="text" name="name" value={name} onChange={hanleChange} />
        </label>

        <label>
          Email{' '}
          <input
            type="text"
            name="email"
            value={email}
            onChange={hanleChange}
          />
        </label>

        <label>
          Password{' '}
          <input
            type="password"
            name="password"
            value={password}
            onChange={hanleChange}
          />
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
