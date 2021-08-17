import React from 'react';
import MovieContent from './MovieContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import SelectSearch from 'react-select-search';
import './App.css';
import CountrySelector from './countrySelector/CountrySelector.jsx';
import LanguageSelector from './languageSelector/LanguageSelector';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.countrySelector = React.createRef();
    this.languageSelector = React.createRef();
  }
  getData() {
    const countrySelector = this.countrySelector.current;
    console.log(countrySelector.state.selected);
    const languageSelector = this.languageSelector.current;
    console.log(languageSelector.state.selected);
  }

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
          <Button onClick={this.getData.bind(this)} variant="outline-success">Search</Button>
        </Form>
        <br />
        <div>

        </div>
        <CountrySelector ref={this.countrySelector}/>
        <br />
        <LanguageSelector ref={this.languageSelector}/>
      </>
    );
  }
}
export default App;


