import MovieContent from '../MovieContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Typeahead } from 'react-bootstrap-typeahead';
import React, { useState, useMemo } from 'react';
import countryList from 'react-select-country-list';
import "./styles.css";
import {languagesNames} from "./languages";

class LanguageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: []
    }


  }

  

  render() {
    console.log(languagesNames);
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
            options={languagesNames}
            placeholder="Choose one or more languages..."
            selected={this.state.selected}
          />
        </Form.Group>
      </>)
  };
}

export default LanguageSelector


