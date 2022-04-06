import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './App.css';
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const auth = getAuth(app);
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailField = (e) => {
    setEmail(e.target.value);
  }
  const handlePasswordField = (e) => {
    setPassword(e.target.value);
  }
  const handleFormSubmit = (event) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log(userCredential.user);
      }).catch(error => {
        console.error(error);
      })
    event.preventDefault();
  }
  return (
    <div className='w-50 mx-auto mt-5'>
      <h2 className='text-primary'>Please Register</h2>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={handleEmailField} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handlePasswordField} type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
