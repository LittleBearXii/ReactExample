import { useState } from 'react';
import weatherForecastService from '../../services/weatherForecastService';
import Loading from '../../helper/Loading';
import { Button, Card, Container, Form } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';

function TodoCreate() {
  const [weatherName, setWeatherName] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setWeatherName(event.currentTarget.value);
  }

  async function handleSubmitAsync(event: React.SyntheticEvent) {
    event.preventDefault();
    setLoading(true);

    const response = await weatherForecastService.createDataAsync(weatherName);

    if (response.status !== 200) {
      console.log('Error => ', response);

      return;
    } 

    setLoading(false);

    alert(`You are submitted and value is => ${weatherName}`);

    router.push('/todo');
  }
  
  return(
    <Container className="mt-4">
      <Loading loading={loading} />
      <Card>
        <Card.Header>{'Create Todo'}</Card.Header>
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

export default TodoCreate;