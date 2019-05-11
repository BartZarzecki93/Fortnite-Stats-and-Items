import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Outfits from './components/outfits';
import Outfit from './components/outfit';
import Navbar from './components/navbar';
import Home from './components/home';
import Search from './components/searchPlayer';
import Stats from './components/stats';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        <div className='introview'>
          <div className='container' style={{ height: '800px' }}>
            <br />

            <Route exact path='/outfits' component={Outfits} />
            <Route exact path='/outfit/:identifier' component={Outfit} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/stats' component={Search} />
            <Route exact path='/stats/:username' component={Stats} />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
