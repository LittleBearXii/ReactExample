import { useCallback, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

function ExampleUseCallBack() {
  const [number, setNumber] = useState(1);
  const [multiplyNumber, setMultiplyNumber] = useState(0);

  function multiplyNumberWithOutCallback() {
    console.log('Multiply function with out call back');
    
    return number * 2;
  }

  const multiplyNumberWithCallback = useCallback((number: number) => {
    console.log('Multiply function with call back');

    setMultiplyNumber(number * 2);
  }, []);

  return(
    <Container className="mt-4">
      <Card>
        <Card.Header>{'useCallBack'}</Card.Header>
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
              <p>{'Multiply number with out call back => '}</p>
              <p>{multiplyNumberWithOutCallback()}</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col md-2">
              <p>{'Multiply number with call back => '}</p> 
              <p> {multiplyNumber}</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <Button onClick={() => {multiplyNumberWithCallback(number)}}>
                {'Multiply'}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ExampleUseCallBack;