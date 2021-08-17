import MovieContent from '../MovieContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import React, { useState, useMemo } from 'react';
import countryList from 'react-select-country-list';
import "./styles.css";


class CountrySelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    }


  }

  changeCountry() {
    console.log(document.getElementById("basic-typeahead-single")?.value);
    //this.setState({ country: document.getElementById("basic-typeahead-single")});
  }

  render() {
    return (
      <>
        <Form.Group>
          <Typeahead ref="select"
            id="basic-typeahead-single"
            labelKey="name"
            multiple
            onChange={(selected) => {
              this.setState({selected});
            }}
            options={countryList().getLabels()}
            placeholder="Choose one or more countries..."
            selected={this.state.selected}
          />
        </Form.Group>
      </>)
  };
}

export default CountrySelector


