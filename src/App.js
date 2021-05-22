import { Component } from 'react';
import Form from './Components/Form/';
import ContactList from './Components/ContactList';
import ContactFilter from './Components/ContactFilter';
import Container from './Components/Container';

class App extends Component{

render (){

  return(
    <Container>
      <h1>Phonebook</h1> 
      <Form onAddContact = {this.addContact}
     />
     <ContactFilter/>
      <ContactList/>
      </Container>
    );
  }
};

export default App;
