import { useReducer } from 'react';
import { Button, Card, Container } from 'react-bootstrap';

enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
  AAAA = 'AAA'
}

interface CountAction {
  type: CountActionKind;
  payload: number;
}

interface CountState {
  count: number;
  isCount: boolean;
}

function counterReducer(state: CountState, action: CountAction) {
  const { type, payload } = action;
  switch (type) {
    case CountActionKind.INCREASE:
      return {
        ...state,
        count: state.count + payload,
        isCount: true,
      };
    case CountActionKind.DECREASE:
      return {
        ...state,
        count: state.count - payload,
        isCount: false,
      };
      case CountActionKind.AAAA:
        return {
          ...state,
          count: state.count * payload,
          isCount: true,
        };
    default:
      return state;
  }
}

function ExampleUseReducer() {
  const [state, dispatch] = useReducer(counterReducer, {count: 0, isCount: false});

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>{ 'useReducer' }</Card.Header>
        <Card.Body>
          <div className="row mt-2"> 
            <div className="col-lg-1 d-flex justify-content-center">
              <Button onClick={() => dispatch({ type: CountActionKind.DECREASE, payload: 1 })} disabled={state.count <= 0}>
                {'-'}
              </Button>
            </div>
            <div className="col-lg-1">
              {'Count =>'} {state.count} {state.isCount ? 'True' : 'False'}
            </div>
            <div className="col-lg-1 d-flex justify-content-center">
              <Button onClick={() => dispatch({ type: CountActionKind.INCREASE, payload: 10 })}>
                {'+'}
              </Button>
              <Button onClick={() => dispatch({ type: CountActionKind.AAAA, payload: 2 })}>
                {'X'}
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ExampleUseReducer;