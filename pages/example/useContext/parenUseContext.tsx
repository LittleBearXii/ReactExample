import { createContext, useState } from 'react';
import ExampleChildUseContext from './childUseContext';
import { someModel } from './interface';
import { Button, Card, Container } from 'react-bootstrap';

export const ParenContext = createContext<someModel | null>(null);

function ExampleUseContext() {
  const [Title, setTitle] = useState('Title');

  return (
    <Container className="mt-4">
      <Card>
        <Card.Header>{'useContext'}</Card.Header>
        <Card.Body>
          <ParenContext.Provider value={{title: Title, setTitle: setTitle}}>
            <div className="mt-2">
              {'Paren Title is => '} {Title}
            </div>
            <div className="mt-2">
              <Button onClick={() => {setTitle('Paren Title')}}>
                {'Click Change Title From Paren!!!'}
              </Button>
            </div>
            <div className="mt-2">  
              <ExampleChildUseContext />
            </div>
          </ParenContext.Provider>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default ExampleUseContext;