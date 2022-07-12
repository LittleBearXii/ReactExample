import { useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

function ExampleUseState() {
  const [count, setCount] = useState(0);

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>{'useState'}</Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col">
              {'Count =>'} {count}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Button onClick={() => setCount(count + 1)}>
                {'Click Me!!!'}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ExampleUseState;