import React, { useState, useEffect, Fragment } from 'react';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [first_name, setfirstname] = useState('');
  const [last_name, setLastname] = useState('');
  const [phone_number, setPhoneNumber] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      window.location.replace('http://localhost:3000/login');
    } else {
      fetch('https://webshop-api-johnsons.herokuapp.com/dj-rest-auth/user/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setEmail(data.email);
          setUsername(data.username)
          setPassword1('');
          setPassword2('');
          setfirstname(data.first_name);
          setLastname(data.last_name);
          setPhoneNumber(data.phone_number);
        });
    }
  }, []);

  const onSubmit = e => {
    e.preventDefault();

    const user = {
      username: username,
      email: email,
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number
    };
  }
    return (
      <div>
        <Fragment>
          <h1>My profile</h1>
          <h2>Hello {username}!</h2>
          <form >
            <label htmlFor='username'>Username:</label> <br />
            <input
              name='username'
              type='text'
              value={username}
              onChange={e => setUsername(e.target.value)}

            />{' '}
            <br />
            <label htmlFor='email'>Email address:</label> <br />
            <input
              name='email'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}

            />{' '}
            <br />
            <label htmlFor='first_name'>First name:</label> <br />
            <input
              name='first_name'
              type='text'
              value={first_name}
              onChange={e => setfirstname(e.target.value)}

            />{' '}
            <br />
            <label htmlFor='last_name'>Last name:</label> <br />
            <input
              name='last_name'
              type='text'
              value={last_name}
              onChange={e => setLastname(e.target.value)}

            />{' '}
            <br />
            <label htmlFor='phone_number'>Phone number:</label> <br />
            <input
              name='phone_number'
              type='int'
              value={phone_number}
              onChange={e => setPhoneNumber(e.target.value)}

            />{' '}
            <br />
            <button type='submit' onClick={onSubmit} >Submit your new informations</button>
          </form>
        </Fragment>
      </div>
    );
}
export default Dashboard;