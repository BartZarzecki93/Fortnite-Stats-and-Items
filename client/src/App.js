import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import logo from './logo.png';
import Outfits from './components/outfits';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className='container'>
        <img
          src={logo}
          alt='Fortinite'
          style={{
            width: 150,
            display: 'block',
            marginLeft: ' 20px ',
            marginTop: '20px'
          }}
        />
        <Outfits />
      </div>
    </ApolloProvider>
  );
}

export default App;
