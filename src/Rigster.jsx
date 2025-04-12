import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real apps, you'd send this data to a server here
    console.log('User Registered:', formData);
    setSubmitted(true);
  };

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      {submitted ? (
        <p  style={{ color: 'RED', paddingTop: 50}}>Registration successful!</p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>Register</button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: '350px',
    margin: '100px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
}

export default Register
