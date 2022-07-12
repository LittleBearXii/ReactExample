import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import ExampleAnotherChildUseContext from './anotherChildUseContext';
import { ParenContext } from './parenUseContext';

function ExampleChildUseContext() {
  const parenContext = useContext(ParenContext);

  return (
    <div>
      <div>
        {'Show Title from paren => '} {parenContext?.title}
      </div>
      <Button onClick={() => {parenContext?.setTitle('Child Title')}}>
        {'Click Change Title From Child!!!'}
      </Button>
      <div className="mt-2">
        <ExampleAnotherChildUseContext />
      </div>
    </div>
  );
}

export default ExampleChildUseContext;