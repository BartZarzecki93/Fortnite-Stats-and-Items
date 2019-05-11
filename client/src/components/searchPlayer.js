import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

export class searchPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <div
          className='container'
          style={{ marginTop: '85px', marginLeft: '50px' }}
        >
          <form>
            <input
              type='text'
              value={this.state.value}
              onChange={this.handleChange}
            />
            <Link
              to={`/stats/${this.state.value}`}
              className='btn btn-primary mx-auto d-block'
            >
              Search
            </Link>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default searchPlayer;
