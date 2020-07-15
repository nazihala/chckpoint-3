import React from 'react';
import './App.css';
import Form from 'react-bootstrap/Form'; 
function App() {
  return (
    <div className="App">
  <Form>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>E-mail</Form.Label>
    <Form.Control type="email" placeholder="tapez votre email" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Choisissez votre language</Form.Label>
    <Form.Control as="select">
      <option>HTML</option>
      <option>CSS</option>
      <option>JS</option>
      <option>REACT JS</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Label>choisissez le programme qui vous convient</Form.Label>
    <Form.Control as="select" multiple>
      <option>Full Time Program</option>
      <option>Part Time Program</option>
      <option>Kids Coding Program</option>
      <option>Summer Academy</option>
    </Form.Control>    
 </Form.Group>
 </Form>

    </div>
  );
}

export default App;


   
