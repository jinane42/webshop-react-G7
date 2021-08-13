import React, { useState, useEffect } from 'react';
import Login from './Login';
import Dashboard from '../../Dashboard';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [first_name, setfirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('token') !== null) {
      window.location.replace(<Dashboard />);
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      username: username,
      email: email,
      password1: password1,
      password2: password2,
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number
    };

    fetch('https://webshop-api-johnsons.herokuapp.com/dj-rest-auth/registration/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem('token', data.key);
          window.location.replace(< Dashboard />);
        } else {
          setUsername('');
          setEmail('');
          setPassword1('');
          setPassword2('');
          setfirstname('');
          setLastname('');
          setPhoneNumber('');
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  const handleSubmit = () => {
    return(
      <div>
      <p>You have successfully signed up, now you can Login</p>
      <Login />
      </div>
    )
  }

  return (
    <div>
      {loading === false && <h1>Signup</h1>}
      {errors === true && <h2>Cannot signup with provided credentials</h2>}
      <form onSubmit={onSubmit}>
      <label htmlFor='username'>Username:</label> <br />
        <input
          name='username'
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='email'>Email address:</label> <br />
        <input
          name='email'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='password1'>Password:</label> <br />
        <input
          name='password1'
          type='password'
          value={password1}
          onChange={e => setPassword1(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='password2'>Confirm password:</label> <br />
        <input
          name='password2'
          type='password'
          value={password2}
          onChange={e => setPassword2(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='first_name'>First name:</label> <br />
        <input
          name='first_name'
          type='text'
          value={first_name}
          onChange={e => setfirstname(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='last_name'>Last name:</label> <br />
        <input
          name='last_name'
          type='text'
          value={last_name}
          onChange={e => setLastname(e.target.value)}
          required
        />{' '}
        <br />
        <label htmlFor='phone_number'>Phone number:</label> <br />
        <input
          name='phone_number'
          type='int'
          value={phone_number}
          onChange={e => setPhoneNumber(e.target.value)}
          required
        />{' '}
        <br />
        <button type='submit' onClick={handleSubmit} >Submit</button>
      </form>
    </div>
  );
};

export default Signup;