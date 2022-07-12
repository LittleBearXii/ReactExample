import { useEffect, useRef, useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';

function ExampleUseRef() {
  const [input, setInput] = useState('');

  const preInput = useRef('');

  useEffect(() => {
    preInput.current = input;
  }, [input]);

  const inputRef = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    inputRef?.current?.focus();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  return(
    <Container className="mt-4">
      <Card>
        <Card.Header>{'useRef'}</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>useRef for focus input</Form.Label>
              <Form.Control type="text" className="form-control" ref={inputRef}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>useRef for correct previous input</Form.Label>
              <Form.Control type="text" className="form-control" value={input} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>previous input</Form.Label>
              <Form.Control type="text" className="form-control" value={preInput.current} readOnly/>
            </Form.Group>

            <Button type="button" onClick={onButtonClick}>
              Focus input
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ExampleUseRef;