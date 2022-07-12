import { useState, useEffect } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

function ExampleUseEffect() {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  useEffect(() => {
    setDoubleCount(count * 2);

    return () => {
      console.log('Clean up function');
    };
  }, [count]);// dependency array if array is empty useEffect work only once
  //if set array useEffect work on value on array change
  //if remove this array useEffect work every render

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>{'useEffect'}</Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col">
              {'Count =>'} {count}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              {'Double Count =>'} {doubleCount}
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Button onClick={handleClick}>
                {'Click Me!!!'}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ExampleUseEffect;