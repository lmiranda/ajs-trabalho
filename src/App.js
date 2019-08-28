import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
//import logo from './logo.svg';
//import './App.css';
import FormCreate from './FormCreate'
import * as API from './utils/API'
import SearchBar from './SearchBar'

class App extends Component {
  state = {
    screen: 'list',
    contacts: []
    
  }

  componentDidMount() {
    API.getAll().then((contacts)=> {
      this.setState({ contacts })
    })
  }
  removeContact = contact => {
    this.setState( state => ({
      contacts: this.state.contacts.filter((c) => c.id !== contact.id)

    }));
    API.remove(contact)
  };

  adicionarContato(contato) {
    API.create(contato).then(contato => {
      this.setState(state => ({
        contatos: state.contatos.concat([ contato ])
      }))
    })
  }
/*  <Route exact path='/' render={() => (
    <ListContacts
      onDeleteContact={this.removeContact}
      contacts={this.state.contacts}
      onNavigate = {() => {
        this.setState({ screen: 'create'})
      }}
    />
  )}/>*/

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => (
            <SearchBar />

          )}/>

          <Route path='/create' render={({ history }) => (
            <FormCreate onAdicionarContato={(contato) => {this.adicionarContato(contato); history.push('/'); }}/>
          )}/>
        </div>
      </BrowserRouter>
    )
  }
}



/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
