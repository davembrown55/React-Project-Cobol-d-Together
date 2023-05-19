import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function LandingPage() {

  return (
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter username" name="username"/>
        <Form.Text className="text-muted">
          Never share your username and password
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Enter system
      </Button>
    </Form>
    
  );


}

export default LandingPage;