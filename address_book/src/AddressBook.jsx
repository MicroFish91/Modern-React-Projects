import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './AddressBook.css';
import AddContactForm from './Components/AddContactForm';
import Contacts from './Components/Contacts';
import defaultContacts from './data/default.json';
import sortFn from './helpers/sortFn';

const AddressBook = () => {
  const [contacts, setContacts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [toggleAdd, setToggleAdd] = useState(false);
  const [toggleFavorites, setToggleFavorites] = useState(false);

  // Populate default address book data upon component mounting
  useEffect(() => {
    const newContactList = defaultContacts.contacts;
    const sortedContactList = newContactList.sort(sortFn);
    const favoritesList = newContactList.filter(contact => contact.favorite);
    const sortedFavoritesList = favoritesList.sort(sortFn);
    setContacts(sortedContactList);
    setFavorites(sortedFavoritesList);
  }, []);

  // Add a new contact through the AddContactForm
  const addContact = (newContact, favorite) => {
    const newContactList = [newContact, ...contacts];
    const newSortedContacts = newContactList.sort(sortFn);
    setContacts(newSortedContacts);

    if(favorite){
      const newFavoritesList = [newContact, ...favorites];
      const newSortedFavorites = newFavoritesList.sort(sortFn);
      setFavorites(newSortedFavorites);
    }
    setToggleAdd(false);
  }

  // Delete Existing Contact
  const deleteFavorites = (userId, favorite) => {
    const newContacts = [...contacts];
    const contactsIndex = contacts.findIndex(contact => contact.id === userId);
    newContacts.splice(contactsIndex, 1);

    if(favorite){
      const newFavorites = [...favorites];
      const favoritesIndex = favorites.findIndex(contact => contact.id === userId);
      newFavorites.splice(favoritesIndex, 1);
      setFavorites(newFavorites);
    }

    setContacts(newContacts);
  }

  const renderSearchBar = () => {
    return (
      <Form className="SearchBar offset-2 col-8 offset-2 p-2 mt-1">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control value={search} onChange={e => setSearch(e.target.value)} type="text" placeholder="Search Contacts" />
        </Form.Group>
        <Button onClick={e => setToggleAdd(!toggleAdd)} className="m-1 bg-dark" variant="primary" size="md" active>
          Add New Contact
        </Button>
        {
        (!toggleFavorites) ? 
         <Button onClick={e => setToggleFavorites(!toggleFavorites)} className="m-1 bg-dark" variant="primary" size="md" active>
            Show Favorites
         </Button> 
          :
         <Button onClick={e => setToggleFavorites(!toggleFavorites)} className="m-1 bg-dark" variant="primary" size="md" active>
            Show All
         </Button>
        }
      </Form>
    );
  }

  // Update Existing Contact - Favorites
  const updateFavorites = (userId, favorite) => {
    const newContacts = [...contacts];
    let newFavorites = [...favorites];
    const contactsIndex = contacts.findIndex(contact => contact.id === userId);
    const favoritesIndex = favorites.findIndex(contact => contact.id === userId);
    newContacts[contactsIndex].favorite = !newContacts[contactsIndex].favorite;

    if(favorite){
      newFavorites.splice(favoritesIndex, 1);
    } else {
      newFavorites.push(newContacts.slice(contactsIndex, contactsIndex + 1)[0]);
      newFavorites = newFavorites.sort(sortFn);
    }

    setContacts(newContacts);
    setFavorites(newFavorites);
  }

  // Update Existing Contact Info
  const updateExistingContact = (newContact, favorite) => {
    const newContacts = [...contacts];
    let newFavorites = [...favorites];
    const contactsIndex = contacts.findIndex(contact => contact.id === newContact.id);
    const favoritesIndex = favorites.findIndex(contact => contact.id === newContact.id);

    newContacts.splice(contactsIndex, 1);
    if(favoritesIndex !== -1){
      newFavorites.splice(favoritesIndex, 1);
    }

    newContacts.push(newContact);
    if(favorite){
      newFavorites.push(newContact);
    }

    const sortedContacts = newContacts.sort(sortFn);
    const sortedFavorites = newFavorites.sort(sortFn);

    setContacts(sortedContacts);
    setFavorites(sortedFavorites);
  }

  // Consolidate methods for updating existing contact information
  const addData = {
    add: addContact,
    update: updateExistingContact,
    setToggle: setToggleAdd
  }

  // Consolidate methods for updating existing contact information
  const updateContact = {
    favorites: updateFavorites,
    delete: deleteFavorites
  }

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(search.toLowerCase());
  })

  const filteredFavorites = favorites.filter(contact => {
    return contact.name.toLowerCase().includes(search.toLowerCase());
  })

  return (
    <div className="container mt-3">
      <div className="row">
        <h1 className="offset-2 col-8 offset-2 text-center p-2 mt-2">Address Book</h1>
          {(!toggleAdd) ? renderSearchBar() : <AddContactForm addContact={addData} contact={null} toggleEdit={null} />} <br />
          {(!toggleAdd) ? ((!toggleFavorites) ? <Contacts addContact={addData} contacts={filteredContacts} update={updateContact} /> : 
                            <Contacts addContact={addData} contacts={filteredFavorites} update={updateContact} />) : null}
      </div>
    </div>
  );
}

export default AddressBook;