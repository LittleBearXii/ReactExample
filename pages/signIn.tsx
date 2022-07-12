import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getCsrfToken } from 'next-auth/react'
import { CtxOrReq } from 'next-auth/client/_utils';
import { signIn } from 'next-auth/react';

function handleSubmit(event: React.SyntheticEvent, userName: string, password: string) {
  event.preventDefault();
  signIn("credentials", {username: userName, password: password});
}

function SignIn(props: {csrfToken: any}) {
  const [ userName, setUserName ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.currentTarget.value);
  }

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event, userName, password)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control name="csrfToken" type="hidden" defaultValue={props.csrfToken} />
        <Form.Label>{'username'}</Form.Label>
        <Form.Control name="username" type="text" value={userName} onChange={handleUsername} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{'Password'}</Form.Label>
        <Form.Control name="password" type="password" value={password} onChange={handlePassword} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {'Submit'}
      </Button>
    </Form>
  );
}

export default SignIn;

export async function getServerSideProps(context: CtxOrReq) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  }
}