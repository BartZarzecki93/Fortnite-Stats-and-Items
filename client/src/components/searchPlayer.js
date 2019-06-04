import React, { Component, Fragment } from 'react';

import { Form } from 'react-bootstrap';

import '../App.css';

import { Link } from 'react-router-dom';

const baseURL =
  'https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=';

export class searchPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', search: '', results: [] };

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
          style={{ marginTop: '300px', marginLeft: '50px', width: '40%' }}
        >
          <Form className='form'>
            <Form.Group size='md' controlId='formBasicEmail'>
              <Form.Label className='form-label'> Username</Form.Label>
              <Form.Control
                type='text'
                placeholder=' Enter Username'
                value={this.state.value}
                onChange={this.handleChange}
                width='200px'
              />
              <Form.Text className='text-muted'>
                We'll never share your username with anyone else.
              </Form.Text>
            </Form.Group>

            <Link
              variant='primary'
              to={`/stats/${this.state.value}`}
              className='btn btn-primary mx-auto d-block'
              style={{ width: '80%', height: '50' }}
            >
              Submit
            </Link>
          </Form>
          ;
        </div>
      </Fragment>
    );
  }
}

export default searchPlayer;
