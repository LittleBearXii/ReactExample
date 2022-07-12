import { useMemo, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

function ExampleUseMemo() {
  const [number, setNumber] = useState(1);
  const [isMultiplyNumber, setIsMultiplyNumber] = useState(false);

  const multiplyNumberWithOutMemo = number * 2;

  const multiplyNumberWithMemo = useMemo(() => number * 2, [isMultiplyNumber]);

  return(
    <Container className="mt-4">
      <Card>
        <Card.Header>{'useMemo'}</Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col">
              <Button onClick={() => {setNumber(number - 1)}}>
                {'-'}
              </Button>
            </div>
            <div className="col md-2">
              {number}
            </div>
            <div className="col">
              <Button onClick={() => {setNumber(number + 1)}}>
                {'+'}
              </Button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col md-2">
              <p>{'Multiply number with out memo => '}</p>
              <p>{multiplyNumberWithOutMemo}</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col md-2">
              <p>{'Multiply number with memo => '}</p> 
              <p>{multiplyNumberWithMemo}</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Button onClick={() => {setIsMultiplyNumber(!isMultiplyNumber)}}>
                {'Multiply'}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ExampleUseMemo;