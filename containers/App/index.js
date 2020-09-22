import React, { Component } from 'react';
import { ListAccounts } from '../../components/ListAccounts';
import { AppAppBar } from '../../components/AppAppBar';

class App extends Component {
  render() {
    return (
      <div>
        <AppAppBar/>
        <ListAccounts/>
      </div>
    );
  }
}

export default App;