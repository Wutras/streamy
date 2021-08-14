import React from 'react';
import MovieContent from './MovieContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import SelectSearch from 'react-select-search';

import './App.css';

class App extends React.Component {

  render() {
    return (
      <>
        <h1>Stréamy</h1>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search for a title"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <br />
        <div>
          
        </div>
        <MovieContent />
      </>
    );
  }
}
export default App;


