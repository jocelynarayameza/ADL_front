import React, { useState, useEffect } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";

const Filters = ({ filterChange }) => {
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(200000);

  const [valueMin, setValueMin] = useState(0);
  const [valueMax, setValueMax] = useState(0);

  const valueMinCLP= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(valueMin)
  const valueMaxCLP= new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(priceRange)
  

  const filtersArray = [
    "Figura",
    "Peluche",
    "Pixel Art",
    "Musica",
    "Juego fisico",
    "Papeleria",
    "Vajilla",
    "Accesorios",
    "Ropa",
  ];

  const handleCategory = (e) => {
    const category = e.target.value;
    setCategories((prevCategories) => {
      if (prevCategories.includes(category)) {
        return prevCategories.filter((item) => item !== category);
      } else {
        return [...prevCategories, category];
      }
    });
  };

  const handlePrice = (e) => {
    const value = e.target.value;
    setPriceRange(value);
  };

  useEffect(() => {
    filterChange(categories, priceRange);
  }, [categories, filterChange, priceRange]);


  return (
    <div id="filters" className="mb-2">
    <Container>
      <Row>
        <Col>
          <h4 id='titleText' className="text-center filterText">Filtros</h4>
        </Col>
      </Row>
      <Row>
        <Col className=" bg-warning-subtle d-flex flex-column rounded-3">
          <h4 className="p-3 categoryText">Categoría</h4>
          <Form>
            {filtersArray.map((filter, index) => (
              <Form.Check
                className="pb-3 formCheckColor"
                key={index}
                type="checkbox"
                id={index}
                label={filter}
                value={filter}
                onChange={handleCategory}
                checked={categories.includes(filter)}
              />
            ))}
          </Form>
          <hr />
          <h4 className=" pt-0 p-3 categoryText">Precio</h4>
          <Form.Group className="px-3">
              <Form.Label className="priceRangeText">Precio mínimo: <span className="priceRange">{valueMinCLP}</span></Form.Label>
              <Form.Range className="custom-range" min="0" max="100000" step="1000" value={valueMin}
              onChange={(event) => {
						    setValueMin(event.target.value);
					        }} />
            </Form.Group>
            <Form.Group className="px-3">
              <Form.Label className="priceRangeText">Precio máximo: <span className="priceRange">{valueMaxCLP}</span></Form.Label>
              <Form.Range className="custom-range" min={0} max={200000} step={1000} value={priceRange}
              onChange={handlePrice}/>
            </Form.Group>
        </Col>
      </Row>
    </Container>
  </div>
  );
};

export default Filters;
