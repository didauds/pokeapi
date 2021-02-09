import { useState } from 'react';

import Container from '../../components/Container'
import Loading from '../../components/Loading';
import Button from '../../components/Button';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [warning, setWarning] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  const [loading, setLoading] = useState(false);

  const submit = () => {

    if (name === '' || email === '' || message === '') {
      setWarning(true);
      return;
    }
    setWarning(false);
    setLoading(true);   

    window.setTimeout(() => {
      setLoading(false);
      setConfirmation(true);
    }, 1500);

  }

  const reset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setWarning(false);
    setConfirmation(false);
  }

  return (
    <Container className="container-fluid mx-auto">
      <div>
        <h1 className="text-center">Contact Us</h1>
        <p className="lead text-center">Please fill out all the information below.</p>
        <div className="formContainer">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" className="form-control" value={email} onChange={blah => setEmail(blah.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" className="form-control" value={message} onChange={e => setMessage(e.target.value)}></textarea>
          </div>

          <div className="text-center">
            <Button bgColor="grey" onClick={() => reset()}>Reset</Button>
            <Button onClick={() => submit()}>Submit</Button>           
          </div>
          {loading && <Loading />}
          {confirmation && 
            <div className="text-center my-3">
              <h3 style={{color:'green'}}>Your message has been sent!</h3>
            </div>
          }            
          {warning && 
            <div className="text-center my-3">
              <h3 style={{color:'red'}}>Please fill out the form!</h3>
            </div>
          }     
        </div>        
      </div>
    </Container>
  )
}

export default Contact;