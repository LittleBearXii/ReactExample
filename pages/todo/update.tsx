import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import weatherForecastService from '../../services/weatherForecastService';
import Loading from '../../helper/Loading';
import { Button, Card, Container, Form } from 'react-bootstrap';
import Link from 'next/link';

function TodoEdit() {
  const [weatherName, setWeatherName] = useState('');
  const [loading, setLoading] = useState(true);
  const [indexParam, setIndexParam] = useState('');

  const router = useRouter();

  useEffect(() => {
    const {index} = router.query;
    
    if (index?.toString()) {
      setIndexParam(index.toString());
    }
  }, [router]);

  useEffect(() => {
    if (indexParam) {
      getWeatherByIndexAsync(indexParam);
    }
  }, [indexParam]);

  const getWeatherByIndexAsync = useCallback(async (index: string) => {
    setLoading(true);

    const response = await weatherForecastService.getByIndexAsync(index);

    if (response.status !== 200) {
      console.log('Error => ', response);

      return;
    } 
    
    setLoading(false);
    setWeatherName(response.data);
  }, []); 

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setWeatherName(event.currentTarget.value);
  }

  async function handleSubmitAsync(event: React.SyntheticEvent) {
    event.preventDefault();

    setLoading(true);

    const response = await weatherForecastService.editDataAsync(indexParam, weatherName);

    if (response.status !== 200) {
      console.log('Error => ', response);

      return;
    } 

    setLoading(false);

    alert(`You are submitted and value is => ${ weatherName }`);

    router.push('/todo');
  }

  return(
    <Container className="mt-4">
      <Loading loading={loading} />
      <Card>
        <Card.Header>{'Update Todo'}</Card.Header>
        <Card.Body>
          <div className="row">
            <Form onSubmit={handleSubmitAsync}> 
              <Form.Group className="mb-3">
                <Form.Label>{'Weather Name'}</Form.Label>
                <Form.Control type="text" className="form-control" value={weatherName} onChange={handleNameChange} />
              </Form.Group>
              <div className="row">
                <div className="col d-flex justify-content-between">
                  <Button type="submit" className="btn btn-primary">
                    {'Submit'}
                  </Button>
                  <Link href="/todo" passHref>
                    <Button>
                      {'Todo'}
                    </Button>
                  </Link>
                </div>
              </div>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default TodoEdit;