import React, { useContext, useState } from 'react'
import { Col, Container, FormGroup, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import useInput from '../../assets/hooks/useInput';
import { UserContext } from '../../context/UserContext';

const MyAccountForm = () => {

  const {user,profileUserfunc}=useContext(UserContext)
  // profileUserfunc()
  const name=user.name;
  const nameChange=useInput("")

  const lastname=user.lastname;
  const lastNameChange=useInput("")

  const username=user.username
  const birthday = user.birthday
  

  const password=useInput("");
  const passwordChange=useInput("");

  const email=user.email;
  const emailChange=useInput("");

 

  
  
  const handleSubmit = (e)=> {
    e.preventDefault()

  }

  return (
    <div className='myAccount'>
      <Container className='whiteColor mb-3'>
        <Row>
          <Col>
            <h1 id='titleProfile' className='my-4'>Mis datos</h1>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit} >
          <Row>
            <Col md={12} lg={6} className='px-5'>
              <Form.Group className="mb-3"  controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control className='registerLoginColor' type="text"
                placeholder={name} {...nameChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Apellido</Form.Label>
                <Form.Control className='registerLoginColor' type="text"
                placeholder={lastname} {...lastNameChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Nombre de usuario</Form.Label>
                <Form.Control disabled className='registerLoginColor' type="text"
                placeholder={username}
                />
              </Form.Group>

              <FormGroup className="mb-3" controlId="formBasicBirthday">
                <Form.Label>Fecha de nacimiento</Form.Label>
                <Form.Control disabled className='registerLoginColor' type="text"
                placeholder={birthday}
                />
              </FormGroup>

     
            </Col>
            <Col md={12} lg={6} className='px-5 mb-4'>
             <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control disabled className='registerLoginColor' type="text" placeholder="**********" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicpasswordChange">
                <Form.Label>Cambiar contraseña</Form.Label>
                <Form.Control  className='registerLoginColor' type="text"
                placeholder="" {...passwordChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electronico</Form.Label>
                <Form.Control disabled className='registerLoginColor' type="email"
                placeholder={email}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmailChange">
                <Form.Label>Cambiar correo electronico</Form.Label>
                <Form.Control className='registerLoginColor' type="email"
                placeholder="" {...emailChange}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className='registerLoginInput'>
              <Button className='registerLoginButton registerLoginInput' variant="info" type="submit">
                <p className='registerLoginButtonText'>Editar</p>
              </Button>
          </Row>

        </Form>

  </Container>
  </div>
  )
}

export default MyAccountForm
