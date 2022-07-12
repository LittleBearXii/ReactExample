import { useState, useEffect, useLayoutEffect } from 'react';
import { Card, Container, Form } from 'react-bootstrap';

function ExampleUseEffect() {
  const [input, setInput] = useState('First');
  const [previousInput, setPreviousInput] = useState('');

  useEffect(() => {
    setInput('Second');
    console.log('useEffect')

    return () => {
      console.log('Clean up function');
    };
  }, []);// dependency array

  useLayoutEffect(() => {
    setPreviousInput(input);
    console.log('useLayoutEffect');
  }, []);

  function handleChang(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.currentTarget.value);
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>{'useLayoutEffect'}</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>{'Previous Input => '} {previousInput}</Form.Label>
              <Form.Control type="text" value={input} onChange={handleChang} />
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ExampleUseEffect;