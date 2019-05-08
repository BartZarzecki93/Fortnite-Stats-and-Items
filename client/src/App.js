import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Outfits from './components/outfits';
import Outfit from './components/outfit';
import Navbar from './components/navbar';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <div class='introview'>
          <div className='container' style={{ height: '800px' }}>
            <br />

            <Route exact path='/outfits' component={Outfits} />
            <Route exact path='/outfit/:identifier' component={Outfit} />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
