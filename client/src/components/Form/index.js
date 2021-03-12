import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './style.css'

function Search(props) {
    return (
<Form>
  <Form.Group controlId="formBasicSearch">
    <Form.Label className="Search-text">Search for and save Books of Interest</Form.Label>
    <Form.Control type="text" placeholder="Search for a book" />
  </Form.Group>
  <Button onclick={props.handleFormSubmit} variant="primary" type="submit">
    Search
  </Button>
</Form>
    )
}

export default Search;