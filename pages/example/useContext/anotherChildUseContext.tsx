import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ParenContext } from './parenUseContext';

function ExampleAnotherChildUseContext() {
  const parenContext = useContext(ParenContext);

  return (
    <div>
      <div>
        {'Show Title from paren => '} {parenContext?.title}
      </div>
      <Button onClick={() => {parenContext?.setTitle('Another Child Title')}}>
        {'Click Change Title From Another Child!!!'}
      </Button>
    </div>
  );
}

export default ExampleAnotherChildUseContext;