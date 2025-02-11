import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Container, Col, Row, Form, FormGroup, Button } from "react-bootstrap";
import MenuProfile from "../components/profile/MenuProfile";
import { UserContext } from "../context/UserContext";
import useInput from "../assets/hooks/useInput";
import axios from "axios";

const EditPost = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { user } = useContext(UserContext);

  const name = useInput("");
  const description = useInput("");
  const price = useInput("");
  const quantity = useInput("");
  const photo = useInput("");
  const category = useInput("");

  const handleEdit = async (e) => {
    e.preventDefault();

    const newDataUser = {
      product_name: name.value,
      product_description: description.value,
      product_price: price.value,
      product_quantity: quantity.value,
      product_photo: photo.value,
      category: category.value,
    };

    try {
      await axios.put(
        `http://localhost:3001/api/mis-productos/${id}`,
        newDataUser,
        {
          headers: { Authorization: `Bearer ${user.token}` },
        }
      );
      alert("Producto actualizado correctamente");
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/mis-productos/${id}`,
          {
            headers: { Authorization: `Bearer ${user.token}` },
          }
        );
        setProduct(response.data);

        name.setValue(response.data.product_name);
        description.setValue(response.data.product_description);
        price.setValue(response.data.product_price);
        quantity.setValue(response.data.product_quantity);
        photo.setValue(response.data.product_photo);
        category.setValue(response.data.category);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <MenuProfile />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Container className="m-4">
          <Row className="m-3 d-flex justify-content-center">
            <Col>
              <h2 className="title-acme">Editar producto</h2>
            </Col>
          </Row>
          <Form onSubmit={handleEdit}>
            <Row>
              <Col md={12} lg={6} className="px-5">
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    className="editPostColor"
                    type="text"
                    value={toString(name)}
                    {...name}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                  <Form.Label>Foto URL</Form.Label>
                  <Form.Control
                    className="editPostColor"
                    type="text"
                    {...photo}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Categoría</Form.Label>

                  <Form.Select className="editPostColor" {...category}>
                    <option value="">Selecciona una categoría</option>
                    <option value="Ropa">Ropa</option>
                    <option value="Electrónica">Electrónica</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={12} lg={6} className="px-5 mb-4">
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control
                    className="editPostColor"
                    type="text"
                    {...price}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Cantidad</Form.Label>
                  <Form.Control
                    className="editPostColor"
                    type="text"
                    {...quantity}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Descripción</Form.Label>
                  <Form.Control
                    required
                    className="editPostColor"
                    as="textarea"
                    rows={6}
                    {...description}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="d-flex justify-content-center">
              <Button className="editButton p-0 " variant="info" type="submit">
                <p className="registerLoginButtonText">Editar</p>
              </Button>
            </Row>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default EditPost;
