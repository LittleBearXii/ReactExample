import { useCallback, useEffect, useState } from 'react';
import todoResponseModel from '../../models/todoResponseModel';
import weatherForecastService from '../../services/weatherForecastService';
import Loading from '../../helper/Loading';
import { Button, Card, Container, Table } from 'react-bootstrap';
import Link from 'next/link';
import axios from 'axios';

function Todo() {
  const [weather, setWeather] = useState<todoResponseModel>({data: []});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataAsync();
  }, []);

  const getDataAsync = useCallback(async () => {
    setLoading(true);
    const response = await weatherForecastService.getAllAsync();

    if (response.status !== 200) {
      console.log('GetData Error => ', response.status);

      return;
    }

    setWeather({data: response.data.data});

    setLoading(false);
  }, []); 

  const deleteDataAsync = useCallback(async (index: number) => {
    setLoading(true);
    console.log("Render Button Delete");
    const response = await weatherForecastService.deleteDataAsync(index.toString());

    if (response.status !== 204) {
      console.log('Delete Error => ', response.status);

      return;
    }

    setLoading(false);
  }, []);

  function EditData(props: {index: number}) {
    return(
      <Link href={`todo/update/?index=${props.index}`} passHref>
        <Button type="button">
          {'Edit'}
        </Button>
      </Link>
    );
  }

  function DeleteData(props: {index: number}) {
    return(
      <Button onClick={async () => {await deleteDataAsync(props.index)}} type="button">
        {'Delete'}
      </Button>
    );
  }

  function ListItem(props: {value: string, index: number}) {
    return (
      <tr>
        <td>{props.value}</td>
        <td>
          <EditData index={props.index} />
        </td>
        <td>
          <DeleteData index={props.index} />
        </td>
      </tr>
    )
  }

  function ListWeather(props: {array: string[]}) {
    const listWeather = props.array.map((s, index) => 
      <ListItem key={s} value={s} index={index} />
    );

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>{'Name'}</th>
          </tr>
        </thead>
        <tbody>
          {listWeather}
        </tbody>
      </Table>
    );
  }

  return(
    <Container className="mt-4">
      <Loading loading={loading} />
      <Card>
        <Card.Header>
          {'Todo'}
        </Card.Header>
        <Card.Body>
          <div className="row">
            <div className="col">
              <Link href="todo/create" passHref>
                <Button type="button">
                  {'TodoCreate'}
                </Button>
              </Link>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-sm">
              <ListWeather array={weather.data} />
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Todo;